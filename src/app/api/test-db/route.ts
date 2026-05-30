import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import dns from "dns";
import { promisify } from "util";

const lookup = promisify(dns.lookup);

export async function GET() {
  const debugLogs: string[] = [];
  const databaseUrl = process.env.DATABASE_URL || "";

  debugLogs.push(`DATABASE_URL: ${databaseUrl ? "Present" : "Missing"}`);

  if (!databaseUrl) {
    return NextResponse.json({ success: false, logs: debugLogs, error: "DATABASE_URL environment variable is missing" });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(databaseUrl);
  } catch (err: any) {
    return NextResponse.json({ success: false, logs: debugLogs, error: `Failed to parse DATABASE_URL: ${err.message}` });
  }

  const host = parsedUrl.hostname;
  const port = parseInt(parsedUrl.port) || 3306;
  const user = decodeURIComponent(parsedUrl.username);
  const password = decodeURIComponent(parsedUrl.password);
  const database = parsedUrl.pathname.substring(1);

  debugLogs.push(`Parsed Details - Host: ${host}, Port: ${port}, User: ${user}, DB: ${database}`);

  // Test DNS Resolution for the configured host
  try {
    const dnsResult = await lookup(host);
    debugLogs.push(`DNS Lookup for ${host}: Resolved to ${dnsResult.address} (family: ipv${dnsResult.family})`);
  } catch (err: any) {
    debugLogs.push(`DNS Lookup for ${host} FAILED: ${err.message}`);
  }

  // Also lookup localhost and 127.0.0.1 for comparison
  try {
    const localLookup = await lookup("localhost");
    debugLogs.push(`DNS Lookup for localhost: Resolved to ${localLookup.address}`);
  } catch (err: any) {
    debugLogs.push(`DNS Lookup for localhost FAILED: ${err.message}`);
  }

  // Try connecting via mysql2 to the configured Host
  try {
    debugLogs.push(`Attempting mysql2 connection to ${host}:${port}...`);
    const conn = await mysql.createConnection({
      host,
      port,
      user,
      password,
      database,
      connectTimeout: 5000 // 5 seconds timeout for quick feedback
    });
    debugLogs.push(`SUCCESS: Connected to ${host}:${port}!`);
    const [rows] = await conn.query("SELECT 1 + 1 AS result");
    debugLogs.push(`SUCCESS: Query test returned: ${JSON.stringify(rows)}`);
    await conn.end();
  } catch (err: any) {
    debugLogs.push(`FAILED: Connection to ${host}:${port} failed: ${err.message} (code: ${err.code})`);
  }

  // Try connecting to 127.0.0.1 as a fallback test
  if (host !== "127.0.0.1" && host !== "localhost") {
    try {
      debugLogs.push(`Attempting fallback mysql2 connection to 127.0.0.1:${port}...`);
      const conn = await mysql.createConnection({
        host: "127.0.0.1",
        port,
        user,
        password,
        database,
        connectTimeout: 5000
      });
      debugLogs.push(`SUCCESS: Fallback connected to 127.0.0.1:${port}!`);
      await conn.end();
    } catch (err: any) {
      debugLogs.push(`FAILED: Fallback to 127.0.0.1 failed: ${err.message}`);
    }
  }

  return NextResponse.json({
    success: debugLogs.some(log => log.includes("SUCCESS:")),
    logs: debugLogs
  });
}
