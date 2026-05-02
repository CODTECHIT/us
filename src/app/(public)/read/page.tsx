import React from "react";
export const dynamic = "force-dynamic";
import prisma from "@/lib/prisma";
import TalentInsightsClient from "@/components/TalentInsightsClient";

export default async function TalentInsightsPage() {
  // Fetch real articles from the database
  const articles = await prisma.blog.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <TalentInsightsClient initialArticles={articles} />
  );
}
