import { PrismaClient } from "../../prisma/generated/client/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import {
  createMariaDbPoolConfig,
  createMariaDbPoolConfigFromDatabaseUrl,
} from "./prisma-pool";

let _prisma: ReturnType<typeof prismaClientSingleton> | undefined;

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

function getPrisma() {
  if (!_prisma) {
    _prisma = globalThis.prisma ?? prismaClientSingleton();
    globalThis.prisma = _prisma;
  }

  return _prisma;
}

const prisma = new Proxy({} as ReturnType<typeof prismaClientSingleton>, {
  get(_target, property, receiver) {
    return Reflect.get(getPrisma(), property, receiver);
  },
  set(_target, property, value, receiver) {
    return Reflect.set(getPrisma(), property, value, receiver);
  },
});

export default prisma;
