import React from 'react'
import { Instagram, Twitter } from 'lucide-react'
import Navbar from './Navbar'

import image01 from '../assets/image-0.jpg'

function HeroSection() {
  return (
    <>
    
      <div className="bg-cover bg-center h-[1600px] font-sans" style={{ backgroundImage: `url(${image01})` }}>
              <div>
            <Navbar />

            <div className=' py-25 px-15 md:p-60 space-y-6'>
                <p className='text-[12px] md:text-[18px] text-[#048886] '>- A LAND GUIDE</p>
                <h1 className='text-[36px] md:text-[88px] text-[#FFFFFF] font-[abril] font-bold '>Be Prepared For The<br/> Mountains And Beyond!</h1>
                <p className='text-[12px] md:text-[18px] text-[#FFFFFF] '>scroll down ↓</p>
            </div>
            

            <div className="flex justify-between items-center mt-10 px-6 md:px-20 text-white">
          {/* Follow Us - Rotated */}
          <div className=" relative flex flex-col items-center space-y-2">
            <p className="rotate-90 text-[14px] md:text-[18px]">Follow us</p>
            <Instagram size={20} className='absolute top-15' />
            <Twitter size={20} className='absolute top-23'/>
          </div>

          {/* Section Pager */}
          <div className=" flex flex-col items-end gap-4 text-right">
            <p>Start</p>
            <p>01</p>
            <p>02</p>
            <p>03</p>
          </div>
        </div>

            <div className='flex flex-col md:flex-row justify-around text-[#F3ECDC] font-[abril] font-bold mt-85 md:mt-65 gap-10 px-6 text-center'>
                <div>
                    <p className='text-[36px] md:text-[45px]'>07</p>
                    <p className='text-[18px] md:text-[21px]'>YEARS OF LEGACY</p>
                </div>
                <div>
                    <p className='text-[36px] md:text-[45px]'>15th</p>
                    <p className='text-[18px] md:text-[21px]'>SQ.FT.UNDER PLANNING & DEVELOPMENT</p>
                </div>
                <div>
                    <p className='text-[36px] md:text-[45px]'>56</p>
                    <p className='text-[18px] md:text-[21px]'>LANDMARKS</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection