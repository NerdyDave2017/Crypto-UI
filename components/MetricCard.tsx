import React from "react";

const MetricCard = () => {
  return (
    <div className="w-[350px] h-[200px] relative bg-white bg-opacity-5 border border-white border-opacity-10 rounded-[20px]">
      <div className="w-full h-full text-left flex flex-col items-center justify-center p-10 gap-10">
        <div className="w-full text-left">
          <div className="text-center text-rose-700 text-[30px] font-bold font-['Inter']">
            +112,256.60
          </div>
          <div className="opacity-60 text-center text-white text-opacity-80 text-[20px] font-extrabold font-['Inter']">
            USD
          </div>
        </div>

        <div className="left-[60px] text-center text-white text-[25px] font-extrabold font-['Inter']">
          Tokens Airdroped
        </div>
      </div>

      <div className="w-[60px] h-[60px] -right-5 -top-5 absolute bg-white bg-opacity-5 border border-white border-opacity-10 rounded-full backdrop-blur-[20px]">
        <div className=" bg-white bg-opacity-0" />
      </div>
    </div>
  );
};

export default MetricCard;
