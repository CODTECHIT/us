"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2, User, Building2, Quote } from "lucide-react";
import Link from "next/link";

export default function NewTestimonialPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    content: "",
  });
  const [challenge, setChallenge] = useState("");
  const [approach, setApproach] = useState("");
  const [outcome, setOutcome] = useState("");
  const [executiveContact, setExecutiveContact] = useState("");
  const [placements, setPlacements] = useState("");
  const [interviewToOffer, setInterviewToOffer] = useState("");
  const [pipelineMaintained, setPipelineMaintained] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // compose structured content from fields
      let composed = `Challenge\n${challenge}\n\nApproach\n${approach}\n\nOutcome\n${outcome}`;
      if (placements || interviewToOffer || pipelineMaintained) {
        composed += `\n\nMetrics\n`;
        if (placements) composed += `placements: ${placements}\n`;
        if (interviewToOffer)
          composed += `interview-to-offer: ${interviewToOffer}\n`;
        if (pipelineMaintained)
          composed += `pipeline maintained: ${pipelineMaintained}\n`;
      }

      const payload = {
        ...formData,
        content: composed,
        executiveContact,
      };

      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/admin/maxera/testimonials");
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to save testimonial:", error);
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
          {isSaving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
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
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            {/* Avatar URL removed per request */}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">
                Challenge
              </label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-xl bg-zinc-50"
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">
                Approach
              </label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-xl bg-zinc-50"
                value={approach}
                onChange={(e) => setApproach(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">
                Outcome
              </label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-xl bg-zinc-50"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">
                Executive Contact
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-zinc-50"
                value={executiveContact}
                onChange={(e) => setExecutiveContact(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">
                Optional: Metrics (plain text)
              </label>
              <input
                type="text"
                placeholder="placements (e.g. 8)"
                className="w-full p-3 rounded-xl bg-zinc-50 mb-2"
                value={placements}
                onChange={(e) => setPlacements(e.target.value)}
              />
              <input
                type="text"
                placeholder="interview-to-offer (e.g. 36%)"
                className="w-full p-3 rounded-xl bg-zinc-50 mb-2"
                value={interviewToOffer}
                onChange={(e) => setInterviewToOffer(e.target.value)}
              />
              <input
                type="text"
                placeholder="pipeline maintained (e.g. 5-month)"
                className="w-full p-3 rounded-xl bg-zinc-50"
                value={pipelineMaintained}
                onChange={(e) => setPipelineMaintained(e.target.value)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <Building2 className="w-4 h-4 text-purple-600" /> Position /
                Title
              </label>
              <input
                type="text"
                placeholder="e.g. CEO or HR Director"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
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
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
