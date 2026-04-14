"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart, Landmark, ShieldCheck, PieChart, ArrowRight, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function FinanceSector() {
  const roles = [
    { title: "Investment Banking", desc: "M&A, Equity Research, and Capital Markets specialists." },
    { title: "Risk & Compliance", desc: "Anti-money laundering, risk assessment, and regulatory experts." },
    { title: "Corporate Finance", desc: "CFOs, Controllers, and FP&A professionals." },
    { title: "Audit & Tax", desc: "Public accounting and internal audit leadership." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-dark py-32 lg:py-48 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-maxera-red skew-x-[-15deg] translate-x-1/2 opacity-20"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-maxera-red text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Core Sector
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              FINANCE & <br className="hidden md:block" /> ACCOUNTING
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Navigating complex fiscal landscapes with precision. We identify the analytical minds required to safeguard and grow your economic foundations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1">
              <div className="w-16 h-1 bg-maxera-red mb-8"></div>
              <h2 className="text-4xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">Analytical <br /> Excellence.</h2>
              <p className="text-maxera-text/70 mb-8 font-medium leading-relaxed">
                 The modern finance professional must be more than a number-cruncher. They must be strategic partners. Our vetting process evaluates both technical acumen and business strategy alignment.
              </p>
              <div className="space-y-4">
                 {["Quantitative Excellence", "Regulatory Fluency", "Strategic Resilience"].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-[10px] font-black text-maxera-red uppercase tracking-[0.2em]">
                      <div className="w-2 h-2 bg-maxera-red"></div> {item}
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {roles.map((role, i) => (
                <div key={i} className="bg-maxera-gray p-12 hover:bg-white hover:shadow-hover transition-all border border-transparent hover:border-gray-100 group">
                   <h3 className="text-2xl font-black uppercase tracking-tight text-maxera-dark mb-4">{role.title}</h3>
                   <p className="text-sm text-maxera-text/60 font-medium leading-relaxed mb-8">{role.desc}</p>
                   <div className="w-8 h-1 bg-maxera-red transition-all group-hover:w-full"></div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Methodology CTA */}
      <section className="py-32 bg-maxera-gray relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 text-center">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-maxera-dark mb-12">Precision is non-negotiable.</h2>
            <Link href="/contact" className="skew-btn bg-maxera-red px-20 py-7 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-hover">
               <span className="skew-content">Secure your fiscal talent</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
