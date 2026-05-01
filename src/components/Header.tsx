"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Building2, UserCircle, PhoneCall, Mail,
  ArrowRight, FileSignature, ShieldCheck,
  Code2, HeartPulse, Settings, Briefcase, Layers, HardHat, ShoppingBag, Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TopBar = () => (
  <div className="hidden lg:block bg-white border-b border-gray-100 py-1">
    <div className="max-w-[1920px] mx-auto px-6 xl:px-12 flex justify-between items-center h-8">
      <div />
      <div className="flex items-center space-x-4 xl:space-x-8">
        <Link href="/employers" className="flex items-center text-maxera-red hover:text-maxera-dark transition-all">
          <Building2 className="w-3.5 h-3.5 mr-1.5" />
          <span className="text-[9px] xl:text-[10px] font-black uppercase tracking-widest">Employers</span>
        </Link>
        <Link href="/candidates" className="flex items-center text-maxera-red hover:text-maxera-dark transition-all">
          <UserCircle className="w-3.5 h-3.5 mr-1.5" />
          <span className="text-[9px] xl:text-[10px] font-black uppercase tracking-widest">Candidates</span>
        </Link>
        <div className="h-4 w-[1px] bg-gray-200" />
        <div className="flex items-center text-gray-400">
          <PhoneCall className="w-3 h-3 mr-1.5" />
          <span className="text-[9px] xl:text-[10px] font-bold tracking-widest text-gray-600 uppercase">+1 (612)-515-7159</span>
        </div>
        <div className="flex items-center text-gray-400">
          <Mail className="w-3 h-3 mr-1.5" />
          <span className="text-[9px] xl:text-[10px] font-bold tracking-widest text-gray-600 uppercase">MEvans@maxeratalent.com</span>
        </div>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      isMega: true,
      columns: [
        {
          title: "Core Staffing",
          items: [
            { name: "Bulk / Volume Hiring", href: "/services/bulk-hiring", icon: Layers },
            { name: "IT Staffing", href: "/services/it-staffing", icon: Code2 },
            { name: "Contract Staffing", href: "/services/contract-staffing", icon: FileSignature },
          ],
        },
        {
          title: "Specialized Search",
          items: [
            { name: "Permanent Staffing", href: "/services/permanent-hiring", icon: ShieldCheck },
            { name: "Industrial Staffing", href: "/services/industrial-staffing", icon: Settings },
            { name: "RPO Services", href: "/services/rpo", icon: Briefcase },
          ],
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      isMega: true,
      columns: [
        {
          title: "Industrial & Logistics",
          items: [
            { name: "Logistics & Warehousing", href: "/industries/logistics", icon: Building2 },
            { name: "Manufacturing & Industrial", href: "/industries/manufacturing", icon: Settings },
            { name: "Construction & Engineering", href: "/industries/construction", icon: HardHat },
            { name: "Transportation & Drivers", href: "/industries/transportation", icon: Truck },
          ],
        },
        {
          title: "Service & Tech",
          items: [
            { name: "Information Technology (IT)", href: "/industries/technology", icon: Code2 },
            { name: "Healthcare Operations", href: "/industries/healthcare", icon: HeartPulse },
            { name: "Retail & Hospitality", href: "/industries/retail", icon: ShoppingBag },
          ],
        },
      ],
    },
    { name: "Jobs", href: "/jobs" },
    { name: "Read", href: "/read" },
    { name: "Contact", href: "/contact" },
  ];

  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[9999] transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <TopBar />

      <nav className="h-[80px] sm:h-[90px] lg:h-[110px] bg-white max-w-[1920px] mx-auto flex items-center relative">

        {/* Logo */}
        <Link
          href="/"
          className="h-full bg-white flex items-center px-4 sm:px-6 lg:px-12 z-[110] relative flex-shrink-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}
        >
          <div className="flex items-center">
            <Image
              src="/maxera-logo.png"
              alt="MaxEra Logo"
              width={320}
              height={180}
              className="w-auto h-16 sm:h-24 lg:h-32 object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation Block */}
        <div className="h-full flex-grow flex items-center justify-between pl-6 sm:pl-10 lg:pl-16 xl:pl-24 pr-4 sm:pr-6 lg:pr-12 z-20 relative">
          <div
            className="absolute inset-0 bg-maxera-red z-[-1]"
            style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}
          />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 xl:space-x-10 h-full mx-4 xl:mx-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-white text-[11px] xl:text-[13px] font-black uppercase tracking-[0.15em] hover:text-white/70 transition-colors flex items-center group/link ${pathname === link.href ? "opacity-100" : "opacity-90"}`}
                >
                  {link.name}
                  {link.isMega && <ChevronDown className="ml-1 w-3 h-3 opacity-50 transition-transform group-hover/link:rotate-180" />}
                </Link>

                <AnimatePresence>
                  {link.isMega && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute top-[110px] left-1/2 -translate-x-1/2 bg-white shadow-[0_40px_80px_rgba(0,0,0,0.15)] p-8 xl:p-12 min-w-[480px] xl:min-w-[640px] border-t-8 border-maxera-red"
                      style={{ zIndex: 99999 }}
                    >
                      <div className="grid grid-cols-2 gap-8 xl:gap-12">
                        {link.columns?.map((col, idx) => (
                          <div key={idx}>
                            <h4 className="text-[11px] font-black text-maxera-red mb-6 uppercase tracking-[0.2em] border-b border-gray-50 pb-3">
                              {col.title}
                            </h4>
                            <div className="space-y-2">
                              {col.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center group/navitem py-2.5 pl-4 hover:bg-maxera-gray transition-colors border-l-4 border-transparent hover:border-maxera-red"
                                >
                                  <div className="w-7 h-7 flex items-center justify-center mr-3">
                                    <item.icon size={15} className="text-maxera-dark" />
                                  </div>
                                  <div className="flex-grow flex justify-between items-center pr-3">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover/navitem:text-maxera-dark transition-colors">
                                      {item.name}
                                    </span>
                                    <ArrowRight size={12} className="text-gray-200 group-hover/navitem:text-maxera-red group-hover/navitem:translate-x-1 transition-all opacity-0 group-hover/navitem:opacity-100" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3 lg:space-x-6">
            <Link
              href="/employers"
              className="hidden lg:block bg-white text-maxera-red font-black uppercase text-[11px] xl:text-[13px] tracking-widest px-8 xl:px-12 py-4 xl:py-5 transition-all hover:bg-black hover:text-white shadow-lg relative z-50"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              Hire Talent
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — full screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[80px] sm:top-[90px] bg-maxera-red z-[200] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-8 space-y-1 min-h-full">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/10 last:border-0">
                  <Link
                    href={link.href}
                    className="text-white text-lg font-black uppercase tracking-wider block py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.isMega && (
                    <div className="pl-4 pb-4 space-y-4">
                      {link.columns?.map((col, idx) => (
                        <div key={idx}>
                          <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-3">{col.title}</p>
                          <div className="space-y-2">
                            {col.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="text-white/80 text-sm font-bold uppercase flex items-center gap-2 hover:text-white transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <item.icon size={13} />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact info in mobile menu */}
              <div className="pt-8 mt-auto space-y-3">
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <PhoneCall size={14} />
                  <span className="font-bold">+1 (612)-515-7159</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Mail size={14} />
                  <span className="font-bold">MEvans@maxeratalent.com</span>
                </div>
              </div>

              <Link
                href="/employers"
                className="mt-6 bg-white text-maxera-red py-4 text-center font-black uppercase tracking-[0.2em] text-sm block hover:bg-maxera-dark hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Talent
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
