import { PrismaClient } from "../../prisma/generated/client/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import {
  createMariaDbPoolConfig,
  createMariaDbPoolConfigFromDatabaseUrl,
} from "./prisma-pool";

function prismaClientSingleton() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    const adapter = new PrismaMariaDb(
      createMariaDbPoolConfig({
        host: "127.0.0.1",
        port: 3306,
        user: "dummy_user",
        password: "dummy_password",
        database: "dummy_db",
      }),
    );

    return new PrismaClient({ adapter });
  }

  try {
    const adapter = new PrismaMariaDb(
      createMariaDbPoolConfigFromDatabaseUrl(databaseUrl),
    );

    return new PrismaClient({ adapter });
  } catch (error) {
    console.warn(
      "Failed to initialize Prisma adapter, using dummy adapter fallback:",
      error,
    );

    const adapter = new PrismaMariaDb(
      createMariaDbPoolConfig({
        host: "127.0.0.1",
        port: 3306,
        user: "dummy_user",
        password: "dummy_password",
        database: "dummy_db",
      }),
    );

    return new PrismaClient({ adapter });
  }
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

// Always reuse the singleton so the adapter pool survives warm request cycles.
globalThis.prisma = prisma;
