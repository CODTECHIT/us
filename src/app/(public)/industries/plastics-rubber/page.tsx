import type { Metadata } from "next";
import PlasticsRubberClient from "./_plasticsrubberClient";

export const metadata: Metadata = {
  title: "Plastics & Rubber Industry Staffing",
  description:
    "Specialized workforce solutions for plastics and rubber manufacturing. Maxera Talent sources operators, process engineers, quality technicians, and plant managers for this sector.",
  keywords: ["plastics staffing", "rubber industry recruitment", "plastics manufacturing workforce", "injection moulding staffing", "polymer industry hiring"],
  openGraph: { title: "Plastics & Rubber Staffing | Maxera Talent", description: "Specialized recruitment for the plastics and rubber manufacturing sector.", url: "https://maxeratalent.com/industries/plastics-rubber" },
  alternates: { canonical: "https://maxeratalent.com/industries/plastics-rubber" },
};

export default function PlasticsRubber() { return <PlasticsRubberClient />; }
