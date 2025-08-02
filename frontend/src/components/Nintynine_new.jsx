import React from 'react'
import { Link } from 'react-router-dom'
import image01 from '../assets/image-0.jpg'
import batch from '../assets/icons/b-award.png'

function Nintynine() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
      {/* Image Section */}
      <div className='relative order-2 lg:order-1'>
        <div className='relative'>
          <img src={image01} className='w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[30px] object-cover' alt="about" />
          <div className='absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white p-3 rounded-[30px] shadow-lg'>
            <img src={image01} className='w-[150px] md:w-[200px] lg:w-[250px] h-[120px] md:h-[160px] lg:h-[200px] rounded-[30px] object-cover' alt="about overlay" />
          </div>
          <div className='absolute -bottom-6 -left-4 md:-bottom-8 md:-left-6 bg-black text-white text-center p-4 md:p-6 rounded-[30px] lg:rounded-4xl'>
            <p className='text-3xl md:text-4xl lg:text-[50px] font-bold'>99%</p>
            <p className='text-sm md:text-base lg:text-[21px]'>Customer Support</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='order-1 lg:order-2'>
        <p className='text-sm md:text-[15px] text-[#048886] font-sans font-medium mb-6'>ABOUT US</p>
        
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[45px] text-[#2D2D2D] font-[abril] font-bold mb-6 leading-tight'>
          "Aradhya Infra: Building Futures in Central India"
        </h2>
        
        <p className='text-base md:text-lg lg:text-[18px] text-[#6E6E6E] font-sans mb-8 leading-relaxed'>
          "Aradhya Infra: Building Futures in Central India"
        </p>
        
        <div className='space-y-6 mb-8'>
          <div className='flex items-start gap-4'>
            <img src={batch} className='h-6 md:w-[27px] h-[35px] mt-1 flex-shrink-0' alt="badge" />
            <p className='font-[abril] text-base md:text-lg lg:text-[21px] text-[#2D2D2D] font-bold leading-relaxed'>
              Local experts deeply rooted in Nagpur and surrounding areas.
            </p>
          </div>
          
          <div className='flex items-start gap-4'>
            <img src={batch} className='h-6 md:w-[27px] h-[35px] mt-1 flex-shrink-0' alt="badge" />
            <p className='font-[abril] text-base md:text-lg lg:text-[21px] text-[#2D2D2D] font-bold leading-relaxed'>
              Focus on community-centric planning and future-ready infrastructure.
            </p>
          </div>
        </div>
        
        <Link 
          to="/about" 
          className='inline-block bg-[#048886] hover:bg-[#036d6b] font-sans text-[#F3ECDC] text-sm md:text-[15px] py-3 md:py-4 lg:py-5 px-8 md:px-12 lg:px-14 rounded-[30px] lg:rounded-4xl transition-colors duration-300 font-medium'
        >
          MORE ABOUT US →
        </Link>
      </div>

      {/* Vision & Mission */}
      <div className='lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-20'>
        <div className='flex gap-4'>
          <img src={batch} className='h-6 md:w-[27px] h-[35px] mt-1 flex-shrink-0' alt="badge" />
          <div className='text-[#2D2D2D]'>
            <h3 className='text-lg md:text-xl lg:text-[21px] font-[abril] font-bold mb-3'>Vision</h3>
            <p className='text-sm md:text-base lg:text-[18px] leading-relaxed'>
              "To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."
            </p>
          </div>
        </div>
        
        <div className='flex gap-4'>
          <img src={batch} className='h-6 md:w-[27px] h-[35px] mt-1 flex-shrink-0' alt="badge" />
          <div className='text-[#2D2D2D]'>
            <h3 className='text-lg md:text-xl lg:text-[21px] font-[abril] font-bold mb-3'>Mission</h3>
            <p className='text-sm md:text-base lg:text-[18px] leading-relaxed'>
              "To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nintynine
