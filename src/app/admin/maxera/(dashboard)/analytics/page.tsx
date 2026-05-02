"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Loader2,
  Calendar
} from 'lucide-react';

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch('/api/admin/analytics');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (isLoading) {
    return (
      <div className="p-20 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
        <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Generating Reports...</p>
      </div>
    );
  }

  const statCards = [
    { 
      label: 'Total Enquiries', 
      value: data?.stats?.enquiries || 0, 
      icon: MessageSquare, 
      color: 'blue',
      trend: '+12%',
      isPositive: true
    },
    { 
      label: 'Job Applications', 
      value: data?.stats?.applications || 0, 
      icon: Users, 
      color: 'purple',
      trend: '+5%',
      isPositive: true
    },
    { 
      label: 'Active Jobs', 
      value: data?.stats?.jobs || 0, 
      icon: Briefcase, 
      color: 'emerald',
      trend: '0%',
      isPositive: true
    },
    { 
      label: 'Blog Posts', 
      value: data?.stats?.blogs || 0, 
      icon: FileText, 
      color: 'amber',
      trend: '+2',
      isPositive: true
    }
  ];

  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">
          Performance <span className="text-blue-600">Analytics</span>
        </h1>
        <p className="text-zinc-500 mt-1 font-medium italic">Data-driven insights for Maxera Talent ecosystem.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform ${
              stat.color === 'blue' ? 'bg-blue-500/5' :
              stat.color === 'purple' ? 'bg-purple-500/5' :
              stat.color === 'emerald' ? 'bg-emerald-500/5' :
              'bg-amber-500/5'
            }`} />
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-3xl font-black text-zinc-900 dark:text-white">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-2xl ${
                stat.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' :
                stat.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600' :
                stat.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' :
                'bg-amber-50 dark:bg-amber-900/20 text-amber-600'
              }`}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 relative z-10">
              <span className={`flex items-center text-[10px] font-bold ${stat.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                {stat.isPositive ? <ArrowUpRight size={12} className="mr-1" /> : <ArrowDownRight size={12} className="mr-1" />}
                {stat.trend}
              </span>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart Card */}
        <div className="lg:col-span-8 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-black text-zinc-900 dark:text-white uppercase tracking-tight">Traffic Distribution</h3>
              <p className="text-xs text-zinc-400 font-medium">Daily visitor analysis across platform nodes.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 bg-zinc-50 dark:bg-zinc-800 p-2 rounded-xl border border-zinc-100 dark:border-zinc-700">
              <Calendar size={14} /> Weekly View
            </div>
          </div>

          <div className="h-[300px] flex items-end justify-between gap-4 px-4 pt-10">
            {data?.traffic?.map((item: any, idx: number) => (
              <div key={idx} className="flex-1 flex flex-col items-center group relative">
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-black py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {item.views} Views
                </div>
                
                <div 
                  style={{ height: `${(item.views / 250) * 100}%` }}
                  className="w-full bg-blue-600/10 group-hover:bg-blue-600 rounded-t-xl transition-all duration-500 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-full" />
                </div>
                <p className="mt-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">{item.day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side Info Card */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <TrendingUp className="absolute top-4 right-4 w-20 h-20 text-white/5" />
            <h3 className="text-xl font-black italic uppercase tracking-tight mb-2">Growth Vector</h3>
            <p className="text-white/60 text-xs mb-8">Maxera Talent is expanding its institutional reach by 15.4% this quarter.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold opacity-50 uppercase tracking-widest">Candidate Sync</span>
                <span className="font-black">84%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[84%] bg-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4">Top Channels</h3>
            <div className="space-y-6">
              {[
                { name: 'Organic Search', value: '45%', color: 'blue' },
                { name: 'Direct Traffic', value: '30%', color: 'purple' },
                { name: 'LinkedIn Leads', value: '15%', color: 'sky' },
                { name: 'Referral Net', value: '10%', color: 'emerald' }
              ].map((channel, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      channel.color === 'blue' ? 'bg-blue-500' :
                      channel.color === 'purple' ? 'bg-purple-500' :
                      channel.color === 'sky' ? 'bg-sky-500' :
                      'bg-emerald-500'
                    }`} />
                    <span className="text-[11px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      {channel.name}
                    </span>
                  </div>
                  <span className="text-xs font-black text-zinc-900 dark:text-white">{channel.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
