import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";

const Navbar = () => {
  return (
    <div className="w-full px-[20px] py-[20px] box-border bg-white bg-opacity-5 rounded-[50px] backdrop-blur-[20px] flex justify-between items-center">
      <Image src={Logo} alt="logo" className="ml-5" />
      <div className="gap-10 flex justify-between items-center">
        <div className="text-center text-white">Home</div>
        <div className="text-center text-white">Career</div>
        <div className="text-center text-white">Features</div>
      </div>
      <div className="bg-[#D9D9D9] rounded-[30px] px-[20px] py-[10px] text-black font-bold">
        Launch App
      </div>
    </div>
  );
};

export default Navbar;
