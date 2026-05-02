"use client";

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MoreHorizontal, 
  CheckCircle, 
  Clock, 
  MessageSquare,
  Download,
  Trash2,
  Loader2,
  Filter
} from 'lucide-react';

const STATUS_OPTIONS = ['NEW', 'IN_PROGRESS', 'RESOLVED'];

export default function LeadsManager() {
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      if (res.ok) {
        setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
      }
    } catch (error) {
      console.error('Update failed:', error);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      try {
        const res = await fetch('/api/enquiries', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        });
        if (res.ok) {
          setLeads(prev => prev.filter(l => l.id !== id));
          setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
        }
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedIds.length === leads.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(leads.map(l => l.id));
    }
  };

  const downloadCSV = () => {
    const leadsToExport = selectedIds.length > 0 
      ? leads.filter(l => selectedIds.includes(l.id))
      : leads;

    if (leadsToExport.length === 0) return;

    const headers = ['Name', 'Email', 'Type', 'Status', 'Message', 'Date'];
    const rows = leadsToExport.map(l => [
      l.name,
      l.email,
      l.type,
      l.status,
      `"${l.message.replace(/"/g, '""')}"`,
      new Date(l.createdAt).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">Leads & <span className="text-blue-600">Enquiries</span></h1>
          <p className="text-zinc-500 mt-1 font-medium">Centralized hub for all incoming business and candidate queries.</p>
        </div>
        <div className="flex items-center gap-3">
          {leads.length > 0 && (
            <>
              <button 
                onClick={selectAll}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all"
              >
                {selectedIds.length === leads.length ? 'Deselect All' : 'Select All'}
              </button>
              <button 
                onClick={downloadCSV}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all shadow-lg"
              >
                <Download className="w-3 h-3" />
                Export {selectedIds.length > 0 ? `(${selectedIds.length})` : 'All'} CSV
              </button>
            </>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="p-20 flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Fetching Inbox...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {leads.length === 0 ? (
            <div className="bg-white dark:bg-zinc-900 p-24 rounded-3xl border border-zinc-100 dark:border-zinc-800 text-center">
              <Mail className="w-16 h-16 mx-auto mb-6 text-zinc-200" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase">Your Inbox is Empty</h3>
              <p className="text-zinc-400 mt-2">New leads from your contact forms will appear here.</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div key={lead.id} className={`bg-white dark:bg-zinc-900 p-5 rounded-2xl border transition-all group relative overflow-hidden ${
                selectedIds.includes(lead.id) ? 'border-blue-500 ring-1 ring-blue-500' : 'border-zinc-100 dark:border-zinc-800'
              }`}>
                <div className="absolute top-6 left-6 z-20">
                  <input 
                    type="checkbox"
                    checked={selectedIds.includes(lead.id)}
                    onChange={() => toggleSelect(lead.id)}
                    className="w-4 h-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 pl-10">
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        lead.type === 'EMPLOYER' ? "bg-purple-50 text-purple-600 dark:bg-purple-900/20" :
                        lead.type === 'CANDIDATE' ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20" :
                        lead.type === 'HIRE_FROM_US' ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20" :
                        "bg-zinc-100 text-zinc-500 dark:bg-zinc-800"
                      }`}>
                        {lead.type.replace('_', ' ')}
                      </span>
                      <span className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {new Date(lead.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">{lead.name}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs mt-0.5">
                        <Mail className="w-3.5 h-3.5" /> {lead.email}
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700/50 relative">
                      <MessageSquare className="absolute top-2 right-2 w-6 h-6 text-zinc-200/50 dark:text-zinc-700/30" />
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs font-medium italic leading-relaxed relative z-10 pr-6">
                        "{lead.message}"
                      </p>
                    </div>

                    {lead.resumeUrl && (
                      <div className="pt-2">
                        <a 
                          href={lead.resumeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all border border-zinc-200 dark:border-zinc-700"
                        >
                          <Download className="w-4 h-4 text-blue-600" /> View / Download Resume
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-row lg:flex-col items-center justify-end gap-3 border-t lg:border-t-0 lg:border-l border-zinc-100 dark:border-zinc-800 pt-4 lg:pt-0 lg:pl-6 min-w-[150px]">
                    <div className="flex-1 lg:w-full space-y-2">
                      <div className="relative">
                        <select
                          disabled={updatingId === lead.id}
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`w-full appearance-none px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none transition-all cursor-pointer ${
                            lead.status === 'NEW' ? 'bg-blue-50 text-blue-600' :
                            lead.status === 'IN_PROGRESS' ? 'bg-amber-50 text-amber-600' :
                            'bg-emerald-50 text-emerald-600'
                          }`}
                        >
                          {STATUS_OPTIONS.map(opt => (
                            <option key={opt} value={opt} className="bg-white text-zinc-900 font-bold">{opt}</option>
                          ))}
                        </select>
                        {updatingId === lead.id && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Loader2 className="w-3 h-3 animate-spin" />
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleDelete(lead.id)}
                          className="w-full py-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all border border-red-100 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
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
