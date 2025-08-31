import React, { useRef } from "react";

const Item = ({ scrollRef, cars }) => {
  if (!cars || cars.length === 0) {
    return <p className="p-4 text-gray-500">No cars available</p>;
  }
  return (
    <div
      className="flex overflow-x-auto space-x-5 py-6 scrollbar-hide"
      ref={scrollRef}
    >
      {cars.map((car, index) => (
        <div
          key={index}
          className="min-w-[200px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
        >
          {/* Car Image */}
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-47 object-contain bg-gray-50"
          />

          {/* Car Details */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
            <p className="text-sm text-gray-600 font-semibold">
              ₹{car.startingPrice} - {car.maxPrice} Lakh*
            </p>

            {/* Button */}
            <button className="mt-4 w-full border border-orange-500 text-orange-500 font-medium py-2 px-4 rounded-xl hover:bg-orange-500 hover:text-white transition">
              View August Offers
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
