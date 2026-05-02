import React from "react";
// @ts-ignore
import { motion } from "framer-motion";
import { MapPin, Briefcase, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { AnimatedJobCard } from "@/components/AnimatedJobCard";

export default async function Jobs() {
  // Fetch real jobs from the database
  const jobs = await prisma.job.findMany({
    where: {
      status: 'PUBLISHED'
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="bg-maxera-gray min-h-screen pb-40">
      {/* Banner */}
      <section className="bg-maxera-dark py-32 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-maxera-red opacity-10 blur-3xl scale-125"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
           <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-6 uppercase tracking-tighter">
             STRATEGIC <br /> <span className="text-maxera-red">SEARCHES</span>
           </h1>
           <p className="text-gray-400 text-xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">Active institutional placements & leadership searches.</p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="space-y-12">
          {jobs.length === 0 ? (
            <div className="bg-white p-20 text-center shadow-soft border-l-8 border-l-maxera-red">
               <h3 className="text-3xl font-heading font-black text-maxera-dark mb-4 uppercase tracking-tight">NO ACTIVE SEARCHES</h3>
               <p className="text-gray-500 font-medium">We are currently updating our strategic pipeline. Please check back shortly.</p>
            </div>
          ) : (
            jobs.map((job, idx) => (
              <AnimatedJobCard 
                key={job.id} 
                idx={idx} 
                title={job.title}
                slug={job.slug}
                location={job.location}
                type={job.type.replace('_', ' ')}
                sector={job.industry}
                description={job.description}
              />
            ))
          )}
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
