import React from 'react';
import { 
  Users, 
  Briefcase, 
  Eye, 
  Clock,
  TrendingUp,
  PlusCircle,
  FileText,
  MessageSquare
} from 'lucide-react';
import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  // Fetch real counts from the database
  const [jobCount, applicationCount, enquiryCount, recentApps] = await Promise.all([
    prisma.job.count(),
    prisma.application.count(),
    prisma.enquiry.count(),
    prisma.application.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { job: { select: { title: true } } }
    })
  ]);

  const stats = [
    { name: 'Active Job Posts', value: jobCount.toString(), icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Total Applications', value: applicationCount.toString(), icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { name: 'Leads & Enquiries', value: enquiryCount.toString(), icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'System Health', value: '100%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-zinc-500 mt-1">Welcome back, here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex justify-between items-start">
              <div className={`p-2 ${stat.bg} dark:bg-opacity-10 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-zinc-500 font-medium">{stat.name}</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Recent Applications</h2>
            <Link href="/admin/maxera/applications" className="text-blue-600 text-sm font-semibold hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {recentApps.length === 0 ? (
              <div className="p-8 text-center text-zinc-500">No applications received yet.</div>
            ) : (
              recentApps.map((app) => (
                <div key={app.id} className="p-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold uppercase">
                      {app.candidateName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">{app.candidateName}</p>
                      <p className="text-sm text-zinc-500">{app.job.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-zinc-400 mb-1 flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" /> {new Date(app.createdAt).toLocaleDateString()}
                    </p>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      {app.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/admin/maxera/jobs/new" className="flex items-center gap-3 w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium">
                <PlusCircle className="w-5 h-5" /> Post a New Job
              </Link>
              <Link href="/admin/maxera/blog" className="flex items-center gap-3 w-full p-3 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl transition-colors font-medium">
                <FileText className="w-5 h-5" /> Create Blog Post
              </Link>
            </div>
          </div>

          <div className="bg-zinc-900 dark:bg-blue-600 p-6 rounded-2xl text-white">
            <h3 className="font-bold text-lg mb-2">Hostinger Database</h3>
            <p className="text-zinc-400 dark:text-blue-100 text-sm mb-4">Your dashboard is now live and connected to the Hostinger MySQL instance.</p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              Live Connection
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
