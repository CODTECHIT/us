"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Microscope, ClipboardCheck, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HealthcareSector() {
  const focuses = [
    { title: "Clinical Support", icon: HeartPulse },
    { title: "Biotech & Pharma", icon: Microscope },
    { title: "Health Administration", icon: ClipboardCheck },
    { title: "Digital Health IT", icon: Activity }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-48 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-black skew-x-[-20deg] translate-x-1/2 opacity-15"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Core Sector
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              HEALTHCARE & <br className="hidden md:block" /> LIFE SCIENCES
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Precision talent for a mission-critical industry. We bridge the gap between clinical excellence and specialized administrative support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 lg:pr-20">
             <div className="w-16 h-1 bg-maxera-red mb-8"></div>
             <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">Patient-Centric Talent Strategy.</h2>
             <p className="text-xl text-maxera-text/80 mb-10 leading-relaxed font-medium">
                In healthcare, the right hire is about more than just skills—it's about empathy, compliance, and the ability to operate under pressure. We source professionals who understand the gravity of their roles.
             </p>
             <ul className="space-y-6">
                {[
                  "HIPAA & Regulatory Compliance Expertise",
                  "Vetted Clinical and Admin Networks",
                  "Immediate Medical Staffing Solutions",
                  "Executive Healthcare Search Capability"
                ].map((t, i) => (
                  <li key={i} className="flex items-center gap-4 text-maxera-dark font-black uppercase tracking-tight text-sm">
                     <CheckCircle2 size={18} className="text-maxera-red" /> {t}
                  </li>
                ))}
             </ul>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
             {focuses.map((f, i) => (
               <div key={i} className="bg-maxera-gray p-8 aspect-square flex flex-col items-center justify-center text-center group hover:bg-maxera-dark transition-all duration-500">
                  <f.icon size={48} className="text-maxera-red mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-black uppercase tracking-tight text-maxera-dark group-hover:text-white transition-colors text-[13px]">{f.title}</h3>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maxera-dark py-32 text-center text-white relative">
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 italic underline decoration-maxera-red decoration-4">Enhance your care standards.</h2>
            <Link href="/contact" className="skew-btn bg-maxera-red px-16 py-6 inline-block font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all">
               <span className="skew-content flex items-center">
                  Consult Healthcare Specialists <ArrowRight className="ml-3 w-5 h-5" />
               </span>
            </Link>
         </div>
      </section>
    </div>
  );
}
