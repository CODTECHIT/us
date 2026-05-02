import React from 'react';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  Globe, 
  Layout, 
  Eye,
  FileCode,
  Type
} from 'lucide-react';
import Link from 'next/link';
import PageEditForm from '@/components/admin/PageEditForm';

export default async function EditPageCMS({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const page = await prisma.page.findUnique({
    where: { id },
  });

  if (!page) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/maxera/pages" 
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Edit Page Content</h1>
            <p className="text-sm text-zinc-500 flex items-center gap-2">
              Editing: <span className="text-blue-600 font-semibold">{page.title}</span> (/{page.slug})
            </p>
          </div>
        </div>
        <Link 
          href={`/${page.slug}`} 
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors font-semibold"
        >
          <Eye className="w-4 h-4" /> View Live
        </Link>
      </div>

      <PageEditForm page={page} />
    </div>
  );
}
