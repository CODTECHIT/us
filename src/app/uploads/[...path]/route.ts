import { NextResponse } from "next/server";
import { getUploadContentType, readUploadFileStream } from "@/lib/upload-storage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Readable } from "stream";

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
    const fileData = await readUploadFileStream(relativePath);

    if (!fileData) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Convert Node.js stream to Web standard ReadableStream
    const webStream = Readable.toWeb(fileData.stream);

    return new NextResponse(webStream as any, {
      headers: {
        "Content-Type": getUploadContentType(relativePath),
        "Content-Length": String(fileData.size),
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
