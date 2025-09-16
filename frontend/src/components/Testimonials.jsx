import React from 'react'
import image01 from '../assets/images/testimonials.jpg'
import { FaShieldAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";


function Testimonials() {
  return (
    <div className='px-3 md:px-4 lg:px-12 xl:px-30 py-12 md:py-12 lg:py-27'>
      <div className='flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-12 max-w-7xl mx-auto'>
        
        {/* Left Section - Features */}
        <div className='w-full lg:w-2/3'>
          <p className='text-[11px] md:text-[13px] text-[#048886] font-medium mb-1 md:mb-4'>OUR TESTIMONIALS</p>
          <h2 className='text-[22px] md:text-[27px] lg:text-4xl xl:text-[50px] font-[abril] font-bold mb-8 lg:mb-12 leading-tight text-gray-800'>
            Why Families Choose Aradhya Infra
          </h2>
          
          <div className='flex flex-col md:flex-row gap-6 md:gap-5 lg:gap-8'>
            {/* Image */}
            <div className='bg-[#F3ECDC] md:w-[220px] lg:w-[380px] h-full p-3 rounded-[20px] md:rounded-[30px] mx-auto md:mx-0'>
              <img src={image01} className=' h-[250px] md:h-[190px] lg:h-[350px] w-full rounded-[20px] md:rounded-[30px] object-cover' alt="testimonial" />
            </div>
            
            {/* Features List */}
            <div className='flex flex-col justify-around gap-5 md:gap-3 '>
              <div className='flex items-start gap-3 lg:gap-6'>
                <FaShieldAlt className='text-[#048886] w-[23px] md:w-[26px] lg:w-[35px] h-[23px] md:h-[26px] lg:h-[35px] mt-1 flex-shrink-0'/>
                <div>
                  <h3 className='font-[abril] font-bold text-lg md:text-[16px] lg:text-[21px] md:mb-1 lg:mb-3 text-gray-800'>
                    NMRDA & RL Approved
                  </h3>
                  <p className='font-sans text-sm lg:text-[18px] text-[#050810]'>
                    NMRDA SANCTION WITH RL PLOTS
                  </p>
                </div>
              </div>
              
              <div className='flex items-start gap-3 lg:gap-6'>
                <FaList className='text-[#048886] w-[23px] md:w-[26px] lg:w-[35px] h-[23px] md:h-[26px] lg:h-[35px] mt-1 flex-shrink-0'/>
                <div>
                  <h3 className='font-[abril] font-bold text-lg md:text-[16px] lg:text-[21px] lg:mb-3 text-gray-800'>
                    List Apartments Nagpur
                  </h3>
                  <p className='font-sans text-sm lg:text-[18px] text-[#050810]'>
                    Apartments Exist in India
                  </p>
                </div>
              </div>
              
              <div className='flex items-start gap-3 lg:gap-6'>
                <FaShieldAlt className='text-[#048886] w-[23px] md:w-[26px] lg:w-[35px] h-[23px] md:h-[26px] lg:h-[35px] mt-1 flex-shrink-0'/>
                <div>
                  <h3 className='font-[abril] font-bold text-lg md:text-[16px] lg:text-[21px] lg:mb-3 text-gray-800'>
                    Free Consultation
                  </h3>
                  <p className='font-sans text-sm lg:text-[18px] text-[#050810]'>
                    Ask to Our Experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Testimonial */}
        <div className='mx-auto w-[270px] md:w-[390px] lg:w-1/3 border p-5 md:p-4 lg:p-14 rounded-[30px] lg:rounded-4xl font-sans bg-white shadow-xl'>
          <FaQuoteLeft className='w-[28px] lg:w-[40px] h-[33px] lg:h-[45px] text-[#DADADA] mb-2 lg:mb-4' />
          <h3 className='font-medium italic text-lg md:text-xl lg:text-[22px] text-[#050810] mb-3 md:mb-1 lg:mb-7'>
            Township Living
          </h3>
          <p className='text-[13px] lg:text-[18px] text-[#050810] leading-relaxed mb-6 md:mb-3 lg:mb-10'>
            "We were first-time home buyers and nervous about everything. But Aradhya Infra made the process smooth and stress-free. From site visit to final handover, their team was transparent, responsive, and genuinely cared about our needs. We love our new 2BHK!"
          </p>
          
          <div className='flex items-center gap-3 md:gap-4'>
            <img src={image01} className='border border-[#0000004D] h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover' alt="testimonial author" />
            <p className='font-medium text-sm md:text-[13px] lg:text-[18px] text-gray-700'>
              – Mr. and Mrs. Maheshwari, Central India
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
