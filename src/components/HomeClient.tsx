"use client";

import React from "react";
import {
  ArrowRight,
  Search,
  Users2,
  UserCheck,
  Calendar,
  Award,
  Quote,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SpotlightCard from "@/components/animations/SpotlightCard";
import Aurora from "@/components/animations/Aurora";
import AnimatedContent from "@/components/animations/AnimatedContent";
import CountUp from "@/components/animations/CountUp";
import SplitText from "@/components/animations/SplitText";

/* ---- Service Card ---- */
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  idx: number;
}

const ServiceCard = ({
  title,
  description,
  href,
  image,
  idx,
}: ServiceCardProps) => (
  <AnimatedContent delay={idx * 0.1} direction="up" distance={30}>
    <Link href={href} className="block group h-full">
      <SpotlightCard className="bg-white border border-gray-100 flex flex-col items-start text-left group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full">
        <div className="w-full h-40 sm:h-48 bg-gray-100 overflow-hidden relative">
          <div className="absolute inset-0 bg-maxera-red opacity-0 group-hover:opacity-10 transition-opacity z-10" />
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-grow w-full">
          <h3 className="text-lg sm:text-xl font-heading font-black text-maxera-dark mb-3 sm:mb-4 uppercase tracking-tighter leading-tight group-hover:text-maxera-red transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-xs font-medium leading-relaxed mb-6 sm:mb-10 flex-grow">
            {description}
          </p>
          <div className="mt-auto">
            <div
              className="inline-flex items-center px-5 sm:px-6 py-2 border border-maxera-red text-maxera-red group-hover:bg-maxera-red group-hover:text-white transition-all text-[10px] sm:text-[11px] font-black uppercase tracking-widest"
              style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
            >
              Learn More <ArrowRight className="ml-2 w-3 h-3" />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Link>
  </AnimatedContent>
);

const CASE_STUDIES = [
  {
    company: "Team Fishel",
    tagline: "Filling Critical Field Roles",
    contact: "Timothy Rioux",
    challenge: "Hiring pipeline stalled for skilled electricians and field technicians, risking project delays.",
    approach: "Focused sourcing on trade-certified candidates with verified field experience.",
    outcome: "7 placements completed within deadline.",
    metrics: [
      { label: "placements", value: "7" },
      { label: "avg. time-to-fill", value: "19 days" },
      { label: "Zero mis-hires", value: "90 days" }
    ]
  },
  {
    company: "INTELITY",
    tagline: "Scaling Tech Team",
    contact: "Beza Worku",
    challenge: "Needed engineers who fit both technical stack and fast-paced culture.",
    approach: "Targeted SaaS-experienced candidates with strong communication and async collaboration skills.",
    outcome: "4 roles filled with strong retention.",
    metrics: [
      { label: "placements", value: "4" },
      { label: "faster hiring cycle", value: "38%" },
      { label: "6-month retention", value: "85%" }
    ]
  },
  {
    company: "Ness Digital Engineering",
    tagline: "Rapid Scaling",
    contact: "Sheju Sadasivan",
    challenge: "Urgent need for cloud and digital transformation engineers.",
    approach: "Activated pre-vetted talent network and handled screening + coordination.",
    outcome: "6 contractors deployed within 3 weeks.",
    metrics: [
      { label: "contractors onboarded", value: "6" },
      { label: "Shortlist in", value: "8 days" },
      { label: "delays", value: "Zero" }
    ]
  },
  {
    company: "World Wide Technology",
    tagline: "Enterprise Hiring",
    contact: "Shrijeet Nair",
    challenge: "Needed high-caliber engineers meeting strict enterprise standards.",
    approach: "Aligned sourcing with internal competency framework.",
    outcome: "8 roles filled successfully.",
    metrics: [
      { label: "placements", value: "8" },
      { label: "interview-to-offer", value: "36%" },
      { label: "pipeline maintained", value: "5-month" }
    ]
  },
  {
    company: "Nous Infosystems",
    tagline: "Bench Strength",
    contact: "Vishwak Shanan",
    challenge: "Managing bench utilization and project-based hiring pressure.",
    approach: "Provided pre-screened profiles aligned to upcoming needs.",
    outcome: "Improved readiness and reduced reactive hiring.",
    metrics: [
      { label: "profiles submitted", value: "22" },
      { label: "placements", value: "9" },
      { label: "avg. cycle", value: "11 days" }
    ]
  },
  {
    company: "McCormick’s Heating & Air Conditioning",
    tagline: "Technician Hiring",
    contact: "Garrett Johnson",
    challenge: "Difficulty sourcing certified HVAC technicians quickly.",
    approach: "Focused on local sourcing and job-ready candidates.",
    outcome: "4 technicians placed restoring service capacity.",
    metrics: [
      { label: "placements", value: "4" },
      { label: "avg. fill time", value: "16 days" },
      { label: "retention", value: "100%" }
    ]
  }
];

