import type { Metadata } from "next";
import BusinessOpsClient from "./_businessopsClient";

export const metadata: Metadata = {
  title: "Business Operations Staffing",
  description:
    "Staffing solutions for business operations, admin, and corporate functions. Maxera Talent places operations managers, executive assistants, HR professionals, and business analysts.",
  keywords: ["business operations staffing", "admin hiring", "operations manager recruitment", "corporate staffing", "HR staffing", "business analyst hiring"],
  openGraph: { title: "Business Operations Staffing | Maxera Talent", description: "Operations, admin, and corporate function staffing for lean, high-performing teams.", url: "https://maxeratalent.com/industries/business-ops" },
  alternates: { canonical: "https://maxeratalent.com/industries/business-ops" },
};

export default function BusinessOps() { return <BusinessOpsClient />; }
