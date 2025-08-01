import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/ardhya-logo.jpeg'

import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'
import instagram from '../assets/icons/instagram.png'
import pin from '../assets/icons/pinterest.png'
import arrow from '../assets/icons/caret-right.png'
import icon01 from '../assets/icons/map.png'
import icon02 from '../assets/icons/envelope.png'
import icon03 from '../assets/icons/phone-square.png'

function Footer() {
  return (
    <div className='bg-[#041E1F] font-sans px-4 md:px-8 lg:px-12 xl:px-30 pt-8 md:pt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20 lg:mb-25'>
        
        {/* Company Info */}
        <div className='lg:col-span-1'>
          <img src={logo} className='h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full mb-4 md:mb-6' alt="Aradhya Infra logo" />
          <p className='text-sm md:text-base lg:text-[18px] text-[#FFFFFFBF] leading-relaxed mb-6'>
            Aplikasi terbaik layanan penginapan di seluruh apartemen dan hotel di India.
          </p>
          <div className='flex gap-3 md:gap-4 items-center'>
            <img src={facebook} className=' cursor-pointer hover:opacity-80 transition-opacity' alt="facebook" />
            <img src={twitter} className='cursor-pointer hover:opacity-80 transition-opacity' alt="twitter" />
            <img src={instagram} className='cursor-pointer hover:opacity-80 transition-opacity' alt="instagram" />
            <img src={pin} className='cursor-pointer hover:opacity-80 transition-opacity' alt="pinterest" />
          </div>
        </div>

        {/* Quick Links */}
        <div className='lg:col-span-1'>
          <h3 className='font-bold font-[abril] text-[#E6FFFF] text-lg md:text-xl lg:text-[25px] mb-4 md:mb-6'>Quick Links</h3>
          <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 text-sm md:text-base lg:text-[18px] text-[#FFFFFFBF]'>
            <Link to="/" className='flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200'>
              <img src={arrow} alt="arrow" /> Home
            </Link>
            <Link to="/about" className='flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200'>
              <img src={arrow} alt="arrow" /> About Us
            </Link>
            <Link to="/story" className='flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200'>
              <img src={arrow} alt="arrow" /> Our Story
            </Link>
            <Link to="/projects" className='flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200'>
              <img src={arrow} alt="arrow" /> Our Projects
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className='lg:col-span-1'>
          <h3 className='font-bold text-[#E6FFFF] font-[abril] text-lg md:text-xl lg:text-[25px] mb-4 md:mb-6'>Location, Contact</h3>
          <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 text-sm md:text-base lg:text-[18px] text-[#FFFFFFBF]'>
            <div className='flex items-center gap-3 md:gap-4'>
              <img src={icon01} alt="location" /> 
              <span>Nagpur, India</span>
            </div>
            <div className='flex items-center gap-3 md:gap-4'>
              <img src={icon02} alt="email" /> 
              <a href="mailto:Hello@Email.com" className='hover:text-white transition-colors duration-200'>Hello@Email.com</a>
            </div>
            <div className='flex items-center gap-3 md:gap-4'>
              <img src={icon03} alt="phone" /> 
              <a href="tel:+91123456789" className='hover:text-white transition-colors duration-200'>( +91 ) 123 456 789</a>
            </div>
          </div>
        </div>

        {/* Other Links */}
        <div className='lg:col-span-1'>
          <h3 className='font-bold text-[#E6FFFF] font-[abril] text-lg md:text-xl lg:text-[25px] mb-4 md:mb-6'>Other Links</h3>
          <div className='flex flex-col gap-3 md:gap-4 lg:gap-5 text-sm md:text-base lg:text-[18px] text-[#FFFFFFBF]'>
            <div className='flex items-center gap-3 md:gap-4 cursor-pointer hover:text-white transition-colors duration-200'>
              <img src={arrow} alt="arrow" /> Terms & Conditions
            </div>
            <div className='flex items-center gap-3 md:gap-4 cursor-pointer hover:text-white transition-colors duration-200'>
              <img src={arrow} alt="arrow" /> Privacy Policy
            </div>
            <div className='flex items-center gap-3 md:gap-4 cursor-pointer hover:text-white transition-colors duration-200'>
              <img src={arrow} alt="arrow" /> Cookies Policy
            </div>
          </div>
        </div>
      </div>

      <hr className='border-gray-600'/>
      <p className='py-6 md:py-8 text-xs md:text-sm lg:text-[15px] text-center font-semibold text-[#E6FFFF]'>
        @COPYRIGHT ALL RIGHTS RESERVED
      </p>
    </div>
  )
}

export default Footer
