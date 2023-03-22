import "./globals.css";
import ProvidersWrapper from "./ProvidersWrapper";
import Header from "@/components/Home/Header";
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
        <ProvidersWrapper>
          <Header />
          {children}
        </ProvidersWrapper>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
