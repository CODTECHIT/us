'use client';

import React, { useState } from 'react';
import { Save, Loader2, CheckCircle2, Type, Layout, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PageEditForm({ page }: { page: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title'),
      content: formData.get('content'),
      status: formData.get('status'),
    };

    try {
      const response = await fetch(`/api/admin/pages/${page.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        router.refresh();
      } else {
        alert('Failed to update page');
      }
    } catch (error) {
      alert('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-8">
        {/* Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
              <Type className="w-4 h-4 text-zinc-400" /> Page Title
            </label>
            <input 
              name="title"
              defaultValue={page.title}
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
              <Globe className="w-4 h-4 text-zinc-400" /> Publishing Status
            </label>
            <select 
              name="status"
              defaultValue={page.status}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            >
              <option value="PUBLISHED">Published</option>
              <option value="DRAFT">Draft</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>
        </div>

        <hr className="border-zinc-100 dark:border-zinc-800" />

        {/* Content Editor */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Layout className="w-5 h-5 text-blue-600" />
            Page Content
          </h3>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Body Content (Text/HTML supported)</label>
            <textarea 
              name="content"
              defaultValue={page.content}
              required
              rows={20}
              className="w-full px-4 py-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-mono text-sm leading-relaxed"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Sticky Footer Action */}
      <div className="flex items-center justify-between bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg">
        <div className="flex items-center gap-3">
          {showSuccess && (
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm animate-in fade-in slide-in-from-left-4">
              <CheckCircle2 className="w-5 h-5" /> Changes saved successfully!
            </div>
          )}
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl transition-all font-bold shadow-lg shadow-blue-500/20"
        >
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Saving Changes...</>
          ) : (
            <><Save className="w-5 h-5" /> Save Changes</>
          )}
        </button>
      </div>
    </form>
  );
}
