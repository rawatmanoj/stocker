"use client";
import Search from "@/ui/Search";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useSearchCompanyQuery } from "@/lib/redux/slices/homeSlice";
import { searchMatch } from "./types";
import { Ubuntu } from "@next/font/google";
// import { Roboto_Mono } from "@@next/font/google";
// const ubuntu = Roboto_Mono({ weight: "400", subsets: ["latin"] });

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });
export default function RootLayout() {
  const [searchForm, setSearchForm] = useState("");
  const debouncedSearchValue = useDebounce(searchForm, 500);
  const { data } = useSearchCompanyQuery(debouncedSearchValue);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    let value = (event.target as HTMLInputElement).value;
    setSearchForm(value);
  };

  return (
    <header
      className={`shadow-xl bg-baseColor sticky text-black w-full h-12 flex z-50 top-0`}
    >
      <div className="w-1/2 text-white">About</div>
      <div className="w-1/2  flex items-center justify-center  h-full">
        <div className="w-2/7 relative h-full flex items-center">
          <Search
            placeholder="Search"
            value={searchForm}
            onChange={onChange}
            className="w-2/7 rounded-md text-lg h-headerSearch"
          />
          {data?.bestMatches && data.bestMatches.length > 0 ? (
            <div className="min-h-[50%] bg-white rounded-lg min-h-[40px] flex flex-col justify-center absolute left-0 top-14">
              {data?.bestMatches.map((match: searchMatch) => {
                return (
                  <div
                    key={match["1. symbol"]}
                    className={`${ubuntu.className} hover:bg-specialGreen font-small pl-1 pr-1 cursor-pointer`}
                  >
                    {match["2. name"]}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
