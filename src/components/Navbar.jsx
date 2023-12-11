import React from "react";
import backgroundImg from "../assets/images/bg-img.png";
import arLogoBlack from "../assets/images/ar-black.png";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      {/* bg img */}
      <img
        src={backgroundImg}
        alt="/"
        className="h-screen object-cover w-full"
      />
      {/* Nav Bar */}
      <div className="absolute top-2 w-full flex items-center justify-between">
        <img src={arLogoBlack} alt="/" className=" w-[200px] xl:ml-20 ml-5" />

        <ul className="hidden md:flex text-[var(--text-color)]">
          <li className="text-lg xl:p-8 p-3">
            <a href="/">COMPANY</a>
          </li>
          <li className="text-lg xl:p-8 p-3">
            <a href="#products">PRODUCTS</a>
          </li>
          <li className="text-lg xl:p-8 p-3">
            <a href="#solutions">SOLUTIONS</a>
          </li>
        </ul>

        <button className="hidden text-[var(--text-color)] md:flex border border-[text-[var(--text-color)]] px-4 xl:py-3 rounded-full text-lg xl:mr-20 mr-4">
          CONTACT US
        </button>
      </div>
      <div>
        <CgMenuMotion
          size={30}
          className="mx-8 cursor-pointer text-gray-700 md:hidden absolute right-0 top-8"
        />
      </div>
      {/* text inside image */}
      <div className="absolute w-full top-[240px] sm:top-[350px]">
        <div className="absolute flex flex-col items-center left-[60px] sm:left-[180px] md:left-[480px] xl:left-[600px] 2xl:left-[900px] text-center">
          <p className="text-[45px] sm:text-[55px] tracking-wide bg-gradient-to-r from-red-600 to-[var(--text-color)] bg-clip-text text-transparent md:text-[70px] md:w-[280px] lg:w-full">
            THE TR SERIES
          </p>
          <h1 className="text-[45px] sm:text-[50px] tracking-wide bg-gradient-to-r from-red-600 to-[var(--text-color)] bg-clip-text text-transparent font-bold">
            <span className="text-blue-900">TR</span> 1000
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
