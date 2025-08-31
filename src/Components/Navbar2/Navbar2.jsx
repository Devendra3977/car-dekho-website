 import React from 'react'
import { MdArrowDropDown, MdOutlineLocationOn } from 'react-icons/md'


 const Navbar1 = () => {
   return (
     <nav>
         <div className='fixed top-18 bg-white border-t border-gray-200 left-0 z-100 px-[5vw] md:px-[5vw] lg:px-[9vw] py-3 w-full shadow md:flex hidden flex-wrap justify-between items-center'>
            <div className='flex justify-center items-center space-x-6 font-semibold text-sm'>
                 <button className='inline-flex items-center cursor-pointer gap-2'>NEW CARS<MdArrowDropDown/></button>
                 <button className='inline-flex items-center cursor-pointer gap-2'>USED CARS<MdArrowDropDown/></button>
                 <button className='inline-flex items-center cursor-pointer gap-2'>NEWS & REVIEWS CARS<MdArrowDropDown/></button>
                 <button className='inline-flex items-center cursor-pointer gap-2'>VIDEOS<MdArrowDropDown/></button>
            </div>
            <div>
                <button className='text-gray-500 inline-flex items-center cursor-pointer'><MdOutlineLocationOn className='text-xl'/>Slect City<MdArrowDropDown/></button>
            </div>
         </div>
     </nav>
   )
 }
 
 export default Navbar1
 