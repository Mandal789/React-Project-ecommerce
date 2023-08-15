import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { useProductContext } from "../../contextApi_store/ProductContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Product = () => {
  const navigate = useNavigate();
  const { isLoading, FeauterProducts } = useProductContext();
 
  if (isLoading) {
    return (
      <>
        <div className=" mt-5 mb-10 ml-[5%] flex items-center justify-items-center justify-around w-[90%]  ">
          <Skeleton
            width={350}
            height={300}
            borderRadius={5}
            baseColor={"#374151"}
            highlightColor={"#6b7280"}
          />
          <Skeleton
            width={350}
            height={300}
            borderRadius={5}
            baseColor={"#374151"}
            highlightColor={"#6b7280"}
          />
          <Skeleton
            width={350}
            height={300}
            borderRadius={5}
            baseColor={"#374151"}
            highlightColor={"#6b7280"}
          />
        </div>
      </>
    );
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {FeauterProducts.map((data) => {
            const { id, category, name, price, image } =
              data;
            return (
              <React.Fragment key={id}>
              
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={image}
                      alt="blog"
                    />
                    <div className="p-4 bg-gray-50">
                      <h2 className="tracking-widest  text-lg title-font font-medium text-gray-500 mb-1">
                        {category}
                      </h2>

                      <h1 className=" flex justify-between title-font text-lg font-medium text-gray-900 mb-3">
                        {name}
                        <p>${price.toString().slice(0, 4)}</p>
                      </h1>
                     
                      <div className="flex items-center flex-wrap ">
                        <NavLink
                          to={"/working"}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </NavLink>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                </React.Fragment>
            );
          })}
          <button
            className="px-4 py-1 ml-[45%] mt-3  bg-cyan-400  text-gray-800 rounded hover:bg-cyan-500"
            onClick={() => navigate("/products")}
          >
            ALL PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
