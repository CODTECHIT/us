import React from "react";
import TalentInsightsClient from "@/components/TalentInsightsClient";
import { getPublishedArticles } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export default async function TalentInsightsPage() {
  const articles = await getPublishedArticles();

  return <TalentInsightsClient initialArticles={articles} />;
}
