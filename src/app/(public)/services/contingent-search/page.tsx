import type { Metadata } from "next";
import ContingentSearchClient from "./_contingentsearchClient";

export const metadata: Metadata = {
  title: "Contingent Search",
  description:
    "Contingent search services from Maxera Talent — flexible, results-based recruitment for specialized and executive roles with no upfront cost.",
  keywords: [
    "contingent search",
    "contingency recruitment",
    "results-based staffing",
    "flexible recruitment",
    "no upfront cost hiring",
  ],
  openGraph: {
    title: "Contingent Search | Maxera Talent",
    description:
      "Flexible, results-based recruitment for specialized and executive roles.",
    url: "https://maxeratalent.com/services/contingent-search",
  },
  alternates: { canonical: "https://maxeratalent.com/services/contingent-search" },
};

export default function ContingentSearch() {
  return <ContingentSearchClient />;
}
