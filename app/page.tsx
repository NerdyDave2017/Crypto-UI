import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Tokens from "@/components/Tokens";

export default function Home() {
  return (
    <main className="flex min-h-screen relative">
      <div className="w-[1440px] mx-auto py-[30px] px-[110px]">
        <Navbar />
        <Hero />
        <Metrics />
        <Tokens />
      </div>

      <div className="w-[300px] h-[300px] bg-gradient-to-b from-lime-400 to-amber-700 rounded-full blur-[500px] top-[40%] left-[50%] translate-x-[-50%] absolute -z-50" />
      <div className="w-[901px] h-[720px] bg-gradient-to-b from-purple-700 to-purple-700 rounded-full blur-[600px] left-[-20%] top-[-70%] absolute -z-40" />
      {/* <div className="w-[450px] h-[450px] bg-gradient-to-b from-lime-400 to-amber-700 rounded-full blur-[500px] top-[50%] left-[50%] translate-x-[-50%] absolute" />
      <div className="w-[741px] h-[300px] bg-gradient-to-b from-pink-900 to-yellow-950 rounded-full blur-[600px] top-[50%] left-[50%] translate-x-[-50%] absolute" /> */}
    </main>
  );
}
