"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Read() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-maxera-red py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black skew-x-[-20deg] translate-x-1/2 opacity-5"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-white mb-6 uppercase tracking-tighter"
          >
            READ
          </motion.h1>
          <p className="text-white/80 text-xl max-w-2xl font-medium">
            Insights, thought leadership, and industry perspectives from our team of experts.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: item * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-maxera-gray"></div>
                <div className="p-8">
                  <span className="text-maxera-red font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Article</span>
                  <h3 className="text-xl font-heading font-bold text-maxera-dark mb-4 group-hover:text-maxera-red transition-colors">
                    The Future of Talent Acquisition in 2026
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
                    Exploring emerging trends and strategies that are reshaping how companies build their workforce.
                  </p>
                  <Link href="#" className="inline-flex items-center text-maxera-red font-bold text-sm tracking-wider hover:underline">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-maxera-dark">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="text-maxera-red mx-auto mb-8" size={48} />
          <h2 className="text-4xl font-heading font-extrabold text-white mb-6">Stay Informed</h2>
          <p className="text-gray-400 font-medium mb-10 text-lg">
            Subscribe to our newsletter for the latest insights in talent acquisition and staffing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-maxera-red"
            />
            <button className="bg-maxera-red text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-maxera-red transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
