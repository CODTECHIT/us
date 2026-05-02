import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { MapPin, Briefcase, Tag, Clock, Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";
import JobApplicationForm from "@/components/JobApplicationForm";

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job || job.status !== 'PUBLISHED') {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header / Breadcrumb */}
      <div className="bg-maxera-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <Link 
            href="/jobs" 
            className="flex items-center gap-2 text-gray-400 hover:text-maxera-red transition-colors mb-8 uppercase tracking-widest text-xs font-bold"
          >
            <ChevronLeft size={16} /> Back to Strategic Searches
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="bg-maxera-red text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">
                {job.industry}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter leading-none">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-400 uppercase tracking-widest pt-4">
                <span className="flex items-center gap-2"><MapPin size={18} className="text-maxera-red" /> {job.location}</span>
                <span className="flex items-center gap-2"><Briefcase size={18} className="text-maxera-red" /> {job.type.replace('_', ' ')}</span>
                <span className="flex items-center gap-2"><Calendar size={18} className="text-maxera-red" /> Posted {new Date(job.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="prose prose-lg max-w-none prose-zinc dark:prose-invert">
              <h2 className="text-2xl font-black uppercase tracking-tight text-maxera-dark mb-6 border-b-4 border-maxera-red w-fit pb-2">
                Executive Overview
              </h2>
              <div className="whitespace-pre-wrap text-gray-600 font-medium leading-relaxed text-lg">
                {job.description}
              </div>
            </section>
          </div>

          {/* Application Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-maxera-gray p-8 border-t-8 border-maxera-red shadow-2xl">
              <h3 className="text-xl font-black uppercase tracking-tight text-maxera-dark mb-2">Intent to Apply</h3>
              <p className="text-sm text-gray-500 font-medium mb-8">Synchronize your credentials for this specific mandate.</p>
              
              <JobApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
