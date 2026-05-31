import type { Metadata } from "next";
import ExecutiveSearchClient from "./_executivesearchClient";

export const metadata: Metadata = {
  title: "Executive Search",
  description:
    "C-suite and senior leadership search from Maxera Talent. We identify, assess, and place CEOs, CTOs, COOs, and VPs across industries through a confidential, precision-driven process.",
  keywords: ["executive search", "C-suite recruitment", "CEO search", "CTO recruitment", "senior leadership hiring", "executive headhunting", "VP hiring"],
  openGraph: { title: "Executive Search | Maxera Talent", description: "C-suite and senior leadership placement — confidential, precise, and results-driven executive search.", url: "https://maxeratalent.com/industries/executive-search" },
  alternates: { canonical: "https://maxeratalent.com/industries/executive-search" },
};

export default function ExecutiveSearch() { return <ExecutiveSearchClient />; }
