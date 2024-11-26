import NextAuth from "next-auth";
import { config } from "~/server/auth";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(config);

export { handler as GET, handler as POST };
