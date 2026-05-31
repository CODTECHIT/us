import type { Metadata } from "next";
import RetailClient from "./_retailClient";

export const metadata: Metadata = {
  title: "Retail Industry Staffing",
  description:
    "Staffing solutions for retail chains, e-commerce operations, and consumer brands. Maxera Talent places store managers, visual merchandisers, sales associates, and retail leaders.",
  keywords: ["retail staffing", "store manager hiring", "retail recruitment", "e-commerce staffing", "retail workforce"],
  openGraph: { title: "Retail Staffing | Maxera Talent", description: "Workforce solutions for retail chains and consumer brands — from store floor to leadership.", url: "https://maxeratalent.com/industries/retail" },
  alternates: { canonical: "https://maxeratalent.com/industries/retail" },
};

export default function Retail() { return <RetailClient />; }
