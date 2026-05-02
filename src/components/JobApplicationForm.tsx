'use client';

import React, { useState, useRef } from 'react';
import { Send, Loader2, CheckCircle2, Upload, FileText, X } from 'lucide-react';

export default function JobApplicationForm({ jobId, jobTitle }: { jobId: string, jobTitle: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File is too large. Maximum size is 5MB.');
        return;
      }
      setResume(file);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    if (resume) {
      formData.append('resume', resume);
    }
    formData.append('jobId', jobId);

    try {
      const response = await fetch('/api/jobs/apply', {
        method: 'POST',
        body: formData, // No headers needed, browser sets multipart/form-data
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        const err = await response.json();
        alert(`Error: ${err.message || 'Failed to submit'}`);
      }
    } catch (error) {
      alert('An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (showSuccess) {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h4 className="text-xl font-bold text-maxera-dark uppercase mb-2">APPLICATION SENT</h4>
        <p className="text-sm text-gray-500 font-medium">Your profile has been synchronized for the <b>{jobTitle}</b> mandate.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
        <input 
          name="candidateName"
          required
          type="text" 
          placeholder="e.g. Alexander Pierce"
          className="w-full bg-white border-2 border-gray-100 px-4 py-3 text-sm focus:border-maxera-red outline-none transition-all font-bold"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</label>
          <input 
            name="email"
            required
            type="email" 
            placeholder="alex@example.com"
            className="w-full bg-white border-2 border-gray-100 px-4 py-3 text-sm focus:border-maxera-red outline-none transition-all font-bold"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone</label>
          <input 
            name="phone"
            required
            type="tel" 
            placeholder="+1 234..."
            className="w-full bg-white border-2 border-gray-100 px-4 py-3 text-sm focus:border-maxera-red outline-none transition-all font-bold"
          />
        </div>
      </div>

      {/* Resume Upload */}
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Curriculum Vitae (PDF/DOCX)</label>
        {!resume ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-200 hover:border-maxera-red p-6 rounded-lg text-center cursor-pointer transition-all bg-white group"
          >
            <Upload className="w-6 h-6 mx-auto text-gray-300 group-hover:text-maxera-red mb-2" />
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Click to upload resume</p>
            <p className="text-[9px] text-gray-300 mt-1 uppercase">Max 5MB</p>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 bg-white border-2 border-maxera-red rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-maxera-red" />
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-maxera-dark truncate max-w-[150px]">{resume.name}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{(resume.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button 
              type="button"
              onClick={() => setResume(null)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Brief Message (Optional)</label>
        <textarea 
          name="message"
          rows={3}
          placeholder="Why are you a good fit?"
          className="w-full bg-white border-2 border-gray-100 px-4 py-3 text-sm focus:border-maxera-red outline-none transition-all font-bold resize-none"
        ></textarea>
      </div>

      <div className="pt-4">
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-maxera-dark text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-black transition-all flex items-center justify-center gap-2 group"
        >
          {isSubmitting ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> SYNCHRONIZING...</>
          ) : (
            <><Send size={14} className="group-hover:translate-x-1 transition-transform" /> SUBMIT INTENT</>
          )}
        </button>
      </div>
    </form>
  );
}
