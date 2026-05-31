import type { Metadata } from "next";
import ITStaffingClient from "./_itstaffingClient";

export const metadata: Metadata = {
  title: "IT Staffing",
  description:
    "Specialized hiring for developers, cloud engineers, and technology professionals. Targeted sourcing and rigorous technical screening to ensure role-fit and faster closures.",
  keywords: [
    "IT staffing",
    "technology recruitment",
    "developer hiring",
    "cloud engineer staffing",
    "tech recruitment agency",
    "software developer jobs",
  ],
  openGraph: {
    title: "IT Staffing | Maxera Talent",
    description:
      "Specialized tech hiring for developers, cloud engineers, and IT professionals. Fast closure rates with technical screening.",
    url: "https://maxeratalent.com/services/it-staffing",
  },
  alternates: { canonical: "https://maxeratalent.com/services/it-staffing" },
};

export default function ITStaffing() {
  return <ITStaffingClient />;
}
