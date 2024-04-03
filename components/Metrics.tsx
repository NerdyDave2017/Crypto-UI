import React from "react";
import MetricCard from "./MetricCard";

const Metrics = () => {
  return (
    <div className="max-w-[calc(350px*2)] h-[calc(200px*2)] mx-auto grid grid-cols-2 gap-x-20 gap-y-10 justify-items-center relative mb-40">
      <MetricCard />
      {/* <div />
      <div /> */}
      <MetricCard />
      <MetricCard />
      <MetricCard />

      {/* <div className="w-[741px] h-[300px] bg-gradient-to-b from-pink-900 to-yellow-950 rounded-full blur-[600px] top-[50%] left-[50%] translate-x-[-50%] absolute" /> */}
    </div>
  );
};

export default Metrics;
