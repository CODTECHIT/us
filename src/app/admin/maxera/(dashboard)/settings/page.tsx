"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Save,
  Palette,
  Globe,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface SettingsState {
  primaryColor: string;
  accentColor: string;
  baseFont: string;
  gaId: string;
  liPixel: string;
  waPhone: string;
  siteTitleTemplate: string;
  metaDescription: string;
  [key: string]: string;
}

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("branding");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [settings, setSettings] = useState<SettingsState>({
    primaryColor: "#2563EB",
    accentColor: "#10B981",
    baseFont: "Inter (Default)",
    gaId: "",
    liPixel: "",
    waPhone: "",
    siteTitleTemplate: "Maxera Talent | %page%",
    metaDescription: "",
  });
  const logoInputRef = useRef<HTMLInputElement | null>(null);
  const faviconInputRef = useRef<HTMLInputElement | null>(null);

  const uploadAndSave = async (file: File, key: string) => {
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/media", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Upload failed");
      const json = await res.json();
      const url = json.url;
      // Save to settings
      const saveRes = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: url }),
      });
      if (!saveRes.ok) throw new Error("Failed to save setting");
      setSettings((prev) => ({ ...prev, [key]: url }) as SettingsState);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Upload+Save error:", err);
      alert("Upload failed");
    }
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/admin/settings");
        if (res.ok) {
          const data = await res.json();
          setSettings((prev) => ({ ...prev, ...data }));
        }
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save settings");
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const tabs = [
    { id: "branding", name: "Branding", icon: Palette },
    { id: "seo", name: "Global SEO", icon: Globe },
  ];

  if (isLoading) {
    return (
      <div className="p-20 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
        <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">
          Loading Preferences...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">
            System <span className="text-blue-600">Settings</span>
          </h1>
          <p className="text-zinc-500 mt-1 font-medium">
            Manage your website configurations and third-party tools.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl transition-all font-semibold shadow-lg shadow-blue-500/20"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Saving...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" /> Save Changes
            </>
          )}
        </button>
      </div>

      {showSuccess && (
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl flex items-center gap-3 text-emerald-700 dark:text-emerald-400 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5" />
          <p className="font-medium">
            Settings saved successfully! Changes are now live.
          </p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full lg:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all font-medium text-left",
                activeTab === tab.id
                  ? "bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm border border-zinc-200 dark:border-zinc-700"
                  : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
              )}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm min-h-[500px]">
          {activeTab === "branding" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-tight">
                  Logo & Identity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest">
                      Main Logo (Light Mode)
                    </label>
                    <div className="border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 bg-zinc-50 dark:bg-zinc-800/30">
                      <ImageIcon className="w-10 h-10 text-zinc-300" />
                      <p className="text-xs text-zinc-400 font-medium">
                        PNG, SVG or WEBP (Max 2MB)
                      </p>
                      <div>
                        {settings.logo ? (
                          <img
                            src={settings.logo}
                            alt="logo"
                            className="h-10 mx-auto mb-2"
                          />
                        ) : null}
                        <button
                          onClick={() => logoInputRef.current?.click()}
                          className="text-blue-600 text-xs font-black uppercase tracking-widest mt-2 hover:underline"
                        >
                          Change Logo
                        </button>
                        <input
                          ref={logoInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) uploadAndSave(f, "logo");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest">
                      Favicon
                    </label>
                    <div className="border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 bg-zinc-50 dark:bg-zinc-800/30">
                      <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center border border-zinc-200">
                        <span className="text-[10px] font-black text-zinc-300">
                          1:1
                        </span>
                      </div>
                      <div>
                        {settings.favicon ? (
                          <img
                            src={settings.favicon}
                            alt="favicon"
                            className="w-8 h-8 mx-auto mb-2"
                          />
                        ) : null}
                        <button
                          onClick={() => faviconInputRef.current?.click()}
                          className="text-blue-600 text-xs font-black uppercase tracking-widest mt-2 hover:underline"
                        >
                          Upload Icon
                        </button>
                        <input
                          ref={faviconInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) uploadAndSave(f, "favicon");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-tight">
                  Visual Style
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                      Primary Color
                    </label>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl border border-zinc-200 shadow-sm"
                        style={{ backgroundColor: settings.primaryColor }}
                      ></div>
                      <input
                        type="text"
                        value={settings.primaryColor}
                        onChange={(e) =>
                          handleInputChange("primaryColor", e.target.value)
                        }
                        className="flex-1 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white text-sm font-mono"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                      Accent Color
                    </label>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl border border-zinc-200 shadow-sm"
                        style={{ backgroundColor: settings.accentColor }}
                      ></div>
                      <input
                        type="text"
                        value={settings.accentColor}
                        onChange={(e) =>
                          handleInputChange("accentColor", e.target.value)
                        }
                        className="flex-1 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white text-sm font-mono"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                      Base Font
                    </label>
                    <select
                      value={settings.baseFont}
                      onChange={(e) =>
                        handleInputChange("baseFont", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white text-sm font-bold"
                    >
                      <option>Inter (Default)</option>
                      <option>Outfit</option>
                      <option>Plus Jakarta Sans</option>
                      <option>Roboto</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "seo" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">
                Global SEO Settings
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                    Site Title Template
                  </label>
                  <input
                    type="text"
                    value={settings.siteTitleTemplate}
                    onChange={(e) =>
                      handleInputChange("siteTitleTemplate", e.target.value)
                    }
                    placeholder="Maxera Talent | %page%"
                    className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white text-sm font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                    Global Meta Description
                  </label>
                  <textarea
                    rows={4}
                    value={settings.metaDescription}
                    onChange={(e) =>
                      handleInputChange("metaDescription", e.target.value)
                    }
                    placeholder="Leading staffing solutions for global businesses..."
                    className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:text-white text-sm font-medium leading-relaxed"
                  />
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl flex gap-3 text-xs text-blue-700 dark:text-blue-400 font-medium">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <p>
                    These settings will be used as defaults for pages that
                    don&apos;t have their own SEO configurations. Proper SEO
                    increases your visibility on search engines like Google.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
