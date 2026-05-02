import { PrismaClient } from '../prisma/generated/client/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is missing");

const url = new URL(databaseUrl);
const adapter = new PrismaMariaDb({
  host: url.hostname,
  port: parseInt(url.port) || 3306,
  user: decodeURIComponent(url.username),
  password: decodeURIComponent(url.password),
  database: url.pathname.substring(1),
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Initializing CMS Pages...');

  const pages = [
    {
      slug: 'about',
      title: 'About Us',
      content: {
        hero: "Maxera Talent is a premier executive search and recruitment consultancy.",
        body: "We specialize in connecting top-tier talent with world-class organizations across India, UAE, and the US."
      },
      status: 'PUBLISHED'
    },
    {
      slug: 'privacy',
      title: 'Privacy Policy',
      content: {
        body: "Your privacy is important to us. This policy explains how we handle your data..."
      },
      status: 'PUBLISHED'
    },
    {
      slug: 'terms',
      title: 'Terms of Service',
      content: {
        body: "By using Maxera Talent, you agree to the following terms and conditions..."
      },
      status: 'PUBLISHED'
    },
    {
      slug: 'services',
      title: 'Our Services',
      content: {
        intro: "Comprehensive recruitment solutions for the modern workforce.",
        list: ["Executive Search", "Blue Collar Recruitment", "HR Outsourcing"]
      },
      status: 'PUBLISHED'
    },
    {
      slug: 'homepage',
      title: 'Homepage Manager',
      content: {
        heroTitle: "STRATEGIC SEARCHES FOR GLOBAL TALENT",
        heroSubtitle: "Connecting institutional leaders with world-class opportunities in India, UAE, and the US.",
        ctaText: "Explore Opportunities",
        ctaLink: "/jobs"
      },
      status: 'PUBLISHED'
    }
  ];

  for (const page of pages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: {
        slug: page.slug,
        title: page.title,
        content: JSON.stringify(page.content),
        status: 'PUBLISHED' as any,
      },
    });
    console.log(`✅ Page initialized: ${page.title}`);
  }

  console.log('✨ CMS Initialization Complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
