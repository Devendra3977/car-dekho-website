import React from 'react'
import { nearByCities } from '../Constant'
import { MdArrowDropDown, MdOutlineLocationOn } from 'react-icons/md'

const NearByCities = () => {
  return (
    <div className='h-auto w-full py-6 px-0 lg:px-[9vw] bg-[#F5F5F5]'>
      <div className='border border-gray-200 rounded-[20px] h-auto shadow-lg px-5 pt-5 bg-white'>
        <h1 className="text-2xl font-semibold">Get trusted used cars nearby</h1>
        <div className='w-full flex flex-row justify-center items-center'>
            <div className='w-full lg:w-[79%] flex flex-wrap justify-start items-center gap-1 lg:gap-4 pt-3 pb-10'>
                {nearByCities.map((city,index)=>{
                    return <div key={index} className='flex flex-col justify-center items-center py-4 px-5 border border-gray-200 shadow  rounded-lg hover:border-gray-300 hover:shadow-lg'>
                        <img src={city.cityImage} alt='Cities logo' className='h-auto w-20 lg:w-24'/>
                        <p className='text-sm text-gray-400'>{city.carInfo}</p>
                        <h2 className='font-semibold'>{city.cityName}</h2>
                    </div>
                })}
            </div>
            <div className='hidden md:flex w-[21%] flex flex-col items-center'>
                <h1 className='text-xl text-center mb-4 text-gray-500'>I am looking to buy a second hand car in</h1>
                <div className='flex flex-row justify-center items-center border border-gray-300 rounded py-3 px-4 shadow'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <MdOutlineLocationOn className='inline text-gray-400'/>
                        <input type='text' placeholder='Enter Your City' className='focus:outline-none placeholder:text-gray-400'/>
                    </div>
                    <div>
                        <MdArrowDropDown className='text-xl'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NearByCities
