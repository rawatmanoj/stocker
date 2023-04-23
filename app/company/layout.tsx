import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function RootLayout(props: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  console.log(session, "sessionssss");
  // if (session?.user?.name) {
  //   redirect("/login");
  // }
  console.log("propspropspropsprops", JSON.stringify(props), "propsprops");
  return <div className="bg-baseColor">{props.children}</div>;
}

export default RootLayout;
