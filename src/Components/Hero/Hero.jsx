import React from "react";
import heroImage from "../../assets/images/heroimage.avif";
import { MdArrowDropDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className="px-4 lg:px-[3vw] w-full relative pb-2 bg-[#F5F5F5]">
      <div>
        <img
          src={heroImage}
          alt="Hero image"
          className="w-full h-auto lg:h-[550px] rounded-lg lg:rounded-none"
        />
      </div>
      <div className="p-[30px] rounded-[16px] bg-white absolute top-10 left-34 hidden md:block">
        <h1 className="text-3xl font-bold">Find your right car</h1>
        <div className="flex justify-between items-center py-[25px] gap-3">
          <button className="py-3 px-[40px] bg-black text-white rounded-lg">
            New Car
          </button>
          <button className="py-3 px-[40px] rounded-lg border border-gray-400 text-gray-500">
            Used Car
          </button>
        </div>
        <div className="flex justify-start items-center mb-4">
          <input
            type="radio"
            name="selectBrand"
            className="mr-2 w-5 h-5"
            defaultChecked
          />{" "}
          <span className="font-semibold text-red-500">By Budget</span>
          <input
            type="radio"
            name="selectBrand"
            className="mr-2 ml-5 w-5 h-5"
          />{" "}
          <span className="font-semibold">By Brand</span>
        </div>
        <div>
          <div className="border border-gray-400 rounded-lg flex flex-col justify-center">
            <div className="flex justify-between items-center border-b border-gray-400 px-5 py-3 text-gray-500 font-semibold">
              <span>Select Budget</span>
              <MdArrowDropDown />
            </div>
            <div className="flex justify-between items-center px-5 py-3 text-gray-500  font-semibold">
              <span>All Vehicle Type</span>
              <MdArrowDropDown />
            </div>
          </div>
        </div>
        <button className="text-xl font-bold text-white bg-red-500 rounded-lg px-5 py-3 w-full my-[30px] cursor-pointer hover:bg-red-600">
          Search
        </button>
        <div className="flex justify-end">
          <span className="text-sm text-gray-500 cursor-pointer font-semibold">
            Advance Search &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
