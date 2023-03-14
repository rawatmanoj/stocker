import { Ubuntu } from "@next/font/google";
import HomeComp from "@/components/Home/Home";
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <section
      className={`flex flex-col justify-center items-center h-screen bg-baseColor`}
    >
      <div className="flex flex-col justify-evenly items-center w-full h-1/3">
        <div className={`text-white text-8xl ${ubuntu.className} text-center`}>
          <div className="text-white text-center">stocker</div>
          <div className="text-white text-lg">
            Stock analysis and screening tool for investors in India.
          </div>
        </div>

        <HomeComp />
      </div>
    </section>
  );
}
