import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maxera-dark text-gray-400 pt-16 sm:pt-20 md:pt-32 pb-10 md:pb-16 relative overflow-hidden border-t-4 md:border-t-8 border-maxera-red">

      {/* Decorative watermark — desktop only */}
      <div className="hidden md:block absolute top-20 left-0 text-[18vw] font-black text-white/[0.02] leading-none pointer-events-none select-none tracking-tighter">
        MAXERA
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 mb-12 md:mb-24">

          {/* Brand Identity */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center mb-6 sm:mb-8 md:mb-12 group">
              <Image 
                src="/maxera-logo.png" 
                alt="MaxEra Logo" 
                width={200} 
                height={133} 
                className="w-auto h-12 sm:h-14 md:h-20 object-contain mr-3 sm:mr-4 md:mr-6"
              />
              <div className="flex flex-col justify-center">
                <span className="text-[9px] sm:text-[10px] font-sans font-extrabold tracking-[0.4em] uppercase mt-1.5 sm:mt-2 text-maxera-red">
                  Talent Partner
                </span>
              </div>
            </Link>
            <p className="text-sm sm:text-[15px] md:text-[16px] leading-relaxed mb-8 md:mb-12 max-w-sm text-gray-500 font-medium">
              Revolutionizing professional recruitment through precision search and strategic talent acquisition.
            </p>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-5">
              {[
                { Icon: "fa-linkedin-in", href: "https://www.linkedin.com/company/116164276/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center hover:bg-maxera-red hover:text-white transition-all"
                >
                  <i className={`fab ${social.Icon} text-base sm:text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-5 md:mb-10 text-[13px] md:text-[14px] uppercase tracking-[0.2em] border-l-4 border-maxera-red pl-4">Company</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-[15px] font-bold">
              <li>
                <Link href="/about" className="hover:text-maxera-red transition-all flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[2px] bg-maxera-red transition-all mr-0 group-hover:mr-3" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-maxera-red transition-all flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[2px] bg-maxera-red transition-all mr-0 group-hover:mr-3" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-maxera-red transition-all flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[2px] bg-maxera-red transition-all mr-0 group-hover:mr-3" />
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-maxera-red transition-all flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[2px] bg-maxera-red transition-all mr-0 group-hover:mr-3" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black mb-5 md:mb-10 text-[13px] md:text-[14px] uppercase tracking-[0.2em] border-l-4 border-maxera-red pl-4">Expertise</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-[15px] font-bold">
              {[
                { name: "Information Technology (IT)", href: "/industries/technology" },
                { name: "Logistics & Warehousing", href: "/industries/logistics" },
                { name: "Manufacturing & Industrial", href: "/industries/manufacturing" },
                { name: "Construction & Engineering", href: "/industries/construction" },
                { name: "Healthcare Operations", href: "/industries/healthcare" },
                { name: "Retail & Hospitality", href: "/industries/retail" },
                { name: "Transportation & Drivers", href: "/industries/transportation" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-maxera-red transition-all flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[2px] bg-maxera-red transition-all mr-0 group-hover:mr-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black mb-5 md:mb-10 text-[13px] md:text-[14px] uppercase tracking-[0.2em] border-l-4 border-maxera-red pl-4">Contact Info</h4>
            <div className="space-y-5 md:space-y-8 text-sm md:text-[15px] font-bold">
              <div className="flex items-start">
                <MapPin className="text-maxera-red mr-3 md:mr-5 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">100 Business Parkway, <br /> Suite 200, NY 10001</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center mr-4 group-hover:bg-maxera-red transition-all duration-300">
                  <Mail className="text-white" size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 font-black text-[9px] uppercase tracking-widest mb-0.5">Direct Inquiry</span>
                  <span className="text-white text-xs sm:text-sm md:text-[15px] font-bold">MEvans@maxeratalent.com</span>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center mr-4 group-hover:bg-maxera-red transition-all duration-300">
                  <PhoneCall className="text-white" size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 font-black text-[9px] uppercase tracking-widest mb-0.5">Workforce Solutions</span>
                  <span className="text-white text-xs sm:text-sm md:text-[15px] font-bold">+1 (612)-515-7159</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-white/5 pt-8 md:pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-[10px] sm:text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-gray-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} MAXERA TALENT — DESIGNED BY{" "}
            <Link 
              href="https://codtechitsolutions.com/" 
              target="_blank" 
              className="text-maxera-red hover:text-white transition-colors underline underline-offset-4"
            >
              CODTECH IT SOLUTIONS
            </Link>
          </p>
          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 md:gap-12">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
