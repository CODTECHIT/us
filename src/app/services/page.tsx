"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, FileSignature as FileContract, Handshake, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceDetail = ({ icon: Icon, title, description, benefits, reverse, link }: any) => (
  <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-24 py-32 border-b border-gray-100 last:border-0 items-center`}>
    <Link href={link || "#"} className="lg:w-1/2 cursor-pointer group">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <div className="absolute top-4 left-4 w-full h-full border-2 border-maxera-red -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        <div className="w-full aspect-[16/10] bg-maxera-gray overflow-hidden flex items-center justify-center relative p-16 shadow-soft">
          <Icon size={160} className="text-maxera-red/[0.03] absolute" />
          <Icon size={80} className="text-maxera-red group-hover:scale-110 transition-transform duration-500" />
        </div>
      </motion.div>
    </Link>
    <div className="lg:w-1/2">
      <div className="w-16 h-1 bg-maxera-red mb-8"></div>
      <Link href={link || "#"}>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-8 tracking-tighter uppercase hover:text-maxera-red transition-colors inline-block cursor-pointer">
          {title}
        </h2>
      </Link>
      <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
        {description}
      </p>
      <ul className="space-y-6 mb-12">
        {benefits.map((benefit: string, idx: number) => (
          <li key={idx} className="flex items-start text-maxera-dark font-bold uppercase tracking-tight text-[15px] group">
            <span className="mr-4 w-6 h-6 bg-maxera-light text-maxera-red rounded flex items-center justify-center shrink-0 group-hover:bg-maxera-red group-hover:text-white transition-colors">
              <ChevronRight size={16} />
            </span>
            {benefit}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4">
        <Link href={link || "/contact"} className="skew-btn bg-maxera-dark px-12 py-5 inline-block text-white font-black uppercase tracking-widest text-[13px] hover:bg-maxera-red transition-all shadow-xl">
           <span className="skew-content flex items-center">
              Explore Detail <ArrowRight className="ml-3 w-4 h-4" />
           </span>
        </Link>
        <Link href="/contact" className="skew-btn border-2 border-maxera-dark px-12 py-5 inline-block text-maxera-dark font-black uppercase tracking-widest text-[13px] hover:bg-maxera-dark hover:text-white transition-all">
           <span className="skew-content flex items-center">
              Enquire Now
           </span>
        </Link>
      </div>
    </div>
  </div>
);

export default function Services() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-maxera-red py-32 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-black skew-x-[-20deg] translate-x-1/2 opacity-10"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading font-black text-white mb-6 tracking-tighter uppercase"
          >
            CORE CAPABILITIES
          </motion.h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">
            Scalable, precise, and results-oriented recruitment strategies designed to fuel your organization's growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 pb-24">
        <ServiceDetail 
          icon={Users}
          title="Contingent Recruitment"
          description="A zero-risk engagement model focused on high-speed delivery and quality placements. You only pay when the right talent is onboarded."
          benefits={[
            "Global talent sourcing networks",
            "Multi-stage bias-free screening",
            "Speed-to-hire optimization",
            "Sector-specific headhunting expertise"
          ]}
          link="/services/contingent-search"
        />
        <ServiceDetail 
          icon={FileContract}
          title="Contract Staffing"
          description="Agile workforce solutions to handle technical sprints, internal surges, or specialized project requirements with immediate expertise."
          benefits={[
            "Instant access to niche technical specialists",
            "Managed payroll and administrative burden",
            "Rapid onboarding and compliance management",
            "Scalable workforce flexibility"
          ]}
          reverse
          link="/services/contract-staffing"
        />
        <ServiceDetail 
          icon={Handshake}
          title="Direct Hire & Retained"
          description="High-consultative search methodology for executive appointments and critical foundational roles where long-term alignment is paramount."
          benefits={[
            "Comprehensive market mapping",
            "Deep cultural and behavioral analysis",
            "Exclusive access to passive leaders",
            "Extensive post-placement support"
          ]}
          link="/services/direct-hire-search"
        />
      </section>

      {/* Footer CTA */}
      <section className="bg-maxera-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-maxera-red/5 scale-150 rotate-12 blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl text-white font-black mb-10 tracking-tighter uppercase italic">Ready to redefine your team?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
             <Link href="/contact" className="skew-btn bg-white px-16 py-6 text-maxera-red font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
                <span className="skew-content">Initiate Partnership</span>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
