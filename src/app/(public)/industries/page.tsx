"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 as LaptopCode, Building2, Factory, HardHat, HeartPulse, ShoppingBag, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

interface IndustryCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
  href: string;
  image: string;
}

const IndustryCard = ({ icon: Icon, title, description, skills, href, image }: IndustryCardProps) => (
  <Link href={href || "/contact"} className="block group h-full">
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white shadow-soft hover:shadow-hover transition-all duration-500 flex flex-col h-full border-b-8 border-transparent group-hover:border-maxera-red h-full overflow-hidden"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-maxera-dark/40 group-hover:bg-maxera-red/40 transition-colors duration-500" />
        <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl flex items-center justify-center transition-all duration-500 shadow-xl group-hover:bg-white group-hover:text-maxera-red">
          <Icon size={28} />
        </div>
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-heading font-black text-maxera-dark mb-4 tracking-tighter uppercase leading-tight">{title}</h3>
        <p className="text-gray-500 font-medium mb-8 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {skills.map((skill: string) => (
            <span key={skill} className="bg-maxera-gray text-maxera-dark text-[10px] font-black px-3 py-1.5 rounded-sm uppercase tracking-tighter">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-auto text-maxera-red font-black uppercase tracking-widest text-[11px] flex items-center">
           Explore Sector <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </motion.div>
  </Link>
);

export default function Industries() {

  return (
    <div className="bg-white pb-32">
      {/* Page Header */}
      <section className="bg-maxera-dark py-32 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-maxera-red skew-x-[-30deg] translate-x-1/2 opacity-20"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-6 uppercase tracking-tighter"
          >
            Industries We Support
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-3xl font-medium leading-relaxed italic border-l-4 border-maxera-red pl-6">
            "Delivering talent across high-demand sectors with speed and precision"
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: LaptopCode,
              title: "Information Technology (IT)",
              description: "Hiring across software development, cloud, data, and infrastructure roles for startups, enterprises, and product companies.",
              skills: ["Software", "Cloud", "Data", "Infra"],
              href: "/industries/technology",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
            },
            {
              icon: Building2,
              title: "Logistics & Warehousing",
              description: "Supporting large-scale hiring for warehouse operations, supply chain, and distribution centers with fast deployment.",
              skills: ["Operations", "Supply Chain", "Warehouse", "Distribution"],
              href: "/industries/logistics",
              image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
            },
            {
              icon: Factory,
              title: "Manufacturing & Industrial",
              description: "Workforce solutions for production units, factories, and engineering operations with skilled and semi-skilled talent.",
              skills: ["Production", "Engineering", "Skilled Labor", "Operations"],
              href: "/industries/manufacturing",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
            },
            {
              icon: HardHat,
              title: "Construction & Engineering",
              description: "Providing on-site workforce including technicians, electricians, and project support roles.",
              skills: ["Technicians", "Electricians", "Site Support", "Project Management"],
              href: "/industries/construction",
              image: "/images/construction.jpeg"
            },
            {
              icon: HeartPulse,
              title: "Healthcare",
              description: "Staffing support for hospitals, clinics, and healthcare operations across technical and support roles.",
              skills: ["Technical", "Admin", "Nursing", "Diagnostics"],
              href: "/industries/healthcare",
              image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
            },
            {
              icon: ShoppingBag,
              title: "Retail & Hospitality",
              description: "Bulk hiring for store operations, customer service, and front-line workforce.",
              skills: ["Store Ops", "Customer Service", "Front-line", "Guest Relations"],
              href: "/industries/retail",
              image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
            },
            {
              icon: Truck,
              title: "Transportation & Drivers",
              description: "Sourcing drivers and logistics support staff for mobility and delivery operations.",
              skills: ["Commercial Drivers", "Mobility", "Last-mile", "Support"],
              href: "/industries/transportation",
              image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
            }
          ].map((sector, idx) => (
            <IndustryCard key={idx} {...sector} />
          ))}
        </div>
      </section>

      {/* Expertise CTA */}
      <section className="mt-40 max-w-[1100px] mx-auto bg-maxera-gray p-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-2 bg-maxera-red"></div>
        <h2 className="text-4xl font-black text-maxera-dark mb-8 tracking-tighter uppercase">Need a specialized skill set?</h2>
        <p className="text-gray-500 font-medium mb-12 text-xl max-w-2xl mx-auto leading-relaxed">Our methodology is designed to adapt to any niche requirement. Contact our strategic sourcing unit today.</p>
        <Link href="/contact" className="skew-btn bg-maxera-red px-16 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-2xl">
           <span className="skew-content">Initiate Sourcing</span>
        </Link>
      </section>
    </div>
  );
}
