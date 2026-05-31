import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

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

export async function GET() {
  try {
    const posts = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 },
    );
  }
}
