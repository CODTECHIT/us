/**
 * Robust database URL parser.
 * Cleans the URL string of quotes and whitespace, and safely extracts
 * the host, port, username, password, and database name.
 *
 * Works even if the password contains special characters (like unescaped @ or %).
 */
export function parseDatabaseUrl(urlStr: string) {
  if (!urlStr) {
    throw new Error("Database URL is empty or undefined");
  }

  // 1. Clean the string: trim spaces and remove surrounding quotes (single or double)
  let cleaned = urlStr.replace(/\\%/g, "%").trim();
  cleaned = cleaned.replace(/^["']|["']$/g, "").trim();

  // 2. Validate/parse protocol
  let protocol = "";
  if (cleaned.startsWith("mysql://")) {
    protocol = "mysql://";
  } else if (cleaned.startsWith("mysql2://")) {
    protocol = "mysql2://";
  } else if (cleaned.startsWith("mariadb://")) {
    protocol = "mariadb://";
  } else if (cleaned.includes("@") && cleaned.includes("/")) {
    // URL is missing the protocol prefix (e.g. set as "user:pass@host/db" on server).
    // Auto-fix by prepending mysql:// so the connection still works.
    console.warn(
      "[db-parser] DATABASE_URL is missing a protocol prefix. " +
        'Auto-prepending "mysql://". ' +
        'Please fix the DATABASE_URL on the server to include "mysql://" at the start.',
    );
    cleaned = "mysql://" + cleaned;
    protocol = "mysql://";
  } else {
    // Obfuscate the string for safety in error reporting
    const safeStr = cleaned.includes("@")
      ? "***@" + cleaned.split("@").slice(1).join("@")
      : "(invalid url, length=" + cleaned.length + ")";
    throw new Error(
      `Database URL must start with "mysql://" or "mysql2://" or "mariadb://" protocol. Got: "${safeStr}"`,
    );
  }

  // Remove the protocol prefix
  const remaining = cleaned.substring(protocol.length);

  // 3. Find username and password
  // Split by the last '@' to isolate credentials from host/database parts.
  // This avoids issues if the password itself contains unescaped '@' symbols.
  const lastAtIndex = remaining.lastIndexOf("@");
  if (lastAtIndex === -1) {
    throw new Error(
      'Invalid connection URL: missing "@" separator between credentials and host',
    );
  }

  const credentialsPart = remaining.substring(0, lastAtIndex);
  const hostDbPart = remaining.substring(lastAtIndex + 1);

  // Split credentials into user and password
  const firstColonIndex = credentialsPart.indexOf(":");
  if (firstColonIndex === -1) {
    throw new Error(
      'Invalid connection URL: missing ":" separator between username and password',
    );
  }

  const user = decodeURIComponent(
    credentialsPart.substring(0, firstColonIndex),
  );
  const password = decodeURIComponent(
    credentialsPart.substring(firstColonIndex + 1),
  );

  // 4. Split host/port from database/options
  const firstSlashIndex = hostDbPart.indexOf("/");
  if (firstSlashIndex === -1) {
    throw new Error(
      'Invalid connection URL: missing "/" separator before database name',
    );
  }

  const hostPortPart = hostDbPart.substring(0, firstSlashIndex);
  const dbOptionsPart = hostDbPart.substring(firstSlashIndex + 1);

  // 5. Parse host and port
  let host = hostPortPart;
  let port = 3306;
  const lastColonIndex = hostPortPart.lastIndexOf(":");
  if (lastColonIndex !== -1) {
    host = hostPortPart.substring(0, lastColonIndex);
    const portStr = hostPortPart.substring(lastColonIndex + 1);
    const parsedPort = parseInt(portStr, 10);
    if (!isNaN(parsedPort)) {
      port = parsedPort;
    }
  }

  // 6. Extract database name (strip any query parameters)
  const questionMarkIndex = dbOptionsPart.indexOf("?");
  const database =
    questionMarkIndex === -1
      ? dbOptionsPart
      : dbOptionsPart.substring(0, questionMarkIndex);

  return {
    host,
    port,
    user,
    password,
    database,
  };
}
