import type { Metadata } from "next";
import LogisticsClient from "./_logisticsClient";

export const metadata: Metadata = {
  title: "Logistics Industry Staffing",
  description:
    "Workforce solutions for logistics, supply chain, and distribution operations. Maxera Talent deploys warehouse, driver, and operations talent at scale and speed.",
  keywords: ["logistics staffing", "supply chain recruitment", "warehouse hiring", "driver staffing", "distribution staffing"],
  openGraph: { title: "Logistics Staffing | Maxera Talent", description: "High-volume workforce solutions for logistics, supply chain, and distribution operations.", url: "https://maxeratalent.com/industries/logistics" },
  alternates: { canonical: "https://maxeratalent.com/industries/logistics" },
};

export default function Logistics() { return <LogisticsClient />; }
