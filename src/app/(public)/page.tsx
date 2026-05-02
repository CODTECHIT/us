import React from "react";
import prisma from "@/lib/prisma";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  // Fetch Homepage CMS data
  const homepageData = await prisma.page.findUnique({
    where: { slug: 'homepage' }
  });

  // Fetch some real stats for the dashboard
  const jobCount = await prisma.job.count({ where: { status: 'PUBLISHED' } });
  const appCount = await prisma.application.count();

  // Parse CMS content
  const content = homepageData?.content ? JSON.parse(homepageData.content as string) : {
    heroTitle: "Strategic talent partner & digital solutions",
    heroSubtitle: "Experts in professional recruitment, talent management, and digital strategy. Over 15 years helping companies build world-class teams.",
    ctaText: "Hire Top Talent",
    ctaLink: "/employers"
  };

  // Fetch testimonials
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' },
    take: 6
  });

  return (
    <HomeClient 
      cmsData={content} 
      testimonials={testimonials}
      stats={{
        jobs: jobCount,
        applications: appCount
      }}
    />
  );
}
