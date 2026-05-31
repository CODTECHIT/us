"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Briefcase, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ContractStaffing() {
  const features = [
    {
      title: "Agile Scalability",
      description: "Ramp up teams for specific projects or seasonal surges without long-term overhead.",
      icon: Zap
    },
    {
      title: "Immediate Access",
      description: "Vetted specialists ready to start within 48-72 hours for critical requirements.",
      icon: Clock
    },
    {
      title: "Full Compliance",
      description: "We handle payroll, benefits, insurance, and legal compliance across all jurisdictions.",
      icon: ShieldCheck
    },
    {
      title: "Niche Expertise",
      description: "Deep networks of high-end independent consultants and technical specialists.",
      icon: Briefcase
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
              Agile Workforce
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              CONTRACT <br className="hidden md:block" /> STAFFING
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Flexible staffing solutions for short-term projects and immediate workforce requirements, with pre-vetted candidates ready for quick deployment.
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
              The Modern Solution for Dynamic Projects
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              Traditional hiring cycles are often too slow for modern project timelines. MaxEra&apos;s Contract Staffing provides the speed and flexibility you need to execute complex initiatives without the permanent headcount pressure.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Vetted technical and project specialists",
                 "Integrated payroll management",
                 "Flexible duration (3-24+ months)",
                 "Contract-to-hire options available"
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
          <h2 className="text-4xl md:text-6xl text-white font-black mb-12 tracking-tighter uppercase italic">Need talent by next week?</h2>
          <Link href="/contact" className="skew-btn bg-white px-16 py-6 inline-block text-maxera-red font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
            <span className="skew-content flex items-center">
               View Available Contractors <ArrowRight className="ml-3 w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
