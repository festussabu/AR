import React from "react";

const Product = () => {
  return (
    <div
      className="p-4 flex flex-col items-center mt-[2rem] gap-4 w-full"
      id="products"
    >
      <h1 className="text-3xl bg-gradient-to-r from-red-600 to-[var(--text-color)] bg-clip-text text-transparent mb-2">
        Meet our TRs
      </h1>
      <p className="text-[var(--text-color)] text-center 2xl:px-40 xl:px-[100px]">
        TR1000 is the inaugural member of the TR series. It sets the stage for
        the new era of Robotics, Innovation and Technology. With cutting-edge
        technology and advanced features, the TR Series is a game-changer for
        your material handling needs making your workplace safer than ever
        before for your employees, your products, and your culture!
      </p>
      <h2 className="text-[var(--text-color)] text-xl">What We Provide</h2>
    </div>
  );
};

export default Product;
