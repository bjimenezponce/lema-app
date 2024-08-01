import SignInForm from "@/components/signin/SignInForm";
import SignUpForm from "@/components/signin/SignUpForm";

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
      {/* <Link href={"/auth/signup"}> registrar usuario</Link> */}
      <SignUpForm/>
    </section>
  );
};

export default SigninPage;
