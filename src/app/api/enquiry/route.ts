import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { validateFileExtension, validateFileSize, sanitizeUrl } from '@/lib/security';

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let bodyData: any = {};
    let resumeFile: File | null = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      bodyData = {
        fullName: formData.get('fullName') as string,
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        company: formData.get('company') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
        type: formData.get('type') as string,
        sector: formData.get('sector') as string,
        role: formData.get('role') as string,
        resumeUrl: formData.get('resumeUrl') as string,
      };
      resumeFile = formData.get('resume') as File | null;
    } else {
      bodyData = await req.json();
    }

    const { fullName, firstName, lastName, email, company, phone, message, type, role, sector } = bodyData;
    let resumeUrl = bodyData.resumeUrl || null;

    const name = fullName || `${firstName || ''} ${lastName || ''}`.trim() || 'Anonymous';

    if (!email || (!message && type !== 'CANDIDATE')) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Handle File Upload if present in FormData (Candidate sync form)
    if (resumeFile && resumeFile.size > 0) {
      if (!validateFileExtension(resumeFile.name)) {
        return NextResponse.json(
          { message: 'Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed.' }, 
          { status: 400 }
        );
      }

      const bytes = await resumeFile.arrayBuffer();
      if (!validateFileSize(bytes.byteLength)) {
        return NextResponse.json(
          { message: 'File is too large. Maximum size allowed is 5MB.' }, 
          { status: 400 }
        );
      }

      const buffer = Buffer.from(bytes);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}-${resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const uploadDir = path.join(process.cwd(), 'public/uploads/resumes');
      await mkdir(uploadDir, { recursive: true });
      const filepath = path.join(uploadDir, filename);

      await writeFile(filepath, buffer);
      resumeUrl = `/uploads/resumes/${filename}`;
    }

    // Sanitize resumeUrl to prevent stored XSS (e.g., javascript: urls)
    if (resumeUrl) {
      resumeUrl = sanitizeUrl(resumeUrl);
    }

    let formattedMessage = message || '';
    if (type === 'EMPLOYER') {
      formattedMessage = `${formattedMessage}\n\n--- Employer Details ---\nCompany: ${company || ''}\nRole: ${role || ''}\nPhone: ${phone || ''}`;
    } else if (type === 'CANDIDATE') {
      formattedMessage = `${formattedMessage}\n\n--- Candidate Details ---\nSector: ${sector || ''}\nPhone: ${phone || ''}`;
    } else {
      formattedMessage = `${formattedMessage}\n\n--- Extra Info ---\nCompany: ${company || ''}\nPhone: ${phone || ''}`;
    }

    // Save the enquiry to the database using raw SQL to bypass stale Prisma Client validation
    const id = `cl${Math.random().toString(36).substring(2, 11)}`; // Simple CUID-like ID
    await prisma.$executeRaw`
      INSERT INTO Enquiry (id, name, email, message, type, resumeUrl, status, createdAt)
      VALUES (${id}, ${name}, ${email}, ${formattedMessage}, ${type || 'CONTACT'}, ${resumeUrl}, 'NEW', NOW())
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
  } catch (_error) {
    console.error('Enquiry Error:', _error);
    return NextResponse.json(
      { message: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
