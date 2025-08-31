import React from "react";
import {carBrands} from "../Constant";
import ViewMoreCarsButton from "../VievMoreCarsButton/ViewMoreCarsButton";

const BrandLogo = () => {
  return (
    <div className="h-auto w-full lg:py-6 px-0 lg:px-[9vw] relative bg-[#F5F5F5]">
      <div className="border border-gray-200 rounded-[20px] h-auto shadow-lg px-5 pt-5 bg-white">
        <h1 className="text-2xl font-semibold">Popular Brands</h1>

        {/* Scrollable Row */}
        <div className="flex flex-wrap md:flex-nowrap gap-1 lg:gap-3 py-4 md:overflow-x-auto scrollbar-hide">
          {carBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-31 lg:w-[190px] lg:h-[170px] p-1 rounded-xl border border-gray-200 flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <img
                src={brand.image}
                alt={`${brand.name} logo`}
                className="w-auto h-auto mb-3"
              />
              <p className="text-base font-medium text-gray-800">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
        <ViewMoreCarsButton btndata="View more brands"/>
      </div>
    </div>
  );
};

export default BrandLogo;
