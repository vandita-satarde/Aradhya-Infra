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
      
        <Navbar className='bg-[#05081080]' />
        <div className='flex justify-center gap-10 py-15 bg-[#F3ECDC] '>
            <img src={image01} className=' w-[870px] h-[413px] ' />
            <div>
                <img src={image01} className=' w-[348px] h-[196px] mb-5 ' />
                <img src={image01} className=' w-[348px] h-[196px] ' />
            </div>
        </div>

        <div className='px-28 py-15 text-[#073937]'>
          <p className='text-[45px] font-[abril] font-bold '>Aradhya Business Park</p>
          <div className='flex gap-40 '>
            <div className='w-1/2'>
              <p>⭐4.3/5 Superb (999+ reviews) </p>
              <p className='text-[16.88px] py-2'>Description</p>
              <div  className='text-[12px] m-5 flex gap-10 '>
                <p className='bg-[#F3ECDC] text-[#050810] px-3'>Retail</p><p className='bg-[#F3ECDC] px-3'> Office Space</p>
              </div>
                <p className='text-[17.44px] pt-5'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br/><br/>Dengan desain interior yang elegan, setiap kamar apartemen kami dirancang untuk memadukan keindahan estetika dengan fungsionalitas yang optimal.
                </p>
            </div>
            <div className='w-1/2'>
              <div className='flex gap-10'>
                <div className='flex flex-col gap-5'>
                  <p className='text-[13.34px]'>Facilities Offered</p>
                  <div className='text-[15.5px] flex flex-col gap-4'>
                    <div className='flex gap-3'><img src={icon1} className='h-[24px]' /><p>Swimming Pools</p></div>
                    <div className='flex gap-3'><img src={icon2} className='h-[24px]'/><p>Gymnasium, Yoga & Wellness Zones</p></div>
                    <div className='flex gap-3'><img src={icon3} className='h-[24px]'/><p>Elevator</p></div>
                    <div className='flex gap-3'><img src={icon4} className='h-[24px]' /><p>Children & Senior Citizen Zones</p></div>
                    <div className='flex gap-3'><img src={icon5} className='h-[24px]'/><p>Safety & Conveniences</p></div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='text-[13.34px]'>The Sonder standard</p>
                  <div className='text-[15.5px] flex flex-col gap-4'>                
                    <div className='flex gap-3'><img src={icon6} className='h-[24px]'/><p>Airport Access</p></div>
                    <div className='flex gap-3'><img src={icon7} className='h-[24px]'/><p>Highway Connectivity</p></div>
                    <div className='flex gap-3'><img src={icon8} className='h-[24px]'/><p>Top Hospitals</p></div>
                  </div>
                </div>
              </div>
              <p className='text-[13.45px] mt-15 mb-35'>Explore more facilities</p>
              <button className=' text-[18px] w-[590px] h-[60px] bg-black text-[#F3ECDC] '>BOOK NOW</button>
            </div>
          </div>
        </div>

        <div className='bg-[#F3ECDC]'>
          <div className='flex items-center gap-5 px-20 py-2 text-[17.5px] border-b border-gray-300'>
            <p className='border-b-3 border-[#E6B022] p-3'>List Apartment</p>
            <p>Commercial</p>
            <p>Residential</p>
          </div>
          <div className='bg-white px-30 py-10'>
            <div className='flex items-center justify-evenly w-[880px] h-[67px] shadow-xl rounded-b-lg '>
              <div className='flex gap-4 items-center'>
                <img src={icon01} className='h-4' /><p>Property type</p>
              </div>
              <div className='flex gap-4 items-center'>
                <img src={icon01} className='h-4' />
                <input placeholder='Search by location or Property ID...' className='w-[250px]' />
              </div>
              <button className='bg-black rounded-lg text-gray-200 px-10 py-2'>Search</button>
            </div>
          </div>

          <div className='px-[100px] pt-[86px] flex flex-col gap-5 '> 
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <button className=' text-[#048886] h-[54px] my-8 border border-[#048886] rounded-4xl '>View More</button>
          </div>

        </div>
      <Footer />
    </>
  )
}

export default ProjectDetails
