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
    const testimonial = await prisma.testimonial.create({
      data: {
        name: data.name,
        position: data.position,
        company: data.company,
        content: data.content,
        avatar: data.avatar,
      },
    });
    try {
      revalidatePath("/");
    } catch (err) {
      console.warn(
        "Failed to revalidate homepage after creating testimonial",
        err,
      );
    }
    return NextResponse.json(testimonial);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 },
    );
  }
}
