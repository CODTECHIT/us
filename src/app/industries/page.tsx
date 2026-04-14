"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 as LaptopCode, HeartPulse, BarChart, Settings, Briefcase, Network, ArrowRight } from "lucide-react";
import Link from "next/link";

const IndustryCard = ({ icon: Icon, title, description, skills, href }: any) => (
  <Link href={href || "/contact"} className="block group h-full">
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-12 shadow-soft hover:shadow-hover transition-all duration-500 flex flex-col h-full border-b-8 border-transparent group-hover:border-maxera-red h-full"
    >
      <div className="w-20 h-20 bg-maxera-gray group-hover:bg-maxera-red text-maxera-red group-hover:text-white rounded-2xl flex items-center justify-center transition-all duration-500 mb-10 shadow-sm">
        <Icon size={36} />
      </div>
      <h3 className="text-3xl font-heading font-black text-maxera-dark mb-6 tracking-tighter uppercase">{title}</h3>
      <p className="text-gray-500 font-medium mb-10 leading-relaxed text-lg">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-10">
        {skills.map((skill: string) => (
          <span key={skill} className="bg-maxera-light text-maxera-red text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter">
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-auto text-maxera-red font-black uppercase tracking-widest text-[12px] flex items-center">
         Explore Sector <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
      </div>
    </motion.div>
  </Link>
);

export default function Industries() {
  const sectors = [
    {
      icon: LaptopCode,
      title: "Technology",
      description: "From cloud architecture to cybersecurity, we place talent that drives digital transformation.",
      skills: ["Software", "Data Science", "Cybersecurity", "Product"],
      href: "/industries/technology"
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Clinical staff and healthcare administration professionals ensuring high-quality patient care.",
      skills: ["Clinical", "Admin", "Medical Billing", "Health IT"],
      href: "/industries/healthcare"
    },
    {
      icon: BarChart,
      title: "Finance",
      description: "Precision recruiting for accounting, risk management, and financial analysis.",
      skills: ["Accounting", "Analysis", "Compliance", "Audit"],
      href: "/industries/finance"
    },
    {
      icon: Settings,
      title: "Engineering",
      description: "Placing technically sound professionals who design, build, and innovate the industrial future.",
      skills: ["Mechanical", "Electrical", "Civil", "CAD"],
      href: "/industries/engineering"
    },
    {
      icon: Briefcase,
      title: "Business Ops",
      description: "The core personnel required to keep your business running smoothly, from HR to Supply Chain.",
      skills: ["HR", "Marketing", "Sales", "Logistics"],
      href: "/industries/business-ops"
    },
    {
      icon: Network,
      title: "Executive",
      description: "Identifying visionary leaders who can scale organizations and navigate complex markets.",
      skills: ["C-Suite", "Director", "Board", "Strategy"],
      href: "/industries/executive-search"
    }
  ];

  return (
    <div className="bg-white pb-32">
      {/* Page Header */}
      <section className="bg-maxera-dark py-32 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-maxera-red skew-x-[-30deg] translate-x-1/2 opacity-20"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-heading font-black text-white mb-6 uppercase tracking-tighter"
          >
            SECTORS OF <br /> <span className="text-maxera-red">EXPERTISE</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-3xl font-medium leading-relaxed">
            Our teams' deep domain knowledge allows us to accurately assess both technical skills and industry cultural fit.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sectors.map((sector, idx) => (
            <IndustryCard key={idx} {...sector} />
          ))}
        </div>
      </section>

      {/* Expertise CTA */}
      <section className="mt-40 max-w-[1100px] mx-auto bg-maxera-gray p-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-2 bg-maxera-red"></div>
        <h2 className="text-4xl font-black text-maxera-dark mb-8 tracking-tighter uppercase">Need a specialized skill set?</h2>
        <p className="text-gray-500 font-medium mb-12 text-xl max-w-2xl mx-auto leading-relaxed">Our methodology is designed to adapt to any niche requirement. Contact our strategic sourcing unit today.</p>
        <Link href="/contact" className="skew-btn bg-maxera-red px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-2xl">
           <span className="skew-content">Initiate Sourcing</span>
        </Link>
      </section>
    </div>
  );
}
