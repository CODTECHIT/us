"use client";

import React from "react";
import { motion } from "framer-motion";
import { Construction, HardHat, Compass, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ConstructionIndustry() {
  const specializations = [
    {
      title: "On-Site Support",
      description: "Recruiting technicians, electricians, and site supervisors for complex projects.",
      icon: HardHat
    },
    {
      title: "Engineering Roles",
      description: "Sourcing civil, structural, and electrical engineers for design and execution.",
      icon: Compass
    },
    {
      title: "Project Management",
      description: "Finding experienced coordinators who can navigate timelines and budgets.",
      icon: Briefcase
    },
    {
      title: "Technical Labor",
      description: "Verified workforce including welders, fitters, and specialized operators.",
      icon: Construction
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-dark py-32 lg:py-32 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-maxera-red skew-x-[-30deg] translate-x-1/2 opacity-20"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-maxera-red text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Sector Expertise
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              CONSTRUCTION & <br className="hidden md:block" /> ENGINEERING
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Providing on-site workforce including technicians, electricians, and project support roles for large-scale infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">
              Building the Future
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              Infrastructure and construction projects require a unique blend of technical expertise and reliable on-site labor. We provide both, ensuring project continuity and quality.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Technical and project support roles",
                 "Verified electricians and technicians",
                 "Experienced engineering professionals",
                 "Safety and compliance focus"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center text-maxera-dark font-bold uppercase tracking-tight text-xs">
                    <CheckCircle2 size={14} className="text-maxera-red mr-3" />
                    {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((s, i) => (
              <div key={i} className="bg-maxera-gray p-8 border-b-4 border-transparent hover:border-maxera-red transition-all hover:shadow-soft group">
                <s.icon size={32} className="text-maxera-red mb-6 transition-transform group-hover:scale-110" />
                <h3 className="font-black uppercase tracking-tight text-maxera-dark mb-3">{s.title}</h3>
                <p className="text-sm text-maxera-text/60 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maxera-red py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl text-white font-black mb-12 tracking-tighter uppercase italic">Need on-site technical support?</h2>
          <Link href="/contact" className="skew-btn bg-maxera-dark px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all shadow-2xl">
            <span className="skew-content flex items-center">
               Initiate Sourcing <ArrowRight className="ml-3 w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
