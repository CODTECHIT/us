"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Tag, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const JobCard = ({ title, location, type, sector, description, idx }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: idx * 0.1 }}
    whileHover={{ x: 10 }}
    className="bg-white p-12 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-l-8 border-l-maxera-red group"
  >
    <div className="flex-grow">
      <div className="flex items-center gap-4 mb-6">
        <span className="bg-maxera-red text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">
           Hot Search
        </span>
        <div className="h-4 w-[1px] bg-gray-200"></div>
        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Verified Placement</span>
      </div>
      <h3 className="text-3xl font-heading font-black text-maxera-dark mb-6 group-hover:text-maxera-red transition-colors uppercase tracking-tight">{title}</h3>
      <div className="flex flex-wrap gap-10 text-[11px] font-black text-gray-400 uppercase tracking-widest mb-8">
        <span className="flex items-center"><MapPin className="text-maxera-red mr-3" size={16} /> {location}</span>
        <span className="flex items-center"><Briefcase className="text-maxera-red mr-3" size={16} /> {type}</span>
        <span className="flex items-center"><Tag className="text-maxera-red mr-3" size={16} /> {sector}</span>
      </div>
      <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl font-medium">
        {description}
      </p>
    </div>
    <Link href="/candidates" className="skew-btn flex-shrink-0 bg-maxera-dark text-white px-12 py-5 hover:bg-black transition-all group-hover:shadow-2xl flex items-center group/btn relative overflow-hidden">
      <span className="skew-content font-black uppercase tracking-widest text-[13px] flex items-center">
         INTENT TO APPLY <ArrowRight className="ml-3 group-hover/btn:translate-x-3 transition-transform" />
      </span>
    </Link>
  </motion.div>
);

export default function Jobs() {
  const jobs = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote (US/EU)",
      type: "Direct Hire",
      sector: "Technology",
      description: "Leadership role within a high-growth fintech disruptor. Lead architecture for multi-region cloud deployments."
    },
    {
      title: "M&A Strategic Controller",
      location: "Chicago, IL",
      type: "Retained Search",
      sector: "Finance",
      description: "Driving post-merger integration for a Fortune 500 manufacturing titan. CPA and 10+ years M&A required."
    },
    {
      title: "Senior Clinical Lead",
      location: "Boston, MA",
      type: "Contract (18 Mo)",
      sector: "Healthcare",
      description: "Manage high-priority Phase III immunotherapy trials with global regulatory repercussions."
    },
    {
      title: "Principal R&D Engineer",
      location: "Austin, TX",
      type: "Direct Hire",
      sector: "Engineering",
      description: "Next-gen materials development for renewable energy storage systems. PhD preferred."
    }
  ];

  return (
    <div className="bg-maxera-gray min-h-screen pb-40">
      {/* Banner */}
      <section className="bg-maxera-dark py-32 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-maxera-red opacity-10 blur-3xl scale-125"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-6 uppercase tracking-tighter"
           >
             STRATEGIC <br /> <span className="text-maxera-red">SEARCHES</span>
           </motion.h1>
           <p className="text-gray-400 text-xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">Active institutional placements & leadership searches.</p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <JobCard key={idx} idx={idx} {...job} />
          ))}
        </div>

        <div className="mt-32 p-16 bg-white shadow-soft text-center group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-maxera-red"></div>
            <h4 className="text-3xl font-heading font-black text-maxera-dark mb-6 uppercase tracking-tight">CAN'T FIND A MATCH?</h4>
            <p className="text-gray-500 font-medium mb-12 max-w-xl mx-auto leading-relaxed">Our most critical and confidential roles are not listed publicly. Synchronize your profile with our talent unit for priority matching.</p>
            <Link href="/candidates" className="skew-btn bg-maxera-red px-14 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-2xl">
                <span className="skew-content">JOIN PRIVATE NETWORK</span>
            </Link>
        </div>
      </div>
    </div>
  );
}
