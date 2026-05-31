import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const post = await prisma.blog.findUnique({
      where: { id: id },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch article" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const data = await req.json();
    const post = await prisma.blog.update({
      where: { id: id },
      data: {
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        coverImage: data.coverImage,
        status: data.status,
      },
    });
    try {
      // Revalidate blog listing, homepage and the post page
      revalidatePath("/read");
      revalidatePath("/");
      if (post.slug) revalidatePath(`/read/${post.slug}`);
    } catch (err) {
      console.warn("Failed to revalidate paths after updating blog post", err);
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update article" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await prisma.blog.delete({
      where: { id: id },
    });
    try {
      // Revalidate blog listing and homepage
      revalidatePath("/read");
      revalidatePath("/");
    } catch (err) {
      console.warn("Failed to revalidate paths after deleting blog post", err);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 },
    );
  }
}
