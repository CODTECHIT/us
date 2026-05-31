import type { PoolConfig } from "mariadb";

import { parseDatabaseUrl } from "./db-parser";

const DEFAULT_DATABASE_POOL_LIMIT = 3;
const MAX_DATABASE_POOL_LIMIT = 5;
const DEFAULT_POOL_CONNECT_TIMEOUT_MS = 10000;

type SharedMariaDbPoolConfig = Pick<
  PoolConfig,
  "host" | "port" | "user" | "password" | "database"
>;

export function getDatabasePoolLimit() {
  const rawLimit = Number(
    process.env.DATABASE_POOL_LIMIT ?? String(DEFAULT_DATABASE_POOL_LIMIT),
  );

  if (!Number.isFinite(rawLimit) || rawLimit < 1) {
    return DEFAULT_DATABASE_POOL_LIMIT;
  }

  return Math.min(Math.floor(rawLimit), MAX_DATABASE_POOL_LIMIT);
}

export function createMariaDbPoolConfig(
  baseConfig: SharedMariaDbPoolConfig,
): PoolConfig {
  return {
    ...baseConfig,
    connectionLimit: getDatabasePoolLimit(),
    connectTimeout: DEFAULT_POOL_CONNECT_TIMEOUT_MS,
  };
}

export function createMariaDbPoolConfigFromDatabaseUrl(databaseUrl: string) {
  const { host, port, user, password, database } =
    parseDatabaseUrl(databaseUrl);

  return createMariaDbPoolConfig({
    host,
    port,
    user,
    password,
    database,
  });
}
