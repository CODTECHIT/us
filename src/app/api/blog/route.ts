import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const post = await prisma.blog.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        coverImage: data.coverImage,
        status: data.status,
      },
    });

    // Revalidate public pages that depend on blog data
    try {
      revalidateTag("published-articles", "max");
      revalidatePath("/read");
      revalidatePath("/");
      if (post.slug) revalidatePath(`/read/${post.slug}`);
    } catch (err) {
      console.warn("Failed to revalidate paths after creating blog post", err);
    }


    return NextResponse.json(post);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 },
    );
  }
}

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

    const total = await prisma.blog.count();
    const totalPages = Math.max(1, Math.ceil(total / limit));

    const posts = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({ data: posts, total, page, totalPages });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 },
    );
  }
}
