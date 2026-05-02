'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface ExportProps {
  data: any[];
}

export default function ExportApplications({ data }: ExportProps) {
  const downloadCSV = () => {
    // 1. Define Headers
    const headers = ['Candidate Name', 'Email', 'Phone', 'Job Title', 'Applied Date', 'Resume URL', 'Status'];
    
    // 2. Map Data to Rows
    const rows = data.map(app => [
      `"${app.candidateName}"`,
      `"${app.email}"`,
      `"${app.phone}"`,
      `"${app.job.title}"`,
      `"${new Date(app.createdAt).toLocaleDateString()}"`,
      `"${app.resumeUrl ? window.location.origin + app.resumeUrl : 'No Resume'}"`,
      `"${app.status}"`
    ]);

    // 3. Combine Headers and Rows
    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    // 4. Create Download Link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `maxera_applications_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={downloadCSV}
      className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors font-semibold"
    >
      <Download className="w-5 h-5" />
      Export to CSV
    </button>
  );
}
