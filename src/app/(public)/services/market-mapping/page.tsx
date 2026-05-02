"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Compass, TrendingUp, Info, ArrowRight, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function MarketMapping() {
  const dataPoints = [
    { label: "Competitor Intel", icon: Compass },
    { label: "Talent Density", icon: Map },
    { label: "Salary Trends", icon: TrendingUp },
    { label: "Structure Insights", icon: Info }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-32 text-left relative overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Strategic Support
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              MARKET <br className="hidden md:block" /> MAPPING
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Unparalleled intelligence into your competitor&apos;s structure, talent pools, and organizational strategy. Knowledge is your competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">
              See the Invisible. <br /> Map the Future.
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              Market mapping is no longer a luxury; it is a necessity for proactive talent strategy. We provide a surgical view of where the best talent is hidden, how they are incentivized, and what it takes to bring them into your fold.
            </p>
            <Link href="/contact" className="group text-maxera-red font-black uppercase tracking-[0.2em] text-sm flex items-center gap-4 hover:gap-6 transition-all duration-300">
               Request sample Intelligence <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="space-y-12">
             <div className="grid grid-cols-2 gap-6">
                {dataPoints.map((p, i) => (
                  <div key={i} className="bg-maxera-gray p-8 aspect-square flex flex-col justify-end group hover:bg-maxera-dark transition-all duration-500">
                     <p.icon size={32} className="text-maxera-red mb-auto group-hover:scale-125 transition-transform" />
                     <h3 className="font-black uppercase tracking-tight text-maxera-dark group-hover:text-white transition-colors">{p.label}</h3>
                  </div>
                ))}
             </div>
             
             <div className="bg-maxera-dark p-12 text-white">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-8 underline decoration-maxera-red decoration-2">What you receive:</h3>
                <div className="space-y-6">
                   {[
                     "Organizational charts of key competitors",
                     "Detailed talent profiles of critical personnel",
                     "Regional density reports for specific skillsets",
                     "Compensation benchmarking for targeted roles"
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-4 items-start">
                        <CheckSquare className="text-maxera-red shrink-0" size={18} />
                        <p className="text-sm text-white/70 font-bold uppercase tracking-wide leading-snug">{item}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-maxera-red relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full text-[20vw] font-black text-white/5 whitespace-nowrap select-none pointer-events-none uppercase italic -translate-y-1/2">
           Intelligence Intelligence
        </div>
        <div className="max-w-[1400px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic">Stay Ahead of the Curve.</h2>
          <Link href="/contact" className="skew-btn bg-white px-16 py-6 inline-block text-maxera-red font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-2xl">
            <span className="skew-content">Configure Mapping Scope</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
