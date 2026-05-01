"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Target, Search } from "lucide-react";
import Link from "next/link";

export default function ContingentSearch() {
  const steps = [
    {
      title: "Need Analysis",
      description: "We dive deep into your requirements, company culture, and technical needs.",
      icon: Target
    },
    {
      title: "Market Sourcing",
      description: "Leveraging our global networks to find the top 5% of talent in your sector.",
      icon: Search
    },
    {
      title: "Rigorous Screening",
      description: "Multi-stage technical and behavioral interviews to ensure total alignment.",
      icon: CheckCircle2
    },
    {
      title: "Rapid Placement",
      description: "Quick turnaround for high-velocity hiring without compromising quality.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-32 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black skew-x-[-20deg] translate-x-1/2 opacity-10"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Recruitment Types
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              CONTINGENT <br className="hidden md:block" /> SEARCH
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              A results-driven, zero-risk engagement model focused on high-speed delivery and premium quality placements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">
              High-Velocity Talent Acquisition
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              Our contingent search model is designed for organizations that need to scale quickly without the upfront commitment of a retained search. We operate on a success-only basis, meaning our incentives are perfectly aligned with your goal: finding the right person, fast.
            </p>
            <p className="text-lg text-maxera-text/60 mb-10 leading-relaxed italic">
              Ideal for mid-to-senior management, specialized technical roles, and rapid-growth scaling phases.
            </p>
          </div>
          <div className="bg-maxera-gray p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-maxera-red/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-2xl font-black text-maxera-dark mb-8 uppercase tracking-tight">Key Advantages</h3>
            <ul className="space-y-6">
              {[
                "Zero risk - fee only on successful seat",
                "Access to vast proprietary database",
                "Speed-to-market advantage",
                "Rigorous bias-free vetting process"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-maxera-dark font-bold uppercase tracking-tight text-sm">
                  <div className="w-6 h-6 bg-maxera-red/10 text-maxera-red flex items-center justify-center mr-4 shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-maxera-dark py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 tracking-tighter uppercase">Our Methodology</h2>
            <div className="w-20 h-1 bg-maxera-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-maxera-red text-white flex items-center justify-center mb-6">
                  <step.icon size={24} />
                </div>
                <h3 className="text-white font-black uppercase tracking-tight mb-4 text-xl">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-maxera-dark mb-12 tracking-tighter uppercase italic underline decoration-maxera-red decoration-4 transition-all hover:decoration-8">
            Scale your team today.
          </h2>
          <Link href="/contact" className="skew-btn bg-maxera-red px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-2xl">
            <span className="skew-content flex items-center">
              Request a Talent Consultation <ArrowRight className="ml-3 w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
