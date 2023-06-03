import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const OPTIONS = {
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
