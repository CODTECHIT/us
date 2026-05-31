import type { Metadata } from "next";
import OffshoreSolutionsClient from "./_offshoresolutionsClient";

export const metadata: Metadata = {
  title: "Offshore Talent Solutions",
  description:
    "Access skilled global talent pools to build remote or offshore teams. Optimize costs while maintaining quality, scalability, and 24/7 operational support.",
  keywords: [
    "offshore talent",
    "remote team building",
    "global staffing",
    "offshore recruitment",
    "remote workforce",
    "cost-effective hiring",
    "international staffing",
  ],
  openGraph: {
    title: "Offshore Talent Solutions | Maxera Talent",
    description:
      "Build scalable remote and offshore teams with access to global talent pools. Cost optimization without quality compromise.",
    url: "https://maxeratalent.com/services/offshore-solutions",
  },
  alternates: { canonical: "https://maxeratalent.com/services/offshore-solutions" },
};

export default function OffshoreSolutions() {
  return <OffshoreSolutionsClient />;
}
