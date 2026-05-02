import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    await prisma.job.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Job deleted' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting job' }, { status: 500 });
  }
}
