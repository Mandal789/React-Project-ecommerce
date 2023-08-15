import React from "react";
import Hero from "../../components/HERO";
import Product from "../../components/products";

import Stats from "../../components/StatCart";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="flex flex-col text-center w-full mt-20 capitalize bg-violet-100">
        <span className="mt-10">
          <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
            PRODUCTS
          </h2>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
            Featured Products
          </h1>
          <div className=" h-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 w-40  left-[44%] relative  top-2  "></div>
        </span>
        <Product />
      </div>

      <Stats />
    </>
  );
};

export default Home;
