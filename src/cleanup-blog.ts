import { PrismaClient } from '../prisma/generated/client/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import dotenv from 'dotenv';
import { parseDatabaseUrl } from './lib/db-parser';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is missing");

const { host, port, user, password, database } = parseDatabaseUrl(databaseUrl);
const adapter = new PrismaMariaDb({
  host,
  port,
  user,
  password,
  database,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🧹 Cleaning up duplicate articles from database...');

  const slugsToDelete = ["blue-collar-hiring", "talent-crunch", "skills-shift"];

  for (const slug of slugsToDelete) {
    await prisma.blog.deleteMany({
      where: { slug: slug }
    });
    console.log(`🗑️ Deleted duplicate: ${slug}`);
  }

  console.log('✨ Cleanup Complete! Only static articles will remain.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