export default function HomeClient({
  cmsData,
  stats: liveStats,
  testimonials,
}: {
  cmsData: {
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  stats: {
    jobs: number;
    applications: number;
  };
  testimonials?: Array<{
    id: string;
    content: string;
    name: string;
    avatar?: string;
    position: string;
    company: string;
  }>;
}) {
  const stats = [
    { end: 15, suffix: "+", label: "Years of Excellence" },
    { end: liveStats.jobs || 250, suffix: "+", label: "Active Mandates" },
    { end: 98, suffix: "%", label: "Client Satisfaction" },
    {
      end: liveStats.applications || 12000,
      suffix: "+",
      label: "Candidates Managed",
    },
  ];

  const services = [
    {
      title: "Bulk / Volume Hiring",
      description:
        "Rapid workforce deployment for large-scale hiring needs across logistics, operations, and industrial roles.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      href: "/services/bulk-hiring",
    },
    {
      title: "IT Staffing",
      description:
        "Specialized hiring for technology professionals using targeted sourcing and technical screening.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      href: "/services/it-staffing",
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible solutions for short-term projects and immediate workforce requirements.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      href: "/services/contract-staffing",
    },
    {
      title: "Permanent Staffing",
      description:
        "End-to-end hiring support for full-time roles, ensuring long-term fit and skill alignment.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
      href: "/services/permanent-hiring",
    },
    {
      title: "Industrial Staffing",
      description:
        "Reliable workforce solutions for manufacturing and logistics sectors.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      href: "/services/industrial-staffing",
    },
    {
      title: "RPO Services",
      description:
        "Dedicated recruitment support acting as an extension of your team.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      href: "/services/rpo",
    },
    {
      title: "Passive Talent Sourcing",
      description:
        "Proactive engagement of top-tier candidates who are not actively job-seeking.",
      image: "/images/passive_sourcing.png",
      href: "/services/passive-sourcing",
    },
    {
      title: "Offshore Solutions",
      description:
        "Access skilled global talent pools to build remote or offshore teams efficiently.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      href: "/services/offshore-solutions",
    },
  ];

  const steps = [
    { icon: Search, title: "Understand", desc: "client requirements" },
    { icon: Users2, title: "Source", desc: "top candidates" },
    { icon: UserCheck, title: "Screen", desc: "& shortlist" },
    { icon: Calendar, title: "Coordinate", desc: "interviews" },
    { icon: Award, title: "Successful", desc: "placement" },
  ];

  return (
    <div className="bg-white page-transition">
      <Hero cmsData={cmsData} />

      {/* Stats Bar */}
      <section className="bg-maxera-dark py-8 md:py-10 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedContent key={i} delay={i * 0.1} direction="scale">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white count-glow tracking-tighter">
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={2.2}
                    />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-32 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="mb-10 sm:mb-16 md:mb-20 text-center">
            <AnimatedContent direction="up">
              <span className="text-maxera-red font-black text-xs tracking-[0.4em] uppercase mb-3 md:mb-4 block">
                What We Do
              </span>
            </AnimatedContent>
            <AnimatedContent direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-maxera-dark uppercase tracking-tighter leading-tight">
                <SplitText
                  text="Talent Solutions"
                  animationType="word"
                  staggerDelay={0.08}
                />
                <br />
                <span className="text-maxera-red">
                  <SplitText
                    text="Built For Growth"
                    animationType="word"
                    staggerDelay={0.08}
                    delay={0.2}
                  />
                </span>
              </h2>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="bg-maxera-dark py-12 sm:py-20 md:py-32 text-white relative overflow-hidden">
        <Aurora
          colorStops={["#C6093C", "#1a1a2e", "#C6093C44"]}
          amplitude={0.8}
          blend={0.4}
          speed={0.4}
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="mb-12 sm:mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <AnimatedContent direction="up">
              <span className="text-maxera-red font-black text-xs tracking-[0.4em] uppercase mb-4 block">
                Institutional Framework
              </span>
            </AnimatedContent>
            <AnimatedContent direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-6 md:mb-8">
                OUR HIRING <span className="opacity-40">PROCESS</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent direction="scale" delay={0.2}>
              <div className="w-16 md:w-24 h-1.5 md:h-2 bg-maxera-red mx-auto" />
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 relative">
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-white/10 z-0" />
            {steps.map((step, idx) => (
              <AnimatedContent
                key={idx}
                delay={idx * 0.1}
                direction="up"
                distance={30}
              >
                <div className="relative z-10 group text-center px-2 sm:px-4 md:px-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/5 group-hover:bg-maxera-red transition-all duration-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-10 border border-white/5 relative">
                    <div className="absolute -top-3 -left-3 text-2xl md:text-4xl font-black text-white/5">
                      0{idx + 1}
                    </div>
                    <step.icon
                      size={32}
                      className="text-white group-hover:scale-110 transition-transform md:hidden"
                    />
                    <step.icon
                      size={44}
                      className="text-white group-hover:scale-110 transition-transform hidden md:block"
                    />
                  </div>
                  <h4 className="text-sm sm:text-base md:text-xl font-black mb-1 md:mb-2 uppercase tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 font-bold uppercase text-[9px] sm:text-[10px] md:text-[11px] tracking-widest">
                    {step.desc}
                  </p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maxera Band */}
      <section className="bg-maxera-red py-8 sm:py-12 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <AnimatedContent direction="up" className="w-full md:w-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Why choose <br className="hidden sm:block" />
                Maxera Talent?
              </h3>
            </AnimatedContent>
            <AnimatedContent
              direction="up"
              delay={0.1}
              className="w-full md:w-auto"
            >
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 text-white/80">
                {[
                  "Speed",
                  "Reliability",
                  "Precision",
                  "Expertise",
                  "Flexibility",
                  "Quality",
                  "Transparency",
                  "Delivery",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedContent>
            <AnimatedContent
              direction="up"
              delay={0.2}
              className="w-full md:w-auto"
            >
              <Link
                href="/about"
                className="inline-block bg-white text-maxera-red font-black uppercase text-xs sm:text-sm tracking-widest px-8 sm:px-10 py-3 sm:py-4 hover:bg-maxera-dark hover:text-white transition-all"
                style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Our Story
              </Link>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-maxera-gray relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="mb-12 sm:mb-20 text-center">
            <AnimatedContent direction="up">
              <span className="text-maxera-red font-black text-xs tracking-[0.4em] uppercase mb-4 block">
                MaxEra Talent Client Success Stories
              </span>
            </AnimatedContent>
            <AnimatedContent direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-maxera-dark uppercase tracking-tighter leading-tight mb-4">
                What Our <span className="text-maxera-red">Partners</span> Say
              </h2>
            </AnimatedContent>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {CASE_STUDIES.map((study, idx) => (
              <AnimatedContent key={study.company} delay={idx * 0.1} direction="up" distance={30}>
                <div className="bg-white p-8 sm:p-10 border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-maxera-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-maxera-dark tracking-tighter uppercase leading-none group-hover:text-maxera-red transition-colors">
                      {study.company}
                    </h3>
                    <p className="text-maxera-red text-[11px] font-black uppercase tracking-[0.2em] mt-2">
                      {study.tagline}
                    </p>
                  </div>

                  <div className="space-y-6 mb-10 flex-grow">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-maxera-dark/40 block mb-1.5">Challenge</span>
                      <p className="text-zinc-700 text-sm font-semibold leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-maxera-dark/40 block mb-1.5">Approach</span>
                      <p className="text-zinc-700 text-sm font-semibold leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-maxera-dark/40 block mb-1.5">Outcome</span>
                      <p className="text-maxera-dark text-base font-black leading-relaxed italic border-l-4 border-maxera-red pl-4 py-1">{study.outcome}</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 bg-zinc-50/80 -mx-10 -mb-10 p-10 mt-auto">
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xl font-black text-maxera-dark tracking-tight">{metric.value}</div>
                          <div className="text-[9px] font-black uppercase tracking-widest text-zinc-500 leading-tight mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-zinc-200/50 flex items-center justify-between">
                      <div className="text-[10px] font-black text-maxera-dark/60 uppercase tracking-widest">
                        Executive Contact: <span className="text-maxera-dark">{study.contact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-32 sm:py-32 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #C6093C 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">
          <AnimatedContent direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-heading font-black text-maxera-dark mb-6 md:mb-10 tracking-tighter uppercase leading-none">
              READY TO <span className="text-gradient-animated">BUILD</span>
              <br />
              YOUR TEAM?
            </h2>
          </AnimatedContent>
          <AnimatedContent direction="up" delay={0.15}>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium mb-8 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4">
              Let&apos;s discuss your talent gaps and identify the specialists
              who will drive your company forward.
            </p>
          </AnimatedContent>
          <AnimatedContent direction="scale" delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                href="/employers"
                className="w-full sm:w-auto skew-btn bg-maxera-red px-10 sm:px-16 md:px-20 py-5 sm:py-6 md:py-8 text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-2xl shadow-maxera-red/30"
              >
                <span className="skew-content text-sm sm:text-base md:text-lg uppercase">
                  Hire Talent Today
                </span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto skew-btn border-2 border-maxera-dark px-10 sm:px-14 md:px-16 py-5 sm:py-6 md:py-8 text-maxera-dark font-black uppercase tracking-widest hover:bg-maxera-dark hover:text-white transition-all"
              >
                <span className="skew-content text-sm sm:text-base md:text-lg uppercase">
                  Contact Us
                </span>
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
}
