import React from "react";
import { FaRegEnvelope, FaYoutube } from "react-icons/fa";
import ViewMoreCarsButton from "../VievMoreCarsButton/ViewMoreCarsButton";
import newcar1 from '../../assets/images/newcar1.jpeg'
import newcar2 from '../../assets/images/newcar2.jpeg'
import sellcar1 from '../../assets/images/sellcar1.jpeg'
import sellcar2 from '../../assets/images/sellcar2.jpeg'
const FindRightCar = () => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 pt-4 px-[5vw] mt-5">
      <h1 className="text-2xl font-semibold">Find your right car</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-4 py-4">
        <div className="w-[170px] bg-purple-500 h-[150px] rounded-lg flex flex-col justify-center items-center text-white">
            <h1 className="text-xl">New Cars</h1>
            <p className="text-[11px]">with exciting offers &rarr;</p>
            <img src={newcar1} alt="" className="h-16 mix-blend-lighten"/>
        </div>
        <div className="w-[170px] bg-red-500 h-[150px] rounded-lg flex flex-col justify-center items-center text-white">
            <h1 className="text-xl">Buy Used Cars</h1>
            <p className="text-[11px]">pre-owned cars for sale &rarr;</p>
            <img src={newcar2} alt="" className="h-16 mix-blend-screen"/>
        </div>
        <div className="w-[170px] bg-blue-400 h-[150px] rounded-lg flex flex-col justify-center items-center text-white">
            <h1 className="text-xl">Sell Car</h1>
            <p className="text-[11px]">at the best price &rarr;</p>
            <img src={sellcar1} alt="" className="h-16 mix-blend-screen"/>
        </div>
        <div className="w-[170px] bg-green-500 h-[150px] rounded-lg flex flex-col justify-center items-center text-white">
            <h1 className="text-xl">Compare</h1>
            <p className="text-[11px]">and find the right car &rarr;</p>
            <img src={sellcar2} alt="" className="h-16 mix-blend-screen"/>
        </div>
         
      </div>
      <ViewMoreCarsButton btndata="View More "/>
    </div>
  );
};

export default FindRightCar;
