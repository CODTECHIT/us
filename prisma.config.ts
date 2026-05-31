import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export {
  createMariaDbPoolConfig,
  createMariaDbPoolConfigFromDatabaseUrl,
  getDatabasePoolLimit,
} from "./src/lib/prisma-pool";

export default defineConfig({
  datasource: {
    url: env("DATABASE_URL"),
  },
});
