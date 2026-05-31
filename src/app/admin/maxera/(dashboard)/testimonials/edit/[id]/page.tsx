"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Loader2,
  User,
  Building2,
  Quote,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";

export default function EditTestimonialPage() {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    content: "",
    avatar: "",
  });
  const [challenge, setChallenge] = useState("");
  const [approach, setApproach] = useState("");
  const [outcome, setOutcome] = useState("");
  const [executiveContact, setExecutiveContact] = useState("");

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await fetch(`/api/testimonials/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          // attempt to parse labeled sections into separate fields
          const parseSections = (text: string) => {
            const sections: any = { challenge: "", approach: "", outcome: "" };
            if (!text) return sections;
            const cMatch = text.match(
              /Challenge\s*[:\-]?\s*([^\n]+(?:[\s\S]*?))(?:Approach|$)/i,
            );
            const aMatch = text.match(
              /Approach\s*[:\-]?\s*([^\n]+(?:[\s\S]*?))(?:Outcome|$)/i,
            );
            const oMatch = text.match(/Outcome\s*[:\-]?\s*([\s\S]*)/i);
            sections.challenge = cMatch ? cMatch[1].trim() : "";
            sections.approach = aMatch ? aMatch[1].trim() : "";
            sections.outcome = oMatch ? oMatch[1].trim() : "";
            if (!sections.challenge && !sections.approach && !sections.outcome)
              sections.outcome = text;
            return sections;
          };

          setFormData(data);
          const s = parseSections(data.content || "");
          setChallenge(s.challenge);
          setApproach(s.approach);
          setOutcome(s.outcome);
          // executive contact may be stored elsewhere; leave blank unless provided
        }
      } catch (error) {
        console.error("Failed to fetch testimonial:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonial();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const composed = `Challenge\n${challenge}\n\nApproach\n${approach}\n\nOutcome\n${outcome}`;
      const payload = { ...formData, content: composed, executiveContact };

      const res = await fetch(`/api/testimonials/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/admin/maxera/testimonials");
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to update testimonial:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

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
          {isSaving ? "Updating..." : "Update Testimonial"}
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
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
                <ImageIcon className="w-4 h-4 text-purple-600" /> Avatar URL
              </label>
              <input
                type="text"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.avatar}
                onChange={(e) =>
                  setFormData({ ...formData, avatar: e.target.value })
                }
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
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-purple-600 transition-all"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
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
                placeholder="7 placements; 19 days; 90 days"
                className="w-full p-3 rounded-xl bg-zinc-50"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    content: formData.content + "\n" + e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
