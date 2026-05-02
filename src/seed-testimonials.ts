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
  console.log('🌟 Seeding Premium Testimonials...');

  const testimonials = [
    {
      name: "Marcus Thorne",
      position: "Operations Director",
      company: "LogiCore Global",
      content: "Maxera Talent didn't just fill our roles; they stabilized our entire night shift. Their understanding of the local industrial market is unmatched. We filled 12 critical roles in just 14 days.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sarah Chen",
      position: "HR Lead",
      company: "Innovate Health",
      content: "The quality of candidates for our AI-healthcare integration project was exceptional. Maxera understands the 'Skills Shift' perfectly. They found us professionals who have both the technical depth and the human empathy we need.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "David Miller",
      position: "VP of Engineering",
      company: "AutoMech Systems",
      content: "Finding skilled automation technicians was our biggest bottleneck. Maxera's sourcing channels reached people we couldn't find on traditional job boards. A truly strategic staffing partner.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({
      data: t
    });
  }

  console.log('✨ Testimonials Seeded Successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
