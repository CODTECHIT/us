"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Settings, Car, ShieldAlert, ArrowRight, CheckCircle2, Gauge, Users } from "lucide-react";
import Link from "next/link";

export default function AutomotiveManufacturing() {
  const specializations = [
    {
      title: "Assembly Line Techs",
      description: "Skilled technicians for high-speed, precision-driven automotive assembly environments.",
      icon: Users
    },
    {
      title: "Quality Control",
      description: "Rigorous inspectors ensuring every part meets unforgiving automotive standards.",
      icon: ShieldAlert
    },
    {
      title: "CNC Operators",
      description: "Expert machinists specialized in tight-tolerance component manufacturing.",
      icon: Settings
    },
    {
      title: "Production Supervisors",
      description: "Experienced leaders who understand manufacturing safety and floor efficiency.",
      icon: Gauge
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
              AUTOMOTIVE <br className="hidden md:block" /> MANUFACTURING
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              The automotive sector runs on precision — in its parts and its people. We deliver talent that understands the pace of production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-16 h-1 bg-maxera-red mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase leading-none">
              Precision Talent for <br /> <span className="text-maxera-red">Zero-Downtime</span> Operations
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              From assembly line technicians and quality control inspectors to CNC operators and production supervisors, the talent demands are constant and unforgiving. Downtime on the floor is never acceptable.
            </p>
            <p className="text-lg text-maxera-text/60 mb-8 leading-relaxed italic border-l-4 border-maxera-red pl-6">
              MaxEra Talent sources skilled trade and technical professionals who understand manufacturing environments, safety protocols, and the pace that automotive production demands.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Ramping for new model launches",
                 "Backfilling critical production roles",
                 "Skilled trade and technical specialists",
                 "Candidates ready to contribute from day one"
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
          <h2 className="text-4xl md:text-6xl text-white font-black mb-12 tracking-tighter uppercase italic">Fuel Your Production Line</h2>
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
