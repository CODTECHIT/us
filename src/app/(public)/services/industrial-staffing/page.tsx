import type { Metadata } from "next";
import IndustrialStaffingClient from "./_industrialstaffingClient";

export const metadata: Metadata = {
  title: "Industrial Staffing",
  description:
    "Reliable blue-collar and industrial workforce solutions for construction, manufacturing, and logistics. Ground-level sourcing and skill validation for ready-to-work candidates.",
  keywords: [
    "industrial staffing",
    "blue-collar recruitment",
    "manufacturing staffing",
    "construction workforce",
    "logistics workforce",
    "blue-collar workers",
    "skilled trades hiring",
  ],
  openGraph: {
    title: "Blue-Collar & Industrial Staffing | Maxera Talent",
    description:
      "Reliable workforce solutions for construction, manufacturing, and logistics with ground-level sourcing and skill validation.",
    url: "https://maxeratalent.com/services/industrial-staffing",
  },
  alternates: { canonical: "https://maxeratalent.com/services/industrial-staffing" },
};

export default function IndustrialStaffing() {
  return <IndustrialStaffingClient />;
}
