"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Lock, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TechnologySector() {
  const capabilities = [
    { title: "Software Engineering", desc: "Full-stack, frontend, backend and mobile specialists.", icon: Code2 },
    { title: "Data & AI", desc: "Data scientists, ML engineers, and analytics leaders.", icon: Cpu },
    { title: "Cybersecurity", desc: "Security architects, CISO-level talent, and SOC analysts.", icon: Lock },
    { title: "Product & Design", desc: "Product managers and UX/UI visionaries.", icon: Rocket }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-dark py-32 lg:py-48 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-maxera-red skew-x-[-20deg] translate-x-1/2 opacity-30"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-maxera-red text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Core Sector
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              TECHNOLOGY & <br className="hidden md:block" /> INNOVATION
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Powering digital transformation through elite technical talent. From startups to Fortune 500s, we bridge the gap between complex needs and high-end engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">
              The Digital <br /> Frontier.
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              In an era of rapid disruption, the difference between success and obsolescence is the quality of your technical core. We specialize in identifying the top 3% of talent capable of writing the next chapter of your digital story.
            </p>
            <div className="space-y-6">
               {["Proprietary Technical Vetting", "Global Talent Network", "Deep Engineering Domain Knowledge", "Immediate Delivery Capabilities"].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-maxera-dark font-black uppercase tracking-tight text-sm">
                    <CheckCircle2 size={18} className="text-maxera-red" /> {item}
                 </div>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {capabilities.map((c, i) => (
               <div key={i} className="bg-maxera-gray p-10 border-b-4 border-transparent hover:border-maxera-red transition-all group">
                  <c.icon size={32} className="text-maxera-red mb-6 transition-transform group-hover:scale-110" />
                  <h3 className="font-black uppercase tracking-tight text-maxera-dark mb-4 text-xl">{c.title}</h3>
                  <p className="text-sm text-maxera-text/60 leading-relaxed font-medium">{c.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maxera-red py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none text-[30vw] font-black text-white whitespace-nowrap -translate-y-1/2">
           TECH TECH TECH
        </div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
           <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic">Scale your engineering team.</h2>
           <Link href="/contact" className="skew-btn bg-maxera-dark px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all shadow-2xl">
              <span className="skew-content flex items-center">
                 Request Tech Talent Audit <ArrowRight className="ml-3 w-5 h-5" />
              </span>
           </Link>
        </div>
      </section>
    </div>
  );
}
