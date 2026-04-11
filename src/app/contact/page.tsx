"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import AnimatedContent from "@/components/animations/AnimatedContent";
import Aurora from "@/components/animations/Aurora";
import SplitText from "@/components/animations/SplitText";

type ContactForm = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    alert("Inquiry transmitted successfully!");
  };

  return (
    <div className="bg-white min-h-screen pb-16 sm:pb-24 md:pb-40 page-transition">
      {/* Header */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-10 sm:pb-14 md:pb-20 bg-maxera-red text-white relative overflow-hidden mb-10 sm:mb-16 md:mb-24">
        <Aurora colorStops={['#ff4d6d', '#C6093C', '#8B0000']} amplitude={1.0} blend={0.4} speed={0.3} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-[-30deg] translate-x-1/2" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-4 md:mb-6 uppercase tracking-tighter leading-[1.05]">
            <SplitText text="INITIATE" animationType="letter" staggerDelay={0.03} />
            {" "}
            <span className="opacity-50">
              <SplitText text="STRATEGIC" animationType="letter" staggerDelay={0.03} delay={0.35} />
            </span>
            {" "}
            <SplitText text="DIALOGUE" animationType="letter" staggerDelay={0.03} delay={0.7} />
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
            Direct communication channels for institutional and professional inquiries.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 lg:gap-20">

          {/* Info Side */}
          <AnimatedContent direction="up" className="lg:col-span-5">
            <div className="bg-maxera-dark text-white p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-maxera-red skew-x-[-20deg] translate-x-1/2 -translate-y-1/2 opacity-20" />

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black mb-8 sm:mb-10 md:mb-16 uppercase tracking-tighter">Reach Out</h3>

              <div className="space-y-8 sm:space-y-10 md:space-y-16">
                {[
                  { icon: Mail, label: "Official Communications", value: "contact@maxeratalent.com" },
                  { icon: Phone, label: "Direct Hotline", value: "+1 (800) 555-0199" },
                  { icon: MapPin, label: "Institutional HQ", value: "100 Business Parkway, NY 10001" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/5 flex items-center justify-center mr-5 md:mr-8 group-hover:bg-maxera-red transition-all duration-500 flex-shrink-0">
                      <Icon className="text-white" size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-gray-500 uppercase tracking-widest text-[10px] mb-1 sm:mb-2 md:mb-3">{label}</p>
                      <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight break-all">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 sm:mt-16 md:mt-32 pt-8 md:pt-16 border-t border-white/5">
                <p className="font-black uppercase tracking-[0.3em] text-xs text-maxera-red mb-5 md:mb-10">Strategic Networks</p>
                <div className="flex gap-4 sm:gap-6 md:gap-8">
                  {[
                    { Icon: "fa-linkedin-in", href: "#" },
                    { Icon: "fa-twitter", href: "#" },
                    { Icon: "fa-instagram", href: "#" },
                  ].map((social, idx) => (
                    <a key={idx} href={social.href} className="w-10 h-10 sm:w-12 sm:h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <i className={`fab ${social.Icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* Form Side */}
          <AnimatedContent direction="up" delay={0.15} className="lg:col-span-7">
            <div className="bg-maxera-gray p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative border-t-4 md:border-t-8 border-maxera-red">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-maxera-dark mb-6 sm:mb-8 md:mb-12 uppercase tracking-tighter">Inquiry Portal</h2>

              <form className="space-y-6 sm:space-y-8 md:space-y-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input
                      {...register("fullName", { required: true })}
                      className="w-full bg-white border-b-2 border-transparent focus:border-maxera-red px-4 sm:px-6 py-3 sm:py-5 outline-none transition font-bold text-sm"
                      placeholder="Your Name"
                    />
                    {errors.fullName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full bg-white border-b-2 border-transparent focus:border-maxera-red px-4 sm:px-6 py-3 sm:py-5 outline-none transition font-bold text-sm"
                      placeholder="email@address.com"
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Company / Institution</label>
                    <input
                      {...register("company", { required: true })}
                      className="w-full bg-white border-b-2 border-transparent focus:border-maxera-red px-4 sm:px-6 py-3 sm:py-5 outline-none transition font-bold text-sm"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      className="w-full bg-white border-b-2 border-transparent focus:border-maxera-red px-4 sm:px-6 py-3 sm:py-5 outline-none transition font-bold text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Detailed Context</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    className="w-full bg-white border-b-2 border-transparent focus:border-maxera-red px-4 sm:px-6 py-3 sm:py-5 outline-none transition font-bold resize-none text-sm"
                    placeholder="Message content..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-maxera-red text-white py-5 sm:py-6 md:py-8 font-black flex items-center justify-center group hover:bg-maxera-dark transition-all shadow-xl active:scale-95"
                >
                  <span className="flex items-center uppercase tracking-widest text-xs sm:text-sm transition-transform group-hover:scale-105">
                    TRANSMIT INQUIRY <Send className="ml-3 md:ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                  </span>
                </button>
              </form>

              <div className="mt-6 sm:mt-8 md:mt-12 p-5 sm:p-6 md:p-8 bg-white border border-gray-100 flex items-center justify-between">
                <p className="text-gray-400 font-black text-[9px] sm:text-[10px] uppercase tracking-widest leading-none">Response Window: &lt; 24 Hours</p>
                <MessageSquare className="text-maxera-red opacity-20 flex-shrink-0" size={20} />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
}
