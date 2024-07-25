"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Auth = ({ children }: { children: any }) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    void router.push("/dashboard/territorial-analysis");
  } else {
    void router.push("/auth/signin");
  }

  return children;
};

export default Auth;
