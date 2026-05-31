import type { Metadata } from "next";
import PassiveSourcingClient from "./_passivesourcingClient";

export const metadata: Metadata = {
  title: "Passive Talent Sourcing",
  description:
    "Proactive engagement of high-quality candidates who are not actively job-seeking. Expand access to top-tier talent beyond traditional job boards through targeted outreach.",
  keywords: [
    "passive talent sourcing",
    "headhunting",
    "passive candidate recruitment",
    "talent outreach",
    "executive headhunting",
    "market mapping",
    "direct sourcing",
  ],
  openGraph: {
    title: "Passive Talent Sourcing | Maxera Talent",
    description:
      "Access to top-tier passive candidates through direct, confidential outreach — beyond traditional job boards.",
    url: "https://maxeratalent.com/services/passive-sourcing",
  },
  alternates: { canonical: "https://maxeratalent.com/services/passive-sourcing" },
};

export default function PassiveSourcing() {
  return <PassiveSourcingClient />;
}
