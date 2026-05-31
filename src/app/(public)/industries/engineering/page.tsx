import type { Metadata } from "next";
import EngineeringClient from "./_engineeringClient";

export const metadata: Metadata = {
  title: "Engineering Industry Staffing",
  description:
    "Staffing expertise for engineering disciplines including mechanical, civil, electrical, and chemical engineering. Maxera Talent places engineers from graduate level to senior leadership.",
  keywords: ["engineering staffing", "mechanical engineer hiring", "civil engineer recruitment", "electrical engineer staffing", "engineering jobs"],
  openGraph: { title: "Engineering Staffing | Maxera Talent", description: "Specialized recruitment for mechanical, civil, electrical, and chemical engineers at all levels.", url: "https://maxeratalent.com/industries/engineering" },
  alternates: { canonical: "https://maxeratalent.com/industries/engineering" },
};

export default function Engineering() { return <EngineeringClient />; }
