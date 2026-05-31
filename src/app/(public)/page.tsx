import type { Metadata } from "next";
import React from "react";
import HomeClient from "@/components/HomeClient";
import { getHomepageData } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Maxera Talent | Professional Recruitment Agency",
  description:
    "Connecting top companies with exceptional professionals. Trusted strategic partner for recruitment, talent management, and workforce solutions across IT, industrial, logistics, and executive roles.",
  alternates: {
    canonical: "https://maxeratalent.com",
  },
  openGraph: {
    title: "Maxera Talent | Professional Recruitment Agency",
    description:
      "Connecting top companies with exceptional professionals. Speed, precision, and reliability — every hire.",
    url: "https://maxeratalent.com",
  },
};

export default async function Home() {
  const { content, testimonials, stats } = await getHomepageData();

  return (
    <HomeClient cmsData={content} testimonials={testimonials} stats={stats} />
  );
}
