import type { Metadata } from "next";
import ManufacturingClient from "./_manufacturingClient";

export const metadata: Metadata = {
  title: "Manufacturing Industry Staffing",
  description:
    "End-to-end recruitment for the manufacturing sector. Skilled operators, engineers, supervisors, and plant managers placed with speed and reliability by Maxera Talent.",
  keywords: ["manufacturing staffing", "production staffing", "factory workers", "plant manager hiring", "manufacturing recruitment"],
  openGraph: { title: "Manufacturing Staffing | Maxera Talent", description: "Skilled workforce solutions for manufacturing — operators, engineers, and leadership roles.", url: "https://maxeratalent.com/industries/manufacturing" },
  alternates: { canonical: "https://maxeratalent.com/industries/manufacturing" },
};

export default function Manufacturing() { return <ManufacturingClient />; }
