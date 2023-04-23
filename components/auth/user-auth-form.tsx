// "use client";
// import * as React from "react";
// import { signIn } from "next-auth/react";
// import * as z from "zod";
// import { Icons } from "@/components/icons";

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     const signInResult = await signIn("google");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="grid gap-2">
//           <div className="grid gap-1">
//             <label className="sr-only" htmlFor="email">
//               Email
//             </label>
//             <input
//               id="email"
//               placeholder="name@example.com"
//               className="bg-lighNavy border-specialGreen border  text-white my-0 mb-2 block h-9 w-full rounded-md py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
//               type="email"
//               autoCapitalize="none"
//               autoComplete="email"
//               autoCorrect="off"
//               name="email"
//             />

//           </div>
//           <button
//             className="inline-flex w-full items-center justify-center rounded-lg text-specialGreen border-specialGreen border px-5 py-2.5 text-center text-sm font-medium  hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
//           >

//             Sign In with Email
//           </button>
//         </div>
//       </form>
//       <div className="relative mt-2 mb-2">
//         <div className="absolute inset-0 flex items-center">
//           <div className="w-full border-t border-slate-300"></div>
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-baseColor px-2 text-slate-600">
//             Or continue with
//           </span>
//         </div>
//       </div>
//       <button
//         type="button"
//         className="inline-flex w-full items-center justify-center rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
//         onClick={() => signIn("google")}
//       >
//         <Icons.google className=" text-lg mr-2 text-specialGreen" />
//         <p className="uppercase text-white">Login using google</p>
//       </button>
//     </div>
//   );
// }

import React from "react";

export default function UserAuthForm() {
  return <div>UserAuthForm</div>;
}
