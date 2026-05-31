import { PrismaClient } from "../prisma/generated/client/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import dotenv from "dotenv";
import { parseDatabaseUrl } from "./lib/db-parser";

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
  console.log("🌟 Seeding Premium Testimonials...");

  const testimonials = [
    {
      name: "Marcus Thorne",
      position: "Operations Director",
      company: "LogiCore Global",
      content:
        "Maxera Talent didn't just fill our roles; they stabilized our entire night shift. Their understanding of the local industrial market is unmatched. We filled 12 critical roles in just 14 days.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Sarah Chen",
      position: "HR Lead",
      company: "Innovate Health",
      content:
        "The quality of candidates for our AI-healthcare integration project was exceptional. Maxera understands the 'Skills Shift' perfectly. They found us professionals who have both the technical depth and the human empathy we need.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "David Miller",
      position: "VP of Engineering",
      company: "AutoMech Systems",
      content:
        "Finding skilled automation technicians was our biggest bottleneck. Maxera's sourcing channels reached people we couldn't find on traditional job boards. A truly strategic staffing partner.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Team Fishel",
      position: "",
      company: "Team Fishel",
      content:
        "Challenge: Hiring pipeline stalled for skilled electricians and field technicians, risking project delays. Approach: Focused sourcing on trade-certified candidates with verified field experience. Outcome: 7 placements completed within deadline.",
      avatar: null,
    },
    {
      name: "INTELITY",
      position: "",
      company: "INTELITY",
      content:
        "Challenge: Needed engineers who fit both technical stack and fast-paced culture. Approach: Targeted SaaS-experienced candidates with strong communication and async collaboration skills. Outcome: 4 roles filled with strong retention.",
      avatar: null,
    },
    {
      name: "Ness Digital Engineering",
      position: "",
      company: "Ness Digital Engineering",
      content:
        "Challenge: Urgent need for cloud and digital transformation engineers. Approach: Activated pre-vetted talent network and handled screening + coordination. Outcome: 6 contractors deployed within 3 weeks.",
      avatar: null,
    },
    {
      name: "World Wide Technology",
      position: "",
      company: "World Wide Technology",
      content:
        "Challenge: Needed high-caliber engineers meeting strict enterprise standards. Approach: Aligned sourcing with internal competency framework. Outcome: 8 roles filled successfully.",
      avatar: null,
    },
    {
      name: "Nous Infosystems",
      position: "",
      company: "Nous Infosystems",
      content:
        "Challenge: Managing bench utilization and project-based hiring pressure. Approach: Provided pre-screened profiles aligned to upcoming needs. Outcome: Improved readiness and reduced reactive hiring.",
      avatar: null,
    },
    {
      name: "McCormick’s Heating & Air Conditioning",
      position: "",
      company: "McCormick’s Heating & Air Conditioning",
      content:
        "Challenge: Difficulty sourcing certified HVAC technicians quickly. Approach: Focused on local sourcing and job-ready candidates. Outcome: 4 technicians placed restoring service capacity.",
      avatar: null,
    },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({
      data: t,
    });
  }

  console.log("✨ Testimonials Seeded Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
