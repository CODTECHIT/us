"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Settings, Wrench, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ManufacturingIndustry() {
  const specializations = [
    {
      title: "Production Units",
      description: "Recruiting skilled labor for assembly lines and automated production environments.",
      icon: Factory
    },
    {
      title: "Technical Support",
      description: "Hiring for engineering maintenance and technical troubleshooting roles.",
      icon: Settings
    },
    {
      title: "Quality Control",
      description: "Providing talent for inspection, testing, and quality assurance workflows.",
      icon: ShieldAlert
    },
    {
      title: "Assembly & Machining",
      description: "Sourcing experienced technicians and machine operators for diverse sectors.",
      icon: Wrench
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
              MANUFACTURING & <br className="hidden md:block" /> INDUSTRIAL
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Workforce solutions for production units, factories, and engineering operations with skilled and semi-skilled talent.
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
              Fueling the Industrial Engine
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              We understand the critical nature of skilled labor in manufacturing. Our ground-level sourcing ensures a steady pipeline of vetted talent for production and assembly.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Verified skilled and semi-skilled labor",
                 "Engineering and technical support roles",
                 "Adherence to industrial safety standards",
                 "Fast turnaround for high-volume mandates"
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
          <h2 className="text-4xl md:text-6xl text-white font-black mb-12 tracking-tighter uppercase italic">Hire Industrial Talent Today</h2>
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
