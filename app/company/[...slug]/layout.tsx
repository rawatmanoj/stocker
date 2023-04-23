import { Suspense } from "react";
import Skeleton from "@/ui/Skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "@/ui/Button";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center flex-col">
          <div className="h-56 container bg-lightBaseColor w-full rounded-xl mt-10 pl-4 pb-8 flex justify-center items-center">
            <Skeleton />
          </div>
          <div className="h-96 container bg-lightBaseColor w-full rounded-xl mt-10 pl-4 pb-8 flex justify-center items-center flex-col">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      }
    >
      {/* <div className="sticky top-20 w-full h-10  flex justify-center z-100"> */}
      <div className="shadow-xl bg-baseColor sticky text-black w-full h-12 flex z-50 top-10 justify-center">
        <div className="container  flex justify-evenly items-center bg-baseColor">
          <Button className="border-0 underline underline-offset-8 min-w-fit focus:ring-0">
            <a href="#about">About</a>
          </Button>
          <Button className="border-0 underline underline-offset-8 min-w-fit focus:ring-0">
            <a href="#chart">Chart</a>
          </Button>
          <Button className="border-0 underline underline-offset-8 min-w-fit focus:ring-0">
            <a href="#income_statement">INCOME STATEMENT</a>
          </Button>
          <Button
            className={`border-0 -offset-8 text-gray-400 min-w-fit focus:ring-0`}
          >
            <a href="#balance_sheet">BALANCE SHEET</a>
          </Button>
          <Button
            id="cash_flow"
            className={`border-0 -offset-8 text-gray-400 min-w-fit focus:ring-0`}
          >
            CASH FLOW
          </Button>

          <Button
            id="earnings"
            className={`border-0 -offset-8 text-gray-400 min-w-fit uppercase focus:ring-0`}
          >
            Earnings
          </Button>

          <Button
            id="sentiment"
            className={`border-0 -offset-8 text-gray-400 min-w-fit uppercase focus:ring-0`}
          >
            Sentiment
          </Button>
        </div>
      </div>
      {children}
    </Suspense>
  );
}
