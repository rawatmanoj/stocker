// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req });
//     console.log(token, "tokennnnnnnnnn");
//     const isAuth = !!token;
//     const isAuthPage = req.nextUrl.pathname.startsWith("/login");
//     console.log(isAuthPage, token);
//     if (isAuthPage) {
//       if (isAuth) {
//         return NextResponse.redirect(new URL("/home", req.url));
//       }

//       return null;
//     }

//     if (!isAuth) {
//       let from = req.nextUrl.pathname;
//       if (req.nextUrl.search) {
//         from += req.nextUrl.search;
//       }

//       return NextResponse.redirect(new URL(`/login`, req.url));
//     }
//   },
//   {
//     callbacks: {
//       async authorized() {
//         // This is a work-around for handling redirect on auth pages.
//         // We return true here so that the middleware function above
//         // is always called.
//         return true;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ["/login"],
// };

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./pages/api/auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextResponse) {
  // const token = await getToken({ req });
  // console.log(req, "req");
  // const session = await getServerSession(authOptions);
  // console.log(session, "middleware");
  return NextResponse.next();
}

export const config = { matcher: ["/home"] };
