"use client";
import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Chart, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Button from "@/ui/Button";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxTyped";
import { saveChartData } from "@/lib/redux/store/reducers/companyReducer";

type ChartProps = {
  monthlyData: {
    "Meta Data": object;
    "Weekly Time Series": object;
  };
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

export const options = {
  bezierCurve: true,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Char",
    },
  },
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 11,
        autoSkip: true,
      },
    },
    A: {
      position: "right",
      beginAtZero: false,
    },
    B: {
      position: "left",
      beginAtZero: false,
    },
  },
};

export default function ChartComp({ monthlyData }: ChartProps) {
  const dispatch = useAppDispatch();
  // const storedChartData = useAppSelector(
  //   (state) => state?.companyReducer?.chartData
  // );
  const storedChartData = monthlyData;
  console.log(monthlyData, "calledddddddddddd");
  if (monthlyData["Weekly Time Series"]) {
    dispatch(saveChartData(monthlyData));
  }

  const [interval, setInterval] = useState("1yr");
  const ref = useRef(0);
  const handleClick = (interval: string) => {
    setInterval(interval);
  };
  const labels =
    storedChartData && storedChartData["Weekly Time Series"]
      ? Object.keys(storedChartData["Weekly Time Series"])
          .filter((val, index) => {
            let lessThan;
            if (interval === "3yr") {
              lessThan = 144;
            } else if (interval === "5yr") {
              lessThan = 240;
            } else if (interval === "1yr") {
              lessThan = 48;
            } else {
              lessThan = Math.min();
            }
            console.log(lessThan, "lessThanlessThan");
            if (index < lessThan) {
              return val;
            }
          })
          .reverse()
      : [];

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        yAxisID: "A",
        data: labels.map((label) => {
          let transformedData = (storedChartData["Weekly Time Series"] as any)[
            label
          ]["4. close"];
          return transformedData;
        }),
        borderColor: "#64ffda",
        backgroundColor: "orange",
      },
      {
        type: "bar" as const,
        yAxisID: "B",
        data: labels.map((label) => {
          let transformedData = (storedChartData["Weekly Time Series"] as any)[
            label
          ]["5. volume"];
          return transformedData;
        }),
        borderColor: "#64ffda",
        backgroundColor: "orange",
      },
    ],
  };
  return (
    <div className="bg-lightBaseColor mt-5 rounded-xl" id="chart">
      <div className="w-full text-right ">
        <Button handleClick={() => handleClick("1yr")}>1yr</Button>
        <Button handleClick={() => handleClick("3yr")}>3yr</Button>
        <Button handleClick={() => handleClick("5yr")}>5yr</Button>
        <Button handleClick={() => handleClick("all")}>All</Button>
      </div>
      <div className="h-full">
        {/* <Line options={options} data={data} width={1000} height={300} /> */}
        <Chart
          type="bar"
          options={options}
          data={data}
          width={1000}
          height={300}
        />
        ;
      </div>
    </div>
  );
}
