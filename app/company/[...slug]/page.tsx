import Chart from "@/components/company/Chart";
import { Ubuntu } from "@next/font/google";
import React from "react";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });
export default async function page({ params }: { params: { slug: string } }) {
  console.log(params);
  let data = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.slug[0]}&apikey=KD810N393AZ6VSRK`,
    {
      next: { revalidate: 10000 },
    }
  ).then((res) => {
    return res.json();
  });
  let monthlyData = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${params.slug[0]}&apikey=KD810N393AZ6VSRK`,
    {
      next: { revalidate: 10000 },
    }
  ).then((res) => {
    return res.json();
  });
  let globalQuote = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${params.slug[0]}&apikey=KD810N393AZ6VSRK`,
    {
      next: { revalidate: 10000 },
    }
  ).then((res) => {
    return res.json().then((res) => res["Global Quote"]);
  });
  return (
    <div
      className={`min-h-screen w-full flex justify-center ${ubuntu.className} pb-10`}
    >
      <div className="container min-h-full">
        <div className="bg-lightBaseColor w-full rounded-xl mt-10 pl-4 pb-8">
          <div className="text-white text-3xl h-12 flex flex-col justify-center flex flex-row">
            <div>{data.Name}</div>
            {/* <div className="text-sm">{data.Description}</div> */}
          </div>
          <div className="w-2/3 text-white text-lg border border-lightestBorder rounded-xl border-2">
            <ul className="flex flex-wrap p-2 [&>*:nth-child(odd)]:bg-baseColor">
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Market cap</span>
                <span>1459</span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Market Price</span>
                <span>{globalQuote && globalQuote["05. price"]}</span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Volume</span>
                <span>{globalQuote && globalQuote["06. volume"]}</span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Low/High</span>
                <span>
                  {globalQuote && globalQuote["04. low"]}/
                  {globalQuote && globalQuote["03. high"]}
                </span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Book Value</span>
                <span>{data.BookValue}</span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Dividend Yield</span>
                <span>{data.DividendYield}</span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Profit Margin</span>
                <span>{data.ProfitMargin}</span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>Return On Equity</span>
                <span>{data.ReturnOnEquityTTM}</span>
              </li>
              <li className="w-1/3  flex justify-around rounded p-2">
                <span>EBITDA</span>
                <span>{data.EBITDA}</span>
              </li>
            </ul>
          </div>
        </div>
        <Chart monthlyData={monthlyData} />
      </div>
    </div>
  );
}
