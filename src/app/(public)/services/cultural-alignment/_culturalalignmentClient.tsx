"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CulturalAlignment() {
  const values = [
    { title: "Core Resonance", desc: "Aligning candidate values with your corporate mission." },
    { title: "Behavioral Synergy", desc: "Ensuring communication styles complement your existing team dynamics." },
    { title: "Long-term Retention", desc: "Reducing turnover by selecting for deep environmental fit." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-32 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Strategic Support
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              CULTURAL <br className="hidden md:block" /> ALIGNMENT
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Hiring for skills gets you a worker. Hiring for culture gets you a partner. We ensure high-performance harmony.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-maxera-gray p-12 lg:p-24 relative overflow-hidden">
             <Heart className="absolute top-8 left-8 text-maxera-red/5 w-64 h-64 -translate-x-1/2 -translate-y-1/2" />
             <div className="relative z-10">
                <h3 className="text-3xl font-black text-maxera-dark uppercase tracking-tight mb-8">Culture &gt; Skills</h3>
                <p className="text-xl text-maxera-text/70 leading-relaxed italic mb-12">
                   &quot;Skills can be taught. Alignment is innate. We focus on the intangible traits that turn a good hire into a cornerstone of your organization.&quot;
                </p>
                <div className="space-y-8">
                   {values.map((v, i) => (
                     <div key={i} className="flex gap-6 items-start">
                        <div className="shrink-0 w-12 h-12 bg-maxera-red text-white flex items-center justify-center">
                           <ShieldCheck size={20} />
                        </div>
                        <div>
                           <h4 className="font-black uppercase tracking-tight text-maxera-dark mb-2">{v.title}</h4>
                           <p className="text-sm text-maxera-text/60 leading-relaxed font-medium">{v.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
          
          <div>
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase leading-tight">
              Science-Backed <br /> Value Matching
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              We use advanced behavioral profiling and cultural audits to build a &quot;DNA Profile&quot; of your successful teams. This allows us to predict candidate success with unprecedented accuracy, looking past the CV to the human being underneath.
            </p>
            <div className="bg-maxera-dark p-8 text-white mb-10">
               <h4 className="text-sm font-black uppercase tracking-widest text-maxera-red mb-4">Implementation Pillars:</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Founder Alignment", "Core Value Mapping", "Team Dynamic Audit", "Onboarding Roadmap"].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                       <ChevronRight size={14} className="text-maxera-red" /> {p}
                    </div>
                  ))}
               </div>
            </div>
            <Link href="/contact" className="skew-btn bg-maxera-red px-12 py-5 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-xl">
               <span className="skew-content flex items-center">
                  Audit your culture <ArrowRight className="ml-3 w-4 h-4" />
               </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-32 bg-maxera-gray">
         <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
            <h2 className="text-3xl font-black uppercase tracking-widest text-maxera-dark/20 mb-16">The Impact of Alignment</h2>
            <div className="grid md:grid-cols-3 gap-12">
               <div>
                  <p className="text-7xl font-black text-maxera-red mb-4 tracking-tighter">-40%</p>
                  <p className="text-sm font-black uppercase tracking-widest text-maxera-dark">Turnover Rate</p>
               </div>
               <div>
                  <p className="text-7xl font-black text-maxera-red mb-4 tracking-tighter">+25%</p>
                  <p className="text-sm font-black uppercase tracking-widest text-maxera-dark">Team Productivity</p>
               </div>
               <div>
                  <p className="text-7xl font-black text-maxera-red mb-4 tracking-tighter">92%</p>
                  <p className="text-sm font-black uppercase tracking-widest text-maxera-dark">Employee Engagement</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
