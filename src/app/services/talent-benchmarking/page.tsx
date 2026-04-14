"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, BarChart3, Target, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TalentBenchmarking() {
  const tiers = [
    {
      name: "Skill Audit",
      items: ["Technical proficiency", "Domain expertise", "Tooling familiarity", "Architectural depth"]
    },
    {
      name: "Leadership Audit",
      items: ["Strategic vision", "Team management", "Stakeholder relations", "Change agency"]
    },
    {
      name: "Behavioral Audit",
      items: ["Problem-solving grit", "EQ and communication", "Adaptability score", "Growth mindset"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-48 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Strategic Support
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              TALENT <br className="hidden md:block" /> BENCHMARKING
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Objective, data-backed assessment of your current team versus the global market standard. Know exactly where your team stands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">
              The Gold Standard of Evaluation
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              Are your high-performers truly at the top of their field globally? Our benchmarking service uses proprietary data and psychological assessments to measure your talent against industry leaders, ensuring you have the right people to win.
            </p>
            <ul className="space-y-4">
               {["Gap Analysis", "Succession Planning", "Hiring Calibration", "Merger & Acquisition Audits"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-maxera-dark font-black uppercase tracking-widest text-[11px]">
                    <div className="w-1.5 h-1.5 bg-maxera-red"></div> {item}
                 </li>
               ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-maxera-dark p-12 relative overflow-hidden">
                <BarChart3 className="absolute bottom-4 right-4 text-white/5 w-48 h-48 -rotate-12" />
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4 italic">Data-Driven Clarity</h3>
                <p className="text-white/60 leading-relaxed mb-8">Move from gut-feeling evaluations to quantifiable talent scores based on global performance metrics.</p>
                <div className="flex gap-4">
                   <div className="text-center">
                      <p className="text-3xl font-black text-maxera-red">94%</p>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Accuracy Rate</p>
                   </div>
                   <div className="w-[1px] h-12 bg-white/10"></div>
                   <div className="text-center">
                      <p className="text-3xl font-black text-maxera-red">2k+</p>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Data Points</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           {tiers.map((tier, i) => (
             <div key={i} className="p-8 border-t-8 border-maxera-red bg-maxera-gray transition-transform hover:-translate-y-2">
                <h4 className="text-xl font-black text-maxera-dark uppercase tracking-tight mb-8 underline decoration-maxera-red decoration-2">{tier.name}</h4>
                <ul className="space-y-6">
                   {tier.items.map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-maxera-red shrink-0" />
                        <span className="text-sm font-bold text-maxera-text/70 uppercase tracking-wide leading-none">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-maxera-dark py-32 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-maxera-red/10 scale-150 rotate-45 blur-[120px]"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 italic">Audit your team's potential.</h2>
            <Link href="/contact" className="skew-btn bg-maxera-red px-16 py-6 inline-block font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all">
               <span className="skew-content flex items-center">
                  Start Benchmarking Project <ArrowRight className="ml-3 w-5 h-5" />
               </span>
            </Link>
         </div>
      </section>
    </div>
  );
}
