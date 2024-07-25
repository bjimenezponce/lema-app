"use client";
import { forgotPassword } from "@/lib/actions/authActions";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "@material-tailwind/react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email!"),
});

type InputType = z.infer<typeof FormSchema>;

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const submitRequest: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await forgotPassword(data.email);
      if (result) toast.success("Reset password link was sent to your email.");
      reset();
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center">
      <form
        className="flex flex-col gap-2 p-2 border m-2 rounded-md shadow"
        onSubmit={handleSubmit(submitRequest)}
      >
        <div className="text-center p-2">Enter Your Email</div>
        <Input crossOrigin={undefined} label="Email" {...register("email")} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Please Wait..." : "Submit"}
        </Button>
      </form>
      <Image
        src={"/forgotPass.png"}
        alt="Forgot Password"
        width={500}
        height={500}
        className="col-span-2 place-self-center"
      />
    </div>
  );
};

export default ForgotPasswordPage;
