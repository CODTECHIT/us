import type { Metadata } from "next";
import AboutClient from "./_AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Maxera Talent's story, mission, and core values. We bridge talent with business outcomes through speed, precision, and reliability in recruitment and staffing.",
  keywords: [
    "about Maxera Talent",
    "recruitment agency story",
    "staffing company mission",
    "talent acquisition values",
    "workforce solutions team",
  ],
  openGraph: {
    title: "About Us | Maxera Talent",
    description:
      "Bridging talent with business outcomes through speed, precision, and reliability. Learn about Maxera Talent's mission, vision, and core values.",
    url: "https://maxeratalent.com/about",
  },
  alternates: {
    canonical: "https://maxeratalent.com/about",
  },
};

export default function About() {
  return <AboutClient />;
}
