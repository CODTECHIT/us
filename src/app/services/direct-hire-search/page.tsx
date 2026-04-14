"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Award, ShieldCheck, Gem, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DirectHireSearch() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-maxera-red py-32 lg:py-48 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-black skew-x-[-20deg] translate-x-1/2 opacity-15"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
              Executive & Permanent
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              DIRECT HIRE <br className="hidden md:block" /> SEARCH
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              For foundational roles and long-term leadership. A high-consultative methodology built for permanent cultural alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-maxera-gray">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="w-16 h-1 bg-maxera-red mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase">
                Long-Term Assets, Not Just Placements
              </h2>
              <p className="text-xl text-maxera-text/80 mb-8 leading-relaxed">
                Direct hiring requires a deep understanding of not just skills, but the long-term trajectory of your organization. Our process goes beyond the resume to evaluate behavioral traits, leadership potential, and cultural resonance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10 mt-16 text-maxera-dark">
                 <div className="flex gap-4">
                    <Award className="text-maxera-red shrink-0" size={32} />
                    <div>
                       <h4 className="font-black uppercase tracking-tight mb-2">Exclusive Access</h4>
                       <p className="text-sm text-maxera-text/60">Reach passive candidates who aren't looking on job boards.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Gem className="text-maxera-red shrink-0" size={32} />
                    <div>
                       <h4 className="font-black uppercase tracking-tight mb-2">Quality Guarantee</h4>
                       <p className="text-sm text-maxera-text/60">Extended replacement guarantees for ultimate peace of mind.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <ShieldCheck className="text-maxera-red shrink-0" size={32} />
                    <div>
                       <h4 className="font-black uppercase tracking-tight mb-2">Deep Vetting</h4>
                       <p className="text-sm text-maxera-text/60">Comprehensive references and behavioral benchmarking.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Users className="text-maxera-red shrink-0" size={32} />
                    <div>
                       <h4 className="font-black uppercase tracking-tight mb-2">Brand Advocacy</h4>
                       <p className="text-sm text-maxera-text/60">We represent your employer brand with white-glove professionalism.</p>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="bg-white p-12 shadow-soft relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-2 bg-maxera-red h-full"></div>
               <h3 className="text-6xl font-black text-maxera-red/10 absolute top-4 right-8">100%</h3>
               <h4 className="text-2xl font-black text-maxera-dark uppercase tracking-tight mb-8 mt-12">The Search Metric</h4>
               <p className="text-maxera-text/70 mb-8 font-medium">We don't just fill seats. We curate leaders who contribute to your EBITDA and culture from day one.</p>
               <ul className="space-y-4">
                  {["Niche Industry Expertise", "Global Sourcing reach", "Rigorous Compliance", "Post-Placement Onboarding"].map((t, i) => (
                    <li key={i} className="flex items-center text-[11px] font-black uppercase tracking-widest text-maxera-dark border-b border-gray-100 pb-3">
                       <CheckCircle2 size={14} className="mr-3 text-maxera-red" /> {t}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <div className="inline-block px-12 py-1 bg-maxera-red text-white text-[10px] font-black uppercase tracking-[0.3em] mb-12">
            Secure Your Legacy
          </div>
          <h2 className="text-5xl md:text-8xl font-heading font-black text-maxera-dark mb-12 tracking-tighter uppercase">
            Identify your <br /> next leader.
          </h2>
          <Link href="/contact" className="skew-btn bg-maxera-dark px-20 py-7 inline-block text-white font-black uppercase tracking-[0.2em] hover:bg-maxera-red transition-all shadow-hover">
            <span className="skew-content flex items-center">
              Partner with MaxEra <ArrowRight className="ml-3 w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
