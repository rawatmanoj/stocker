import "./globals.css";
import ProvidersWrapper from "./ProvidersWrapper";
import Header from "@/components/Home/Header";
// import { Roboto_Mono } from "@next/font/google";
// const ubuntu = Roboto_Mono({ weight: "400", subsets: ["latin"] });
const getTime = () => {
  return fetch(`http://worldtimeapi.org/api/timezone/Asia/Kolkata`, {
    // cache: "force-cache",
    next: { revalidate: 100 },
  }).then((res) => {
    return res.json();
  });
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const time = await getTime();
  return (
    <html lang="en">
      <body>
        <div>
          <ProvidersWrapper>
            <Header />
            <div>{time.datetime}</div>
            {children}
            <footer>Footer</footer>
          </ProvidersWrapper>
        </div>
      </body>
    </html>
  );
}
