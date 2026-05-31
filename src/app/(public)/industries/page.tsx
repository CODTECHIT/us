import type { Metadata } from "next";
import IndustriesClient from "./_industriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Maxera Talent provides specialized staffing and recruitment expertise across technology, healthcare, manufacturing, logistics, automotive, construction, engineering, finance, and more.",
  keywords: [
    "industries staffing",
    "technology recruitment",
    "healthcare staffing",
    "manufacturing recruitment",
    "logistics staffing",
    "automotive staffing",
    "construction recruitment",
    "finance staffing",
  ],
  openGraph: {
    title: "Industries We Serve | Maxera Talent",
    description:
      "Specialized staffing expertise across 13+ industries including technology, healthcare, manufacturing, and logistics.",
    url: "https://maxeratalent.com/industries",
  },
  alternates: {
    canonical: "https://maxeratalent.com/industries",
  },
};

export default function Industries() {
  return <IndustriesClient />;
}
