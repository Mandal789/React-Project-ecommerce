import React from "react";
import internet from "./Image/internet.jpg";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();

  const Errorcure = () => {
    navigate("/products");
  };
  return (
    <div className=" mywidth text-center p-20 text-4xl text-amber-600">
      <img
        className="w-[30%] ml-[35%] mb-5 border rounded-full shadow-2xl"
        // src="https://i0.wp.com/thedigitalchain.com/wp-content/uploads/2020/05/uses-of-the-internet.png?fit=1200%2C700&ssl=1"
        src={internet}
        alt="img"
      />
      Connect to the internet
      <br />
      You're offline. Check your connection. <br />
      <button
        className="px-4 py-1 ml-[5%] mt-3 text-xl bg-cyan-400  text-gray-800 rounded hover:bg-violet-500 hover:text-white"
        onClick={() => Errorcure()}
      >
        Try Again
      </button>
    </div>
  );
};
export default ErrorPage;
