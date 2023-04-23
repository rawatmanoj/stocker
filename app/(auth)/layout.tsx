import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session, "sessionssss");
  if (session?.user?.name) {
    redirect("/home");
  }
  return <section className="bg-baseColor">{children}</section>;
}
