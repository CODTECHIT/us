import { NextResponse } from 'next/server';
import { writeFile, readdir, unlink } from 'fs/promises';
import { join, basename } from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const path = join(process.cwd(), 'public/uploads', filename);

    await writeFile(path, buffer);
    console.log(`Uploaded file saved to ${path}`);

    return NextResponse.json({ 
      url: `/uploads/${filename}`,
      name: filename 
    });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const uploadsDir = join(process.cwd(), 'public/uploads');
    const files = await readdir(uploadsDir);
    
    // Filter for common image extensions
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp|svg|pdf|doc|docx|txt|xlsx)$/i.test(file))
      .map(file => ({
        url: `/uploads/${file}`,
        name: file,
        // We can't easily get stats without more fs calls, so we'll keep it simple
      }))
      .reverse(); // Newest first

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { name } = await req.json();
    if (!name) return NextResponse.json({ error: 'Filename is required' }, { status: 400 });

    // Prevent path traversal by extracting only the filename
    const safeName = basename(name);
    const path = join(process.cwd(), 'public/uploads', safeName);
    await unlink(path);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete Error:', error);
    return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
  }
}
