import type { Metadata } from "next";
import FinanceClient from "./_financeClient";

export const metadata: Metadata = {
  title: "Finance Industry Staffing",
  description:
    "Recruitment specialists for banking, financial services, and accounting. Maxera Talent places CFOs, analysts, controllers, compliance officers, and financial advisors.",
  keywords: ["finance staffing", "banking recruitment", "financial services hiring", "accounting staffing", "CFO search", "compliance hiring"],
  openGraph: { title: "Finance Staffing | Maxera Talent", description: "Expert finance and banking recruitment for CFOs, analysts, controllers, and compliance roles.", url: "https://maxeratalent.com/industries/finance" },
  alternates: { canonical: "https://maxeratalent.com/industries/finance" },
};

export default function Finance() { return <FinanceClient />; }
