"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Loader2, Briefcase, MapPin, DollarSign, FileText } from 'lucide-react';
import Link from 'next/link';

export default function EditJobPage() {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    industry: '',
    type: 'FULL_TIME',
    salaryRange: '',
    description: '',
    status: 'DRAFT'
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setFormData(data);
        }
      } catch (error) {
        console.error('Failed to fetch job:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJob();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch(`/api/jobs/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        router.push('/admin/maxera/jobs');
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to update job:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/maxera/jobs"
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Listings
        </Link>
        <div className="flex items-center gap-3">
          <select 
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border-none outline-none ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all ${
              formData.status === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-600'
            }`}
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
          <button
            onClick={handleSubmit}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl transition-all font-bold shadow-lg shadow-blue-500/20"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSaving ? "Saving..." : "Update Job Posting"}
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
        <div className="p-8 space-y-8">
          <div>
            <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
              <Briefcase className="w-4 h-4 text-blue-600" /> Job Title
            </label>
            <input
              type="text"
              required
              className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 text-xl font-bold focus:ring-2 focus:ring-blue-600 transition-all"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4 text-blue-600" /> Location
              </label>
              <input
                type="text"
                required
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-blue-600 transition-all"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <DollarSign className="w-4 h-4 text-blue-600" /> Salary Range
              </label>
              <input
                type="text"
                placeholder="e.g. $50k - $70k"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-blue-600 transition-all"
                value={formData.salaryRange || ''}
                onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                Industry
              </label>
              <input
                type="text"
                required
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-blue-600 transition-all"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                Job Type
              </label>
              <select
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-blue-600 transition-all"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="FULL_TIME">Full Time</option>
                <option value="PART_TIME">Part Time</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERNSHIP">Internship</option>
                <option value="REMOTE">Remote</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
              <FileText className="w-4 h-4 text-blue-600" /> Job Description
            </label>
            <textarea
              rows={12}
              required
              className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-6 font-medium focus:ring-2 focus:ring-blue-600 transition-all resize-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
