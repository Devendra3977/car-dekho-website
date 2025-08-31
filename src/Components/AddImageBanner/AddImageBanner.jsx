import React from 'react'

const AddImageBanner = ({image}) => {
  return (
  
      <div className='w-full flex justify-center items-center py-4 lg:block hidden bg-[#F5F5F5]'>
        <img src={image} className='h-auto w-auto ml-[18%]'/>
      </div>
    
  )
}

export default AddImageBanner
