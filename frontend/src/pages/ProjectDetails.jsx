import React from 'react'
import Navbar from '../components/Navbar'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'

import image01 from '../assets/image-0.jpg'
import icon01 from '../assets/award.png'
import icon1 from '../assets/icons/icon-1.png'
import icon2 from '../assets/icons/icon-2.png'
import icon3 from '../assets/icons/icon-3.png'
import icon4 from '../assets/icons/icon-4.png'
import icon5 from '../assets/icons/icon-5.png'
import icon6 from '../assets/icons/icon-6.png'
import icon7 from '../assets/icons/icon-7.png'
import icon8 from '../assets/icons/icon-8.png'



function ProjectDetails() {
  return (
    <>
      <div className=''>
        <div className='bg-[#041E1F] h-[100px] md:h-[130px] '></div>
        <Navbar />  {/* className='bg-[#34363c80]' */}
        <div>
          <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-5 md:py-15 bg-[#E6FFFF] '>
            <img src={image01} className=' mx-auto md:mx-0 w-[300px] md:w-[870px] h-[150px] md:h-[413px] ' />
            <div className='flex flex-row md:flex-col gap-5 items-center justify-center'>
                <img src={image01} className=' w-[140px] md:w-[348px] h-[80px] md:h-[196px]  ' />
                <img src={image01} className=' w-[140px] md:w-[348px] h-[80px] md:h-[196px]  ' />
            </div>
        </div>

        <div className='px-5 md:px-28 py-8 md:py-15 text-[#073937]'>
          <p className='text-[28px] md:text-[45px] font-[abril] font-bold '>Aradhya Business Park</p>
          <div className='flex flex-col md:flex-row gap-10 md:gap-40 '>
            <div className='md:w-1/2'>
              <p className='text-[12px] md:text-[16px]'>⭐4.3/5 Superb (999+ reviews) </p>
              <p className=' text-[13px] md:text-[16.88px] py-2'>Description</p>
              <div  className='text-[12px] m-5 flex gap-4 md:gap-10 '>
                <p className='bg-[#E6FFFF] text-[#050810] px-3'>Retail</p><p className='bg-[#E6FFFF] px-3'> Office Space</p>
              </div>
                <p className='text-[12px] md:text-[17.44px] md:pt-5'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br/><br/>Dengan desain interior yang elegan, setiap kamar apartemen kami dirancang untuk memadukan keindahan estetika dengan fungsionalitas yang optimal.
                </p>
            </div>
            <div className='md:w-1/2'>
              <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                <div className='flex flex-col gap-5'>
                  <p className='text-[13.34px]'>Facilities Offered</p>
                  <div className='text-[12px] md:text-[15.5px] flex flex-col gap-4'>
                    <div className='flex gap-3'><img src={icon1} className='h-[18px] md:h-[24px]' /><p>Swimming Pools</p></div>
                    <div className='flex gap-3'><img src={icon2} className='h-[18px] md:h-[24px]'/><p>Gymnasium, Yoga & Wellness Zones</p></div>
                    <div className='flex gap-3'><img src={icon3} className='h-[18px] md:h-[24px]'/><p>Elevator</p></div>
                    <div className='flex gap-3'><img src={icon4} className='h-[18px] md:h-[24px]' /><p>Children & Senior Citizen Zones</p></div>
                    <div className='flex gap-3'><img src={icon5} className='h-[18px] md:h-[24px]'/><p>Safety & Conveniences</p></div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='text-[13.34px]'>The Sonder standard</p>
                  <div className='text-[15.5px] flex flex-col gap-4'>                
                    <div className='flex gap-3'><img src={icon6} className='h-[18px] md:h-[24px]'/><p>Airport Access</p></div>
                    <div className='flex gap-3'><img src={icon7} className='h-[18px] md:h-[24px]'/><p>Highway Connectivity</p></div>
                    <div className='flex gap-3'><img src={icon8} className='h-[18px] md:h-[24px]'/><p>Top Hospitals</p></div>
                  </div>
                </div>
              </div>
              <p className='text-[13.45px] mt-6 md:mt-15 mb-8 md:mb-35'>Explore more facilities</p>
              <a href='/enquiry'>
                <button className='text-[14px] md:text-[18px] w-full md:w-[590px] h-[40px] md:h-[60px] bg-[#041E1F] text-[#E6FFFF] cursor-pointer '>ENQUIRY</button>
              </a>              
            </div>
          </div>
        </div>
        </div>

        <div className='bg-[#E6FFFF]'>
          <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-5 px-4 md:px-20 py-2 text-[17.5px] border-b border-gray-300'>
            <p className='w-[115px] md:w-[138px] border-b-3 border-[#E6B022] pb-1 md:p-3'>List Apartment</p>
            <p>Commercial</p>
            <p>Residential</p>
          </div>
          {/* <div className='bg-white px-4 md:px-30 py-10'>
            <div className='flex flex-col md:flex-row md:items-center justify-evenly max-w-full md:w-[880px] h-auto md:h-[67px] shadow-xl rounded-b-lg gap-4 p-4 '>
              <div className='flex gap-2 md:gap-4 items-center'>
                <img src={icon01} className='h-4' /><p>Property type</p>
              </div>
              <div className='flex gap-2 md:gap-4 items-center w-full md:w-auto'>
                <img src={icon01} className='h-4' />
                <input placeholder='Search by location or Property ID...' className='w-full md:w-[250px] ' />
              </div>
              <button className='bg-black rounded-lg text-gray-200 px-10 py-2 w-full md:w-auto'>Search</button>
            </div>
          </div> */}

          <div className='px-4 md:px-[100px] pt-[86px] flex flex-col gap-5 '> 
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <button className=' text-[#048886] h-[54px] my-8 border border-[#048886] rounded-4xl '>View More</button>
          </div>

        </div>
      <Footer />
      </div>
    </>
  )
}

export default ProjectDetails
