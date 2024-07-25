import { Button, IconButton } from "@material-tailwind/react";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";
const SigninButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2">
      {session && session.user ? (
        <>
          <Link
            className="text-blue-gray-800 font-medium"
            href={"/profile"}
          >{`${session.user.firstName} ${session.user.lastName}`}</Link>
          {/* <Link href="/auth/signin"> */}
          <Button
            variant="text"
            color="blue-gray"
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            className="hidden items-center gap-1 px-4 xl:flex normal-case"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-700" />
            Cerrar sesión
          </Button>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
          {/* </Link> */}
        </>
      ) : (
        <>
          <Button onClick={() => signIn()}>Iniciar sesión</Button>
        </>
      )}
    </div>
  );
};

export default SigninButton;
