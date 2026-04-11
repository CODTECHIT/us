"use client";

import React from "react";
import {
  Users, FileSignature, Handshake, ArrowRight,
  Search, Users2, UserCheck, Calendar, Award,
} from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import SpotlightCard from "@/components/animations/SpotlightCard";
import Aurora from "@/components/animations/Aurora";
import AnimatedContent from "@/components/animations/AnimatedContent";
import CountUp from "@/components/animations/CountUp";
import SplitText from "@/components/animations/SplitText";

/* ---- Service Card ---- */
const ServiceCard = ({ title, description, href, image, idx }: any) => (
  <AnimatedContent delay={idx * 0.1} direction="up" distance={30}>
    <SpotlightCard className="bg-white border border-gray-100 flex flex-col items-start text-left group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full">
      <div className="w-full h-40 sm:h-48 bg-gray-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-maxera-red opacity-0 group-hover:opacity-10 transition-opacity z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-grow w-full">
        <h3 className="text-lg sm:text-xl font-heading font-black text-maxera-dark mb-3 sm:mb-4 uppercase tracking-tighter leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-xs font-medium leading-relaxed mb-6 sm:mb-10 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            href={href}
            className="inline-flex items-center px-5 sm:px-6 py-2 border border-maxera-red text-maxera-red hover:bg-maxera-red hover:text-white transition-all text-[10px] sm:text-[11px] font-black uppercase tracking-widest"
            style={{ clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' }}
          >
            Learn More <ArrowRight className="ml-2 w-3 h-3" />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  </AnimatedContent>
);

const stats = [
  { end: 15, suffix: "+", label: "Years of Excellence" },
  { end: 2400, suffix: "+", label: "Successful Placements" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 300, suffix: "+", label: "Partner Companies" },
];

export default function Home() {
  const services = [
    {
      title: "Contingent Recruitment",
      description: "Our performance-based search model ensures zero upfront risk for your institution.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      href: "/services",
    },
    {
      title: "Contract Staffing",
      description: "Agile talent solutions for technical projects, seasonal surges, and specialized sprints.",
      image: "https://images.unsplash.com/photo-1600880212340-02d95638edb8?auto=format&fit=crop&q=80&w=800",
      href: "/services",
    },
    {
      title: "Direct Hire Search",
      description: "Strategic headhunting for permanent, foundational roles that drive long-term growth.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      href: "/services",
    },
    {
      title: "Executive Solutions",
      description: "Discreet assessment and placement of C-suite leadership and strategic visionaries.",
      image: "https://images.unsplash.com/photo-1519389403163-b2ad962c0427?auto=format&fit=crop&q=80&w=800",
      href: "/services",
    },
  ];

  const steps = [
    { icon: Search, title: "Understand", desc: "client requirements" },
    { icon: Users2, title: "Source", desc: "top candidates" },
    { icon: UserCheck, title: "Screen", desc: "& shortlist" },
    { icon: Calendar, title: "Coordinate", desc: "interviews" },
    { icon: Award, title: "Successful", desc: "placement" },
  ];

  return (
    <div className="bg-white page-transition">
      <Hero />

      {/* Stats Bar */}
      <section className="bg-maxera-dark py-10 md:py-14 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedContent key={i} delay={i * 0.1} direction="scale">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white count-glow tracking-tighter">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2.2} />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="mb-10 sm:mb-16 md:mb-20 text-center">
            <AnimatedContent direction="up">
              <span className="text-maxera-red font-black text-xs tracking-[0.4em] uppercase mb-3 md:mb-4 block">
                What We Do
              </span>
            </AnimatedContent>
            <AnimatedContent direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-maxera-dark uppercase tracking-tighter leading-tight">
                <SplitText text="Talent Solutions" animationType="word" staggerDelay={0.08} />
                <br />
                <span className="text-maxera-red">
                  <SplitText text="Built For Growth" animationType="word" staggerDelay={0.08} delay={0.2} />
                </span>
              </h2>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="bg-maxera-dark py-16 sm:py-24 md:py-32 text-white relative overflow-hidden">
        <Aurora colorStops={['#C6093C', '#1a1a2e', '#C6093C44']} amplitude={0.8} blend={0.4} speed={0.4} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="mb-12 sm:mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <AnimatedContent direction="up">
              <span className="text-maxera-red font-black text-xs tracking-[0.4em] uppercase mb-4 block">
                Institutional Framework
              </span>
            </AnimatedContent>
            <AnimatedContent direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-6 md:mb-8">
                OUR HIRING{" "}
                <span className="opacity-40">PROCESS</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent direction="scale" delay={0.2}>
              <div className="w-16 md:w-24 h-1.5 md:h-2 bg-maxera-red mx-auto" />
            </AnimatedContent>
          </div>

          {/* Steps — stack on mobile (3 col), 5 col on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 relative">
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-white/10 z-0" />
            {steps.map((step, idx) => (
              <AnimatedContent key={idx} delay={idx * 0.1} direction="up" distance={30}>
                <div className="relative z-10 group text-center px-2 sm:px-4 md:px-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/5 group-hover:bg-maxera-red transition-all duration-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-10 border border-white/5 relative">
                    <div className="absolute -top-3 -left-3 text-2xl md:text-4xl font-black text-white/5">
                      0{idx + 1}
                    </div>
                    <step.icon size={32} className="text-white group-hover:scale-110 transition-transform md:hidden" />
                    <step.icon size={44} className="text-white group-hover:scale-110 transition-transform hidden md:block" />
                  </div>
                  <h4 className="text-sm sm:text-base md:text-xl font-black mb-1 md:mb-2 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-gray-500 font-bold uppercase text-[9px] sm:text-[10px] md:text-[11px] tracking-widest">{step.desc}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maxera Band */}
      <section className="bg-maxera-red py-12 sm:py-16 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <AnimatedContent direction="up" className="w-full md:w-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Why choose <br className="hidden sm:block" />Maxera Talent?
              </h3>
            </AnimatedContent>
            <AnimatedContent direction="up" delay={0.1} className="w-full md:w-auto">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 text-white/80">
                {["Industry Expertise", "Zero Risk", "Speed", "Quality Guarantee", "Diverse Network"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedContent>
            <AnimatedContent direction="up" delay={0.2} className="w-full md:w-auto">
              <Link
                href="/about"
                className="inline-block bg-white text-maxera-red font-black uppercase text-xs sm:text-sm tracking-widest px-8 sm:px-10 py-3 sm:py-4 hover:bg-maxera-dark hover:text-white transition-all"
                style={{ clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' }}
              >
                Our Story
              </Link>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 sm:py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #C6093C 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">
          <AnimatedContent direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-heading font-black text-maxera-dark mb-6 md:mb-10 tracking-tighter uppercase leading-none">
              READY TO{" "}
              <span className="text-gradient-animated">BUILD</span>
              <br />
              YOUR TEAM?
            </h2>
          </AnimatedContent>
          <AnimatedContent direction="up" delay={0.15}>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium mb-8 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4">
              Let's discuss your talent gaps and identify the specialists who will drive your company forward.
            </p>
          </AnimatedContent>
          <AnimatedContent direction="scale" delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                href="/employers"
                className="w-full sm:w-auto skew-btn bg-maxera-red px-10 sm:px-16 md:px-20 py-5 sm:py-6 md:py-8 text-white font-black uppercase tracking-widest hover:bg-maxera-dark transition-all shadow-2xl shadow-maxera-red/30"
              >
                <span className="skew-content text-sm sm:text-base md:text-lg uppercase">Hire Talent Today</span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto skew-btn border-2 border-maxera-dark px-10 sm:px-14 md:px-16 py-5 sm:py-6 md:py-8 text-maxera-dark font-black uppercase tracking-widest hover:bg-maxera-dark hover:text-white transition-all"
              >
                <span className="skew-content text-sm sm:text-base md:text-lg uppercase">Contact Us</span>
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
}
