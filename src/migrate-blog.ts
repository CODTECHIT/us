import { PrismaClient } from "../prisma/generated/client/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import dotenv from "dotenv";

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
  console.log("🏛️  Retrieving and Restoring ALL Original TalentIQ Articles...");

  const articles = [
    {
      slug: "blue-collar-hiring",
      title:
        "Why Your Blue‑Collar Roles Stay Open Too Long (And How to Fix It)",
      excerpt:
        "Many companies accept 45–60 days to fill blue‑collar roles as “normal,” but long vacancies quietly damage your operations.",
      content: `
        <div class="space-y-12">
          <p class="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            Many companies accept 45–60 days to fill blue‑collar roles as “normal,” but long vacancies quietly damage your operations. Open positions drive overtime costs, burnout your best employees, and delay customer commitments. The good news: in most cases, it’s fixable with a few focused changes to how you design, advertise, and run your hiring process.
          </p>
          <p>This article covers five common reasons blue‑collar roles stay open too long—and practical actions operations and HR leaders can apply immediately.</p>

          <section>
            <h3 class="text-2xl font-black mb-6 flex items-center">
              <span class="text-maxera-red mr-4">1.</span> Pay and shifts don’t match the local market
            </h3>
            <p>The fastest way to slow down hiring is to offer a package that doesn’t reflect local reality. Candidates often have multiple options in the same radius, so they quickly compare:</p>
            <ul class="space-y-2 mb-8 ml-4">
              <li>• Base pay and overtime rates</li>
              <li>• Shift patterns (day vs night, rotating weekends, split shifts)</li>
              <li>• Commute distance and total hours</li>
            </ul>
            <div class="bg-maxera-dark text-white p-8 mt-8">
              <h4 class="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul class="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Benchmark your pay and shift structure against other employers in your area and industry.</li>
                <li>Where you can’t lead on pay, improve the overall offer with predictable schedules, stable hours, or small perks (meals, transport support, bonuses for attendance and performance).</li>
                <li>Be honest about what you can’t change and move faster and more decisively on strong candidates to compensate.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 class="text-2xl font-black mb-6 flex items-center">
              <span class="text-maxera-red mr-4">2.</span> The role on paper doesn’t match the real job
            </h3>
            <p>Misalignment between the job description and on‑the‑floor reality is a major cause of both hiring delays and early attrition. Candidates may apply, but once they see the actual conditions, they either drop out during the interview or leave in the first few weeks.</p>
            <p>Common examples:</p>
            <ul class="space-y-2 mb-6 ml-4">
              <li>• “Light warehouse work” that involves constant heavy lifting.</li>
              <li>• “Climate‑controlled environment” that is only partially controlled.</li>
              <li>• “Monday to Friday” that routinely includes weekends and mandatory overtime.</li>
            </ul>
            <div class="bg-maxera-dark text-white p-8 mt-8">
              <h4 class="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul class="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Walk the floor and rewrite your job descriptions to reflect the reality of the work.</li>
                <li>Train hiring managers and recruiters to describe the role accurately.</li>
                <li>Accept that transparency may reduce initial applicant volume, but it will significantly improve show‑up rates and retention.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 class="text-2xl font-black mb-6 flex items-center">
              <span class="text-maxera-red mr-4">3.</span> Your hiring process is too slow
            </h3>
            <p>In blue‑collar hiring, speed is a competitive advantage. Many candidates accept the first solid offer they receive, even if it pays slightly less, because they need income immediately.</p>
            <div class="bg-maxera-dark text-white p-8 mt-8">
              <h4 class="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul class="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Simplify the process: aim for one quick screening + one decision conversation.</li>
                <li>Empower hiring managers with clear criteria so they can make same‑day or next‑day decisions.</li>
              </ul>
            </div>
          </section>
          
          <div class="mt-24 p-12 bg-maxera-dark text-white text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-full bg-maxera-red skew-x-[-20deg] translate-x-1/2 opacity-20"></div>
            <h3 class="text-3xl font-black mb-6 uppercase tracking-tighter italic">Bringing it all together</h3>
            <p class="text-lg opacity-80 max-w-2xl mx-auto font-medium">
              When blue‑collar roles stay open too long, it’s usually a combination of misaligned offers, slow processes, limited sourcing, and weak early‑stage experience. By tightening these areas, you can shrink time‑to‑fill.
            </p>
          </div>
        </div>
      `,
      author: "Maxera Editorial",
      status: "PUBLISHED",
    },
    {
      slug: "talent-crunch",
      title:
        "The 2026 Talent Crunch: AI, Skills, and Why Your Old Hiring Playbook Is Failing",
      excerpt:
        "AI is reshaping job content in every sector, yet companies still struggle to find people with the right mix of technical and human skills.",
      content: `
        <div class="space-y-12">
          <p class="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            In 2026, hiring is strange: some roles have too many applicants, while others stay open for months. AI is reshaping job content in every sector, yet companies still struggle to find people with the right mix of technical and human skills.
          </p>
          <section>
            <h3 class="text-2xl font-black mb-6 flex items-center">
              <span class="text-maxera-red mr-4">1.</span> Growth has shifted into a few powerful sectors
            </h3>
            <p>Job growth isn’t spread evenly anymore. In the US, most new demand is coming from a handful of sectors: technology, healthcare, and green energy.</p>
            <ul class="space-y-4 mb-8 ml-4">
              <li>• <strong>AI and data:</strong> AI engineers, data scientists, ML developers.</li>
              <li>• <strong>Cybersecurity:</strong> analysts, incident responders.</li>
              <li>• <strong>Health and health‑tech:</strong> nurses, healthcare administrators.</li>
            </ul>
            <div class="bg-maxera-dark text-white p-8 mt-8">
              <h4 class="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul class="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Define clearly which growth pockets matter to you.</li>
                <li>Adjust your sourcing and compensation strategy to those specific pockets.</li>
              </ul>
            </div>
          </section>
        </div>
      `,
      author: "Maxera Editorial",
      status: "PUBLISHED",
    },
    {
      slug: "skills-shift",
      title:
        "Skills Shift: The Human and Technical Skills Every Employer Is Competing For",
      excerpt:
        "Across industries in 2026, it’s no longer enough to look for generic “experience” or a specific degree.",
      content: `
        <div class="space-y-12">
          <p class="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            Across industries in 2026—IT, healthcare, manufacturing, financial services, and more—employers are discovering the same reality: it’s no longer enough to look for generic “experience.” The real competition is for people who combine strong human skills with current technical capabilities.
          </p>
          <section>
            <h3 class="text-2xl font-black mb-6 flex items-center">
              <span class="text-maxera-red mr-4">1.</span> Human skills are now the long‑term differentiator
            </h3>
            <p>Despite all the focus on technology, human strengths are becoming more valuable, not less.</p>
            <ul class="space-y-4 mb-8 ml-4">
              <li>• <strong>Adaptability:</strong> ability to keep up as tools change.</li>
              <li>• <strong>Analytical thinking:</strong> making sense of complex info.</li>
              <li>• <strong>Emotional intelligence:</strong> managing oneself and others.</li>
            </ul>
            <div class="bg-maxera-dark text-white p-8 mt-8">
              <h4 class="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul class="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Make these skills visible in job descriptions.</li>
                <li>Use structured questions that test how candidates learn and adapt.</li>
              </ul>
            </div>
          </section>
        </div>
      `,
      author: "Maxera Editorial",
      status: "PUBLISHED",
    },
  ];

  for (const article of articles) {
    await prisma.blog.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        author: article.author,
      },
      create: {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        author: article.author,
        status: "PUBLISHED" as any,
      },
    });
    console.log(`✅ Fully restored: ${article.title}`);
  }

  console.log("✨ All Original TalentIQ Data Successfully Restored!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
