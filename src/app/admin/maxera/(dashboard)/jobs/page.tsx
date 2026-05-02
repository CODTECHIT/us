"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  MapPin, 
  Clock,
  Loader2,
  ExternalLink,
  Copy,
  Check,
  Eye,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import DeleteJobButton from '@/components/admin/DeleteJobButton';

export default function JobManager() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      if (res.ok) {
        const data = await res.json();
        setJobs(data);
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCopyLink = (slug: string, id: string) => {
    const url = `${window.location.origin}/jobs/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    setOpenMenuId(null);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter italic">
            Job <span className="text-blue-600">Postings</span>
          </h1>
          <div className="h-1 w-20 bg-blue-600 mt-2" />
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 font-medium">Manage your active recruitment mandates and talent pipeline.</p>
        </div>
        <Link 
          href="/admin/maxera/jobs/new" 
          className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl transition-all font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 shadow-xl"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" /> Post New Job
        </Link>
      </div>

      {/* Search & Filter Bar */}
      <div className="relative group">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors" />
        <input 
          type="text" 
          placeholder="Search by title, location, or industry..."
          className="w-full pl-16 pr-6 py-6 rounded-3xl border-none bg-white dark:bg-zinc-900 shadow-2xl shadow-zinc-200/50 dark:shadow-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-zinc-900 dark:text-white text-lg placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Main Jobs Table Container */}
      <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden">
        {isLoading ? (
          <div className="p-32 flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-blue-100 dark:border-zinc-800 rounded-full" />
              <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-zinc-400 font-black uppercase tracking-[0.2em] text-xs">Synchronizing Data</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="p-32 text-center space-y-6">
            <div className="mx-auto w-24 h-24 bg-zinc-50 dark:bg-zinc-800/50 rounded-full flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-zinc-200" />
            </div>
            <div>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase">No Mandates Found</h3>
              <p className="text-zinc-500 mt-2 font-medium italic">Try adjusting your search or post a new job.</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Job Details</th>
                  <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-center">Applicants</th>
                  <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Status</th>
                  <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800/50">
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-all duration-300">
                    <td className="px-8 py-8">
                      <div>
                        <Link 
                          href={`/admin/maxera/jobs/edit/${job.id}`}
                          className="text-xl font-black text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors uppercase tracking-tight"
                        >
                          {job.title}
                        </Link>
                        <div className="flex items-center gap-6 mt-3">
                          <span className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5 text-blue-600" /> {job.location}
                          </span>
                          <span className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                            <Clock className="w-3.5 h-3.5" /> {new Date(job.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-8 text-center">
                      <div className="inline-flex flex-col items-center bg-zinc-50 dark:bg-zinc-800/50 px-6 py-3 rounded-2xl border border-zinc-100 dark:border-zinc-700/50">
                        <span className="text-2xl font-black text-zinc-900 dark:text-white leading-none">{job._count?.applications || 0}</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-zinc-400 mt-1">Applicants</span>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        job.status === 'PUBLISHED' 
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400" 
                          : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${job.status === 'PUBLISHED' ? 'bg-emerald-500' : 'bg-zinc-400'}`} />
                        {job.status}
                      </div>
                    </td>
                    <td className="px-8 py-8 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <Link 
                          href={`/admin/maxera/jobs/edit/${job.id}`}
                          className="p-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all hover:shadow-lg border border-zinc-100 dark:border-zinc-700"
                          title="Edit Job"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        
                        <DeleteJobButton jobId={job.id} onSuccess={fetchJobs} />
                        
                        <div className="relative">
                          <button 
                            onClick={() => setOpenMenuId(openMenuId === job.id ? null : job.id)}
                            className={`p-3 rounded-xl transition-all border ${
                              openMenuId === job.id 
                                ? 'bg-zinc-900 text-white border-zinc-900 shadow-xl scale-110' 
                                : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white border-zinc-100 dark:border-zinc-700'
                            }`}
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>

                          {openMenuId === job.id && (
                            <>
                              <div className="fixed inset-0 z-30" onClick={() => setOpenMenuId(null)} />
                              <div className="absolute right-0 mt-4 w-64 bg-white dark:bg-zinc-900 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-zinc-100 dark:border-zinc-800 py-3 z-40 animate-in fade-in zoom-in slide-in-from-top-2 duration-300">
                                <Link 
                                  href={`/jobs/${job.slug}`}
                                  target="_blank"
                                  className="flex items-center gap-3 px-5 py-3 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-white transition-all"
                                >
                                  <Eye className="w-4 h-4" /> View Public Page
                                </Link>
                                <button 
                                  onClick={() => handleCopyLink(job.slug, job.id)}
                                  className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-white transition-all text-left"
                                >
                                  {copiedId === job.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                  {copiedId === job.id ? 'Copied to Clipboard!' : 'Copy Job Link'}
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function Briefcase(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
