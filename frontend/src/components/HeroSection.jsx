import React from 'react'
import { Instagram, Twitter } from 'lucide-react'
import Navbar from './Navbar'

import introVideo from '../assets/videos/intro.mp4'

function HeroSection() {
  return (
    <>
      <div className="relative h-[860px] md:h-[930px]  bg-opacity-80 bg-black  font-sans overflow-hidden">
        {/* Video Background */}
       
        {/* Dark overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full pt-[100px]">
           <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          loop
      >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

          <Navbar />


            <div className='p-12 md:p-30 pb-30 md:pb-65 space-y-6'>  
                <p className='text-[12px] md:text-[18px] text-[#048886] font-semibold'>- A LAND GUIDE</p>
                <h1 className='text-[38px] md:text-[85px] text-[#FFFFFF] font-[abril] font-extrabold leading-tight'>Be Prepared For The<br/> Mountains And Beyond!</h1>
                <p className='text-[12px] md:text-[18px] text-[#FFFFFF]'>scroll down ↓</p>
            </div>
            

            {/* <div className="flex justify-between items-center mt-10 px-6 md:px-20 text-white">
          Follow Us - Rotated
          
        </div> */}

            <div className='flex flex-col md:flex-row justify-around text-[#F3ECDC] font-[abril] font-bold gap-10 px-6 text-center'>
                <div>
                    <p className='text-[30px] md:text-[45px]'>07</p>
                    <p className='text-[15px] md:text-[21px]'>YEARS OF LEGACY</p>
                </div>
                <div>
                    <p className='text-[30px] md:text-[45px]'>15th</p>
                    <p className='text-[15px] md:text-[21px]'>SQ.FT.UNDER PLANNING & DEVELOPMENT</p>
                </div>
                <div>
                    <p className='text-[30px] md:text-[45px]'>56</p>
                    <p className='text-[15px] md:text-[21px]'>LANDMARKS</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection