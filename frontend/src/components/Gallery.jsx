import React from 'react'
import image01 from '../assets/image-0.jpg'

function Gallery() {
  return (
    <div className='text-center bg-[#F3ECDC] py-12 md:py-20 lg:py-30 px-4 md:px-8 lg:px-12'>
      <p className='mb-4 md:mb-5 text-[#048886] text-sm md:text-[15px] font-medium'>GALLERY</p>
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[50px] text-[#2D2D2D] font-[abril] font-bold mb-8 md:mb-12 lg:mb-16'>
        Our Fabulous Projects
      </h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 max-w-7xl mx-auto'>
        <div className='md:col-span-2 lg:col-span-2'>
          <img src={image01} className='w-full h-[200px] md:h-[280px] lg:h-[320px] rounded-[30px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
        </div>
        <div>
          <img src={image01} className='w-full h-[200px] md:h-[280px] lg:h-[320px] rounded-[30px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
        </div>
        <div>
          <img src={image01} className='w-full h-[200px] md:h-[280px] lg:h-[320px] rounded-[30px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
        </div>
        <div>
          <img src={image01} className='w-full h-[200px] md:h-[280px] lg:h-[320px] rounded-[30px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
        </div>
        <div>
          <img src={image01} className='w-full h-[200px] md:h-[280px] lg:h-[320px] rounded-[30px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
        </div>
      </div>
      
      <p className='text-[13px] md:text-[15px] text-[#2D2D2D] mt-8 md:mt-12 lg:mt-16 font-medium'>
        SEE OUR GALLERY SECTION LEGACY OF ARADHYA INFRA
      </p> 
    </div>
  )
}

export default Gallery
