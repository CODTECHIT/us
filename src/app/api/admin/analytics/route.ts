import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const [enquiriesCount, applicationsCount, jobsCount, blogsCount] =
      await Promise.all([
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
    const recentEnquiries = await prisma.$queryRaw<
      Array<{ date: Date; count: bigint }>
    >`
      SELECT DATE(createdAt) as date, COUNT(*) as count 
      FROM Enquiry 
      WHERE createdAt >= ${sevenDaysAgo}
      GROUP BY DATE(createdAt)
      ORDER BY date ASC
    `;

    // Convert BigInt to Number for JSON serialization
    const formattedTrends = Array.isArray(recentEnquiries)
      ? recentEnquiries.map((item) => ({
          date: item.date,
          count: Number(item.count),
        }))
      : [];

    // Build traffic from enquiries trend (fallback to mock if empty)
    const mockTraffic = [
      { day: "Mon", views: 120 },
      { day: "Tue", views: 150 },
      { day: "Wed", views: 180 },
      { day: "Thu", views: 140 },
      { day: "Fri", views: 210 },
      { day: "Sat", views: 160 },
      { day: "Sun", views: 130 },
    ];

    // Top channels: derive from enquiry types if available
    const channelsRaw = await prisma.$queryRaw<
      Array<{ type: string; count: bigint }>
    >`
      SELECT type, COUNT(*) as count
      FROM Enquiry
      GROUP BY type
      ORDER BY count DESC
      LIMIT 5
    `;

    const topChannels = Array.isArray(channelsRaw)
      ? channelsRaw.map((c) => ({
          name: String(c.type || "Other"),
          value: Number(c.count),
        }))
      : [];

    return NextResponse.json({
      stats: {
        enquiries: Number(enquiriesCount),
        applications: Number(applicationsCount),
        jobs: Number(jobsCount),
        blogs: Number(blogsCount),
      },
      enquiryTrends: formattedTrends,
      traffic:
        formattedTrends.length > 0
          ? formattedTrends.map((t) => ({
              day: new Date(t.date).toLocaleDateString("en-US", {
                weekday: "short",
              }),
              views: t.count,
            }))
          : mockTraffic,
      topChannels,
    });
  } catch (error) {
    console.error("Analytics Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 },
    );
  }
}
