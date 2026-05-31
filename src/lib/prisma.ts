import { PrismaClient } from "../../prisma/generated/client/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { parseDatabaseUrl } from "./db-parser";

// Bumping to force module reload - 2026-05-02

function getPoolLimit() {
  const rawLimit = Number(process.env.DATABASE_POOL_LIMIT ?? "4");
  if (!Number.isFinite(rawLimit) || rawLimit < 1) {
    return 4;
  }
  return Math.min(Math.floor(rawLimit), 5);
}

const prismaClientSingleton = () => {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    // During build time (e.g. on Hostinger), DATABASE_URL is not available.
    // Return a Prisma Client with a dummy adapter so the build compiles successfully.
    const dummyAdapter = new PrismaMariaDb({
      host: "127.0.0.1",
      port: 3306,
      user: "dummy_user",
      password: "dummy_password",
      database: "dummy_db",
      connectionLimit: getPoolLimit(),
    });
    return new PrismaClient({ adapter: dummyAdapter });
  }

  try {
    const { host, port, user, password, database } =
      parseDatabaseUrl(databaseUrl);

    // On Hostinger shared hosting, MySQL listens on a Unix socket.
    // The mariadb package uses socket when host='localhost', TCP when host='127.0.0.1'.
    // Force 'localhost' so the socket is used, avoiding TCP timeout errors.
    const resolvedHost = host === "127.0.0.1" ? "localhost" : host;

    const adapter = new PrismaMariaDb({
      host: resolvedHost,
      port,
      user,
      password,
      database,
      connectionLimit: getPoolLimit(), // Keep the pool small, but not so small that one request starves the next.
    });

    return new PrismaClient({ adapter });
  } catch (error) {
    console.warn(
      "Failed to parse DATABASE_URL, using dummy adapter for fallback:",
      error,
    );
    const dummyAdapter = new PrismaMariaDb({
      host: "127.0.0.1",
      port: 3306,
      user: "dummy_user",
      password: "dummy_password",
      database: "dummy_db",
      connectionLimit: getPoolLimit(),
    });
    return new PrismaClient({ adapter: dummyAdapter });
  }
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

// Always reuse the singleton — in production this prevents a new client (and new DB connections)
// from being created on every request, which was causing the process/connection pool explosion.
globalThis.prisma = prisma;
