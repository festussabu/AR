import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Foo1 = () => {
  return (
    <div
      className="w-full bg-[#EFF0F6] mt-20 h-[73rem] p-4 md:flex  md:h-[50rem] md:justify-between overflow-hidden lg:justify-center xl:justify-around lg:p-20"
      id="solutions"
    >
      <div className="flex flex-col gap-3">
        {/* got interested */}
        <h1 className="bg-gradient-to-r from-red-600 to-[var(--text-color)] bg-clip-text text-transparent text-2xl relative mb-10 ml-5 sm:ml-10 md:ml-0 xl:-ml-20">
          Got i
          <span className="bg-gradient-to-r from-red-600 to-[var(--text-color)] bg-clip-text text-transparent">
            nterested?
          </span>
          <span className="border-b-4 border-[var(--text-color)] absolute left-0 w-20 top-10"></span>
        </h1>
        {/* circle */}
        <div className="bg-blue-700 text-white rounded-full text-center h-[300px] w-[300px] flex flex-col items-center justify-center gap-5 self-center">
          <h1 className="font-bold text-2xl">Let's Connect!</h1>
          <p className="">
            Want to learn more about our technology, or how we can help you move
            ahead? Let's chat!
          </p>
        </div>
        {/* follow us */}
        <div className="ml-5 md:ml-0 sm:ml-10 flex gap-2 items-center xl:-ml-20 md:mt-10">
          <h1 className="text-gray-700 font-bold text-2xl">Follow Us |</h1>

          <FaLinkedin size={25} className="text-blue-900" />
          <FaSquareFacebook size={25} className="text-blue-900" />
          <FaInstagramSquare size={25} className="text-orange-800" />
          <IoLogoYoutube size={25} className="text-red-700" />
        </div>
      </div>

      {/* right part */}
      <div>
        {/* middle h1 */}
        <h1 className="text-center p-2 font-bold text-xl mt-5">
          Every question has an ANSCER
        </h1>
        <div className="flex justify-around mt-2">
          <input
            type="text"
            className="border-b border-gray-500 outline-none bg-transparent w-[40%]"
            placeholder="First Name*"
          />
          <input
            type="text"
            className="border-b border-gray-500 outline-none bg-transparent w-[40%]"
            placeholder="Last Name*"
          />
        </div>
        <input
          type="text"
          className="border-b border-gray-500 outline-none ml-[32px] w-[36.3rem] mt-5 bg-transparent md:mr-[30px]"
          placeholder="Contact"
        />
        <div className="flex justify-around mt-8">
          <input
            type="text"
            className="border-b border-gray-500 outline-none bg-transparent w-[40%]"
            placeholder="Company Name*"
          />
          <input
            type="text"
            className="border-b border-gray-500 outline-none bg-transparent w-[40%]"
            placeholder="Title*"
          />
        </div>
        <div className="flex justify-around mt-8">
          <input
            type="text"
            className="border-b border-gray-500 outline-none bg-transparent w-[40%]"
            placeholder="Phone*"
          />
          <input
            type="text"
            className="border-b border-gray-500 outline-none bg-transparent w-[40%]"
            placeholder="Pin Code*"
          />
        </div>

        <div className="mt-6 ml-8 mb-6">
          <label>Please select products</label>
          <div className="overflow-y-scroll h-[90px]">
            <p>AR-250</p>
            <p>AR-650</p>
            <p>AR-1250</p>
            <p>TR-1000</p>
            <p>Automation Solution</p>
          </div>
        </div>

        <textarea
          type="text"
          className="border-b border-gray-500 outline-none ml-[32px] w-[90%] mt-5 bg-transparent h-[100px]"
          placeholder="Enter Your Message"
        />
        <button className="text-white bg-[var(--text-color)] mt-5 px-5 py-3 ml-7">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Foo1;
