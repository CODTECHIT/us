import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const [enquiriesCount, applicationsCount, jobsCount, blogsCount] = await Promise.all([
      prisma.enquiry.count(),
      prisma.application.count(),
      prisma.job.count(),
      prisma.blog.count(),
    ]);

    // Get enquiries by day for the last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Since we are using raw SQL for enquiry creation, we might want to stay consistent
    // but Prisma count/findMany usually works for simple reads if not cached.
    // However, let's use queryRaw for enquiries to be safe.
    const recentEnquiries: any = await prisma.$queryRaw`
      SELECT DATE(createdAt) as date, COUNT(*) as count 
      FROM Enquiry 
      WHERE createdAt >= ${sevenDaysAgo}
      GROUP BY DATE(createdAt)
      ORDER BY date ASC
    `;

    // Convert BigInt to Number for JSON serialization
    const formattedTrends = Array.isArray(recentEnquiries) 
      ? recentEnquiries.map((item: any) => ({
          date: item.date,
          count: Number(item.count)
        }))
      : [];

    // Mock data for traffic since we don't have tracking yet
    const mockTraffic = [
      { day: 'Mon', views: 120 },
      { day: 'Tue', views: 150 },
      { day: 'Wed', views: 180 },
      { day: 'Thu', views: 140 },
      { day: 'Fri', views: 210 },
      { day: 'Sat', views: 160 },
      { day: 'Sun', views: 130 },
    ];

    return NextResponse.json({
      stats: {
        enquiries: Number(enquiriesCount),
        applications: Number(applicationsCount),
        jobs: Number(jobsCount),
        blogs: Number(blogsCount)
      },
      enquiryTrends: formattedTrends,
      traffic: mockTraffic
    });
  } catch (error) {
    console.error('Analytics Error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
