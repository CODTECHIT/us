import type { Metadata } from "next";
import CulturalAlignmentClient from "./_culturalalignmentClient";

export const metadata: Metadata = {
  title: "Cultural Alignment",
  description:
    "Ensure new hires align with your organizational culture and values. Maxera Talent's cultural alignment service assesses behavioral fit alongside technical skills for long-term retention.",
  keywords: [
    "cultural alignment hiring",
    "culture fit recruitment",
    "behavioral assessment",
    "values-based hiring",
    "organizational culture fit",
    "retention hiring",
  ],
  openGraph: {
    title: "Cultural Alignment | Maxera Talent",
    description:
      "Behavioral and cultural fit assessment for long-term retention. We match values, not just skills.",
    url: "https://maxeratalent.com/services/cultural-alignment",
  },
  alternates: { canonical: "https://maxeratalent.com/services/cultural-alignment" },
};

export default function CulturalAlignment() {
  return <CulturalAlignmentClient />;
}
