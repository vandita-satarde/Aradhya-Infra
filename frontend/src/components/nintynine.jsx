import React from 'react'
import image1 from '../assets/images/nintynine-1.jpeg'
import image2 from '../assets/images/nintynine-2.jpeg'
import batch from '../assets/icons/b-award.png'

function nintynine({ className = '' }) {
  return (
    <>
      <div className={` flex flex-col lg:flex-row gap-10 relative ${className}`}>
        <div className='hidden md:block absolute '>
          <img src={image1} className=' w-[220px] lg:w-[390px] h-[310px] lg:h-[500px] object-cover rounded-[30px] ' />
          <div className='absolute w-[230px] lg:w-[390px] top-[70px] lg:top-[110px] left-[100px] lg:left-[195px] bg-[#F3ECDC] p-2 lg:p-3.5 rounded-[30px] shadow-xl shadow-[#00000012] '>
            <img src={image2} className=' h-[300px] lg:h-[499px] rounded-[30px] object-cover ' />
          </div>
          <div className='absolute w-[120px] lg:w-[234px] h-[60px] lg:h-[149px] top-[280px] lg:top-[395px] left-[35px] lg:left-[55px] bg-black text-white text-center lg:p-4 rounded-3xl lg:rounded-4xl object-cover '>
            <p className='relative text-[24px] lg:text-[50px] text-[#A3B18A] '>
              99
              <span className='absolute lg:top-1.5 left-18 lg:left-32 text-[13px] lg:text-[18px] font-[abril] '>%</span>
            </p>
            <p className='font-[abril] font-bold text-[12px] lg:text-[23px] text-[#F3ECDC] '>Customer Support</p>
          </div>
        </div>

        <div className='flex flex-col mt-10 lg::mt-26 md:ml-94 lg:ml-167'>
          <p className='mb-3 lg:mb-10 text-[12px] lg:text-[15px] text-[#00000099] font-semibold font-sans '>ABOUT US</p>
          <p className='text-[28px] lg:text-[45px] text-[#2D2D2D] font-[abril] font-extrabold leading-9 lg:leading-16 '>“Aradhya Infra: Building Futures in Central India”</p>
          <p className='my-4 lg:my-8 text-[13px] lg:text-[17px] text-[#6E6E6E] font-sans '>"Aradhya Infra: Building Futures in Central India"</p>
          <div className='space-y-3 lg:space-y-6 font-bold text-[16px] lg:text-[21px] '>
            <div className=' flex items-start  '>
              <img src={batch} className='w-[21px] lg:w-[27px] lg:h-[35px] mr-3 lg:mr-5 ' />
              <p className='font-[abril] text-[#2D2D2D] font-extrabold'>Local experts deeply rootes in Nagpur and surrounding areas.</p>
            </div>
            <div className='flex items-start '>
              <img src={batch} className='w-[21px] lg:w-[27px] lg:h-[35px] mr-3 lg:mr-5' />
              <p className='font-[abril] text-[#2D2D2D] font-extrabold'>Focus on community-centric planning and future-ready infrastructure.</p>
            </div>
          </div>
          <a href='/about'>
            <button className='mt-6 lg:mt-12 bg-[#048886] text-[#F3ECDC] text-[13px] lg:text-[15px] py-3 lg:py-5 px-5 lg:px-14 rounded-4xl '>MORE ABOUT US →</button>
          </a>
        </div>
      </div>

      <div className='mt-13 lg:mt-24 flex flex-col md:flex-row gap-6 md:gap-3 lg:gap-10 leading-4 lg:leading-7 '>
        <div className='flex flex-row items-start '>
          <img src={batch} className=' w-[22px] lg:w-[27px] lg:h-[35px] mr-3 lg:mr-4' />
          <div className='text-[#2D2D2D] '>
            <p className='text-[19px] lg:text-[21px] font-extrabold font-[abril] mb-1'>Vision</p>
            <p className='text-[14px] lg:text-[18px] font-semibold font-sans '>"To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."</p>
          </div>
        </div>
        <div className='flex flex-row items-start lg:ml-10 '>
          <img src={batch} className=' w-[22px] lg:w-[27px] lg:h-[35px] mr-3 lg:mr-4' />
          <div className='text-[#2D2D2D]'>
            <p className='text-[19px] lg:text-[21px] font-extrabold font-[abril] mb-1'>Mission</p>
            <p className='text-[14px] lg:text-[18px] font-semibold font-sans '>"To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default nintynine

