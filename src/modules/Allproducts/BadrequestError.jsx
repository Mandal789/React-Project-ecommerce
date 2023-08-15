import React from 'react'
import { useNavigate } from 'react-router-dom';
import internet from "../../Image/504-error-1.jpg";
const BadrequestError = () => {
    const navigate = useNavigate();

    const Errorcure = () => {
      navigate("/");
    };
    return (
      <div className="  flex items-center flex-col justify-center">
        <img
          className="w-[60%] h-[40%] mt-20  "
         src={internet}
         
          alt="img"
        />
         <p className='  relative bottom-28 text-xl text-center font-semibold bg-gray-50'>Api could not fetch data from server because of 502 bad Gateway <br/> Please Try again in a few minutes</p>
        <button
          className="px-4 relative bottom-32 py-0.5 ml-[2%] mt-5 text-xl bg-cyan-400  text-gray-800 rounded hover:bg-violet-500 hover:text-white"
          onClick={() => Errorcure()}
        >
          Go To Home
        </button>
       
      </div>
    );
  
}

export default BadrequestError