"use client";

import React from "react";
import { Target, Eye, Shield, Zap, Heart, CheckCircle } from "lucide-react";
import AnimatedContent from "@/components/animations/AnimatedContent";
import SpotlightCard from "@/components/animations/SpotlightCard";
import SplitText from "@/components/animations/SplitText";
import Aurora from "@/components/animations/Aurora";
import BlurText from "@/components/animations/BlurText";

const ValueCard = ({ icon: Icon, title, description, delay }: any) => (
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
      <section className="pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-maxera-red relative overflow-hidden">
        <Aurora colorStops={['#ff4d6d', '#C6093C', '#8B0000']} amplitude={1.2} blend={0.5} speed={0.3} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black skew-x-[-20deg] translate-x-1/2 opacity-5" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black text-white mb-4 md:mb-6 uppercase tracking-tighter leading-[1.0]">
            <SplitText text="OUR LEGACY" animationType="letter" staggerDelay={0.04} />
          </h1>
          <BlurText
            text="Strategic talent partnership driven by a decades-long commitment to institutional excellence."
            delay={60}
            direction="bottom"
            animateBy="words"
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl font-medium"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
            <AnimatedContent direction="left">
              <span className="text-maxera-red font-bold text-sm tracking-[0.3em] uppercase mb-3 md:mb-4 block">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-maxera-dark mb-5 md:mb-8 leading-tight">
                Empowering businesses by <br className="hidden sm:block" /> bridging the talent gap
              </h2>
              <div className="space-y-4 md:space-y-6 text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
                <p>
                  Maxera Talent is a dedicated recruitment and staffing agency committed to bridging the gap between
                  exceptional professionals and industry-leading companies.
                </p>
                <p>
                  With years of market expertise, we understand that human capital is the most valuable asset of any
                  organization. We specialize in providing customized staffing solutions that align perfectly with our
                  clients' strategic goals.
                </p>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <AnimatedContent direction="up" delay={0.1}>
                <SpotlightCard className="bg-maxera-gray p-6 sm:p-8 md:p-10 border border-gray-100 h-full">
                  <Target className="text-maxera-red mb-4 md:mb-6" size={32} />
                  <h3 className="text-lg sm:text-xl font-bold text-maxera-dark mb-2 md:mb-3">Mission</h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    To empower businesses by connecting them with top-tier talent quickly and efficiently.
                  </p>
                </SpotlightCard>
              </AnimatedContent>
              <AnimatedContent direction="up" delay={0.2}>
                <SpotlightCard className="bg-maxera-dark p-6 sm:p-8 md:p-10 text-white mt-6 sm:mt-8 md:mt-12 h-full" spotlightColor="rgba(255,77,109,0.2)">
                  <Eye className="text-maxera-red mb-4 md:mb-6" size={32} />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Vision</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">
                    To be the most trusted and reliable staffing partner globally, recognized for integrity.
                  </p>
                </SpotlightCard>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-maxera-gray">
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
    </div>
  );
}
