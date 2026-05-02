"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Activity, ShieldPlus, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HealthcareIndustry() {
  const specializations = [
    {
      title: "Technical Support",
      description: "Recruiting for diagnostics, lab tech, and specialized medical equipment operators.",
      icon: Activity
    },
    {
      title: "Nursing & Clinical",
      description: "Sourcing verified clinical staff for hospitals and specialized clinics.",
      icon: HeartPulse
    },
    {
      title: "Admin & Operations",
      description: "Finding managers and support staff for seamless healthcare facility operations.",
      icon: ShieldPlus
    },
    {
      title: "Patient Care",
      description: "Providing front-line support staff for healthcare and wellness centers.",
      icon: Users
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
              HEALTHCARE <br className="hidden md:block" /> OPERATIONS
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Staffing support for hospitals, clinics, and healthcare operations across technical and support roles.
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
              Precision for Care
            </h2>
            <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
              In healthcare, quality of talent directly impacts quality of care. We use rigorous vetting and role-fit analysis to ensure your facility is staffed by experts.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Verified technical and support staff",
                 "Stringent background and credential checks",
                 "Rapid staffing for urgent facility needs",
                 "Compliance with healthcare staffing standards"
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
          <h2 className="text-4xl md:text-6xl text-white font-black mb-12 tracking-tighter uppercase italic">Need specialized healthcare staffing?</h2>
          <Link href="/contact" className="skew-btn bg-maxera-dark px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all shadow-2xl">
            <span className="skew-content flex items-center">
               Initiate Search <ArrowRight className="ml-3 w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
