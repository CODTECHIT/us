"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Quote, 
  User, 
  Building2, 
  Trash2, 
  Edit2,
  Loader2
} from 'lucide-react';
import Link from 'next/link';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials');
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      try {
        const res = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchTestimonials();
        }
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Social Proof & Testimonials</h1>
          <p className="text-zinc-500 mt-1">Manage client and candidate feedback to showcase success.</p>
        </div>
        <Link 
          href="/admin/maxera/testimonials/new" 
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all font-semibold shadow-lg shadow-purple-500/20"
        >
          <Plus className="w-5 h-5" /> Add Testimonial
        </Link>
      </div>

      {isLoading ? (
        <div className="p-20 flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600 mb-4" />
          <p className="text-zinc-500 font-medium">Loading feedback...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.length === 0 ? (
            <div className="col-span-full bg-white dark:bg-zinc-900 p-20 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
               <div className="mx-auto w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                 <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-lg font-bold text-zinc-900 dark:text-white">No testimonials found</h3>
               <p className="text-zinc-500 mt-1">Start collecting success stories to build institutional trust.</p>
            </div>
          ) : (
            testimonials.map((t) => (
              <div key={t.id} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group relative">
                <div className="absolute top-6 right-6 flex gap-1">
                  <Link 
                    href={`/admin/maxera/testimonials/edit/${t.id}`}
                    className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-blue-600 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => handleDelete(t.id)}
                    className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <Quote className="w-10 h-10 text-purple-100 dark:text-purple-900/30 mb-4" />
                
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-400 italic text-sm leading-relaxed line-clamp-4">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                      {t.avatar ? (
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-5 h-5 text-zinc-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{t.name}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        <Building2 className="w-3 h-3" /> {t.position} @ {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
