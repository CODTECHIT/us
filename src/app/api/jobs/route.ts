import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const pageParam = Number(url.searchParams.get("page") ?? 1);
    const limitParam = Number(url.searchParams.get("limit") ?? 20);

    const page =
      Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;
    const limit =
      Number.isFinite(limitParam) && limitParam > 0
        ? Math.min(Math.floor(limitParam), 50)
        : 20;

    const total = await prisma.job.count();
    const totalPages = Math.max(1, Math.ceil(total / limit));

    const jobs = await prisma.job.findMany({
      include: {
        _count: {
          select: { applications: true },
        },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({ data: jobs, total, page, totalPages });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    // Simple slug generation
    const slug =
      data.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") +
      "-" +
      Date.now().toString().slice(-4);

    const job = await prisma.job.create({
      data: {
        title: data.title,
        slug: slug,
        description: data.description,
        location: data.location,
        type: data.type || "FULL_TIME",
        industry: data.industry,
        salaryRange: data.salaryRange,
        status: data.status || "DRAFT",
      },
    });

    try {
      revalidateTag("published-jobs", "max");
      revalidateTag("homepage-public-data", "max");
      revalidatePath("/jobs");
      revalidatePath("/");
    } catch (cacheError) {
      console.warn("Failed to revalidate cache after creating job:", cacheError);
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("Create Error:", error);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 },
    );
  }
}

