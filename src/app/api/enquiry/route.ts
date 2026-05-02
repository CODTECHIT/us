import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, firstName, lastName, email, company, phone, message, type, role, sector, resumeUrl } = body;

    const name = fullName || `${firstName || ''} ${lastName || ''}`.trim() || 'Anonymous';

    if (!email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    let formattedMessage = message;
    if (type === 'EMPLOYER') {
      formattedMessage = `${message}\n\n--- Employer Details ---\nCompany: ${company}\nRole: ${role}\nPhone: ${phone}`;
    } else if (type === 'CANDIDATE') {
      formattedMessage = `${message}\n\n--- Candidate Details ---\nSector: ${sector}\nPhone: ${phone}`;
    } else {
      formattedMessage = `${message}\n\n--- Extra Info ---\nCompany: ${company}\nPhone: ${phone}`;
    }

    // Save the enquiry to the database using raw SQL to bypass stale Prisma Client validation
    const id = `cl${Math.random().toString(36).substring(2, 11)}`; // Simple CUID-like ID
    await prisma.$executeRaw`
      INSERT INTO Enquiry (id, name, email, message, type, resumeUrl, status, createdAt)
      VALUES (${id}, ${name}, ${email}, ${formattedMessage}, ${type || 'CONTACT'}, ${resumeUrl || null}, 'NEW', NOW())
    `;

    const enquiry = {
      id,
      name,
      email,
      message: formattedMessage,
      type: type || 'CONTACT',
      resumeUrl,
      status: 'NEW',
      createdAt: new Date()
    };

    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    console.error('Enquiry Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
