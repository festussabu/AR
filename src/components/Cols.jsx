import React from "react";
import product from "../assets/images/product.webp";

const Cols = () => {
  return (
    <div
      id="products"
      className="mt-20 w-[450px] md:w-[95%] lg:w-[450px] h-auto m-auto bg-[#EBF4FF] cursor-pointer p-2"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.16)" }}
    >
      <div className="flex flex-col text-center gap-2">
        <img
          src={product}
          alt="/"
          className="hover:scale-110 ease-in transition-all duration-300"
        />
        <h1 className="text-[45px] bg-gradient-to-r from-red-600 to-[var(--text-color)] bg-clip-text text-transparent">
          <span className="text-[var(--text-color)]">TR</span> 1000
        </h1>
        <p className="mb-[30px] text-[var(--text-color)] relative">
          Our lowest payload robot is ideal, for heavyweight transportation that
          can tug up to 1000 Kg
          <span className="absolute bottom-[-20px] left-0 right-0 border-b"></span>
        </p>
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex">
            <h1 className="font-bold text-[var(--text-color)]">Robot Name</h1>
            <p className="text-[var(--text-color)] ml-[97px]">: TR 1000</p>
          </div>
          <div className="flex">
            <h1 className="font-bold text-[var(--text-color)]">Dimensions</h1>
            <p className="text-[var(--text-color)] ml-[100px]">
              : 900*650*850 mm
            </p>
          </div>
          <div className="flex">
            <h1 className="font-bold text-[var(--text-color)]">Payload</h1>
            <p className="text-[var(--text-color)] ml-[130px]">: 1000 kg</p>
          </div>
          <div className="flex gap-12">
            <h1 className="font-bold text-[var(--text-color)]">Max speed</h1>
            <p className="text-[var(--text-color)] ml-[62px]">: 1.2 m/s</p>
          </div>
          <div className="flex">
            <h1 className="font-bold text-[var(--text-color)]">Total Weight</h1>
            <p className="text-[var(--text-color)] ml-[98px]">: 200 kg</p>
          </div>
          <div className="flex">
            <h1 className="font-bold text-[var(--text-color)]">
              Ground Clearance
            </h1>
            <p className="text-[var(--text-color)] ml-[54px]">: 40 mm</p>
          </div>
        </div>
      </div>
      <button className="w-full p-4 mt-[20px] text-white text-xl bg-[var(--text-color)]">
        view details
      </button>
    </div>
  );
};

export default Cols;
