import React from "react";
import SignInForm from "@/components/signin/SignInForm";
import Link from "next/link";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const SigninPage = ({ searchParams }: Props) => {
  return (
    <section className="w-full">
      <SignInForm callbackUrl={searchParams.callbackUrl} />
      {/* <Link href={"/auth/forgotPassword"}>Forgot Your Password?</Link> */}
      <Link href={"signup"}> registrase</Link>
    </section>
  );
};

export default SigninPage;
