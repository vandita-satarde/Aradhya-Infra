import React from 'react'
import image01 from '../assets/image-0.jpg'
import { FaShieldAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";

function Testimonials() {
  return (
    <div className='px-4 md:px-8 lg:px-12 xl:px-30 py-12 md:py-20 lg:py-27'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto'>
        
        {/* Left Section - Features */}
        <div className='w-full lg:w-2/3'>
          <p className='text-sm md:text-[15px] text-[#048886] font-medium mb-4'>OUR TESTIMONIALS</p>
          <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[50px] font-[abril] font-bold mb-8 md:mb-12 leading-tight text-gray-800'>
            Why Families Choose Aradhya Infra
          </h2>
          
          <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
            {/* Image */}
            <div className='bg-[#E6FFFF] w-full md:w-[300px] lg:w-[380px] p-3 rounded-[20px] md:rounded-[30px] mx-auto md:mx-0'>
              <img src={image01} className='w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-[20px] md:rounded-[30px] object-cover' alt="testimonial" />
            </div>
            
            {/* Features List */}
            <div className='flex flex-col justify-between space-y-6 md:space-y-8 flex-1'>
              <div className='flex items-start gap-4 md:gap-6'>
                <FaShieldAlt className='text-[#048886] w-[25px] h-[25px] md:w-[35px] md:h-[35px] mt-1 flex-shrink-0'/>
                <div>
                  <h3 className='font-[abril] font-bold text-lg md:text-xl lg:text-[21px] mb-2 md:mb-3 text-gray-800'>
                    NMRDA & RI Approved
                  </h3>
                  <p className='font-sans text-sm md:text-base lg:text-[18px] text-[#050810]'>
                    Mendapatka keamanan
                  </p>
                </div>
              </div>
              
              <div className='flex items-start gap-4 md:gap-6'>
                <FaList className='text-[#048886] w-[25px] h-[25px] md:w-[35px] md:h-[35px] mt-1 flex-shrink-0'/>
                <div>
                  <h3 className='font-[abril] font-bold text-lg md:text-xl lg:text-[21px] mb-2 md:mb-3 text-gray-800'>
                    List Apartments Nagpur
                  </h3>
                  <p className='font-sans text-sm md:text-base lg:text-[18px] text-[#050810]'>
                    Apartments Exist in India
                  </p>
                </div>
              </div>
              
              <div className='flex items-start gap-4 md:gap-6'>
                <FaShieldAlt className='text-[#048886] w-[25px] h-[25px] md:w-[35px] md:h-[35px] mt-1 flex-shrink-0'/>
                <div>
                  <h3 className='font-[abril] font-bold text-lg md:text-xl lg:text-[21px] mb-2 md:mb-3 text-gray-800'>
                    Free Consultation
                  </h3>
                  <p className='font-sans text-sm md:text-base lg:text-[18px] text-[#050810]'>
                    Ask to Our Experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Testimonial */}
        <div className='w-full lg:w-1/3 border border-gray-200 p-6 md:p-10 lg:p-14 rounded-[30px] lg:rounded-4xl font-sans bg-white shadow-lg'>
          <FaQuoteLeft className='w-[30px] h-[35px] md:w-[40px] md:h-[45px] text-[#DADADA] mb-4' />
          <h3 className='font-medium italic text-lg md:text-xl lg:text-[22px] text-[#050810] mb-4 md:mb-6 lg:mb-7'>
            Township Living
          </h3>
          <p className='text-sm md:text-base lg:text-[18px] text-[#050810] leading-relaxed mb-6 md:mb-8 lg:mb-10'>
            "We were first-time home buyers and nervous about everything. But Aradhya Infra made the process smooth and stress-free. From site visit to final handover, their team was transparent, responsive, and genuinely cared about our needs. We love our new 2BHK!"
          </p>
          
          <div className='flex items-center gap-3 md:gap-4'>
            <img src={image01} className='border border-[#0000004D] h-10 w-10 md:h-12 md:w-12 rounded-full object-cover' alt="testimonial author" />
            <p className='font-medium text-sm md:text-base lg:text-[18px] text-gray-700'>
              – Mr. and Mrs. Maheshwari, Central India
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
