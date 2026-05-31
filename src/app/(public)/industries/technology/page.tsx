import type { Metadata } from "next";
import TechnologyClient from "./_technologyClient";

export const metadata: Metadata = {
  title: "Technology Industry Staffing",
  description:
    "Specialized recruitment for the technology industry. Maxera Talent connects businesses with top software developers, cloud engineers, cybersecurity professionals, and IT leaders.",
  keywords: ["technology staffing", "tech recruitment", "software developer hiring", "IT industry staffing", "cloud hiring"],
  openGraph: { title: "Technology Staffing | Maxera Talent", description: "Expert tech recruitment for developers, cloud, and IT leadership roles.", url: "https://maxeratalent.com/industries/technology" },
  alternates: { canonical: "https://maxeratalent.com/industries/technology" },
};

export default function Technology() { return <TechnologyClient />; }
