import type { Metadata } from "next";
import HealthcareClient from "./_healthcareClient";

export const metadata: Metadata = {
  title: "Healthcare Industry Staffing",
  description:
    "Specialized recruitment for healthcare organizations. Maxera Talent places clinical, administrative, and allied health professionals with precision and care.",
  keywords: ["healthcare staffing", "medical recruitment", "clinical hiring", "allied health staffing", "hospital staffing"],
  openGraph: { title: "Healthcare Staffing | Maxera Talent", description: "Precision healthcare recruitment for clinical, administrative, and allied health roles.", url: "https://maxeratalent.com/industries/healthcare" },
  alternates: { canonical: "https://maxeratalent.com/industries/healthcare" },
};

export default function Healthcare() { return <HealthcareClient />; }
