import { NextResponse } from "next/server";
import { getUploadContentType, readUploadFile } from "@/lib/upload-storage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { path } = await params;
  const relativePath = path.join("/");

  try {
    const file = await readUploadFile(relativePath);

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return new NextResponse(file, {
      headers: {
        "Content-Type": getUploadContentType(relativePath),
        // Authenticated content should not be cached publicly
        "Cache-Control": "private, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to read upload", details: String(error) },
      { status: 500 },
    );
  }
}
