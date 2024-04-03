import React from "react";
import Image from "next/image";

import stETH from "../public/steth-steth-logo.svg";
import USDT from "../public/tether-usdt-logo.svg";
import TRC_USDT from "../public/tether-usdt-trc20.svg";
import USDC from "../public/usdc-logo.svg";
import wBTC from "../public/wrapped-bitcoin-wbtc-logo.svg";
import wETH from "../public/WETH.png";

const Tokens = () => {
  return (
    <div className="w-full text-center">
      <div className=" text-center text-white text-[50px] font-extrabold font-['Inter']">
        Airdrop Tokens
      </div>
      <div className="opacity-50 text-white text-xl font-normal font-['Inter']">
        Select available tokens to receive airdrop
      </div>
      <div className="w-[700px] mx-auto h-auto flex flex-wrap items-center justify-center gap-5 mt-10">
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={USDT} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={USDC} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={wBTC} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image width={70} src={stETH} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={wETH} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={USDC} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={TRC_USDT} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={wBTC} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={wETH} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image width={70} src={stETH} alt="" className="p-5" />
        </div>
        <div className="bg-white cursor-pointer bg-opacity-10 w-24 h-24 rounded-3xl flex justify-center items-center">
          <Image src={USDC} alt="" className="p-5" />
        </div>
      </div>
    </div>
  );
};

export default Tokens;
