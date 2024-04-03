import React from "react";
import Image from "next/image";

import apple_logo from "../public/apple_logo.svg";
import playstore from "../public/playstore.svg";

const Hero = () => {
  return (
    <div className="my-40 text-center flex flex-col justify-center items-center relative">
      <div
        id="text-gradient"
        className="text-center text-rose-500 text-[60px] font-extrabold font-['Inter']"
      >
        Swift Blockchain Revolution
      </div>
      <div className="w-[700px] opacity-80 text-white text-[20px] font-light">
        Ready to energize your life and turn it into earnings? With Move to
        Earn, your steps hold real value. Simply walk, run, or exercise to earn.
        Each step matters.
      </div>

      <div className="flex mt-10 items-center justify-between gap-5">
        <div className="bg-[#7E7E7E4A] text-white rounded-lg border border-white border-opacity-20 px-[15px] py-[10px] flex items-center justify-between gap-3 cursor-pointer hover:scale-105 transition-all ease-in-out delay-100">
          <Image width={28} src={playstore} alt="playstore" />
          Play Store
        </div>
        <div className="bg-[#D9D9D9E5] text-black rounded-lg  px-[15px] py-[10px] flex items-center justify-between gap-3 cursor-pointer hover:scale-105 transition-all ease-in-out delay-100">
          <Image width={25} src={apple_logo} alt="apple" />
          App Store
        </div>
      </div>
    </div>
  );
};

export default Hero;
