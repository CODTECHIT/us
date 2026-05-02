import React from 'react';
import prisma from '@/lib/prisma';
import { 
  FileText, 
  Eye, 
  Settings, 
  Clock,
  Layout,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default async function PagesManager() {
  // Fetch real pages from the database
  const pages = await prisma.page.findMany({
    orderBy: { title: 'asc' }
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Content Manager</h1>
          <p className="text-zinc-500 mt-1">Update and manage your website's static page content.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.length === 0 ? (
          <div className="col-span-full bg-white dark:bg-zinc-900 p-20 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
             <div className="mx-auto w-16 h-16 bg-zinc-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
               <Layout className="w-8 h-8 text-zinc-300" />
             </div>
             <p className="text-zinc-500">No pages found in the CMS. Please initialize your page content.</p>
          </div>
        ) : (
          pages.map((page) => (
            <div key={page.id} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  page.status === 'PUBLISHED' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                }`}>
                  {page.status}
                </span>
                <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {page.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500 font-medium">
                  <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> /{page.slug}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(page.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Link 
                  href={`/admin/maxera/pages/edit/${page.id}`}
                  className="flex-1 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Edit Content
                </Link>
                <Link 
                  href={`/${page.slug}`}
                  target="_blank"
                  className="px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
