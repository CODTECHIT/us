"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  User,
  Share2,
  ArrowLeft,
  Target,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TalentInsightsClient({
  initialArticles,
}: {
  initialArticles: any[];
}) {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  // STATIC ARTICLES (100% FULL DATA AS PROVIDED BY USER)
  const staticArticles = [
    {
      id: "blue-collar-hiring-static",
      title:
        "Why Your Blue‑Collar Roles Stay Open Too Long (And How to Fix It)",
      category: "Industrial Strategy",
      readTime: "8 Min Read",
      sector: "Industrial & Logistics",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      summary:
        "Many companies accept 45–60 days to fill blue‑collar roles as “normal,” but long vacancies quietly damage your operations.",
      content: (
        <div className="space-y-12">
          <p className="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            Many companies accept 45–60 days to fill blue‑collar roles as
            “normal,” but long vacancies quietly damage your operations. Open
            positions drive overtime costs, burnout your best employees, and
            delay customer commitments. The good news: in most cases, it’s
            fixable with a few focused changes to how you design, advertise, and
            run your hiring process.
          </p>
          <p>
            This article covers five common reasons blue‑collar roles stay open
            too long—and practical actions operations and HR leaders can apply
            immediately.
          </p>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">1.</span> Pay and shifts
              don’t match the local market
            </h3>
            <p>
              The fastest way to slow down hiring is to offer a package that
              doesn’t reflect local reality. Candidates often have multiple
              options in the same radius, so they quickly compare:
            </p>
            <ul className="space-y-2 mb-8 ml-4 font-bold text-maxera-dark">
              <li>• Base pay and overtime rates</li>
              <li>
                • Shift patterns (day vs night, rotating weekends, split shifts)
              </li>
              <li>• Commute distance and total hours</li>
            </ul>
            <p>
              If your pay is below local averages and your shifts are less
              attractive, your job becomes a “last resort” option. You may still
              eventually fill the role, but it takes longer, and the candidates
              you get are often less committed.
            </p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Benchmark your pay and shift structure against other employers
                  in your area and industry.
                </li>
                <li>
                  Where you can’t lead on pay, improve the overall offer with
                  predictable schedules, stable hours, or small perks (meals,
                  transport support, bonuses for attendance and performance).
                </li>
                <li>
                  Be honest about what you can’t change and move faster and more
                  decisively on strong candidates to compensate.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">2.</span> The role on paper
              doesn’t match the real job
            </h3>
            <p>
              Misalignment between the job description and on‑the‑floor reality
              is a major cause of both hiring delays and early attrition.
              Candidates may apply, but once they see the actual conditions,
              they either drop out during the interview or leave in the first
              few weeks.
            </p>
            <p className="font-bold text-maxera-dark mb-4">Common examples:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li>
                • “Light warehouse work” that involves constant heavy lifting.
              </li>
              <li>
                • “Climate‑controlled environment” that is only partially
                controlled or varies by area.
              </li>
              <li>
                • “Monday to Friday” that routinely includes weekends and
                mandatory overtime.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Walk the floor and rewrite your job descriptions to reflect
                  the reality of the work: physical demands, environment, pace,
                  and shifts.
                </li>
                <li>
                  Train hiring managers and recruiters to describe the role
                  accurately during screening and interviews.
                </li>
                <li>
                  Accept that transparency may reduce initial applicant volume,
                  but it will significantly improve show‑up rates and retention.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">3.</span> Your hiring
              process is too slow for this talent market
            </h3>
            <p>
              In blue‑collar hiring, speed is a competitive advantage. Many
              candidates accept the first solid offer they receive, even if it
              pays slightly less, because they need income immediately. Long,
              complex hiring processes give your competitors time to move first.
            </p>
            <p className="font-bold text-maxera-dark mb-4">
              Typical slowdowns include:
            </p>
            <ul className="space-y-2 mb-6 ml-4">
              <li>• Multiple interview rounds for entry‑level roles.</li>
              <li>• Delays between interviews and decisions.</li>
              <li>
                • Long gaps between “You’re selected” and the actual start date.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Simplify the process: for most roles, aim for one quick
                  screening + one decision conversation.
                </li>
                <li>
                  Empower hiring managers with clear criteria so they can make
                  same‑day or next‑day decisions.
                </li>
                <li>
                  Reduce the time between selection and joining—confirm start
                  dates quickly and keep candidates warm with clear
                  communication and reminders.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">4.</span> You’re sourcing
              from the wrong channels
            </h3>
            <p>
              If you’re only posting on one or two job boards and waiting,
              you’re almost certainly missing a large part of your potential
              talent pool. Different locations and job types respond to
              different channels.
            </p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Test multiple sourcing methods: job boards, local social
                  groups, physical flyers, community centers, and employee
                  referral programs.
                </li>
                <li>
                  Track which channels give you both volume and quality for each
                  role and location.
                </li>
                <li>
                  Work with a staffing partner who already has active
                  blue‑collar talent pools and proven sourcing playbooks in your
                  target markets.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">5.</span> Onboarding and
              retention are an afterthought
            </h3>
            <p>
              Even if you manage to fill the position, weak onboarding can
              quickly turn your “filled” role back into a vacancy. When people
              leave in the first 30–45 days, you end up in a constant cycle of
              re‑hiring for the same job.
            </p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Treat the first week on the job as part of the hiring process,
                  not an afterthought.
                </li>
                <li>
                  Provide structured orientation covering safety, performance
                  expectations, and practical details.
                </li>
                <li>
                  Assign a supervisor or experienced team member as a go‑to
                  person for new hires during their first 7–14 days.
                </li>
                <li>
                  Track first‑month and first‑quarter turnover like you track
                  time‑to‑fill, and look for patterns you can fix.
                </li>
              </ul>
            </div>
          </section>

          <div className="mt-24 p-12 bg-maxera-dark text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-full bg-maxera-red skew-x-[-20deg] translate-x-1/2 opacity-20"></div>
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">
              Bringing it all together
            </h3>
            <p className="text-lg opacity-80 max-w-2xl mx-auto font-medium">
              When blue‑collar roles stay open too long, it’s rarely because
              “there are no candidates at all.” It’s usually a combination of
              misaligned offers, slow processes, limited sourcing, and weak
              early‑stage experience. By tightening these areas, you can shrink
              time‑to‑fill, stabilize your frontline workforce, and protect both
              productivity and morale.
            </p>
          </div>
        </div>
      ),
      createdAt: "2026-05-01T10:00:00Z",
    },
    {
      id: "talent-crunch-static",
      title:
        "The 2026 Talent Crunch: AI, Skills, and Why Your Old Hiring Playbook Is Failing",
      category: "Tech & Innovation",
      readTime: "10 Min Read",
      sector: "IT & Digital",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      summary:
        "AI is reshaping job content in every sector, yet companies still struggle to find people with the right mix of technical and human skills.",
      content: (
        <div className="space-y-12">
          <p className="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            In 2026, hiring is strange: some roles have too many applicants,
            while others stay open for months. AI is reshaping job content in
            every sector, yet companies still struggle to find people with the
            right mix of technical and human skills. If you keep using a 2019
            hiring playbook—degree filters, slow processes, generic job ads—you
            will lose candidates in multiple industries, from IT and healthcare
            to green energy and advanced manufacturing.
          </p>
          <p>
            This article explains what has changed and what employers need to do
            differently now.
          </p>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">1.</span> Growth has
              shifted into a few powerful sectors
            </h3>
            <p>
              Job growth isn’t spread evenly anymore. In the US, most new demand
              is coming from a handful of sectors: technology, healthcare, and
              green energy, with strong spillover into data, cybersecurity, and
              digital roles. These sectors are hiring for roles that didn’t even
              exist a decade ago or that have evolved massively.
            </p>
            <p className="font-bold text-maxera-dark mb-4">
              Examples of in‑demand areas:
            </p>
            <ul className="space-y-4 mb-8 ml-4 font-bold">
              <li>
                • AI and data: AI engineers, data scientists, ML developers,
                data analysts.
              </li>
              <li>
                • Cybersecurity: analysts, incident responders, security
                engineers.
              </li>
              <li>
                • Health and health‑tech: nurses, healthcare administrators,
                telehealth professionals, healthcare data analysts.
              </li>
              <li>
                • Green energy: renewable energy engineers, project managers,
                technicians in solar and wind.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Define clearly which growth pockets matter to you.</li>
                <li>
                  Adjust your sourcing, employer branding, and compensation
                  strategy to those specific pockets.
                </li>
                <li>
                  Use market insight from partners and data to understand which
                  of your roles are in a “red zone” of scarcity.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">2.</span> Skills now matter
              more than titles and degrees
            </h3>
            <p>
              The talent market is moving rapidly toward skills‑based hiring,
              where employers care more about what people can do than the exact
              degree they hold. This is driven by AI, automation, and constant
              tech change.
            </p>
            <p className="font-bold text-maxera-dark mb-4">Current trends:</p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>
                • Employers are dropping strict degree requirements for many
                tech, digital, and operations roles and focusing on proven
                capability.
              </li>
              <li>
                • Certifications, portfolios, project work, and hands‑on
                experience are becoming stronger signals than just a CV.
              </li>
              <li>
                • The most valuable people are those who combine technical depth
                with strong human skills.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Rewrite job descriptions to emphasize skills and outcomes
                  instead of long lists of filters.
                </li>
                <li>
                  Accept non‑traditional talent pipelines—bootcamps,
                  certifications, internal cross‑moves.
                </li>
                <li>Build simple skill frameworks for your key roles.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">3.</span> AI is changing
              roles faster than HR processes
            </h3>
            <p>
              In many industries, AI is already doing parts of the job—data
              prep, documentation, basic analysis—which changes what you
              actually need from people.
            </p>
            <p className="font-bold text-maxera-dark mb-4">What’s happening:</p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>
                • Entry‑level white‑collar tasks are being automated, shrinking
                some junior roles.
              </li>
              <li>
                • In tech, AI is augmenting developers, so problem‑solving and
                system design become more valuable.
              </li>
              <li>
                • In healthcare, AI is supporting diagnostics, increasing demand
                for people at the intersection of tech and domain expertise.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Audit your key roles and identify: which tasks can AI handle.
                </li>
                <li>
                  Update job requirements and interview questions to focus on
                  adaptation and learning ability.
                </li>
                <li>
                  Position your company as a place where people learn to use AI.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">4.</span> Talent shortages
              and surpluses now coexist
            </h3>
            <p>
              One of the most confusing things in 2026 is that you can have a
              talent shortage and a talent surplus at the same time.
            </p>
            <p className="font-bold text-maxera-dark mb-4">Examples:</p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>
                • Many entry‑level generalist positions have more applicants
                than openings.
              </li>
              <li>
                • Highly skilled roles in AI, cybersecurity, and renewable
                energy face sustained shortages.
              </li>
              <li>
                • Healthcare continues to drive a large share of net job growth.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Stop using one hiring strategy for everything; segment roles
                  into scarce, balanced, and high‑supply.
                </li>
                <li>
                  For scarce roles: move faster, pay competitively, and build
                  long‑term pipelines.
                </li>
                <li>
                  For high‑supply roles: tighten your screening for quality and
                  fit.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">5.</span> Workers are
              demanding real development
            </h3>
            <p>
              Across industries, candidates expect employers to help them
              grow—not just give them a job.
            </p>
            <p className="font-bold text-maxera-dark mb-4">Trends:</p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>
                • Companies are investing more in internal learning programs and
                frontline training.
              </li>
              <li>
                • Workers actively look for roles where they can gain valued
                skills (AI tools, cloud, data literacy).
              </li>
              <li>• Employers that ignore upskilling risk higher turnover.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Make a short, concrete development promise part of your
                  employer brand.
                </li>
                <li>
                  Tie your staffing and recruitment strategy to reskilling.
                </li>
                <li>
                  Use your hiring partners to identify candidates who show
                  learning agility.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">6.</span> Blended staffing
              models are becoming the norm
            </h3>
            <p>
              With uncertainty and rapid change, many companies are moving to
              blended talent models—mixing full‑time hires, contractors, and
              consultants.
            </p>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What to do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Decide which roles must be permanent and which can be
                  flexible.
                </li>
                <li>
                  Build a clear playbook: when to use direct hire, contract, or
                  RPO.
                </li>
                <li>
                  Work with a partner who understands multiple industries and
                  models.
                </li>
              </ul>
            </div>
          </section>
        </div>
      ),
      createdAt: "2026-05-02T11:00:00Z",
    },
    {
      id: "skills-shift-static",
      title:
        "Skills Shift: The Human and Technical Skills Every Employer Is Competing For",
      category: "Workforce Evolution",
      readTime: "9 Min Read",
      sector: "Cross-Industry",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      summary:
        "Across industries in 2026, it’s no longer enough to look for generic “experience” or a specific degree.",
      content: (
        <div className="space-y-12">
          <p className="text-xl font-bold text-maxera-dark/80 leading-relaxed bg-maxera-gray p-8 border-l-8 border-maxera-red">
            Across industries in 2026—IT, healthcare, manufacturing, financial
            services, and more—employers are discovering the same reality: it’s
            no longer enough to look for generic “experience” or a specific
            degree. The real competition is for people who combine strong human
            skills with current technical capabilities, especially around data,
            AI, and digital tools.
          </p>
          <p>
            This article highlights the skills that are in demand across many
            industries—and what employers should do differently in hiring.
          </p>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">1.</span> Human skills are
              now the long‑term differentiator
            </h3>
            <p>
              Despite all the focus on technology, human strengths are becoming
              more valuable, not less. Research and employer surveys
              consistently list adaptability, analytical thinking,
              communication, and emotional intelligence among the most important
              skills.
            </p>
            <p className="font-bold text-maxera-dark mb-4">
              Key human skills in demand:
            </p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>
                • <strong>Adaptability and continuous learning:</strong> ability
                to keep up as tools and processes change.
              </li>
              <li>
                • <strong>Analytical thinking and problem‑solving:</strong>{" "}
                making sense of complex information.
              </li>
              <li>
                • <strong>Communication and collaboration:</strong> working
                effectively across teams.
              </li>
              <li>
                • <strong>Emotional intelligence and leadership:</strong>{" "}
                managing oneself and others.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What employers should do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Make these skills visible in job descriptions and interviews.
                </li>
                <li>
                  Use structured questions and scenarios that test how
                  candidates learn and adapt.
                </li>
                <li>Evaluate internal employees on these dimensions.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">2.</span> AI and data
              skills cut across nearly every role
            </h3>
            <p>
              AI and data capabilities have moved from niche to mainstream in
              many organizations. Companies across sectors are investing in AI
              and analytics.
            </p>
            <p className="font-bold text-maxera-dark mb-4">
              In‑demand technical areas include:
            </p>
            <ul className="space-y-4 mb-8 ml-4 font-bold">
              <li>
                • AI and machine learning: using and integrating AI tools.
              </li>
              <li>
                • Data analysis and business analytics: turning data into
                decisions.
              </li>
              <li>
                • Cybersecurity: protecting systems and data as digital risk
                grows.
              </li>
              <li>
                • Cloud and modern infrastructure (AWS, Azure, etc.): running
                scalable environments.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What employers should do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Decide which roles in your company need deep AI/data
                  expertise.
                </li>
                <li>Update job ads to highlight exposure to AI tools.</li>
                <li>
                  Offer targeted training so current employees can build basic
                  AI and data skills.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">3.</span> Skills‑first
              hiring is replacing rigid degree filters
            </h3>
            <p>
              A strong trend in 2026 is “skills‑first hiring”—prioritizing what
              candidates can actually do over traditional requirements.
            </p>
            <p className="font-bold text-maxera-dark mb-4">What’s changing:</p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>
                • Non‑traditional paths (bootcamps, internal reskilling) are
                increasingly accepted.
              </li>
              <li>
                • Structured assessments and skill tests are used to evaluate
                candidates.
              </li>
              <li>• Internal mobility is becoming a core talent strategy.</li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What employers should do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Review your job descriptions and remove unnecessary barriers.
                </li>
                <li>
                  Introduce simple, role‑relevant skill assessments for key
                  positions.
                </li>
                <li>
                  Work with partners who can help you identify candidates with
                  the right skill mix.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">4.</span> Technical field
              and operations roles are becoming digital
            </h3>
            <p>
              Even in traditionally “hands‑on” industries, the most valued
              professionals now work with digital tools and telematics.
            </p>
            <p className="font-bold text-maxera-dark mb-4">Examples:</p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>
                • Construction: technicians who understand telematics and IoT
                sensors.
              </li>
              <li>
                • Automation: engineers skilled in PLCs and systems integration.
              </li>
              <li>
                • Service roles: professionals who use data dashboards to reduce
                downtime.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What employers should do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>
                  Update role definitions to include digital and analytics
                  expectations.
                </li>
                <li>
                  Offer training in the specific platforms and tools you use.
                </li>
                <li>
                  Emphasize these digital elements in your employer branding.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black mb-6 flex items-center">
              <span className="text-maxera-red mr-4">5.</span> Building a
              future‑ready workforce
            </h3>
            <p>
              Because technology changes so quickly, organizations are investing
              in continuous upskilling and reskilling programs.
            </p>
            <p className="font-bold text-maxera-dark mb-4">
              Current approaches:
            </p>
            <ul className="space-y-4 mb-8 ml-4">
              <li>• Internal academies for both technical and soft skills.</li>
              <li>
                • Partnerships with training providers for AI, cloud, and
                cybersecurity.
              </li>
              <li>
                • Clear communication to employees about which skills the
                organization values.
              </li>
            </ul>
            <div className="bg-maxera-dark text-white p-8 mt-8">
              <h4 className="text-maxera-red font-black text-xs uppercase tracking-[0.2em] mb-4">
                What employers should do
              </h4>
              <ul className="text-sm space-y-3 opacity-90 list-disc pl-5">
                <li>Identify 5–10 critical skills for your business.</li>
                <li>Design simple development paths for these skills.</li>
                <li>
                  Incorporate learning and adaptability into performance
                  reviews.
                </li>
              </ul>
            </div>
          </section>
        </div>
      ),
      createdAt: "2026-05-02T12:00:00Z",
    },
  ];

  // Combine static and dynamic articles
  const allArticles = [...staticArticles, ...initialArticles];

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
                {selectedArticle ? "Insight" : "Thought Leadership"}
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
                <>
                  TALENT <span className="text-maxera-red">IQ</span>
                </>
              )}
            </h1>

            {!selectedArticle && (
              <p className="text-white/60 text-lg md:text-xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
                Expert perspectives on recruitment, workforce strategy, and
                industry evolution.
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
                {allArticles.length === 0 ? (
                  <div className="p-20 border-2 border-dashed border-zinc-100 text-center rounded-2xl">
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">
                      No insights published yet.
                    </p>
                  </div>
                ) : (
                  allArticles.map((article, idx) => (
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
                        <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden shadow-xl bg-zinc-100">
                          {article.image || article.coverImage ? (
                            <Image
                              src={article.image || article.coverImage}
                              alt={article.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <Calendar className="w-12 h-12 text-zinc-300" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </div>
                        <div className="md:col-span-3">
                          <div className="flex items-center gap-4 text-[10px] font-black text-maxera-red uppercase tracking-widest mb-4">
                            <span suppressHydrationWarning>
                              {new Date(article.createdAt).toDateString()}
                            </span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span>{article.readTime || "8 Min Read"}</span>
                          </div>
                          <h3 className="text-3xl font-heading font-black text-maxera-dark mb-4 group-hover:text-maxera-red transition-colors uppercase tracking-tight leading-none">
                            {article.title}
                          </h3>
                          <p className="text-gray-500 font-medium mb-6 line-clamp-2">
                            {article.summary ||
                              article.excerpt ||
                              "Read our latest analysis on this industry topic."}
                          </p>
                          <span className="inline-flex items-center text-maxera-dark font-black text-[11px] uppercase tracking-widest group-hover:text-maxera-red transition-all">
                            Read Analysis{" "}
                            <ArrowRight
                              size={14}
                              className="ml-2 group-hover:translate-x-2 transition-transform"
                            />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              <aside className="lg:col-span-4 space-y-12">
                <div className="bg-maxera-gray p-10 border-t-8 border-maxera-red">
                  <h4 className="text-2xl font-black text-maxera-dark mb-4 uppercase tracking-tighter">
                    The Brief
                  </h4>
                  <p className="text-sm text-gray-500 font-medium mb-8 leading-relaxed">
                    Monthly executive summaries on global labor market shifts
                    and strategic hiring trends.
                  </p>
                  <button className="w-full bg-maxera-dark text-white py-4 font-black uppercase tracking-widest text-[10px] hover:bg-maxera-red transition-all">
                    Get The Report
                  </button>
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
                {(selectedArticle.image || selectedArticle.coverImage) && (
                  <div className="relative aspect-[21/9] mb-12 overflow-hidden shadow-2xl">
                    <Image
                      src={selectedArticle.image || selectedArticle.coverImage}
                      alt={selectedArticle.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-6 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12 pb-8 border-b border-gray-100">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-maxera-red" />{" "}
                    {selectedArticle.readTime || "8 Min Read"}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-2 text-maxera-red" />{" "}
                    {selectedArticle.author || "Maxera Admin"}
                  </div>
                  <div className="flex items-center" suppressHydrationWarning>
                    <Calendar size={14} className="mr-2 text-maxera-red" />{" "}
                    {new Date(selectedArticle.createdAt).toDateString()}
                  </div>
                </div>

                {typeof selectedArticle.content === "string" ? (
                  <div
                    className="prose prose-xl prose-gray max-w-none prose-p:text-gray-500 prose-p:leading-relaxed prose-strong:text-maxera-dark prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter whitespace-normal"
                    dangerouslySetInnerHTML={{
                      __html: selectedArticle.content,
                    }}
                  />
                ) : (
                  <div className="prose prose-xl prose-gray max-w-none prose-p:text-gray-500 prose-p:leading-relaxed prose-strong:text-maxera-dark prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
                    {selectedArticle.content}
                  </div>
                )}

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
                    <h4 className="text-xl font-black mb-6 uppercase tracking-tight relative z-10 leading-tight">
                      Need a Strategic Talent Audit?
                    </h4>
                    <p className="text-white/60 text-sm mb-8 font-medium leading-relaxed relative z-10">
                      Let us analyze your current hiring playbook and identify
                      the gaps in your 2026 talent strategy.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-maxera-red text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all relative z-10 shadow-lg"
                    >
                      Consult Our Experts{" "}
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
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
