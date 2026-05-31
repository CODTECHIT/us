import type { Metadata } from "next";
import ServicesClient from "./_servicesClient";

export const metadata: Metadata = {
  title: "Recruitment Services",
  description:
    "Explore Maxera Talent's full range of staffing solutions: bulk hiring, IT staffing, contract staffing, permanent placement, RPO, passive sourcing, and offshore talent services.",
  keywords: [
    "recruitment services",
    "staffing solutions",
    "bulk hiring",
    "IT staffing",
    "RPO",
    "contract staffing",
    "permanent hiring",
    "offshore staffing",
  ],
  openGraph: {
    title: "Recruitment Services | Maxera Talent",
    description:
      "Staffing solutions built for speed, scale, and precision. Explore our full range of workforce services.",
    url: "https://maxeratalent.com/services",
  },
  alternates: {
    canonical: "https://maxeratalent.com/services",
  },
};

export default function Services() {
  return <ServicesClient />;
}
