import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { env } from "~/env";
import { db } from "./db";
import { accounts, sessions, users, verificationTokens } from "./db/schema";
import "next-auth";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role?: string;
  }
}

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      const userExists = await db.query.users.findFirst({
        where(fields, { eq }) {
          return eq(fields.email, user.email!);
        },
      });
      if (userExists) {
        return true; //if the email exists in the User collection, email them a magic login link
      } else {
        return false;
      }
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        role: user.role,
      },
    }),
    async redirect() {
      return "/submissions";
    },
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    EmailProvider({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
      maxAge: 90 * 24 * 60 * 60, // 90 days
    }),
  ],
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
