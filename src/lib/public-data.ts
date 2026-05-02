import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

const DEFAULT_HOMEPAGE_CONTENT = {
  heroTitle: "Strategic talent partner & digital solutions",
  heroSubtitle:
    "Experts in professional recruitment, talent management, and digital strategy. Over 15 years helping companies build world-class teams.",
  ctaText: "Hire Top Talent",
  ctaLink: "/employers",
};

export const getHomepageData = unstable_cache(
  async () => {
    try {
      const homepageData = await prisma.page.findUnique({
        where: { slug: "homepage" },
      });
      const jobCount = await prisma.job.count({
        where: { status: "PUBLISHED" },
      });
      const appCount = await prisma.application.count();
      const testimonials = await prisma.testimonial.findMany({
        orderBy: { createdAt: "desc" },
        take: 6,
      });

      const content = homepageData?.content
        ? JSON.parse(homepageData.content as string)
        : DEFAULT_HOMEPAGE_CONTENT;

      return {
        content,
        testimonials,
        stats: {
          jobs: jobCount,
          applications: appCount,
        },
      };
    } catch (error) {
      console.warn("Falling back to default homepage data:", error);
      return {
        content: DEFAULT_HOMEPAGE_CONTENT,
        testimonials: [],
        stats: {
          jobs: 0,
          applications: 0,
        },
      };
    }
  },
  ["homepage-public-data"],
  { revalidate: 300 },
);

export const getPublishedJobs = unstable_cache(
  async () => {
    try {
      return await prisma.job.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      console.warn("Falling back to empty jobs list:", error);
      return [];
    }
  },
  ["published-jobs"],
  { revalidate: 300 },
);

export const getPublishedArticles = unstable_cache(
  async () => {
    try {
      return await prisma.blog.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      console.warn("Falling back to empty article list:", error);
      return [];
    }
  },
  ["published-articles"],
  { revalidate: 300 },
);

export const getPublishedJobBySlug = unstable_cache(
  async (slug: string) => {
    try {
      return await prisma.job.findUnique({
        where: { slug },
      });
    } catch (error) {
      console.warn(`Falling back to empty job result for slug ${slug}:`, error);
      return null;
    }
  },
  ["published-job-by-slug"],
  { revalidate: 300 },
);
