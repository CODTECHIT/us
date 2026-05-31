import type { Metadata } from "next";
import ContractStaffingClient from "./_contractstaffingClient";

export const metadata: Metadata = {
  title: "Contract Staffing",
  description:
    "Flexible staffing solutions for short-term projects and immediate workforce requirements. Pre-vetted candidates ready for rapid deployment with flexible scaling options.",
  keywords: [
    "contract staffing",
    "temporary staffing",
    "short-term hiring",
    "flexible workforce",
    "contract workers",
    "project staffing",
  ],
  openGraph: {
    title: "Contract Staffing | Maxera Talent",
    description:
      "Flexible staffing for short-term projects. Pre-vetted candidates ready for immediate deployment.",
    url: "https://maxeratalent.com/services/contract-staffing",
  },
  alternates: { canonical: "https://maxeratalent.com/services/contract-staffing" },
};

export default function ContractStaffing() {
  return <ContractStaffingClient />;
}
