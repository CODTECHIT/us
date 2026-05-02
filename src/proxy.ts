import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function proxy(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/admin/maxera/login",
    },
  }
);

export const config = {
  // Protecting both the base path and all sub-paths
  matcher: [
    "/admin/maxera",
    "/admin/maxera/:path*",
    "/api/admin/:path*",
    "/api/applications/:path*",
    "/api/enquiries/:path*",
    "/api/media/:path*",
  ],
};
