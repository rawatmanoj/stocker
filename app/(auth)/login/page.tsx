import Link from "next/link";
// import { useRouter } from "next/navigation";6
import { Icons } from "@/components/icons";
import UserAuthForm from "@/components/auth/user-auth-form";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type SessionType = {
  name: string;
  email: string;
  image: string;
};

export default async function LoginPage(props: any) {
  // const session = (await getServerSession(authOptions)) as SessionType;
  // console.log(session, "sessionsessionsession");
  // const router = useRouter();

  // if (session.email) {
  //   router.push("/home");
  // }

  return (
    <div className="container h-screen  mx-auto flex justify-center flex-col align-center">
      {/* <Link
        href="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm  font-medium text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 md:top-8 md:left-8"
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link> */}
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.stockFill
            // size={"100px"}
            className="mx-auto  text-specialGreen text-4xl"
          />
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-sm text-slate-400">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-slate-600">
          <Link href="/register" className="underline hover:text-brand">
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
