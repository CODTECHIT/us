"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";

const Hero = () => {
  return (
    <div className="relative bg-white pt-32 md:pt-48 lg:pt-60 pb-16 md:pb-24 overflow-hidden min-h-[100svh] flex flex-col items-center justify-center text-center">

      {/* Animated gradient orbs — hidden on small screens for perf */}
      <motion.div
        className="hidden sm:block absolute top-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,9,60,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-[10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,9,60,0.06) 0%, transparent 70%)" }}
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />


      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-maxera-red border border-maxera-red/30 bg-maxera-red/5 px-3 sm:px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-maxera-red animate-pulse inline-block" />
            Strategic Talent &amp; Digital Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-6 md:mb-8 overflow-hidden px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-maxera-dark leading-[1.05] tracking-tight">
            <SplitText
              text="Strategic talent partner"
              animationType="letter"
              staggerDelay={0.025}
              delay={0.1}
            />
            <br />
            <SplitText
              text="& digital solutions"
              animationType="letter"
              staggerDelay={0.025}
              delay={0.5}
            />
          </h1>
        </div>

        {/* Subtext */}
        <div className="mb-8 md:mb-14 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-2">
          <BlurText
            text="Experts in professional recruitment, talent management, and digital strategy. Over 15 years helping companies build world-class teams."
            delay={60}
            direction="bottom"
            animateBy="words"
            className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-medium justify-center"
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto"
        >
          <button className="magnetic-btn relative group w-full sm:w-auto">
            <div
              className="bg-maxera-red px-8 sm:px-14 py-4 transition-all group-hover:bg-maxera-dark shadow-xl shadow-maxera-red/20"
              style={{ clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' }}
            >
              <span className="text-white font-bold text-xs sm:text-[13px] tracking-wide block">
                Hire Top Talent
              </span>
            </div>
          </button>

          <motion.button
            className="text-maxera-dark text-xs sm:text-sm font-black tracking-widest uppercase flex items-center gap-2 hover:text-maxera-red transition-colors group"
            whileHover={{ x: 4 }}
          >
            View Our Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 md:mt-20 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "2,400+", label: "Placements Made" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl font-black text-maxera-dark tracking-tighter">{stat.value}</div>
              <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Row */}
        <motion.div
          className="mt-12 md:mt-24 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <p className="text-gray-400 text-[9px] sm:text-[10px] font-bold text-center mb-4 md:mb-6 uppercase tracking-[0.2em] md:tracking-[0.3em]">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-14 opacity-25 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-700">
            {["Intel", "Microsoft", "Fortinet", "Acronis", "Seagate", "APC"].map((brand, i) => (
              <motion.span
                key={brand}
                className="text-gray-900 font-black text-sm sm:text-base md:text-lg uppercase tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 + i * 0.08 }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="mt-10 md:mt-16 text-gray-400 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-maxera-red" />
          </motion.div>
          <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] mt-2 opacity-50">Scroll to explore</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
