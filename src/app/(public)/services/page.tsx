"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Settings,
  Layers,
  FileSignature as FileContract,
  ShieldCheck,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Search,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceDetailProps {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  reverse?: boolean;
  link?: string;
  image: string;
}

const ServiceDetail = ({
  icon: Icon,
  title,
  description,
  benefits,
  reverse,
  link,
  image,
}: ServiceDetailProps) => (
  <div
    className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 py-20 sm:py-24 lg:py-28 border-b border-gray-100 last:border-0 items-center`}
  >
    <Link href={link || "#"} className="w-full lg:w-1/2 cursor-pointer group">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute -top-3 -left-3 w-full h-full border border-maxera-red/50 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 hidden sm:block"></div>
        <div className="w-full aspect-[16/10] bg-maxera-gray overflow-hidden relative rounded-2xl shadow-[0_20px_45px_-25px_rgba(17,17,17,0.45)]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-maxera-dark/20 group-hover:bg-maxera-red/20 transition-colors duration-500" />
          <div className="absolute bottom-8 right-8 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-500 shadow-xl group-hover:bg-white group-hover:text-maxera-red">
            <Icon size={32} className="hidden sm:block" />
            <Icon size={24} className="sm:hidden" />
          </div>
        </div>
      </motion.div>
    </Link>
    <div className="w-full lg:w-1/2">
      <div className="w-16 h-1 bg-maxera-red mb-6 sm:mb-8"></div>
      <Link href={link || "#"}>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-5 sm:mb-6 tracking-tighter uppercase hover:text-maxera-red transition-colors inline-block cursor-pointer leading-tight max-w-3xl">
          {title}
        </h2>
      </Link>
      <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 leading-relaxed font-medium max-w-2xl">
        {description}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-9 sm:mb-12">
        {benefits.map((benefit: string, idx: number) => (
          <li
            key={idx}
            className="flex items-start text-maxera-dark font-bold uppercase tracking-tight text-xs sm:text-[13px] group"
          >
            <span className="mr-3 w-5 h-5 bg-maxera-light text-maxera-red rounded flex items-center justify-center shrink-0 group-hover:bg-maxera-red group-hover:text-white transition-colors">
              <ChevronRight size={14} />
            </span>
            {benefit}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4">
        <Link
          href={link || "/contact"}
          className="w-full sm:w-auto skew-btn bg-maxera-dark px-10 py-4 sm:px-12 sm:py-5 inline-block text-white font-black uppercase tracking-widest text-xs sm:text-[13px] hover:bg-maxera-red transition-all shadow-xl text-center"
        >
          <span className="skew-content flex items-center justify-center">
            Explore Detail <ArrowRight className="ml-3 w-4 h-4" />
          </span>
        </Link>
        <Link
          href="/contact"
          className="w-full sm:w-auto skew-btn border-2 border-maxera-dark px-10 py-4 sm:px-12 sm:py-5 inline-block text-maxera-dark font-black uppercase tracking-widest text-xs sm:text-[13px] hover:bg-maxera-dark hover:text-white transition-all text-center"
        >
          <span className="skew-content flex items-center justify-center">
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
      <section className="bg-maxera-red py-16 sm:py-20 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-black skew-x-[-20deg] translate-x-1/2 opacity-10"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-white mb-4 sm:mb-6 tracking-tighter uppercase max-w-4xl leading-[0.95]"
          >
            Services We Offer
          </motion.h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed italic border-l-4 border-white/20 pl-5 sm:pl-6">
            "Staffing solutions built for speed, scale, and precision"
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 pb-20 sm:pb-24 lg:pb-28">
        <ServiceDetail
          icon={Layers}
          title="Bulk / Volume Hiring"
          description="Rapid workforce deployment for large-scale hiring needs across logistics, operations, and industrial roles. Built for high-volume mandates with consistent delivery and fast turnaround."
          benefits={[
            "Rapid Workforce Deployment",
            "Logistics & Operations Focus",
            "Fast Turnaround",
            "Consistent High-Volume Delivery",
          ]}
          link="/services/bulk-hiring"
          image="/images/bulk_hiring_v2.jpeg"
        />
        <ServiceDetail
          icon={Code2}
          title="IT Staffing"
          description="Specialized hiring for developers, cloud, and technology professionals using targeted sourcing and technical screening to ensure role-fit and faster closures."
          benefits={[
            "Developer & Cloud Specialists",
            "Targeted Sourcing",
            "Technical Screening",
            "Fast Closure Rates",
          ]}
          reverse
          link="/services/it-staffing"
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceDetail
          icon={FileContract}
          title="Contract Staffing"
          description="Flexible staffing solutions for short-term projects and immediate workforce requirements, with pre-vetted candidates ready for quick deployment."
          benefits={[
            "Short-Term Project Support",
            "Pre-Vetted Candidates",
            "Immediate Deployment",
            "Flexible Workforce Scaling",
          ]}
          link="/services/contract-staffing"
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceDetail
          icon={ShieldCheck}
          title="Permanent Staffing (IT & Non-IT)"
          description="End-to-end hiring support for full-time roles, ensuring strong alignment between candidate skills, role expectations, and long-term fit."
          benefits={[
            "End-to-End Hiring Support",
            "Long-Term Fit Alignment",
            "Skill & Role Validation",
            "IT & Non-IT Expertise",
          ]}
          reverse
          link="/services/permanent-hiring"
          image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceDetail
          icon={Settings}
          title="Blue-Collar & Industrial Staffing"
          description="Reliable workforce solutions for construction, manufacturing, and logistics sectors, backed by ground-level sourcing and skill validation."
          benefits={[
            "Manufacturing & Construction",
            "Ground-Level Sourcing",
            "Skill Validation",
            "Reliable Workforce Delivery",
          ]}
          link="/services/industrial-staffing"
          image="/images/industrial_staffing_v2.jpeg"
        />
        <ServiceDetail
          icon={Briefcase}
          title="Recruitment Process Outsourcing (RPO)"
          description="Dedicated recruitment support acting as an extension of your team, managing ongoing hiring needs with structured pipelines and reporting."
          benefits={[
            "Team Extension Model",
            "Structured Pipelines",
            "Comprehensive Reporting",
            "Managed Ongoing Hiring",
          ]}
          reverse
          link="/services/rpo"
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceDetail
          icon={Search}
          title="Passive Talent Sourcing"
          description="Proactive engagement of high-quality candidates who are not actively job-seeking — expanding access to top-tier talent beyond traditional job boards."
          benefits={[
            "Targeted Market Mapping",
            "Direct Confidential Outreach",
            "Access to Non-Active Talent",
            "Reduced Time-to-Hire",
          ]}
          link="/services/passive-sourcing"
          image="/images/passive_sourcing.png"
        />
        <ServiceDetail
          icon={Globe}
          title="Offshore Talent Solutions"
          description="Access to skilled global talent pools to build remote or offshore teams — helping clients optimize costs while maintaining quality and scalability."
          benefits={[
            "Global Talent Access",
            "Cost Optimization",
            "Scalable Remote Teams",
            "24/7 Operational Support",
          ]}
          reverse
          link="/services/offshore-solutions"
          image="/images/offshore_solutions.png"
        />
      </section>

      {/* Footer CTA */}
      <section className="bg-maxera-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-maxera-red/5 scale-150 rotate-12 blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl text-white font-black mb-10 tracking-tighter uppercase italic">
            Ready to redefine your team?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link
              href="/contact"
              className="skew-btn bg-white px-16 py-6 text-maxera-red font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl"
            >
              <span className="skew-content">Initiate Partnership</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
