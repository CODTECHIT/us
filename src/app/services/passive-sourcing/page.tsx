"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Users, Target, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PassiveSourcing() {
  const features = [
    {
      title: "Market Mapping",
      description: "Comprehensive identification of top performers across your industry sector.",
      icon: Target
    },
    {
      title: "Confidential Outreach",
      description: "Discreet and professional engagement with highly qualified passive candidates.",
      icon: Users
    },
    {
      title: "Talent Benchmarking",
      description: "Comparing non-active talent against your role requirements for perfect alignment.",
      icon: Search
    },
    {
      title: "Proactive Engagement",
      description: "Building long-term relationships with talent before a role even opens.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-32 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 opacity-50">
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Precision Recruitment
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              PASSIVE <br className="hidden md:block" /> SOURCING
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Proactive engagement of high-quality candidates who are not actively job-seeking — expanding access to top-tier talent beyond traditional job boards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="bg-maxera-gray p-8 border-l-4 border-maxera-red transition-all hover:shadow-soft group">
                    <f.icon size={32} className="text-maxera-red mb-6 transition-transform group-hover:scale-110" />
                    <h3 className="font-black uppercase tracking-tight text-maxera-dark mb-3">{f.title}</h3>
                    <p className="text-sm text-maxera-text/60 leading-relaxed">{f.description}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">
              Access the Hidden 70%
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              Most of the best talent isn't looking for a job. We specialize in identifying these high-performers and presenting your opportunity in a way that resonates with their career goals.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Targeted identification of industry top-performers",
                 "Discreet and professional talent engagement",
                 "Proprietary talent mapping methodologies",
                 "Higher quality of hire and long-term retention"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center text-maxera-dark font-bold uppercase tracking-tight text-xs">
                    <CheckCircle2 size={14} className="text-maxera-red mr-3" />
                    {item}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="bg-maxera-dark py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-maxera-red/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl text-white font-black mb-12 tracking-tighter uppercase italic">Reach beyond the boards.</h2>
          <Link href="/contact" className="skew-btn bg-white px-16 py-6 inline-block text-maxera-red font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
            <span className="skew-content flex items-center">
               Start Talent Mapping <ArrowRight className="ml-3 w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
