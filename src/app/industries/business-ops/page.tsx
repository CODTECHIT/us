"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users2, Truck, Megaphone, ArrowRight, CheckCircle2, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function BusinessOpsSector() {
  const categories = [
    { title: "Human Resources", icon: Users2, desc: "Chief People Officers, HRBPs, and Talent specialist." },
    { title: "Supply Chain", icon: Truck, desc: "Logistics, procurement, and operations leaders." },
    { title: "Sales & Marketing", icon: Megaphone, desc: "Growth officers, brand managers, and sales directors." },
    { title: "Office Admin", icon: LayoutGrid, desc: "Executive assistants and operations managers." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-dark py-32 lg:py-48 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-maxera-red skew-x-[-20deg] translate-x-1/2 opacity-20"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-maxera-red text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Industrial Expertise
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              BUSINESS <br className="hidden md:block" /> OPERATIONS
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              The engine of your organization. We source the essential personnel required to keep your business running with maximum efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <div className="w-16 h-1 bg-maxera-red mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase leading-tight">Effortless <br /> Execution.</h2>
              <p className="text-xl text-maxera-text/80 mb-10 leading-relaxed font-medium">
                 Operational excellence is built on reliability and adaptability. Our screening process evaluates the "soft skills" that are hard to find—problem-solving, stakeholder management, and resilience.
              </p>
              <div className="bg-maxera-gray p-8 border-l-4 border-maxera-red">
                 <h4 className="font-black uppercase tracking-tight text-maxera-dark mb-4">Core Focus Areas:</h4>
                 <div className="grid grid-cols-2 gap-y-4">
                    {["Talent Management", "Process Optimization", "Revenue Growth", "Global Logistics"].map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-black uppercase text-maxera-dark/60 tracking-widest">
                         <div className="w-1.5 h-1.5 bg-maxera-red"></div> {t}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="grid sm:grid-cols-2 gap-6">
              {categories.map((c, i) => (
                <div key={i} className="bg-maxera-gray p-10 group hover:bg-maxera-red transition-all duration-500">
                   <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                      <c.icon size={24} className="text-maxera-red" />
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-tight text-maxera-dark group-hover:text-white transition-colors mb-4">{c.title}</h3>
                   <p className="text-xs text-maxera-text/60 group-hover:text-white/60 transition-colors font-medium leading-relaxed">{c.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-32 text-center relative border-y border-gray-100">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-maxera-dark mb-12 italic">Optimize your internal resources.</h2>
            <Link href="/contact" className="skew-btn bg-maxera-dark px-20 py-7 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-red transition-all shadow-hover">
               <span className="skew-content">Configure Hiring Strategy</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
