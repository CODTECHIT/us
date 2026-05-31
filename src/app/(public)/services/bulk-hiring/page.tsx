import type { Metadata } from "next";
import BulkHiringClient from "./_bulkhiringClient";

export const metadata: Metadata = {
  title: "Bulk & Volume Hiring",
  description:
    "Rapid workforce deployment for large-scale hiring needs across logistics, operations, and industrial roles. Built for high-volume mandates with consistent delivery and fast turnaround.",
  keywords: [
    "bulk hiring",
    "volume recruitment",
    "large-scale hiring",
    "logistics staffing",
    "operations workforce",
    "rapid deployment",
    "high-volume hiring",
  ],
  openGraph: {
    title: "Bulk & Volume Hiring | Maxera Talent",
    description:
      "Scale without bottlenecks. Maxera Talent deploys 100+ hires per month with consistent quality across logistics and industrial sectors.",
    url: "https://maxeratalent.com/services/bulk-hiring",
  },
  alternates: { canonical: "https://maxeratalent.com/services/bulk-hiring" },
};

export default function BulkHiring() {
  return <BulkHiringClient />;
}
