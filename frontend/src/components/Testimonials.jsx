import React from 'react'
import image01 from '../assets/image-0.jpg'
import { FaShieldAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";


function Testimonials() {
  return (
    <>
      <div className=' px-30 py-27 flex '>
        <div className=' w-2/3 '>
            <p className='text-[15px] text-[#048886] '>OUR TESTIMONIALS</p>
            <br/>
            <p className=' text-[50px] font-[abril] font-bold '>Why Families Choose Aradhya Infra</p>
            <br/><br/>
            <div className=' flex '>
                <div className=' bg-[#F3ECDC] w-[380px] p-3 rounded-[30px]  '>
                    <img src={image01} className=' h-[350px] rounded-[30px]' />
                </div>
                <div className='m-8 flex flex-col justify-between'>
                    <div className='flex'>
                        <FaShieldAlt className='text-[#048886] w-[35px] h-[35px] mr-6 '/>
                        <div >
                            <p className=' font-[abril] font-bold text-[21px] mb-3 '>NMRDA & RI Approved</p>
                            <p className='font-sans text-[18px] text-[#050810] '>Mendapatka keamanan</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FaList className='text-[#048886] w-[35px] h-[35px] mr-6 '/>
                        <div >
                            <p className='font-[abril] font-bold text-[21px] mb-3 '>List Apartments Nagpur</p>
                            <p className='font-sans text-[18px] text-[#050810] '>Apartments Exist in India</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FaShieldAlt className='text-[#048886] w-[35px] h-[35px] mr-6 '/>
                        <div >
                            <p className='font-[abril] font-bold text-[21px] mb-3 '>Free Consultation</p>
                            <p className='font-sans text-[18px] text-[#050810] '>Ask to Our Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border w-1/3 p-14 rounded-4xl font-sans '>
            <FaQuoteLeft className='w-[40px] h-[45px] text-[#DADADA]' />
            <p className=' font-medium italic text-[22px] text-[#050810] py-7 '>Township Living</p>
            <p className=' text-[18px] text-[#050810] '>“We were first-time home buyers and nervous about everything. But Aradhya Infra made the process smooth and stress-free. From site visit to final handover, their team was transparent, responsive, and genuinely cared about our needs. We love our new 2BHK!”</p>
            <div className='flex mt-10'>
                <img src={image01} className='border border-[#0000004D] h-12 w-12 rounded-[50%] ' />
                <p className=' font-medium text-[18px] ml-3 '>– Mr. and Mrs. Maheshwari, Central India</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
