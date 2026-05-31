import type { Metadata } from "next";
import EmployersClient from "./_employersClient";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Partner with Maxera Talent for precision workforce solutions. 72-hour rapid response, 90-day placement guarantee, and market-driven intelligence for hiring managers and HR leaders.",
  keywords: [
    "hire talent",
    "recruitment partner",
    "employer staffing solutions",
    "workforce hiring",
    "talent acquisition partner",
    "HR outsourcing",
    "executive search employer",
  ],
  openGraph: {
    title: "For Employers | Maxera Talent",
    description:
      "Convert talent gaps into institutional growth with our precision hiring unit. 72-hour rapid response and 90-day placement guarantee.",
    url: "https://maxeratalent.com/employers",
  },
  alternates: {
    canonical: "https://maxeratalent.com/employers",
  },
};

export default function Employers() {
  return <EmployersClient />;
}
