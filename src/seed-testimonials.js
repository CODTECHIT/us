const dotenv = require("dotenv");
dotenv.config();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("🌟 Seeding provided testimonials (JS runner)...");

  const testimonials = [
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
    try {
      await prisma.testimonial.create({ data: t });
      console.log("Inserted:", t.company || t.name);
    } catch (err) {
      console.error(
        "Failed to insert",
        t.company || t.name,
        err.message || err,
      );
    }
  }

  console.log("✨ JS testimonials seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
