import type { Metadata } from "next";
import PermanentHiringClient from "./_permanenthiringClient";

export const metadata: Metadata = {
  title: "Permanent Staffing",
  description:
    "End-to-end hiring support for full-time IT and non-IT roles. Strong alignment between candidate skills, role expectations, and long-term fit for lasting placements.",
  keywords: [
    "permanent staffing",
    "full-time hiring",
    "permanent placement",
    "IT permanent jobs",
    "non-IT staffing",
    "executive permanent hiring",
  ],
  openGraph: {
    title: "Permanent Staffing (IT & Non-IT) | Maxera Talent",
    description:
      "End-to-end permanent hiring for IT and non-IT roles with rigorous skill and long-term fit validation.",
    url: "https://maxeratalent.com/services/permanent-hiring",
  },
  alternates: { canonical: "https://maxeratalent.com/services/permanent-hiring" },
};

export default function PermanentHiring() {
  return <PermanentHiringClient />;
}
