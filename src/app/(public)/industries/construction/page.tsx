import type { Metadata } from "next";
import ConstructionClient from "./_constructionClient";

export const metadata: Metadata = {
  title: "Construction Industry Staffing",
  description:
    "Reliable workforce solutions for the construction industry. Maxera Talent sources site workers, foremen, project managers, and specialist trades for residential and commercial projects.",
  keywords: ["construction staffing", "construction workers hiring", "trades staffing", "site workforce", "project manager recruitment"],
  openGraph: { title: "Construction Staffing | Maxera Talent", description: "Skilled workforce solutions for construction — trades, site workers, and project leadership.", url: "https://maxeratalent.com/industries/construction" },
  alternates: { canonical: "https://maxeratalent.com/industries/construction" },
};

export default function Construction() { return <ConstructionClient />; }
