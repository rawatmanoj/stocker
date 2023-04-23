"use client";
import "./globals.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { searchApi } from "@/lib/redux/slices/homeSlice";
import ReduxProvider from "@/lib/redux/reduxProvider";
import { SessionProvider } from "next-auth/react";
// import { Roboto_Mono } from "@@next/font/google";
// const ubuntu = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ReduxProvider>
        <ApiProvider api={searchApi}>{children}</ApiProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
