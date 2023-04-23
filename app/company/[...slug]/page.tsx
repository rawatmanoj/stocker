import BalanceSheet from "@/components/company/BalanceSheet";
import Chart from "@/components/company/Chart";
import IncomeStatement from "@/components/company/IncomeStatement";
import { Ubuntu } from "@next/font/google";
import React, { Suspense, cache } from "react";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

const getOverview = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};
const getWeeklyData = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};
const getSentiments = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};
const getIncomeStatement = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};
const getBalanceSheet = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};
const getGlobalQuote = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};
const getEarnings = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=EARNINGS&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};
const getCashFlow = (param: string) => {
  return fetch(
    `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${param}&apikey=KD810N393AZ6VSRK`
  ).then((res) => {
    return res.json();
  });
};

export default async function page({ params }: { params: { slug: string } }) {
  console.log(params);

  let dataPromise = getOverview(params.slug[0]);
  let monthlyDataPromise = getWeeklyData(params.slug[0]);
  let globalQuotePromise = getGlobalQuote(params.slug[0]);
  // let cashFlowPromise = getCashFlow(params.slug[0]);
  // let earningsPromise = getEarnings(params.slug[0]);
  // let sentimentsPromise = getSentiments(params.slug[0]);
  // let incomeStatementPromise = getIncomeStatement(params.slug[0]);
  // let balanceSheetPromise = getBalanceSheet(params.slug[0]);

  const [
    data,
    monthlyData,
    globalQuote,
    // cashFlow,
    // earnings,
    // sentiments,
    // incomeStatement,
    // balanceSheet,
  ] = await Promise.all([
    dataPromise,
    monthlyDataPromise,
    globalQuotePromise,
    // cashFlowPromise,
    // earningsPromise,
    // sentimentsPromise,
    // incomeStatementPromise,
    // balanceSheetPromise,
  ]);

  return (
    <div
      className={`min-h-screen w-full flex justify-center ${ubuntu.className} pb-10 `}
      id="about"
    >
      <div className="container min-h-full mt-10">
        <div className="bg-lightBaseColor w-full rounded-xl mt-10 pl-4 pb-8">
          <div className="text-white text-3xl h-12 flex flex-col justify-center flex flex-row">
            <div>{data?.Name || params.slug[0]}</div>
            {/* <div className="text-sm">{data.Description}</div> */}
          </div>
          <div className="w-2/3 text-white text-lg border border-lightestBorder rounded-xl border-2">
            <ul className="flex flex-wrap p-2 [&>*:nth-child(odd)]:bg-baseColor">
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Market cap</span>
                <span>1459</span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Market Price</span>
                <span>{globalQuote && globalQuote["05. price"]}</span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Volume</span>
                <span>{globalQuote && globalQuote["06. volume"]}</span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Low/High</span>
                <span>
                  {globalQuote && globalQuote["04. low"]}/
                  {globalQuote && globalQuote["03. high"]}
                </span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Book Value</span>
                <span>{data.BookValue}</span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Dividend Yield</span>
                <span>{data.DividendYield}</span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Profit Margin</span>
                <span>{data.ProfitMargin}</span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>Return On Equity</span>
                <span>{data.ReturnOnEquityTTM}</span>
              </li>
              <li className="w-1/3  flex justify-between rounded p-2">
                <span>EBITDA</span>
                <span>{data.EBITDA}</span>
              </li>
            </ul>
          </div>
        </div>
        <Chart monthlyData={monthlyData} />
        {/* <IncomeStatement incomeStatement={incomeStatement} /> */}
        <BalanceSheet />
      </div>
    </div>
  );
}
