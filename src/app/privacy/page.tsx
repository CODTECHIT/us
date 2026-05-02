"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, FileText, Globe, Mail, ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { title: "1. Information We Collect", id: "collect" },
    { title: "2. Legal Basis for Processing", id: "legal" },
    { title: "3. How We Use Your Information", id: "use" },
    { title: "4. Data Sharing", id: "sharing" },
    { title: "5. International Data Transfers", id: "transfers" },
    { title: "6. Data Retention", id: "retention" },
    { title: "7. Your Rights", id: "rights" },
    { title: "8. Data Breach Notification", id: "breach" },
    { title: "9. Email Outreach Compliance", id: "outreach" },
    { title: "10. Data Security", id: "security" },
    { title: "11. Cookies & Tracking", id: "cookies" },
    { title: "12. Third-Party Tools", id: "tools" },
    { title: "13. Multilingual Access", id: "multilingual" },
    { title: "14. Data Protection Officer", id: "dpo" },
    { title: "15. Updates to This Policy", id: "updates" },
    { title: "16. Contact Information", id: "contact" },
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
              Legal & Compliance
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Privacy <span className="text-maxera-red">Policy</span>
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center">
                <Globe size={14} className="mr-2 text-maxera-red" />
                Global Version — US | EU | India
              </div>
              <div className="flex items-center">
                <FileText size={14} className="mr-2 text-maxera-red" />
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
            <h4 className="text-maxera-dark font-black uppercase tracking-widest text-xs mb-8 pb-4 border-b-2 border-maxera-red inline-block">Table of Contents</h4>
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
            
            <div className="bg-maxera-gray p-8 sm:p-12 mb-16 border-l-8 border-maxera-red">
              <p className="m-0 text-xl font-bold leading-relaxed text-maxera-dark uppercase tracking-tight">
                MaxEra Talent (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides staffing and recruitment services globally. This Privacy Policy explains how we collect, use, store, and protect personal data in compliance with GDPR, India&apos;s DPDP Act, and applicable US privacy laws.
              </p>
              <p className="mt-4 mb-0 text-gray-500 font-medium">
                This policy applies to candidates, clients, and individuals whose data we may encounter in the course of providing our recruitment services.
              </p>
            </div>

            <div id="collect" className="scroll-mt-32 mb-20">
              <h2>1. Information We Collect</h2>
              
              <h3>a. Candidate Data</h3>
              <ul>
                <li>Full name, email address, phone number</li>
                <li>Resume/CV, employment history, educational background</li>
                <li>Skills, certifications, professional qualifications</li>
                <li>Work authorization status and location preferences</li>
                <li>Interview notes and assessment records</li>
              </ul>

              <h3>b. Client Data</h3>
              <ul>
                <li>Name, company name, email address, phone number</li>
                <li>Hiring requirements, role specifications, and business communications</li>
              </ul>

              <h3>c. Sourced / Publicly Available Data</h3>
              <p>We may collect publicly available professional data from:</p>
              <ul>
                <li>LinkedIn and professional networking platforms</li>
                <li>Job boards and career websites</li>
                <li>Company websites and public directories</li>
                <li>Professional databases and sourcing platforms (e.g., Apollo)</li>
              </ul>
              <p className="italic bg-gray-50 p-4 border-l-4 border-gray-200">
                When we collect data from public sources and contact individuals, we will inform them of the source of their data and our purposes at or before first contact, in accordance with GDPR Article 14 requirements.
              </p>
            </div>

            <div id="legal" className="scroll-mt-32 mb-20">
              <h2>2. Legal Basis for Processing</h2>
              
              <h4>EU / EEA (GDPR) — Legal Bases</h4>
              <p>For individuals in the EU/EEA, we process personal data under the following legal bases:</p>
              <ul>
                <li><strong>Consent</strong> — for candidate submissions, opt-ins, and newsletter communications</li>
                <li><strong>Legitimate Interests</strong> — for recruitment outreach, sourcing, and business development, where our interests are not overridden by your rights</li>
                <li><strong>Contractual Necessity</strong> — for fulfilling obligations under client and candidate agreements</li>
                <li><strong>Legal Obligations</strong> — where required by applicable law</li>
              </ul>

              <h4>India (DPDP Act 2023 / DPDP Rules 2025) — Legal Bases</h4>
              <p>For individuals in India, we process personal data under the following legal bases as defined in the DPDP Act. Please note that the DPDP Act does not recognise &apos;legitimate interests&apos; or &apos;contractual necessity&apos; as standalone grounds for processing:</p>
              <ul>
                <li><strong>Consent</strong> — the primary basis; freely given, specific, informed, and unambiguous consent obtained from the data principal before processing</li>
                <li><strong>Certain Legitimate Uses (Section 7)</strong> — including processing necessary for employment-related purposes, fulfilment of legal or judicial obligations, and other specified legitimate uses defined under the Act</li>
              </ul>
              <p className="text-sm italic">Note: Data principals in India may withdraw consent at any time. Withdrawal of consent will not affect the lawfulness of processing before withdrawal. Where consent is withdrawn, we will cease processing unless a legitimate use under Section 7 applies.</p>

              <h4>United States — Legal Bases</h4>
              <p>For individuals in the US, we process personal data based on:</p>
              <ul>
                <li>Consent — where explicitly provided</li>
                <li>Legitimate business purposes — for recruitment and staffing activities</li>
                <li>Contractual necessity — to fulfil service agreements</li>
              </ul>
            </div>

            <div id="use" className="scroll-mt-32 mb-20">
              <h2>3. How We Use Your Information</h2>
              <p>We use personal data for the following purposes:</p>
              <ul>
                <li>Matching candidates with relevant job opportunities</li>
                <li>Sharing candidate profiles with potential employers (with appropriate notice)</li>
                <li>Conducting outreach for hiring or business development</li>
                <li>Communicating updates, opportunities, and service information</li>
                <li>Improving internal processes and conducting analytics</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Detecting, investigating, and reporting data breaches as required by law</li>
              </ul>
            </div>

            <div id="sharing" className="scroll-mt-32 mb-20">
              <h2>4. Data Sharing</h2>
              <p>We may share personal data in the following circumstances:</p>
              <ul>
                <li>With clients and potential employers — for recruitment and placement purposes</li>
                <li>With trusted vendors — such as CRM, ATS, and email tools (e.g., Apollo), under strict confidentiality and data processing agreements</li>
                <li>With legal or regulatory authorities — when required by law or court order</li>
              </ul>
              <p className="font-black text-maxera-red">We do NOT sell personal data to any third parties.</p>
              <p>All third-party vendors who process personal data on our behalf are bound by contractual obligations to process data only on our instructions and in accordance with applicable data protection laws.</p>
            </div>

            <div id="transfers" className="scroll-mt-32 mb-20">
              <h2>5. International Data Transfers</h2>
              <p>MaxEra Talent operates globally and personal data may be transferred between the United States, India, and the European Union.</p>
              <p>For transfers from the EU/EEA, we rely on:</p>
              <ul>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Other appropriate safeguards as required by GDPR Chapter V</li>
              </ul>
              <p>For transfers from India, we comply with any applicable cross-border data transfer restrictions under the DPDP Act and DPDP Rules 2025, including requirements regarding countries approved for transfer by the Government of India.</p>
              <p>We implement appropriate technical and organisational security measures for all international data transfers.</p>
            </div>

            <div id="retention" className="scroll-mt-32 mb-20">
              <h2>6. Data Retention</h2>
              <p>We retain personal data for the following periods:</p>
              <ul>
                <li>Active recruitment and future opportunities: typically 2 to 5 years from the date of last interaction</li>
                <li>Minimum 1 year: retained for breach detection, investigation, and regulatory compliance purposes, as required under DPDP Rules 2025</li>
                <li>Longer periods: where required by applicable law or legal proceedings</li>
              </ul>
              <p>Upon withdrawal of consent or a valid deletion request, we will erase or anonymise your personal data unless we are required to retain it by law or for the resolution of disputes.</p>
            </div>

            <div id="rights" className="scroll-mt-32 mb-20">
              <h2>7. Your Rights</h2>
              
              <h4>EU / EEA (GDPR Rights)</h4>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate or incomplete data</li>
                <li>Right to erasure (&quot;Right to be Forgotten&quot;)</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge a complaint with your national supervisory authority</li>
              </ul>

              <h4>India (DPDP Act 2023 Rights)</h4>
              <ul>
                <li>Right to access information about your personal data</li>
                <li>Right to correct, update, or complete your personal data</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to erasure of personal data upon withdrawal of consent (subject to legal obligations)</li>
                <li>Right to grievance redressal — you may submit a complaint to our Grievance Officer or to the Data Protection Board of India</li>
                <li>Right to nominate a representative — you may nominate another individual to exercise your data rights on your behalf in the event of your death or incapacity</li>
              </ul>

              <h4>United States (CCPA-Style Rights Where Applicable)</h4>
              <ul>
                <li>Right to know what personal data is collected and how it is used</li>
                <li>Right to request deletion of personal data</li>
                <li>Right to opt-out of the sale of personal data (we do not sell data)</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>

              <h4>How to Exercise Your Rights</h4>
              <p>To exercise any of the rights listed above, please contact our Data Protection / Grievance Officer:</p>
              <div className="bg-maxera-dark p-8 text-white">
                <p className="m-0"><strong>Email:</strong> MEvans@maxeratalent.com</p>
                <p className="m-0"><strong>Website:</strong> www.maxeratalent.com</p>
              </div>
              <p className="text-sm mt-4">We will respond to all verified requests within 30 days (GDPR) or a reasonable period as required under applicable law. For India data principals, we will respond within the timeframes set out under DPDP Rules 2025.</p>
            </div>

            <div id="breach" className="scroll-mt-32 mb-20">
              <h2>8. Data Breach Notification</h2>
              <p>In the event of a personal data breach, MaxEra Talent will:</p>
              <ul>
                <li>Notify the relevant supervisory authority (e.g., the Data Protection Board of India, or the applicable EU supervisory authority) without undue delay — and within 72 hours where feasible under GDPR — upon becoming aware of a breach</li>
                <li>Notify affected individuals where the breach is likely to result in a high risk to their rights and freedoms</li>
                <li>Maintain records of all data breaches, including those not reported to authorities, as required by law</li>
              </ul>
              <p className="bg-red-50 p-4 border-l-4 border-maxera-red text-maxera-dark font-bold">
                Under India&apos;s DPDP Act and DPDP Rules 2025, all personal data breaches must be reported to the Data Protection Board of India, regardless of their severity or damage caused.
              </p>
            </div>

            <div id="outreach" className="scroll-mt-32 mb-20">
              <h2>9. Email Outreach & Communication Compliance</h2>
              <p>We may contact individuals regarding job opportunities or business services based on:</p>
              <ul>
                <li>Consent — where explicitly provided</li>
                <li>Legitimate interests (EU/EEA) or certain legitimate uses (India) — for B2B outreach using publicly available professional information</li>
              </ul>
              <p>All outreach communications include:</p>
              <ul>
                <li>Clear identification of MaxEra Talent as the sender</li>
                <li>A clear business purpose for the communication</li>
                <li>An easy and immediate option to opt-out or unsubscribe</li>
              </ul>
              <p>We honour all opt-out requests promptly and maintain suppression lists to prevent further contact. All email communications comply with applicable laws including GDPR, CAN-SPAM Act, and India&apos;s DPDP Act.</p>
            </div>

            <div id="security" className="scroll-mt-32 mb-20">
              <h2>10. Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or disclosure, including:</p>
              <ul>
                <li>Access controls and role-based access management with regular reviews</li>
                <li>Encryption, obfuscation, and masking of personal data where appropriate</li>
                <li>Secure storage systems and data backups</li>
                <li>Regular security audits and assessments</li>
                <li>Contractual provisions with data processors to safeguard personal data</li>
              </ul>
              <p>However, no information system is completely secure. If you have reason to believe your data has been compromised, please contact us immediately at MEvans@maxeratalent.com.</p>
            </div>

            <div id="cookies" className="scroll-mt-32 mb-20">
              <h2>11. Cookies & Tracking</h2>
              <p>We use cookies and similar tracking technologies to:</p>
              <ul>
                <li>Analyse website traffic and user behaviour</li>
                <li>Improve user experience and website functionality</li>
              </ul>
              <p>We obtain consent for non-essential cookies in accordance with applicable law. Users can control and manage cookies via their browser settings. Disabling cookies may affect certain website functionality.</p>
            </div>

            <div id="tools" className="scroll-mt-32 mb-20">
              <h2>12. Third-Party Tools</h2>
              <p>We use the following categories of third-party tools, each bound by data processing agreements:</p>
              <ul>
                <li>Applicant Tracking Systems (ATS) and CRM platforms</li>
                <li>Email outreach and communication tools (e.g., Apollo)</li>
                <li>Analytics and website performance tools</li>
              </ul>
              <p>These providers process personal data solely on our instructions and under contractual obligations consistent with applicable data protection laws.</p>
            </div>

            <div id="multilingual" className="scroll-mt-32 mb-20">
              <h2>13. Multilingual Access</h2>
              <p>In compliance with India&apos;s DPDP Act, we are committed to making privacy information accessible. Key privacy notices and consent requests are available, or can be provided upon request, in English and in any of the 22 scheduled languages of the Indian Constitution where applicable.</p>
              <p>To request a translated version, please contact us at MEvans@maxeratalent.com.</p>
            </div>

            <div id="dpo" className="scroll-mt-32 mb-20">
              <h2>14. Data Protection Officer & Grievance Officer</h2>
              <p>MaxEra Talent has designated a responsible contact to handle data privacy queries, rights requests, and grievances across all jurisdictions.</p>
              <p><strong>Mark Evans</strong><br />Email: MEvans@maxeratalent.com<br />Website: www.maxeratalent.com</p>
              <p className="text-sm">India data principals may also submit complaints directly to the Data Protection Board of India if they are not satisfied with our response to a grievance.</p>
            </div>

            <div id="updates" className="scroll-mt-32 mb-20">
              <h2>15. Updates to This Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in law, our practices, or our services. Updated policies will be posted on our website with a revised effective date. Where required by law, we will provide direct notice of material changes.</p>
            </div>

            <div id="contact" className="scroll-mt-32 mb-20">
              <h2>16. Contact Information</h2>
              <p><strong>MaxEra Talent</strong><br />Email: MEvans@maxeratalent.com<br />Website: www.maxeratalent.com</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-maxera-gray py-20 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-soft mb-8">
            <Lock className="text-maxera-red" size={24} />
          </div>
          <h2 className="text-3xl font-heading font-black text-maxera-dark mb-6 uppercase tracking-tighter">Your Data is Secure</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium mb-10">
            For any queries regarding our privacy practices or to request data deletion, please reach out to our compliance team.
          </p>
          <a href="mailto:MEvans@maxeratalent.com" className="bg-maxera-red text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-maxera-dark transition-all inline-block shadow-lg">
            Contact Compliance
          </a>
        </div>
      </section>
    </div>
  );
}
