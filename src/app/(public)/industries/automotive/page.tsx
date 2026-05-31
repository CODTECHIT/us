import type { Metadata } from "next";
import AutomotiveClient from "./_automotiveClient";

export const metadata: Metadata = {
  title: "Automotive Industry Staffing",
  description:
    "Staffing solutions for automotive OEMs, suppliers, and dealerships. Maxera Talent places engineers, technicians, production workers, and quality specialists across the automotive sector.",
  keywords: ["automotive staffing", "auto industry recruitment", "automotive technicians", "OEM staffing", "auto parts staffing"],
  openGraph: { title: "Automotive Staffing | Maxera Talent", description: "Specialized recruitment for automotive OEMs, suppliers, and service networks.", url: "https://maxeratalent.com/industries/automotive" },
  alternates: { canonical: "https://maxeratalent.com/industries/automotive" },
};

export default function Automotive() { return <AutomotiveClient />; }
