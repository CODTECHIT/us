'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Settings, 
  MessageSquare, 
  BarChart3,
  Globe,
  PlusCircle,
  Bell,
  LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { signOut } from 'next-auth/react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/maxera' },
  { name: 'Job Listings', icon: Briefcase, href: '/admin/maxera/jobs' },
  { name: 'Applications', icon: Users, href: '/admin/maxera/applications' },
  { name: 'Pages', icon: Globe, href: '/admin/maxera/pages' },
  { name: 'Blog', icon: FileText, href: '/admin/maxera/blog' },
  { name: 'Testimonials', icon: MessageSquare, href: '/admin/maxera/testimonials' },
  { name: 'Media Library', icon: ImageIcon, href: '/admin/maxera/media' },
  { name: 'Leads', icon: MessageSquare, href: '/admin/maxera/leads' },
  { name: 'Analytics', icon: BarChart3, href: '/admin/maxera/analytics' },
  { name: 'Settings', icon: Settings, href: '/admin/maxera/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col">
      <div className="p-6">
        <Link href="/admin/maxera" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-xl tracking-tight dark:text-white">Maxera Admin</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" 
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-blue-600 dark:text-blue-400" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
              )} />
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Avatar" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold truncate dark:text-white">Administrator</p>
            <p className="text-xs text-zinc-500 truncate">admin@maxera.com</p>
          </div>
          <button 
            onClick={() => signOut({ callbackUrl: '/admin/maxera/login' })}
            className="text-zinc-400 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

