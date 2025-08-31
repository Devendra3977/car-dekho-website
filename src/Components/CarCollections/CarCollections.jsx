import React, { useRef } from 'react'
import Item from '../Item/Item'
import ViewMoreCarsButton from '../VievMoreCarsButton/ViewMoreCarsButton'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const CarCollections = ({heading, cars}) => {
    const scrollRef = useRef(null);
  
    // scroll by one card width
    const scrollLeft = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 23; // card + gap
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 23;
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };
  return (
    <div className='h-auto w-full py-6 px-0 lg:px-[9vw] relative bg-[#F5F5F5]'>
        {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-30 bottom-[270px] -translate-y-1/2 text-orange-500 text-4xl hover:text-orange-600 z-10 hidden lg:block"
            >
              <FaArrowCircleLeft />
            </button>
      
      <div className='border border-gray-200 rounded-[20px] h-auto shadow-lg px-5 pt-5 bg-white'>
         <div className={`${heading == 'The most searched cars' ? 'border-b border-gray-200' : ''}`}>
            <h1 className='text-2xl font-semibold'>{heading}</h1>
            {
              heading == 'The most searched cars' && (
                <div className='flex justify-start items-center space-x-6 lg:space-x-8 text-base py-5'>
              <span className='font-semibold cursor-pointer'>SUV</span>
              <span className='cursor-pointer'>HatchBack</span>
              <span className='cursor-pointer'>Sedan</span>
              <span className='cursor-pointer'>MUV</span>
              <span className='cursor-pointer'>Luxiry</span>
            </div>)
              
            }
            
      </div>
      {/* // item cmponent called here */}
     <Item scrollRef={scrollRef} cars={cars} />
      <ViewMoreCarsButton btndata="View All SUV Cars "/>
      </div>
      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-30 bottom-[270px] -translate-y-1/2 text-orange-500 text-4xl hover:text-orange-600 z-10 hidden lg:block"
      >
        <FaArrowCircleRight />
      </button>
     
    </div>
  )
}

export default CarCollections
