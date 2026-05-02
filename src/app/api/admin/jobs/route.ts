import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    // 1. Check Authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse Body
    const body = await req.json();
    const { title, location, type, industry, description, status } = body;

    if (!title || !location || !description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 3. Generate Slug
    const slug = title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '') + '-' + Math.random().toString(36).substring(2, 7);

    // 4. Save to Database
    const job = await prisma.job.create({
      data: {
        title,
        slug,
        location,
        type,
        industry,
        description,
        status,
      },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Job Creation Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: String(error) }, 
      { status: 500 }
    );
  }
}
