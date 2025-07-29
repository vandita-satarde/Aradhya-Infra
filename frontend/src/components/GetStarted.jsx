import React from 'react'
import { Link } from 'react-router-dom'
import image01 from '../assets/image-0.jpg'

function GetStarted() {
  return (
    <div className='relative py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-[#F3ECDC] overflow-hidden'>
      <div className='relative rounded-2xl lg:rounded-4xl overflow-hidden max-w-7xl mx-auto'>
        <img 
          src={image01} 
          className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover' 
          alt="background"
        />        
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 md:p-12 lg:p-16'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[60px] text-[#F3ECDC] font-bold font-[abril] leading-tight mb-4 md:mb-6 lg:mb-8'>
            Turning your Dreams into<br className='hidden md:block'/> Foundation
          </h2>
          
          <p className='text-[#FFFFFFBF] text-sm md:text-base lg:text-[18px] font-sans mb-6 md:mb-8 lg:mb-10 max-w-2xl'>
            "More Than Homes-Moments, Memories, Meaning."
          </p>
          
          <Link 
            to="/contact"
            className='bg-teal-600 hover:bg-teal-700 text-sm md:text-[15px] font-sans text-[#F3ECDC] py-3 md:py-4 px-8 md:px-10 rounded-2xl lg:rounded-4xl transition-colors duration-300 font-medium'
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
