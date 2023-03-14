"use client";
import "./globals.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { searchApi } from "@/lib/redux/slices/homeSlice";
import ReduxProvider from "@/lib/redux/reduxProvider";
import ProvidersWrapper from "./ProvidersWrapper";
// import { Roboto_Mono } from "@next/font/google";
// const ubuntu = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        <header
          className={`shadow-xl bg-baseColor sticky text-lightSlate w-full h-12 `}
        >
          About
        </header>
        <ProvidersWrapper>{children}</ProvidersWrapper>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
