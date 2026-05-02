import React from "react";
import HomeClient from "@/components/HomeClient";
import { getHomepageData } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { content, testimonials, stats } = await getHomepageData();

  return (
    <HomeClient cmsData={content} testimonials={testimonials} stats={stats} />
  );
}
