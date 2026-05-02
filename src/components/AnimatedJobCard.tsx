'use client';

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

export const AnimatedJobCard = ({ title, slug, location, type, sector, description, idx }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
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
      <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl font-medium line-clamp-3">
        {description}
      </p>
    </div>
    <Link href={`/jobs/${slug}`} className="skew-btn flex-shrink-0 bg-maxera-dark text-white px-12 py-5 hover:bg-black transition-all group-hover:shadow-2xl flex items-center group/btn relative overflow-hidden">
      <span className="skew-content font-black uppercase tracking-widest text-[13px] flex items-center">
         INTENT TO APPLY <ArrowRight className="ml-3 group-hover/btn:translate-x-3 transition-transform" />
      </span>
    </Link>
  </motion.div>
);
