import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

import { use } from "react";
// import { User } from "@prisma/client";
import { User } from "@/lib/types";
import axios from "axios";
export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      idToken: true,

      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your User Name",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const body = {
          username: credentials?.username,
          password: credentials?.password,
        };
        try {
          const response: Response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
                "Content-Type": "application/json",
              },
            }
          );
          const responseJson = await response.json();
          const user: User = responseJson.user;
          if (!user) throw new Error("User name or password is not correct");

          if (!user.emailVerified)
            throw new Error("Please verify your email first!");

          const { password, ...userWithoutPass } = user;
          if (user) {
            return user;
          } else {
            return null;
          }
          return userWithoutPass;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User;
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
