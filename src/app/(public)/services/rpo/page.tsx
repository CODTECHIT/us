import type { Metadata } from "next";
import RPOClient from "./_rpoClient";

export const metadata: Metadata = {
  title: "RPO – Recruitment Process Outsourcing",
  description:
    "Dedicated Recruitment Process Outsourcing (RPO) acting as an extension of your team. Structured hiring pipelines, comprehensive reporting, and managed ongoing recruitment.",
  keywords: [
    "RPO",
    "recruitment process outsourcing",
    "outsourced recruitment",
    "managed hiring",
    "HR outsourcing",
    "dedicated recruiter",
    "talent pipeline",
  ],
  openGraph: {
    title: "RPO Services | Maxera Talent",
    description:
      "Recruitment Process Outsourcing — dedicated hiring support with structured pipelines and comprehensive reporting.",
    url: "https://maxeratalent.com/services/rpo",
  },
  alternates: { canonical: "https://maxeratalent.com/services/rpo" },
};

export default function RPO() {
  return <RPOClient />;
}
