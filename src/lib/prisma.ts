import { PrismaClient } from "../../prisma/generated/client/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import {
  createMariaDbPoolConfig,
  createMariaDbPoolConfigFromDatabaseUrl,
} from "./prisma-pool";

let _prisma: PrismaClient | undefined;

function prismaClientSingleton() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
  }

  const poolConfig = createMariaDbPoolConfigFromDatabaseUrl(databaseUrl);
  const adapter = new PrismaMariaDb(poolConfig);

  return new PrismaClient({ adapter });
}

declare global {
  var prisma: PrismaClient | undefined;
}

function getPrisma(): PrismaClient {
  if (!_prisma) {
    _prisma = globalThis.prisma ?? prismaClientSingleton();
    globalThis.prisma = _prisma;
  }

  return _prisma;
}

const prisma = new Proxy({} as PrismaClient, {
  get(_target, property, receiver) {
    return Reflect.get(getPrisma(), property, receiver);
  },
  set(_target, property, value, receiver) {
    return Reflect.set(getPrisma(), property, value, receiver);
  },
});

export default prisma;
