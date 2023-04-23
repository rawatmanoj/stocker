import { Icons } from "@/components/icons";
import Button from "@/ui/Button";
import { Ubuntu } from "@next/font/google";
import React from "react";
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function StarterPage() {
  return (
    <div
      className={` flex flex-col items-center  h-screen bg-baseColor ${ubuntu.className}`}
    >
      <div className="container flex ">
        <div className="w-full  flex flex-col p-2 ">
          <div className="text-white font-medium text-3xl m-2 w-5/6">
            Watchlist updates
          </div>
          <div className="text-white mt-2 bg-lightBaseColor w-5/6 rounded-xl flex flex-col items-center p-6">
            <Icons.buildingAdd className=" text-lg mr-2 text-slate-200 mb-2" />
            <div className="p-2 text-xl">Add companies to watchlist</div>
            <div className={`p-2 text-slate-400 `}>
              Keep track of latest announcements, insider trades and credit
              ratings of your companies.
            </div>
            <Button className="min-w-fit">Add Companies</Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center p-2  mt-12">
          <div className="text-white mt-2 bg-lightBaseColor w-4/6 rounded-xl flex flex-wrap items-center p-6">
            <Button className="min-w-fit">Crude Oil</Button>
            <Button className="min-w-fit">Natural Gas</Button>
            <Button className="min-w-fit">Copper</Button>
            <Button className="min-w-fit">Aluminum</Button>
            <Button className="min-w-fit">Corn</Button>
            <Button className="min-w-fit">Cotton</Button>
            <Button className="min-w-fit">Sugar</Button>
            <Button className="min-w-fit">Coffee</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
