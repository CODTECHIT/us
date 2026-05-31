import { NextResponse } from "next/server";
import { getUploadContentType, readUploadFile } from "@/lib/upload-storage";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
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
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to read upload", details: String(error) },
      { status: 500 },
    );
  }
}
