"use client";

import React from "react";
import { Shield, Zap, Heart, CheckCircle, Code2, Settings, Layers, FileSignature as FileContract, ShieldCheck, Briefcase, Search, Globe } from "lucide-react";
import AnimatedContent from "@/components/animations/AnimatedContent";
import SpotlightCard from "@/components/animations/SpotlightCard";
import SplitText from "@/components/animations/SplitText";
import Aurora from "@/components/animations/Aurora";
import BlurText from "@/components/animations/BlurText";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const ValueCard = ({ icon: Icon, title, description, delay }: ValueCardProps) => (
  <AnimatedContent delay={delay} direction="up" distance={30}>
    <SpotlightCard className="bg-white p-6 sm:p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-maxera-light text-maxera-red flex items-center justify-center mb-5 sm:mb-6 md:mb-8">
        <Icon size={28} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-maxera-dark mb-2 sm:mb-3 md:mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-medium text-sm sm:text-base">{description}</p>
    </SpotlightCard>
  </AnimatedContent>
);

export default function About() {
  return (
    <div className="bg-white page-transition">
      {/* Page Header */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-32 md:pb-40 bg-maxera-dark relative overflow-hidden">
        {/* Deep background with Aurora effect */}
        <div className="absolute inset-0 bg-maxera-red">
          <Aurora colorStops={['#C6093C', '#8B0000', '#ff4d6d']} amplitude={1.0} blend={0.6} speed={0.2} />
        </div>
        
        {/* Subtle geometric overlay to match header style */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black skew-x-[-15deg] translate-x-1/4" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white mb-6 md:mb-8 uppercase tracking-tighter leading-[0.9]">
            <SplitText text="OUR STORY" animationType="letter" staggerDelay={0.05} />
          </h1>
          <div className="max-w-2xl">
            <BlurText
              text="Bridging talent with business outcomes through speed, precision, and reliability."
              delay={60}
              direction="bottom"
              animateBy="words"
              className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed"
            />
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-32 md:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            <div className="lg:col-span-7">
              <AnimatedContent direction="left">
                <span className="text-maxera-red font-bold text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 block">Our Story</span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-maxera-dark mb-6 md:mb-10 leading-[1.1] tracking-tighter">
                  Bridging talent with <br />
                  <span className="text-maxera-red">business outcomes</span>
                </h2>
                
                <div className="space-y-6 md:space-y-8 text-gray-500 font-medium text-base sm:text-lg md:text-xl leading-relaxed">
                  <p className="text-maxera-dark font-bold leading-tight border-l-4 border-maxera-red pl-6 py-2">
                    Maxera Talent is a recruitment and staffing partner built to solve one problem: finding the right people, fast, without compromising on quality.
                  </p>
                  
                  <p>
                    We specialize in delivering workforce solutions across blue-collar, industrial, logistics, and IT roles, 
                    supporting both high-volume hiring and niche requirements. Whether it’s scaling frontline teams or 
                    closing critical technical positions, we focus on speed, precision, and reliability.
                  </p>

                  <p>
                    What sets us apart is our execution. We don’t just source profiles—we understand role expectations, 
                    screen rigorously, and deliver candidates who are ready to contribute from day one.
                  </p>
                </div>
              </AnimatedContent>
            </div>

            <div className="lg:col-span-5 lg:pl-10">
              <AnimatedContent direction="right" delay={0.2}>
                <div className="bg-maxera-dark p-8 sm:p-10 md:p-12 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-maxera-red/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  
                  <h3 className="text-xl sm:text-2xl font-black mb-6 uppercase tracking-tight relative z-10 leading-tight">
                    With strong market intelligence and a structured recruitment approach, we help businesses:
                  </h3>
                  
                  <ul className="space-y-6 relative z-10">
                    {[
                      "Reduce time-to-hire",
                      "Improve candidate quality",
                      "Scale operations without hiring bottlenecks"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle className="text-maxera-red mt-1 shrink-0" size={20} />
                        <span className="font-bold text-gray-300 uppercase text-xs sm:text-sm tracking-wide">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <p className="text-sm sm:text-base text-gray-400 font-medium italic leading-relaxed">
                      &quot;At Maxera Talent, we operate as an extension of your team—aligned to your goals, responsive to your timelines, and accountable for results.&quot;
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="py-10 sm:py-32 md:py-32 bg-maxera-gray/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-maxera-red/20 to-transparent" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <AnimatedContent direction="left">
              <div className="bg-white p-8 sm:p-12 md:p-16 h-full border border-gray-100 shadow-xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-maxera-red/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <span className="text-maxera-red font-black text-xs tracking-[0.5em] uppercase mb-6 block">Our Mission</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-maxera-dark leading-[1.3] tracking-tighter">
                  &quot;To solve hiring challenges through <span className="text-maxera-red">fast, precise, and accountable</span> recruitment—delivering candidates who are vetted, relevant, and ready to contribute from day one.&quot;
                </h3>
              </div>
            </AnimatedContent>

            {/* Vision */}
            <AnimatedContent direction="right" delay={0.2}>
              <div className="bg-maxera-dark p-8 sm:p-12 md:p-16 h-full shadow-2xl relative overflow-hidden group">
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-maxera-red/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <span className="text-maxera-red font-black text-xs tracking-[0.5em] uppercase mb-6 block">Our Vision</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white leading-[1.3] tracking-tighter">
                  &quot;To become a trusted staffing partner for businesses seeking <span className="text-maxera-red">scalable, reliable, and high-impact</span> workforce solutions across industries.&quot;
                </h3>
              </div>
            </AnimatedContent>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-maxera-red/20 to-transparent" />
      </section>

      {/* Values Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-maxera-gray">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-20">
            <AnimatedContent direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-maxera-dark mb-3 md:mb-4">
                <SplitText text="Our Core Values" animationType="word" staggerDelay={0.1} />
              </h2>
            </AnimatedContent>
            <AnimatedContent direction="scale" delay={0.2}>
              <div className="w-16 md:w-20 h-1 md:h-1.5 bg-maxera-red mx-auto" />
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8">
            <ValueCard icon={Shield} title="Integrity" delay={0} description="We operate with complete transparency and honesty in all interactions." />
            <ValueCard icon={Zap} title="Speed & Precision" delay={0.1} description="We understand urgency, but never sacrifice quality for speed." />
            <ValueCard icon={Heart} title="Partnership" delay={0.2} description="We act as an extension of your team, not just a vendor." />
            <ValueCard icon={CheckCircle} title="Excellence" delay={0.3} description="We strive for perfection in our screening and placement processes." />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-10 sm:py-32 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 md:mb-24">
            <AnimatedContent direction="up">
              <span className="text-maxera-red font-black text-xs tracking-[0.4em] uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-maxera-dark uppercase tracking-tighter">
                Services We Offer
              </h2>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { title: "Bulk / Volume Hiring", icon: Layers, desc: "Rapid workforce deployment for large-scale hiring needs across logistics, operations, and industrial roles." },
              { title: "IT Staffing", icon: Code2, desc: "Specialized hiring for technology professionals using targeted sourcing and technical screening." },
              { title: "Contract Staffing", icon: FileContract, desc: "Flexible solutions for short-term projects and immediate workforce requirements." },
              { title: "Permanent Staffing", icon: ShieldCheck, desc: "End-to-end hiring support for full-time roles, ensuring long-term fit and skill alignment." },
              { title: "Industrial Staffing", icon: Settings, desc: "Reliable workforce solutions for manufacturing and logistics sectors." },
              { title: "RPO Services", icon: Briefcase, desc: "Dedicated recruitment support acting as an extension of your team." },
              { title: "Passive Talent Sourcing", icon: Search, desc: "Proactive engagement of high-quality candidates who are not actively job-seeking." },
              { title: "Offshore Talent Solutions", icon: Globe, desc: "Access to skilled global talent pools to build remote or offshore teams efficiently." },
            ].map((service, idx) => (
              <AnimatedContent key={idx} delay={idx * 0.1} direction="up" distance={20}>
                <div className="group p-8 sm:p-10 border border-gray-100 hover:border-maxera-red/20 hover:bg-maxera-gray/30 transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-maxera-light text-maxera-red flex items-center justify-center mb-6 group-hover:bg-maxera-red group-hover:text-white transition-colors duration-500">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-maxera-dark mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">{service.desc}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
