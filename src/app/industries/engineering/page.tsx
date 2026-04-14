"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, PenTool, Factory, HardHat, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function EngineeringSector() {
  const sectors = [
    { title: "Mechanical", desc: "Design, thermal systems, and robotics specialists." },
    { title: "Electrical", desc: "Power systems, circuit design, and instrumentation." },
    { title: "Civil & Infra", desc: "Structural, project management, and site engineering." },
    { title: "Manufacturing", desc: "Process optimization and industrial automation." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-48 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full text-[25vw] font-black text-black/5 whitespace-nowrap -translate-y-1/2 select-none pointer-events-none uppercase italic">
           BUILD BUILD BUILD
        </div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Industrial Expertise
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              ENGINEERING & <br className="hidden md:block" /> OPERATIONS
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Synthesizing innovation and structural integrity. We source the technical minds capable of designing the future of industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sectors.map((s, i) => (
                <div key={i} className="bg-maxera-gray p-10 group hover:bg-maxera-dark transition-all duration-500 border-l-8 border-maxera-red">
                   <h3 className="text-2xl font-black uppercase tracking-tight text-maxera-dark group-hover:text-white transition-colors mb-4">{s.title}</h3>
                   <p className="text-sm text-maxera-text/60 group-hover:text-white/40 transition-colors font-medium leading-relaxed">{s.desc}</p>
                </div>
              ))}
           </div>
           
           <div>
              <div className="w-16 h-1 bg-maxera-red mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">Complex Problems. <br /> Elegant Solutions.</h2>
              <p className="text-xl text-maxera-text/80 mb-10 leading-relaxed font-medium">
                 Engineering requires more than just CAD proficiency. It requires physical intuition and project leadership. Our candidates are vetted for their ability to deliver projects on time, within budget, and above safety standards.
              </p>
              <div className="space-y-4 mb-12">
                 {["Niche Specializations", "Safety-First Vetting", "Global Sourcing Reach"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-maxera-red" />
                       <span className="text-xs font-black uppercase tracking-widest text-maxera-dark">{item}</span>
                    </div>
                 ))}
              </div>
              <Link href="/contact" className="skew-btn bg-maxera-dark px-12 py-5 inline-block text-white font-black uppercase tracking-widest text-[13px] hover:bg-maxera-red transition-all shadow-xl">
                 <span className="skew-content flex items-center">
                    Initiate Engineering Search <ArrowRight className="ml-3 w-4 h-4" />
                 </span>
              </Link>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-maxera-gray py-40 text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-maxera-dark mb-10 italic shadow-white">Precision Search. Guaranteed Results.</h2>
            <Link href="/contact" className="skew-btn bg-maxera-red px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all">
               <span className="skew-content">Request Talent Benchmarking</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
