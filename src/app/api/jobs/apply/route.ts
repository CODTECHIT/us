import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const jobId = formData.get('jobId') as string;
    const candidateName = formData.get('candidateName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const resumeFile = formData.get('resume') as File | null;

    if (!jobId || !candidateName || !email || !phone) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    let resumeUrl = null;

    // Handle File Upload
    if (resumeFile) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create a unique filename
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}-${resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const uploadDir = path.join(process.cwd(), 'public/uploads/resumes');
      const filepath = path.join(uploadDir, filename);

      await writeFile(filepath, buffer);
      resumeUrl = `/uploads/resumes/${filename}`;
    }

    // Save the application to the database
    const application = await prisma.application.create({
      data: {
        jobId,
        candidateName,
        email,
        phone,
        resumeUrl,
        formData: { message },
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error('Application Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: String(error) }, 
      { status: 500 }
    );
  }
}
