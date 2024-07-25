// import { User } from "@prisma/client";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  emailVerified: Date | null;
  phone: string;
  image: string | null;
  role_id: number;
};

export enum Role {
  ADMIN = 0,
  USER_LEVEL1 = 1,
  USER_LEVEL2 = 2,
  USER_LEVEL3 = 3,
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

declare module NodeJS {
  interface ProcessEnv {
    SMPT_EMAIL: string;
    SMTP_GMAIL_PASS: string;
  }
}
