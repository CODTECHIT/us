import type { Metadata } from "next";
import TalentBenchmarkingClient from "./_talentbenchmarkingClient";

export const metadata: Metadata = {
  title: "Talent Benchmarking",
  description:
    "Talent benchmarking services from Maxera Talent. Assess your existing workforce and compare against industry standards to identify skill gaps, competency levels, and improvement opportunities.",
  keywords: [
    "talent benchmarking",
    "workforce assessment",
    "competency benchmarking",
    "skill gap analysis",
    "workforce evaluation",
    "HR benchmarking",
  ],
  openGraph: {
    title: "Talent Benchmarking | Maxera Talent",
    description:
      "Workforce benchmarking and competency assessment to identify skill gaps and drive team performance.",
    url: "https://maxeratalent.com/services/talent-benchmarking",
  },
  alternates: { canonical: "https://maxeratalent.com/services/talent-benchmarking" },
};

export default function TalentBenchmarking() {
  return <TalentBenchmarkingClient />;
}
