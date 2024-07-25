"use client";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import PatternPng from "../../../public/img/pattern.png";
import { Input, Button } from "@material-tailwind/react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import NextAuthProviders from "../NextAuthProviders";
import Image from "next/image";

interface Props {
  callbackUrl?: string;
}

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter your password",
  }),
});

type InputType = z.infer<typeof FormSchema>;

const SignInForm = (props: Props) => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [visiblePass, setVisiblePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("No JWT");
    } else if (status === "authenticated") {
      void router.push("/dashboard/territorial-analysis");
    }
  }, [status]);

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }
    toast.success("Bienvenido a Lema");
    router.push(
      props.callbackUrl ? props.callbackUrl : "/dashboard/territorial-analysis"
    );
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center ">
        <Image src={PatternPng} alt="Login Form" width={500} height={500} />
      </div>
      <div className="flex justify-center">
        <div className="flex w-full flex-col items-center justify-center lg:w-3/5">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Bienvenido a Lema</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-2 mt-8 w-80 max-w-screen-lg lg:w-1/2"
          >
            <div className="p-2 flex flex-col gap-2">
              <h1 color="blue-gray" className="-mb-2 ml-2  font-medium">
                Email
              </h1>
              <Input
                crossOrigin={undefined}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                {...register("email")}
              />
              <h1 color="blue-gray" className="-mb-2 ml-2  font-medium">
                Contraseña
              </h1>
              <div className="text-sm text-end">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 "
                >
                  forgot your password?
                </a>
              </div>
              <Input
                crossOrigin={undefined}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                {...register("password")}
                type={visiblePass ? "text" : "password"}
              />
              <div className="flex items-center justify-center gap-2">
                <Button
                  className="mt-6"
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                >
                  {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
                </Button>
              </div>
              {/* <Button as={Link} href="/auth/signup">
              Sign Up
            </Button> */}
            </div>
            {/* <NextAuthProviders /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
