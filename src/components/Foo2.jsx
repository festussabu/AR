import React from "react";
import arWhite from "../assets/images/ar-white.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Foo2 = () => {
  return (
    <div className="absolute right-0 left-0">
      <div className="bg-[#0A0A17] sm:h-[15rem] h-auto w-full sm:flex sm:flex-row text-gray-400 sm:items-center sm:justify-center">
        <img
          src={arWhite}
          alt="/"
          className="w-[200px] ml-4 py-10 mr-10 self-start sm:-mt-9 md:-mt-10 lg:-mt-8 sm:mr-0 lg:mr-10 xl:mr-20"
        />
        <div className="ml-10 flex flex-col gap-20 sm:flex-row sm:ml-0 sm:gap-3 md:gap-10 lg:gap-16 xl:gap-30 2xl:gap-36">
          <div>
            <h1 className="font-bold mb-2 text-white">Solutions</h1>
            <p>Industrial Robots</p>
          </div>
          <div>
            <h1 className="font-bold mb-2 text-white">Company</h1>
            <p>About</p>
          </div>
          <div>
            <h1 className="font-bold mb-2 text-white">Products</h1>
            <p>AR 250</p>
            <p>AR 650</p>
            <p>AR 1250</p>
            <p>TR 1000</p>
          </div>
          <div>
            <h1 className="font-bold mb-2 text-white">Contact</h1>
            <p>Phone</p>
            <p>IND (+91) 9739 499 716 </p>
            <p>Email</p>
            <p>hello@anscer.com</p>
            <button className="rounded p-2 bg-violet-500 text-white mt-1">
              Send Message
            </button>
          </div>
          <div className="mb-10">
            <h1 className="font-bold mb-2 text-white sm:mr-10">Social</h1>
            <div className="flex flex-row gap-2 sm:flex-col lg:flex-row">
              <FaLinkedin size={25} className="text-blue-900" />
              <FaSquareFacebook size={25} className="text-blue-900" />
              <FaInstagramSquare size={25} className="text-orange-800" />
              <IoLogoYoutube size={25} className="text-red-700 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foo2;
