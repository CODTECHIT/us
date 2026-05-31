import type { Metadata } from "next";
import TransportationClient from "./_transportationClient";

export const metadata: Metadata = {
  title: "Transportation Industry Staffing",
  description:
    "Workforce solutions for transportation, freight, and fleet operations. Maxera Talent places drivers, dispatchers, fleet managers, and logistics coordinators.",
  keywords: ["transportation staffing", "driver recruitment", "freight staffing", "fleet management hiring", "transport logistics staffing"],
  openGraph: { title: "Transportation Staffing | Maxera Talent", description: "Reliable workforce solutions for transportation, freight, and fleet operations.", url: "https://maxeratalent.com/industries/transportation" },
  alternates: { canonical: "https://maxeratalent.com/industries/transportation" },
};

export default function Transportation() { return <TransportationClient />; }
