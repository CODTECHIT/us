"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, FileCheck, Users, ShieldAlert, Mail, ChevronRight, Gavel } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    { title: "1. Acceptance of Terms", id: "acceptance" },
    { title: "2. Services Overview", id: "overview" },
    { title: "3. Candidate Terms", id: "candidates" },
    { title: "4. Client Terms", id: "clients" },
    { title: "5. Outreach & Communication", id: "outreach" },
    { title: "6. Data Usage Disclaimer", id: "disclaimer" },
    { title: "7. Data Breach Responsibility", id: "breach" },
    { title: "8. Intellectual Property", id: "ip" },
    { title: "9. Limitation of Liability", id: "liability" },
    { title: "10. Governing Law", id: "law" },
    { title: "11. Termination", id: "termination" },
    { title: "12. Changes to Terms", id: "changes" },
    { title: "13. Contact Information", id: "contact" },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 page-transition">
      {/* Header Section */}
      <section className="pt-32 sm:pt-40 pb-20 bg-maxera-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-maxera-red opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black skew-x-[-20deg] translate-x-1/2" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-maxera-red text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Legal Framework
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Terms of <span className="text-maxera-red">Service</span>
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center">
                <Scale size={14} className="mr-2 text-maxera-red" />
                Global Version — US | EU | India
              </div>
              <div className="flex items-center">
                <FileCheck size={14} className="mr-2 text-maxera-red" />
                Effective: May 1, 2026
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2 text-maxera-red" />
                MEvans@maxeratalent.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Sidebar Navigation — Desktop */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <h4 className="text-maxera-dark font-black uppercase tracking-widest text-xs mb-8 pb-4 border-b-2 border-maxera-red inline-block">Legal Navigation</h4>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-400 hover:text-maxera-red py-2.5 transition-colors group"
                >
                  <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9 prose prose-lg prose-gray max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-4xl prose-h3:text-2xl prose-h4:text-lg prose-p:text-gray-500 prose-li:text-gray-500 prose-strong:text-maxera-dark">
            
            <div id="acceptance" className="scroll-mt-32 mb-20">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the MaxEra Talent website or any of our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            <div id="overview" className="scroll-mt-32 mb-20">
              <h2>2. Services Overview</h2>
              <p>MaxEra Talent provides recruitment and staffing services, connecting candidates with employers and supporting hiring processes globally. Our services include:</p>
              <ul>
                <li>Recruitment and candidate placement services</li>
                <li>Talent sourcing and screening</li>
                <li>Business development and client engagement support</li>
              </ul>
              <p className="bg-maxera-gray p-6 border-l-4 border-maxera-red font-bold text-maxera-dark italic">
                We do not guarantee job placement, hiring outcomes, or the suitability of any candidate for a specific role. Final hiring decisions rest solely with the client organisation.
              </p>
            </div>

            <div id="candidates" className="scroll-mt-32 mb-20">
              <h2>3. Candidate Terms</h2>
              <p>By submitting your information to MaxEra Talent, you:</p>
              <ul>
                <li>Consent to the collection, processing, and sharing of your personal data with potential employers for recruitment purposes, in accordance with our Privacy Policy</li>
                <li>Confirm that all information provided is accurate, complete, and up to date</li>
                <li>Acknowledge that your profile may be retained for future opportunities unless you request deletion</li>
                <li>Understand that you may withdraw your consent at any time by contacting us at MEvans@maxeratalent.com</li>
                <li>Accept that submitting your information does not guarantee placement or employment</li>
              </ul>
            </div>

            <div id="clients" className="scroll-mt-32 mb-20">
              <h2>4. Client Terms</h2>
              <p>By engaging MaxEra Talent&apos;s services, clients agree to:</p>
              <ul>
                <li>Use candidate data exclusively for legitimate hiring and recruitment purposes</li>
                <li>Maintain strict confidentiality of all candidate profiles and information shared</li>
                <li>Comply with all applicable employment, data protection, and anti-discrimination laws in their jurisdiction</li>
                <li>Not share, sell, or otherwise disclose candidate data to third parties without prior consent</li>
                <li>Promptly notify MaxEra Talent of any data breach or suspected misuse of candidate information</li>
              </ul>
            </div>

            <div id="outreach" className="scroll-mt-32 mb-20">
              <h2>5. Outreach & Communication</h2>
              <p>You acknowledge and agree that:</p>
              <ul>
                <li>MaxEra Talent may contact businesses and professionals for legitimate recruitment and business development purposes</li>
                <li>All communications comply with applicable laws including GDPR, India&apos;s DPDP Act, CAN-SPAM Act, and other applicable communication laws</li>
                <li>Recipients may opt out of future communications at any time using the unsubscribe mechanism provided in every communication</li>
                <li>We will honour all opt-out requests promptly</li>
              </ul>
            </div>

            <div id="disclaimer" className="scroll-mt-32 mb-20">
              <h2>6. Data Usage Disclaimer</h2>
              <p>
                MaxEra Talent acts as an intermediary, facilitating connections between candidates and employers. We operate as a Data Fiduciary under India&apos;s DPDP Act and as a Data Controller or Data Processor (as applicable) under GDPR.
              </p>
              <p>
                The final use of candidate data for employment decisions rests with the hiring organisation. Clients are independently responsible for ensuring their use of candidate data complies with all applicable laws.
              </p>
            </div>

            <div id="breach" className="scroll-mt-32 mb-20">
              <h2>7. Data Breach Responsibility</h2>
              <p>In the event of a data breach involving candidate or client information:</p>
              <ul>
                <li>MaxEra Talent will notify affected parties and relevant regulatory authorities as required under applicable law (including GDPR, DPDP Act, and applicable US state laws)</li>
                <li>Clients must immediately notify MaxEra Talent if they become aware of any breach, loss, or misuse of candidate data shared by us</li>
                <li>Both parties are responsible for implementing reasonable security measures to protect shared data</li>
              </ul>
            </div>

            <div id="ip" className="scroll-mt-32 mb-20">
              <h2>8. Intellectual Property</h2>
              <p>
                All content, branding, website materials, and proprietary tools created by MaxEra Talent are the exclusive intellectual property of MaxEra Talent and are protected by applicable copyright, trademark, and intellectual property laws. No content may be reproduced, distributed, or used without prior written permission.
              </p>
            </div>

            <div id="liability" className="scroll-mt-32 mb-20">
              <h2>9. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, MaxEra Talent is not responsible for:</p>
              <ul>
                <li>Hiring decisions made by client organisations</li>
                <li>Employment outcomes for candidates</li>
                <li>Any indirect, consequential, incidental, or punitive damages arising from the use of our services</li>
                <li>Accuracy of third-party data sources used in sourcing activities</li>
              </ul>
              <p>Our total liability in any matter arising from or related to these Terms shall not exceed the fees paid by the client in the three (3) months preceding the claim.</p>
            </div>

            <div id="law" className="scroll-mt-32 mb-20">
              <h2>10. Governing Law & Jurisdiction</h2>
              <p>These Terms shall be governed by and construed in accordance with the following:</p>
              <ul>
                <li><strong>US clients and candidates:</strong> applicable US federal and state laws (including the laws of the state in which the client is incorporated or operates)</li>
                <li><strong>EU / EEA data subjects:</strong> GDPR and applicable EU member state laws</li>
                <li><strong>India operations and data principals:</strong> Indian law, including the DPDP Act 2023 and DPDP Rules 2025</li>
              </ul>
              <p>Any disputes arising from these Terms shall be resolved in the courts of the applicable jurisdiction as determined above, subject to any mandatory arbitration or dispute resolution requirements under local law.</p>
            </div>

            <div id="termination" className="scroll-mt-32 mb-20">
              <h2>11. Termination</h2>
              <p>MaxEra Talent reserves the right to suspend or terminate access to our services, with or without notice, in the event of:</p>
              <ul>
                <li>Misuse of our platform, data, or services</li>
                <li>Breach of these Terms by a candidate or client</li>
                <li>Fraudulent, misleading, or illegal activity</li>
              </ul>
              <p>Upon termination, all data handling obligations continue to apply as set out in our Privacy Policy.</p>
            </div>

            <div id="changes" className="scroll-mt-32 mb-20">
              <h2>12. Changes to Terms</h2>
              <p>
                We may update these Terms of Service at any time. Material changes will be communicated via email or a prominent notice on our website. Continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div id="contact" className="scroll-mt-32 mb-20">
              <h2>13. Contact Information</h2>
              <p><strong>MaxEra Talent</strong><br />Email: MEvans@maxeratalent.com<br />Website: www.maxeratalent.com</p>
              <div className="pt-8 border-t border-gray-100">
                <p className="text-xs font-black uppercase tracking-widest text-maxera-red mb-2">Last Updated</p>
                <p className="text-sm font-bold text-maxera-dark">May 1, 2026</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-maxera-dark py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
          <Gavel className="text-maxera-red mx-auto mb-8" size={32} />
          <h2 className="text-3xl font-heading font-black text-white mb-6 uppercase tracking-tighter">Legal Inquiries</h2>
          <p className="text-white/50 max-w-xl mx-auto font-medium mb-10">
            For any questions regarding these Terms of Service or our legal framework, please contact our legal representative.
          </p>
          <a href="mailto:MEvans@maxeratalent.com" className="bg-maxera-red text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-maxera-red transition-all inline-block">
            Contact Mark Evans
          </a>
        </div>
      </section>
    </div>
  );
}
