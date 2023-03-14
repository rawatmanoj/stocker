"use client";
import { useSearchCompanyQuery } from "@/lib/redux/slices/homeSlice";
import Search from "@/ui/Search";
import React, { useState } from "react";
import { Ubuntu } from "@next/font/google";
import { searchMatch } from "./types";
import { Icons } from "../icons";
import useDebounce from "@/hooks/useDebounce";
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [searchForm, setSearchForm] = useState("");
  const debouncedSearchValue = useDebounce(searchForm, 500);
  const { data } = useSearchCompanyQuery(debouncedSearchValue);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    let value = (event.target as HTMLInputElement).value;
    setSearchForm(value);
  };
  return (
    <section className="flex flex-col justify-center items-center w-full ">
      <div className="flex flex-row justify-center items-center w-1/3 relative">
        <Icons.seach className="text-xl my-auto text-grey bg-white h-full w-10 p-2 rounded-l-lg" />
        <Search placeholder="Search" value={searchForm} onChange={onChange} />
        {searchForm && (
          <Icons.cross
            className="text-xl my-auto text-specialGreen h-full w-10 p-2 rounded-xl"
            onClick={() => {
              setSearchForm("");
            }}
          />
        )}
        {data?.bestMatches && data.bestMatches.length > 0 ? (
          <div className="min-h-[50%] bg-white rounded-lg min-h-[40px] flex flex-col justify-center absolute left-0 top-14">
            {data?.bestMatches.map((match: searchMatch) => {
              return (
                <div
                  key={match["1. symbol"]}
                  className={`${ubuntu.className} hover:bg-specialGreen font-medium pl-1 pr-1 cursor-pointer`}
                >
                  {match["2. name"]}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
