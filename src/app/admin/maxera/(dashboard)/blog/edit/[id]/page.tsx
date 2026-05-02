"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Loader2, Image as ImageIcon, Type, User, FileText } from 'lucide-react';
import Link from 'next/link';

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    coverImage: '',
    status: 'PUBLISHED'
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setFormData(data);
        }
      } catch (error) {
        console.error('Failed to fetch article:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch(`/api/blog/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        router.push('/admin/maxera/blog');
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to update article:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/maxera/blog"
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <button
          onClick={handleSubmit}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white rounded-xl transition-all font-bold shadow-lg shadow-orange-500/20"
        >
          {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {isSaving ? "Updating..." : "Update Article"}
        </button>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
        <div className="p-8 space-y-8">
          <div>
            <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
              <Type className="w-4 h-4 text-orange-600" /> Article Title
            </label>
            <input
              type="text"
              required
              className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 text-xl font-bold focus:ring-2 focus:ring-orange-600 transition-all"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <User className="w-4 h-4 text-orange-600" /> Author Name
              </label>
              <input
                type="text"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-orange-600 transition-all"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <ImageIcon className="w-4 h-4 text-orange-600" /> Cover Image URL
              </label>
              <input
                type="text"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-orange-600 transition-all"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
              <FileText className="w-4 h-4 text-orange-600" /> Short Excerpt
            </label>
            <textarea
              rows={3}
              className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-orange-600 transition-all resize-none"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
              <FileText className="w-4 h-4 text-orange-600" /> Main Content (HTML Supported)
            </label>
            <textarea
              rows={15}
              className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-6 font-medium focus:ring-2 focus:ring-orange-600 transition-all font-mono text-sm"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
