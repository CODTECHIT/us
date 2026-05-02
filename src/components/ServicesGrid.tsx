"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Code2,
  FileSignature as FileContract,
  ShieldCheck,
  Settings,
  Briefcase,
  Search,
  Globe,
} from "lucide-react";
import AnimatedContent from "@/components/animations/AnimatedContent";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  href: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  delay,
  href,
}: ServiceCardProps) => (
  <AnimatedContent delay={delay} direction="up" distance={20}>
    <div className="group h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-7 sm:p-8 lg:p-9 shadow-[0_1px_0_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-maxera-red/25 hover:shadow-[0_18px_45px_-24px_rgba(198,9,60,0.45)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-maxera-red/30 to-transparent" />

        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-maxera-light text-maxera-red flex items-center justify-center transition-colors duration-300 group-hover:bg-maxera-red group-hover:text-white">
            <Icon size={30} strokeWidth={1.6} />
          </div>

          <span className="pt-2 text-[10px] font-black uppercase tracking-[0.35em] text-slate-300">
            Service
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-xl sm:text-[1.35rem] lg:text-[1.45rem] font-black text-maxera-dark mb-3 uppercase tracking-tight leading-[1.08] group-hover:text-maxera-red transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          <p className="max-w-[26ch] text-slate-600 text-sm sm:text-[15px] leading-7 font-medium line-clamp-2">
            {description}
          </p>

          <div className="mt-8 pt-5 border-t border-slate-200/70">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-maxera-red font-black text-xs uppercase tracking-[0.28em] transition-all duration-300 group-hover:gap-3"
            >
              Learn More
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  </AnimatedContent>
);

export default function ServicesGrid() {
  const services: Array<Omit<ServiceCardProps, "delay">> = [
    {
      title: "Bulk / Volume Hiring",
      description:
        "Rapid workforce deployment for large-scale hiring needs across logistics, operations, and industrial roles.",
      icon: Layers,
      href: "/services/bulk-hiring",
    },
    {
      title: "IT Staffing",
      description:
        "Specialized hiring for technology professionals using targeted sourcing and technical screening.",
      icon: Code2,
      href: "/services/it-staffing",
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible solutions for short-term projects and immediate workforce requirements.",
      icon: FileContract,
      href: "/services/contract-staffing",
    },
    {
      title: "Permanent Staffing",
      description:
        "End-to-end hiring support for full-time roles, ensuring long-term fit and skill alignment.",
      icon: ShieldCheck,
      href: "/services/permanent-hiring",
    },
    {
      title: "Industrial Staffing",
      description:
        "Reliable workforce solutions for manufacturing and logistics sectors.",
      icon: Settings,
      href: "/services/industrial-staffing",
    },
    {
      title: "RPO Services",
      description:
        "Dedicated recruitment support acting as an extension of your team.",
      icon: Briefcase,
      href: "/services/rpo",
    },
    {
      title: "Passive Talent Sourcing",
      description:
        "Proactive engagement of high-quality candidates who are not actively job-seeking.",
      icon: Search,
      href: "/services/passive-sourcing",
    },
    {
      title: "Offshore Talent Solutions",
      description:
        "Access to skilled global talent pools to build remote or offshore teams efficiently.",
      icon: Globe,
      href: "/services/offshore-solutions",
    },
  ];

  return (
    <div className="w-full">
      {/* CSS Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 items-stretch">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} delay={idx * 0.08} />
        ))}
      </div>
    </div>
  );
}
