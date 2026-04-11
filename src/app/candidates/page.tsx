"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Search, Briefcase, Rocket, Upload, Award, FileUser, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

type CandidateForm = {
  fullName: string;
  email: string;
  phone: string;
  sector: string;
  resume: any;
};

export default function Candidates() {
  const { register, handleSubmit, formState: { errors } } = useForm<CandidateForm>();

  const onSubmit = (data: CandidateForm) => {
    console.log(data);
    alert("Profile sync successful! Our specialists will reach out if there's a match.");
  };

  const guidanceSteps = [
    { icon: Search, title: "Optimize Profile", desc: "Ensure your CV highlights high-impact results and specialized skills." },
    { icon: Rocket, title: "Prepare Strategic", desc: "Success requires aligning your technical goals with our partner needs." },
    { icon: Award, title: "Executive Review", desc: "Our specialists provide pre-interview analysis and behavioral coaching." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="py-40 bg-maxera-red text-white relative overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-1/3 h-full bg-black/10 skew-x-[20deg] scale-125"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-heading font-black mb-6 uppercase tracking-tighter"
          >
            UNLEASH YOUR <br /> <span className="opacity-50 italic">EXECUTION</span>
          </motion.h1>
          <p className="text-white/80 text-xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">Catalyzing strategic career moves for high-performing professionals.</p>
        </div>
      </section>

      <section className="py-32 max-w-[1400px] mx-auto px-4 md:px-12 grid lg:grid-cols-12 gap-24 items-start">
        
        {/* Guidance Content */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-maxera-dark mb-16 tracking-tighter uppercase leading-none">
             CANDIDATE <br /> <span className="text-gray-300">GUIDANCE SYSTEM.</span>
          </h2>
          
          <div className="space-y-16 mb-24">
             {guidanceSteps.map((step, idx) => (
               <div key={idx} className="flex group bg-maxera-gray p-10 border-l-8 border-transparent hover:border-maxera-red transition-all">
                  <div className="mr-8 pt-1 text-maxera-red shrink-0 group-hover:scale-110 transition-transform"><step.icon size={36} /></div>
                  <div>
                     <h4 className="text-2xl font-black text-maxera-dark mb-3 uppercase tracking-tight">{step.title}</h4>
                     <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          <div className="bg-maxera-dark p-16 text-white text-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-2 bg-maxera-red"></div>
             <h3 className="text-3xl font-black mb-8 italic uppercase tracking-tight">Explore Professional Opportunities</h3>
             <Link href="/jobs" className="skew-btn bg-maxera-red px-14 py-6 inline-block text-white font-black uppercase tracking-widest hover:bg-white hover:text-maxera-red transition-all shadow-2xl">
                <span className="skew-content flex items-center">
                  LAUNCH JOB BOARD <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                </span>
             </Link>
          </div>
        </div>

        {/* Sync / Resume Form */}
        <div className="lg:col-span-5">
           <motion.div 
             whileHover={{ y: -5 }}
             className="bg-white p-12 lg:p-16 shadow-hover border border-gray-100 relative"
           >
              <div className="absolute top-0 left-0 w-2 h-full bg-maxera-red"></div>
              <h2 className="text-3xl font-heading font-black text-maxera-dark mb-4 tracking-tighter uppercase">Synchronize Profile</h2>
              <p className="text-gray-400 font-medium mb-12 uppercase tracking-wide text-xs">Transmit your credentials for exclusive placement.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Legal Name</label>
                    <input {...register("fullName", { required: true })} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="Full Name" />
                    {errors.fullName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Personal Email</label>
                    <input {...register("email", { required: true })} type="email" className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="email@address.com" />
                    {errors.email && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mobile Contact</label>
                    <input {...register("phone", { required: true })} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold" placeholder="+1 (555) 000-0000" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Sector</label>
                    <select {...register("sector", { required: true })} className="w-full bg-maxera-gray border-0 p-5 outline-none focus:ring-2 focus:ring-maxera-red transition font-bold appearance-none">
                       <option>Technology</option>
                       <option>Healthcare</option>
                       <option>Engineering</option>
                       <option>Finance</option>
                       <option>Operations</option>
                    </select>
                 </div>
                 <div className="py-12 border-4 border-dotted border-gray-100 flex flex-col items-center justify-center group hover:border-maxera-red transition-all cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-maxera-red/5 scale-150 rotate-12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <input {...register("resume", { required: true })} type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" required />
                    <Upload className="text-gray-200 group-hover:text-maxera-red transition-colors mb-6" size={56} />
                    <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest relative">Resume Upload</p>
                    <p className="text-[10px] text-gray-300 mt-2 uppercase relative">PDF, DOCX (Max 10MB)</p>
                 </div>
                 <button type="submit" className="w-full bg-maxera-red text-white py-8 font-black uppercase tracking-widest text-sm hover:bg-maxera-dark transition-all shadow-2xl relative overflow-hidden group">
                    <span className="flex items-center justify-center">
                       INITIATE PROFILE SYNC <Rocket size={20} className="ml-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                 </button>
              </form>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
