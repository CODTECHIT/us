import type { Metadata } from "next";
import DirectHireSearchClient from "./_directhiresearchClient";

export const metadata: Metadata = {
  title: "Direct Hire Search",
  description:
    "Direct hire and retained executive search services from Maxera Talent. Dedicated, exclusive recruitment for senior leadership and specialized roles with guaranteed results.",
  keywords: [
    "direct hire search",
    "retained search",
    "executive recruitment",
    "leadership hiring",
    "direct placement",
    "senior executive search",
  ],
  openGraph: {
    title: "Direct Hire Search | Maxera Talent",
    description:
      "Dedicated executive search and direct hire services for senior leadership and specialized roles.",
    url: "https://maxeratalent.com/services/direct-hire-search",
  },
  alternates: { canonical: "https://maxeratalent.com/services/direct-hire-search" },
};

export default function DirectHireSearch() {
  return <DirectHireSearchClient />;
}
