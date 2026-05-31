import { NextResponse } from "next/server";
import { basename } from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { validateFileExtension } from "@/lib/security";
import {
  deleteUploadFile,
  listUploadFiles,
  saveUploadFile,
} from "@/lib/upload-storage";

const ALLOWED_MEDIA_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".svg",
  ".pdf",
  ".doc",
  ".docx",
  ".txt",
  ".xlsx",
];

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Validate file extension
    if (!validateFileExtension(file.name, ALLOWED_MEDIA_EXTENSIONS)) {
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename - use basename to prevent path traversal
    const safeOriginalName = basename(file.name);
    const filename = `${Date.now()}-${safeOriginalName.replace(/\s+/g, "-")}`;
    const saved = await saveUploadFile(filename, buffer);
    console.log(`Uploaded file saved to ${saved.path}`);

    return NextResponse.json({
      url: saved.publicUrl,
      name: filename,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { error: "Upload failed", details: String(error) },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const images = await listUploadFiles();

    return NextResponse.json(images);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { name } = await req.json();
    if (!name)
      return NextResponse.json(
        { error: "Filename is required" },
        { status: 400 },
      );

    // Prevent path traversal by extracting only the filename
    const safeName = basename(name);
    await deleteUploadFile(safeName);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { error: "Failed to delete file", details: String(error) },
      { status: 500 },
    );
  }
}
