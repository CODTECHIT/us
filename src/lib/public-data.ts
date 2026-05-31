import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

const PUBLIC_QUERY_TIMEOUT_MS = 8000;
const PUBLIC_QUERY_COOLDOWN_MS = 30000;

let publicQueryCircuitOpenUntil = 0;

function isPublicQueryCircuitOpen() {
  return Date.now() < publicQueryCircuitOpenUntil;
}

function openPublicQueryCircuit() {
  publicQueryCircuitOpenUntil = Math.max(
    publicQueryCircuitOpenUntil,
    Date.now() + PUBLIC_QUERY_COOLDOWN_MS,
  );

  void prisma.$disconnect().catch(() => undefined);
}

async function withTimeout<T>(
  operationFactory: () => Promise<T>,
  label: string,
) {
  if (isPublicQueryCircuitOpen()) {
    throw new Error(`${label} skipped while public reads are cooling down`);
  }

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const operation = operationFactory();

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      openPublicQueryCircuit();
      reject(
        new Error(`${label} timed out after ${PUBLIC_QUERY_TIMEOUT_MS}ms`),
      );
    }, PUBLIC_QUERY_TIMEOUT_MS);
  });

  try {
    return await Promise.race([operation, timeoutPromise]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

const DEFAULT_HOMEPAGE_CONTENT = {
  heroTitle: "Strategic talent partner & digital solutions",
  heroSubtitle:
    "Experts in professional recruitment, talent management, and digital strategy. Over 15 years helping companies build world-class teams.",
  ctaText: "Hire Top Talent",
  ctaLink: "/employers",
};

const DEFAULT_HOMEPAGE_STATS = {
  jobs: 0,
  applications: 0,
};

export const getHomepageData = unstable_cache(
  async () => {
    try {
      const [homepageData, jobCount] = await Promise.all([
        withTimeout(
          () => prisma.page.findUnique({ where: { slug: "homepage" } }),
          "Homepage page lookup",
        ),
        withTimeout(
          () => prisma.job.count({ where: { status: "PUBLISHED" } }),
          "Homepage job count",
        ),
      ]);

      const content = homepageData?.content
        ? JSON.parse(homepageData.content as string)
        : DEFAULT_HOMEPAGE_CONTENT;

      return {
        content,
        testimonials: [],
        stats: {
          jobs: jobCount,
          applications: 0,
        },
      };
    } catch (error) {
      console.warn("Falling back to default homepage data:", error);
      return {
        content: DEFAULT_HOMEPAGE_CONTENT,
        testimonials: [],
        stats: DEFAULT_HOMEPAGE_STATS,
      };
    }
  },
  ["homepage-public-data"],
  { revalidate: 300 },
);

export const getPublishedJobs = unstable_cache(
  async () => {
    try {
      return await withTimeout(
        () =>
          prisma.job.findMany({
            where: { status: "PUBLISHED" },
            orderBy: { createdAt: "desc" },
            take: 20,
            select: {
              id: true,
              title: true,
              slug: true,
              location: true,
              type: true,
              industry: true,
              description: true,
            },
          }),
        "Published jobs",
      );
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
      return await withTimeout(
        () =>
          prisma.blog.findMany({
            where: { status: "PUBLISHED" },
            orderBy: { createdAt: "desc" },
            take: 20,
            select: {
              id: true,
              title: true,
              slug: true,
              content: true,
              excerpt: true,
              coverImage: true,
              author: true,
              createdAt: true,
            },
          }),
        "Published articles",
      );
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
      return await withTimeout(
        () =>
          prisma.job.findUnique({
            where: { slug },
          }),
        `Published job lookup for slug ${slug}`,
      );
    } catch (error) {
      console.warn(`Falling back to empty job result for slug ${slug}:`, error);
      return null;
    }
  },
  ["published-job-by-slug"],
  { revalidate: 300 },
);
