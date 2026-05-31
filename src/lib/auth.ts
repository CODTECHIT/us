import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }
  interface User {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
        const legacyAdminPassword = process.env.ADMIN_PASSWORD; // legacy fallback only

        if (!adminEmail || (!adminPasswordHash && !legacyAdminPassword)) {
          console.error(
            "ADMIN_EMAIL or ADMIN_PASSWORD_HASH (or legacy ADMIN_PASSWORD) not set in environment variables",
          );
          return null;
        }

        // If an ADMIN_PASSWORD_HASH is provided, prefer secure bcrypt comparison.
        if (adminPasswordHash) {
          if (credentials?.email === adminEmail && credentials?.password) {
            const match = await bcrypt.compare(
              credentials.password,
              adminPasswordHash,
            );
            if (match) {
              return {
                id: "1",
                name: "Admin",
                email: adminEmail,
                role: "ADMIN",
              };
            }
          }
        } else {
          // Legacy fallback: plaintext comparison (not recommended). Keep for compatibility only.
          if (
            credentials?.email === adminEmail &&
            credentials?.password === legacyAdminPassword
          ) {
            console.warn(
              "Using legacy plaintext admin password comparison. Set ADMIN_PASSWORD_HASH to secure this.",
            );
            return {
              id: "1",
              name: "Admin",
              email: adminEmail,
              role: "ADMIN",
            };
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/maxera/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
