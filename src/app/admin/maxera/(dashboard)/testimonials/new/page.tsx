"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2, User, Building2, Quote, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function NewTestimonialPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    content: '',
    avatar: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        router.push('/admin/maxera/testimonials');
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to save testimonial:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/maxera/testimonials"
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Testimonials
        </Link>
        <button
          onClick={handleSubmit}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-xl transition-all font-bold shadow-lg shadow-purple-500/20"
        >
          {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {isSaving ? "Saving..." : "Save Testimonial"}
        </button>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
        <div className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <User className="w-4 h-4 text-purple-600" /> Client Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <ImageIcon className="w-4 h-4 text-purple-600" /> Avatar URL
              </label>
              <input
                type="text"
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <Building2 className="w-4 h-4 text-purple-600" /> Position / Title
              </label>
              <input
                type="text"
                placeholder="e.g. CEO or HR Director"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <Building2 className="w-4 h-4 text-purple-600" /> Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
              <Quote className="w-4 h-4 text-purple-600" /> Testimonial Content
            </label>
            <textarea
              rows={6}
              required
              placeholder="What did they say about Maxera Talent?"
              className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-6 font-medium focus:ring-2 focus:ring-purple-600 transition-all resize-none italic"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
