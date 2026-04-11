"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, BarChart4, Send, ClipboardList, Search, Users2, UserCheck, Calendar, Award } from "lucide-react";

type EmployerForm = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

export default function Employers() {
  const { register, handleSubmit, formState: { errors } } = useForm<EmployerForm>();

  const onSubmit = (data: EmployerForm) => {
    console.log(data);
    alert("Hiring request transmitted successfully!");
  };

  const steps = [
    { icon: Search, title: "Understand", desc: "client requirements" },
    { icon: Users2, title: "Source", desc: "candidates" },
    { icon: UserCheck, title: "Screen", desc: "candidates" },
    { icon: Calendar, title: "Coordinate", desc: "interviews" },
    { icon: Award, title: "Successful", desc: "placement" }
  ];

  const benefits = [
    { icon: Zap, title: "72-Hour Rapid Response", desc: "Access top-tier profiles within days of engagement." },
    { icon: ShieldCheck, title: "90-Day Placement Guarantee", desc: "Risk-free hiring with a fallback replacement policy." },
    { icon: BarChart4, title: "Market-Driven Intelligence", desc: "Salary benchmarking and competency mapping reports." }
  ];

  return (
    <div className="bg-white min-h-screen pb-40">
      {/* Dynamic Header */}
      <section className="bg-maxera-dark py-40 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-1/2 h-full bg-maxera-red opacity-10 skew-x-[-30deg] scale-125"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-heading font-black text-white mb-6 uppercase tracking-tighter"
          >
             SCALE YOUR <br /> <span className="text-maxera-red">ORGANIZATION</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">Convert talent gaps into institutional growth with our precision hiring unit.</p>
        </div>
      </section>

      {/* Hiring Process Explanation */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 md:px-12">
         <div className="mb-20">
            <span className="text-maxera-red font-black text-xs tracking-[0.4em] uppercase mb-4 block">Institutional Framework</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark uppercase tracking-tighter leading-none">
               THE MAXERA <br /> <span className="opacity-20 italic">PRECISION PROCESS</span>
            </h2>
         </div>
         
         <div className="grid md:grid-cols-5 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                 <div className="text-6xl font-black text-gray-50 mb-8">{idx + 1}</div>
                 <div className="flex items-center space-x-4 mb-4">
                    <step.icon size={28} className="text-maxera-red" />
                    <h4 className="text-xl font-black text-maxera-dark uppercase tracking-tight">{step.title}</h4>
                 </div>
                 <p className="text-gray-400 font-bold uppercase text-[11px] tracking-widest">{step.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Benefits Content & Form */}
      <section className="py-32 bg-maxera-gray">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 grid lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-16 tracking-tighter uppercase leading-none">
               PARTNER BENEFITS <br /> <span className="text-gray-300">UNMATCHED RESULTS.</span>
            </h2>
            
            <div className="space-y-12 mb-20">
               {benefits.map((benefit, idx) => (
                 <div key={idx} className="flex group bg-white p-10 shadow-soft border-l-8 border-transparent hover:border-maxera-red transition-all">
                    <div className="mr-8 pt-1 text-maxera-red"><benefit.icon size={36} /></div>
                    <div>
                       <h4 className="text-2xl font-black text-maxera-dark mb-3 uppercase tracking-tight">{benefit.title}</h4>
                       <p className="text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-maxera-red p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-2 bg-maxera-dark"></div>
               <div className="flex items-center mb-6">
                  <ClipboardList className="mr-6 opacity-40 shrink-0" size={56} />
                  <p className="text-xl font-bold italic leading-tight uppercase tracking-tight">Access pre-vetted specialists across technology, healthcare, and engineering sectors.</p>
               </div>
            </div>
          </div>

          {/* Hiring Request Form */}
          <div className="lg:col-span-5">
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white p-12 lg:p-16 shadow-hover border border-gray-100 relative"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-maxera-red"></div>
              <h2 className="text-3xl font-heading font-black text-maxera-dark mb-4 tracking-tighter uppercase">Initiate Search</h2>
              <p className="text-gray-400 font-medium mb-12 uppercase tracking-wide text-xs">Transmit your hiring requirements below.</p>
              
              <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">First Name</label>
                    <input {...register("firstName", { required: true })} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="First Name" />
                    {errors.firstName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Last Name</label>
                    <input {...register("lastName", { required: true })} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="Last Name" />
                    {errors.lastName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Company Name</label>
                  <input {...register("company", { required: true })} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="Institution" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Business Email</label>
                  <input {...register("email", { required: true })} type="email" className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Role</label>
                  <input {...register("role", { required: true })} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="Senior Product Manager" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Brief Context</label>
                  <textarea {...register("message", { required: true })} rows={4} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold resize-none" placeholder="Requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-maxera-red text-white py-8 font-black flex items-center justify-center group hover:bg-maxera-dark transition-all shadow-2xl relative overflow-hidden">
                  <span className="flex items-center uppercase tracking-widest text-[14px]">
                    Initiate Profile Sourcing <Send className="ml-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
