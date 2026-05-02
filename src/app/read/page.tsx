"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, Clock, User, Share2, ChevronRight, ArrowLeft, Target, Mail, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  sector: string;
  image: string;
  summary: string;
  content: React.ReactNode;
}

export default function TalentInsights() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "blue-collar-hiring",
      title: "Why Your Blue‑Collar Roles Stay Open Too Long (And How to Fix It)",
      category: "Industrial Strategy",
      readTime: "8 Min Read",
      sector: "Industrial & Logistics",
      image: "/images/article_blue_collar.png",
      summary: "Many companies accept 45–60 days to fill blue‑collar roles as “normal,” but long vacancies quietly damage your operations. This article covers five common reasons and practical fixes.",
      content: (
        <div className="space-y-12">
          <p className="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            Many companies accept 45–60 days to fill blue‑collar roles as “normal,” but long vacancies quietly damage your operations. Open positions drive overtime costs, burnout your best employees, and delay customer commitments. The good news: in most cases, it’s fixable with a few focused changes to how you design, advertise, and run your hiring process.
          </p>
          <p>This article covers five common reasons blue‑collar roles stay open too long—and practical actions operations and HR leaders can apply immediately.</p>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">1.</span> Pay and shifts don’t match the local market
            </h3>
            <p>The fastest way to slow down hiring is to offer a package that doesn’t reflect local reality. Candidates often have multiple options in the same radius, so they quickly compare:</p>
            <ul className="space-y-2 mb-8 ml-4">
              <li>• Base pay and overtime rates</li>
              <li>• Shift patterns (day vs night, rotating weekends, split shifts)</li>
              <li>• Commute distance and total hours</li>
            </ul>
            <p>If your pay is below local averages and your shifts are less attractive, your job becomes a “last resort” option. You may still eventually fill the role, but it takes longer, and the candidates you get are often less committed.</p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Benchmark your pay and shift structure against other employers in your area and industry.</li>
                <li>Where you can’t lead on pay, improve the overall offer with predictable schedules, stable hours, or small perks (meals, transport support, bonuses for attendance and performance).</li>
                <li>Be honest about what you can’t change and move faster and more decisively on strong candidates to compensate.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">2.</span> The role on paper doesn’t match the real job
            </h3>
            <p>Misalignment between the job description and on‑the‑floor reality is a major cause of both hiring delays and early attrition. Candidates may apply, but once they see the actual conditions, they either drop out during the interview or leave in the first few weeks.</p>
            <p>Common examples:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li>• “Light warehouse work” that involves constant heavy lifting.</li>
              <li>• “Climate‑controlled environment” that is only partially controlled or varies by area.</li>
              <li>• “Monday to Friday” that routinely includes weekends and mandatory overtime.</li>
            </ul>
            <p>When word spreads among local workers that your job is not what it claims to be, applications slow down and no‑shows increase.</p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Walk the floor and rewrite your job descriptions to reflect the reality of the work: physical demands, environment, pace, and shifts.</li>
                <li>Train hiring managers and recruiters to describe the role accurately during screening and interviews.</li>
                <li>Accept that transparency may reduce initial applicant volume, but it will significantly improve show‑up rates and retention.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">3.</span> Your hiring process is too slow for this talent market
            </h3>
            <p>In blue‑collar hiring, speed is a competitive advantage. Many candidates accept the first solid offer they receive, even if it pays slightly less, because they need income immediately. Long, complex hiring processes give your competitors time to move first.</p>
            <p>Typical slowdowns include:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li>• Multiple interview rounds for entry‑level roles.</li>
              <li>• Delays between interviews and decisions.</li>
              <li>• Long gaps between “You’re selected” and the actual start date.</li>
            </ul>
            <p>By the time you’re ready to move, the candidate has often already taken another job.</p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Simplify the process: for most roles, aim for one quick screening + one decision conversation.</li>
                <li>Empower hiring managers with clear criteria so they can make same‑day or next‑day decisions.</li>
                <li>Reduce the time between selection and joining—confirm start dates quickly and keep candidates warm with clear communication and reminders.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">4.</span> You’re sourcing from the wrong channels
            </h3>
            <p>If you’re only posting on one or two job boards and waiting, you’re almost certainly missing a large part of your potential talent pool. Different locations and job types respond to different channels.</p>
            <p>For example:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li>• Some areas respond better to community‑based sourcing—local groups, word‑of‑mouth, and walk‑ins.</li>
              <li>• Certain roles (drivers, machine operators, skilled trades) may be more efficiently filled through specialized databases or referral networks.</li>
            </ul>
            <p>Over‑reliance on a single channel makes you vulnerable when that source slows down.</p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Test multiple sourcing methods: job boards, local social groups, physical flyers, community centers, and employee referral programs.</li>
                <li>Track which channels give you both volume and quality for each role and location.</li>
                <li>Work with a staffing partner who already has active blue‑collar talent pools and proven sourcing playbooks in your target markets.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">5.</span> Onboarding and retention are an afterthought
            </h3>
            <p>Even if you manage to fill the position, weak onboarding can quickly turn your “filled” role back into a vacancy. When people leave in the first 30–45 days, you end up in a constant cycle of re‑hiring for the same job.</p>
            <p>Early exits are often caused by:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li>• Poor orientation—new hires don’t understand rules, expectations, or where to go for help.</li>
              <li>• Lack of support in the first week—no one checking in, answering questions, or offering guidance.</li>
              <li>• No clarity on future—workers see the job as “temporary” because they don’t see any path forward.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Treat the first week on the job as part of the hiring process, not an afterthought.</li>
                <li>Provide structured orientation covering safety, performance expectations, and practical details.</li>
                <li>Assign a supervisor or experienced team member as a go‑to person for new hires during their first 7–14 days.</li>
                <li>Track first‑month and first‑quarter turnover like you track time‑to‑fill, and look for patterns you can fix.</li>
              </ul>
            </div>
          </section>

          <div className="mt-24 p-12 bg-maxera-dark text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-full bg-maxera-red skew-x-[-20deg] translate-x-1/2 opacity-20"></div>
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Bringing it all together</h3>
            <p className="text-lg opacity-80 max-w-2xl mx-auto font-medium">
              When blue‑collar roles stay open too long, it’s rarely because “there are no candidates at all.” It’s usually a combination of misaligned offers, slow processes, limited sourcing, and weak early‑stage experience. By tightening these areas, you can shrink time‑to‑fill, stabilize your frontline workforce, and protect both productivity and morale.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "talent-crunch",
      title: "The 2026 Talent Crunch: AI, Skills, and Why Your Old Hiring Playbook Is Failing",
      category: "Tech & Innovation",
      readTime: "10 Min Read",
      sector: "IT & Digital",
      image: "/images/article_talent_crunch.png",
      summary: "In 2026, hiring is strange: some roles have too many applicants, while others stay open for months. AI is reshaping job content in every sector, yet companies still struggle to find people with the right mix of technical and human skills.",
      content: (
        <div className="space-y-12">
          <p className="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            In 2026, hiring is strange: some roles have too many applicants, while others stay open for months. AI is reshaping job content in every sector, yet companies still struggle to find people with the right mix of technical and human skills. If you keep using a 2019 hiring playbook—degree filters, slow processes, generic job ads—you will lose candidates in multiple industries, from IT and healthcare to green energy and advanced manufacturing.
          </p>
          <p>This article explains what has changed and what employers need to do differently now.</p>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">1.</span> Growth has shifted into a few powerful sectors
            </h3>
            <p>Job growth isn’t spread evenly anymore. In the US, most new demand is coming from a handful of sectors: technology, healthcare, and green energy, with strong spillover into data, cybersecurity, and digital roles. These sectors are hiring for roles that didn’t even exist a decade ago or that have evolved massively.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Examples of in‑demand areas:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• <strong>AI and data:</strong> AI engineers, data scientists, ML developers, data analysts.</li>
              <li>• <strong>Cybersecurity:</strong> analysts, incident responders, security engineers.</li>
              <li>• <strong>Health and health‑tech:</strong> nurses, healthcare administrators, telehealth professionals, healthcare data analysts.</li>
              <li>• <strong>Green energy:</strong> renewable energy engineers, project managers, technicians in solar and wind.</li>
            </ul>
            <p>If your hiring strategy still treats all “IT roles” or all “healthcare roles” the same, you’re missing how quickly sub‑specialties are exploding.</p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Define clearly which growth pockets matter to you (e.g., healthcare tech vs. pure healthcare, AI talent vs. general developers).</li>
                <li>Adjust your sourcing, employer branding, and compensation strategy to those specific pockets, not just broad industry labels.</li>
                <li>Use market insight from partners and data to understand which of your roles are in a “red zone” of scarcity.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">2.</span> Skills now matter more than titles and degrees
            </h3>
            <p>The talent market is moving rapidly toward skills‑based hiring, where employers care more about what people can do than the exact degree they hold. This is driven by AI, automation, and constant tech change, which make static job descriptions and rigid degree requirements less useful.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Current trends:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Employers are dropping strict degree requirements for many tech, digital, and operations roles and focusing on proven capability.</li>
              <li>• Certifications, portfolios, project work, and hands‑on experience are becoming stronger signals than just a CV.</li>
              <li>• The most valuable people are those who combine technical depth (AI, cloud, data, cybersecurity) with strong human skills (problem‑solving, communication, collaboration).</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Rewrite job descriptions to emphasize skills and outcomes instead of long lists of degree and experience filters.</li>
                <li>Accept non‑traditional talent pipelines—bootcamps, certifications, internal cross‑moves, and career switchers with validated skills.</li>
                <li>Build simple skill frameworks for your key roles, so recruiters and hiring managers can align on what “good” looks like.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">3.</span> AI is changing roles faster than HR processes
            </h3>
            <p>In many industries, AI is already doing parts of the job—data prep, documentation, basic analysis, content drafts—which changes what you actually need from people. At the same time, candidates want employers who have a clear AI vision and will help them stay relevant as tasks evolve.</p>
            <h4 className="font-bold text-maxera-dark mb-4">What’s happening:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Entry‑level white‑collar tasks (reporting, basic research, routine admin) are being automated, shrinking some junior roles.</li>
              <li>• In tech, AI is augmenting developers and engineers, so problem‑solving and system design become more valuable than repetitive coding.</li>
              <li>• In healthcare and other sectors, AI is supporting diagnostics and decision‑making, increasing demand for people who can work at the intersection of tech and domain expertise.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Audit your key roles and identify: which tasks can AI handle, and what higher‑value skills you now need from people.</li>
                <li>Update job requirements and interview questions to focus on adaptation, learning ability, and working with AI tools—not fear of them.</li>
                <li>Position your company as a place where people learn to use AI, not get replaced by it; this is a big draw for talent.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">4.</span> Talent shortages and surpluses now coexist
            </h3>
            <p>One of the most confusing things in 2026 is that you can have a talent shortage and a talent surplus at the same time. Some markets are flooded with applicants (especially recent grads in generic roles), while specific skill sets remain hard to find.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Examples:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Many entry‑level generalist positions have more applicants than openings, especially in corporate support roles.</li>
              <li>• Highly skilled roles in AI, cybersecurity, healthcare tech, and renewable energy face sustained shortages and intense competition.</li>
              <li>• Healthcare continues to drive a large share of net job growth, while other sectors are flat or shrinking.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Stop using one hiring strategy for everything; segment roles into “scarce,” “balanced,” and “high‑supply.”</li>
                <li>For scarce roles: move faster, pay competitively, and build long‑term pipelines with partners and internal development.</li>
                <li>For high‑supply roles: tighten your screening for quality and fit; focus on potential and learning ability rather than just filtering by degrees.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">5.</span> Workers are demanding real development, not just job security
            </h3>
            <p>Across industries, candidates expect employers to help them grow—not just give them a job. With AI and automation changing roles constantly, people are more aware that they need new skills to stay employable.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Trends:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Companies are investing more in internal learning programs and frontline training to close skills gaps.</li>
              <li>• Workers actively look for roles where they can gain valued skills—AI tools, cloud platforms, data literacy, automation systems.</li>
              <li>• Employers that ignore upskilling risk both higher turnover and weaker pipelines for future roles.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Make a short, concrete development promise part of your employer brand (for example: “In 12 months here, you will learn X tools and Y skills that move your career forward”).</li>
                <li>Tie your staffing and recruitment strategy to reskilling: not just “fill this role” but “who can we grow into what we need next.”</li>
                <li>Use your hiring partners to identify candidates who show learning agility and growth potential, not just a static CV.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">6.</span> Blended staffing models are becoming the norm
            </h3>
            <p>With uncertainty and rapid change, many companies are moving to blended talent models—mixing full‑time hires, contractors, consultants, and project‑based RPO support. This gives flexibility while still securing critical skills.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Current practices:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Using contractors and project teams for spikes, implementations, and transformations.</li>
              <li>• Keeping core, business‑critical roles in‑house but surrounding them with flexible capacity.</li>
              <li>• Partnering with specialized staffing firms that can scale up or down quickly across different skill categories.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What to do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Decide which roles must be permanent and which can be flexible without hurting quality and culture.</li>
                <li>Build a clear playbook: when to use direct hire, when to use contract, when to use RPO or project‑based recruitment.</li>
                <li>Work with a partner who understands multiple industries and models, not just one niche, so they can support across IT, healthcare, operations, and more.</li>
              </ul>
            </div>
          </section>
        </div>
      )
    },
    {
      id: "skills-shift",
      title: "Skills Shift: The Human and Technical Skills Every Employer Is Competing For",
      category: "Workforce Evolution",
      readTime: "9 Min Read",
      sector: "Cross-Industry",
      image: "/images/article_skills_shift.png",
      summary: "Across industries in 2026, it’s no longer enough to look for generic “experience” or a specific degree. The real competition is for people who combine strong human skills with current technical capabilities.",
      content: (
        <div className="space-y-12">
          <p className="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            Across industries in 2026—IT, healthcare, manufacturing, financial services, and more—employers are discovering the same reality: it’s no longer enough to look for generic “experience” or a specific degree. The real competition is for people who combine strong human skills with current technical capabilities, especially around data, AI, and digital tools. Companies that don’t update their skill expectations and hiring messages are struggling to attract and keep the talent they need.
          </p>
          <p>This article highlights the skills that are in demand across many industries—and what employers should do differently in hiring.</p>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">1.</span> Human skills are now the long‑term differentiator
            </h3>
            <p>Despite all the focus on technology, human strengths are becoming more valuable, not less. Research and employer surveys consistently list adaptability, analytical thinking, communication, and emotional intelligence among the most important skills for 2026 and beyond.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Key human skills in demand:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• <strong>Adaptability and continuous learning:</strong> ability to keep up as tools and processes change.</li>
              <li>• <strong>Analytical thinking and problem‑solving:</strong> making sense of complex information, not just following steps.</li>
              <li>• <strong>Communication and collaboration:</strong> working effectively across teams, locations, and cultures.</li>
              <li>• <strong>Emotional intelligence and leadership:</strong> managing oneself and others in fast‑changing environments.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What employers should do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Make these skills visible in job descriptions and interviews, not just as generic buzzwords.</li>
                <li>Use structured questions and scenarios that test how candidates learn, adapt, and handle ambiguity.</li>
                <li>Evaluate internal employees on these dimensions when planning promotions and succession.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">2.</span> AI and data skills cut across nearly every role
            </h3>
            <p>AI and data capabilities have moved from niche to mainstream in many organizations. Companies across sectors are investing in AI, automation, and analytics, and they need people who can either build these systems or work effectively with them.</p>
            <h4 className="font-bold text-maxera-dark mb-4">In‑demand technical areas include:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• <strong>AI and machine learning:</strong> using and integrating AI tools, not just research‑level development.</li>
              <li>• <strong>Data analysis and business analytics:</strong> turning data into decisions and clear insights.</li>
              <li>• <strong>Cybersecurity:</strong> protecting systems and data as digital risk grows.</li>
              <li>• <strong>Cloud and modern infrastructure (AWS, Azure, etc.):</strong> running scalable, flexible environments.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What employers should do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Decide which roles in your company need deep AI/data expertise and which simply need data‑literate talent.</li>
                <li>Update job ads to highlight exposure to AI tools (for example: “experience using AI‑assisted workflows” or “comfort with data dashboards”).</li>
                <li>Offer targeted training so current employees can build basic AI and data skills instead of relying only on external hires.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">3.</span> Skills‑first hiring is replacing rigid degree and title filters
            </h3>
            <p>A strong trend in 2026 is “skills‑first hiring”—prioritizing what candidates can actually do over traditional requirements like specific degrees or strict years of experience. Many employers have started relaxing degree requirements for tech, digital, and operations roles, focusing instead on portfolios, certifications, and real‑world projects.</p>
            <h4 className="font-bold text-maxera-dark mb-4">What’s changing:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Non‑traditional paths (bootcamps, online learning, internal reskilling) are increasingly accepted.</li>
              <li>• Structured assessments and skill tests are used to evaluate candidates objectively.</li>
              <li>• Internal mobility—moving people across departments and upskilling them—is becoming a core talent strategy.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What employers should do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Review your job descriptions and remove unnecessary degree and “X years” barriers that don’t correlate with performance.</li>
                <li>Introduce simple, role‑relevant skill assessments for key positions (technical tasks, case exercises, work samples).</li>
                <li>Work with partners who can help you identify candidates with the right skill mix, not just matching job titles.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">4.</span> Technical field and operations roles are becoming more digital
            </h3>
            <p>Even in traditionally “hands‑on” industries like construction equipment, industrial automation, logistics, and field service, the most valued professionals now work with digital tools, telematics, and connected systems. Employers are looking for people who can bridge physical operations and digital insights.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Examples:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• <strong>Construction and heavy equipment:</strong> technicians who understand telematics, IoT sensors, and remote diagnostics.</li>
              <li>• <strong>Automation and manufacturing:</strong> engineers skilled in PLCs, SCADA, systems integration, and controls architecture.</li>
              <li>• <strong>Service and maintenance roles:</strong> professionals who use data dashboards and analytics to predict issues and reduce downtime.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What employers should do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Update role definitions to include digital and analytics expectations, even for field and operations jobs.</li>
                <li>Offer training in the specific platforms and tools you use (telematics systems, analytics dashboards, automation software).</li>
                <li>Emphasize these digital elements in your employer branding to attract the next generation of technicians and engineers.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">5.</span> Building a future‑ready workforce requires continuous upskilling
            </h3>
            <p>Because technology and business needs change so quickly, many organizations accept that they can’t simply “hire their way out” of every skills gap. Instead, they are investing in continuous upskilling and reskilling programs to create a more future‑ready workforce.</p>
            <h4 className="font-bold text-maxera-dark mb-4">Current approaches:</h4>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Internal academies and learning pathways for both technical and soft skills.</li>
              <li>• Partnerships with training providers and platforms to deliver focused learning on AI, cloud, cybersecurity, and analytics.</li>
              <li>• Clear communication to employees about which skills the organization values and how they can develop them.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">What employers should do</h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Identify 5–10 critical skills for your business over the next 2–3 years (both human and technical).</li>
                <li>Design simple development paths for these skills, combining internal mentoring, on‑the‑job learning, and external courses.</li>
                <li>Incorporate learning and adaptability into performance reviews and promotion decisions.</li>
              </ul>
            </div>
          </section>
        </div>
      )
    }
  ];

  // Scroll to top when switching articles
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedArticle]);

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Dynamic Page Header */}
      <section className="bg-maxera-dark pt-32 sm:pt-40 pb-20 relative overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 bg-maxera-red opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black skew-x-[-20deg] translate-x-1/2" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={selectedArticle ? "detail" : "list"}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-maxera-red text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em]">
                {selectedArticle ? selectedArticle.category : "Thought Leadership"}
              </span>
              {selectedArticle && (
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="text-white/60 hover:text-white flex items-center text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
                >
                  <ArrowLeft size={14} className="mr-2" /> Back to Insights
                </button>
              )}
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white mb-8 uppercase tracking-tighter leading-none max-w-5xl">
              {selectedArticle ? (
                <>{selectedArticle.title}</>
              ) : (
                <>TALENT <span className="text-maxera-red">INSIGHTS</span></>
              )}
            </h1>
            
            {!selectedArticle && (
              <p className="text-white/60 text-lg md:text-xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
                Expert perspectives on recruitment, workforce strategy, and industry evolution.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-20">
        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-12 gap-16"
            >
              <div className="lg:col-span-8 grid gap-12">
                {articles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                      <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden shadow-xl">
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-4 text-[10px] font-black text-maxera-red uppercase tracking-widest mb-4">
                          <span>{article.sector}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-3xl font-heading font-black text-maxera-dark mb-4 group-hover:text-maxera-red transition-colors uppercase tracking-tight leading-none">
                          {article.title}
                        </h3>
                        <p className="text-gray-500 font-medium mb-6 line-clamp-2">
                          {article.summary}
                        </p>
                        <span className="inline-flex items-center text-maxera-dark font-black text-[11px] uppercase tracking-widest group-hover:text-maxera-red transition-all">
                          Read Analysis <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <aside className="lg:col-span-4 space-y-12">
                <div className="bg-maxera-gray p-10 border-t-8 border-maxera-red">
                  <h4 className="text-2xl font-black text-maxera-dark mb-4 uppercase tracking-tighter">The Brief</h4>
                  <p className="text-sm text-gray-500 font-medium mb-8 leading-relaxed">
                    Monthly executive summaries on global labor market shifts and strategic hiring trends.
                  </p>
                  <button className="w-full bg-maxera-dark text-white py-4 font-black uppercase tracking-widest text-[10px] hover:bg-maxera-red transition-all">
                    Get The Report
                  </button>
                </div>
                
                <div>
                  <h4 className="text-maxera-dark font-black uppercase tracking-widest text-xs mb-8 pb-4 border-b-2 border-maxera-red inline-block">Sectors</h4>
                  <div className="flex flex-wrap gap-2">
                    {["IT & Digital", "Health-Tech", "Industrial", "Logistics", "Energy"].map((s) => (
                      <span key={s} className="px-4 py-2 bg-maxera-gray text-[10px] font-black text-gray-400 uppercase tracking-widest hover:bg-maxera-red hover:text-white cursor-default transition-all">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-12 gap-16"
            >
              <article className="lg:col-span-8">
                <div className="relative aspect-[21/9] mb-12 overflow-hidden shadow-2xl">
                  <Image 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="flex flex-wrap items-center gap-6 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12 pb-8 border-b border-gray-100">
                  <div className="flex items-center"><Clock size={14} className="mr-2 text-maxera-red" /> {selectedArticle.readTime}</div>
                  <div className="flex items-center"><User size={14} className="mr-2 text-maxera-red" /> MaxEra Talent</div>
                  <div className="flex items-center"><Target size={14} className="mr-2 text-maxera-red" /> {selectedArticle.sector}</div>
                </div>

                <div className="prose prose-xl prose-gray max-w-none prose-p:text-gray-500 prose-p:leading-relaxed prose-strong:text-maxera-dark prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
                  {selectedArticle.content}
                </div>

                <div className="mt-20 pt-12 border-t border-gray-100 flex justify-between items-center">
                   <button 
                    onClick={() => setSelectedArticle(null)}
                    className="bg-maxera-gray text-maxera-dark px-8 py-4 font-black uppercase tracking-widest text-[10px] hover:bg-maxera-red hover:text-white transition-all flex items-center"
                   >
                     <ArrowLeft size={14} className="mr-2" /> All Insights
                   </button>
                   <div className="flex gap-4">
                      <button className="w-12 h-12 bg-maxera-gray flex items-center justify-center hover:bg-maxera-red hover:text-white transition-all">
                        <Share2 size={18} />
                      </button>
                   </div>
                </div>
              </article>

              <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-12">
                   <div className="bg-maxera-dark text-white p-10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-maxera-red/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                      <h4 className="text-xl font-black mb-6 uppercase tracking-tight relative z-10 leading-tight">Need a Strategic Talent Audit?</h4>
                      <p className="text-white/60 text-sm mb-8 font-medium leading-relaxed relative z-10">
                        Let us analyze your current hiring playbook and identify the gaps in your 2026 talent strategy.
                      </p>
                      <Link href="/contact" className="inline-flex items-center bg-maxera-red text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all relative z-10 shadow-lg">
                        Consult Our Experts <ArrowRight size={14} className="ml-2" />
                      </Link>
                   </div>

                   <div>
                     <h4 className="text-maxera-dark font-black uppercase tracking-widest text-xs mb-8 pb-4 border-b-2 border-maxera-red inline-block">More Insights</h4>
                     <div className="space-y-8">
                       {articles.filter(a => a.id !== selectedArticle.id).map(article => (
                         <div key={article.id} className="group cursor-pointer" onClick={() => setSelectedArticle(article)}>
                           <div className="flex gap-4 items-center">
                              <div className="w-20 h-20 relative flex-shrink-0">
                                <Image src={article.image} alt={article.title} fill className="object-cover" />
                              </div>
                              <div>
                                <h5 className="text-sm font-black text-maxera-dark uppercase tracking-tight group-hover:text-maxera-red transition-colors mb-2 leading-tight">{article.title}</h5>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{article.readTime}</span>
                              </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              </aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
