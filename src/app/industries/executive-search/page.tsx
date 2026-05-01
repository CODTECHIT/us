"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, Crown, TrendingUp, Flag, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ExecutiveSector() {
  const pillars = [
    { title: "C-Suite", icon: Crown, desc: "CEO, CFO, CTO, and COO appointments." },
    { title: "Board Advisory", icon: Flag, desc: "Building high-performance boards for scale." },
    { title: "Strategic Leads", icon: TrendingUp, desc: "VPs and Directors of mission-critical units." },
    { title: "Global Headhunting", icon: Network, desc: "Discreet identification of passive leaders." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-32 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 opacity-50">
           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Foundational Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              EXECUTIVE <br className="hidden md:block" /> SEARCH
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Identifying the visionary leadership required to navigate complex global markets and drive long-term institutional value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pillars.map((p, i) => (
                <div key={i} className="group cursor-default">
                   <div className="w-16 h-16 bg-maxera-gray flex items-center justify-center mb-6 group-hover:bg-maxera-red group-hover:text-white transition-all duration-500 rounded-full">
                      <p.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tight text-maxera-dark mb-4">{p.title}</h3>
                   <p className="text-sm text-maxera-text/60 font-medium leading-relaxed">{p.desc}</p>
                </div>
              ))}
           </div>
           
           <div className="bg-maxera-dark p-12 lg:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-maxera-red/20 -mr-16 -mt-16 rounded-full"></div>
              <div className="w-16 h-1 bg-maxera-red mb-8"></div>
              <h2 className="text-4xl font-heading font-black mb-8 tracking-tighter uppercase leading-tight">Elite Performance. <br /> Absolute Discretion.</h2>
              <p className="text-white/60 mb-8 font-medium leading-relaxed">
                 Executive search is not about databases. It is about relationships. We maintain an exclusive circle of passive talent—proven leaders who are not on the open market but are ready for the right challenge.
              </p>
              <div className="space-y-6 mb-12">
                 {[
                   "Confidential Market Mapping",
                   "Psychometric & Behavioral Benchmarking",
                   "Post-Placement Integration Support"
                 ].map((t, i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <CheckCircle2 size={18} className="text-maxera-red" />
                       <span className="text-xs font-black uppercase tracking-[0.2em]">{t}</span>
                    </div>
                 ))}
              </div>
              <Link href="/contact" className="skew-btn bg-white px-12 py-5 inline-block text-maxera-red font-black uppercase tracking-widest text-[13px] hover:bg-maxera-red hover:text-white transition-all">
                 <span className="skew-content">Initiate Protocol</span>
              </Link>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-maxera-red py-40 text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-10 italic">Secure your legacy leadership.</h2>
            <Link href="/contact" className="skew-btn bg-maxera-dark px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all">
               <span className="skew-content">Consult our Executive Unit</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
