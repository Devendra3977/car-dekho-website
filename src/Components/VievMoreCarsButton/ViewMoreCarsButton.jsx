import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

const ViewMoreCarsButton = ({btndata}) => {
  return (
    <div>
      <button className='font-semibold text-red-500 pb-5 cursor-pointer'>{btndata} <FaArrowCircleRight className='inline'/></button>
    </div>
  )
}

export default ViewMoreCarsButton
