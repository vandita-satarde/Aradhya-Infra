import React from 'react'
import logo from '../assets/icons/Ardhya-logo.jpeg'
import contact from '../assets/icons/Vector.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react'

function Navbar({className = ''}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={ `w-full relative ${className}` } >
      <div className='w-full h-[100px] md:h-[130px] border-b border-[rgba(255, 255, 255, 0.75)] flex justify-evenly items-center text-gray-200 '>
        <div className="flex gap-30 items-center">
          <img src={logo} className=' h-[75px] md:h-[104px] w-[75px] md:w-[104px] rounded-[50%] m-3 ' />
            <div className=' hidden md:flex gap-23 text-[15px] text-[rgba(255, 255, 255, 0.75)] '>
                <p className='cursor-pointer'>HOME</p>
                <p className='cursor-pointer'>ABOUT US</p>
                <p className='cursor-pointer '>OUR STORY</p>
                <p className='cursor-pointer'>OUR PROJECTS</p>
            </div>
            <button className=' hidden md:flex justify-center items-center gap-4 bg-[#F3ECDC] text-black text-[15px] w-[240px] h-[60px] rounded-[30px] '><img src={contact} className='h-[29px] w-[29px] '/> CONTACT US</button>

            <div className='md:hidden text-[rgba(255,255,255,0.85)] text-xl cursor-pointer'>
              {menuOpen ? (
                <FaTimes onClick={() => setMenuOpen(false)} />
              ) : (
                <FaBars onClick={() => setMenuOpen(true)} />
              )
              }
            </div>  
        </div> 
        
      </div>
       {menuOpen && (
        <div className='absolute bg-[rgba(255,255,255,0.20)] w-full px-5 py-3 text-[14px] '>
            <div className="flex flex-col mt-4 gap-4 text-center text-[rgba(255,255,255,0.75)] md:hidden">
            <p className="cursor-pointer">HOME</p>
            <p className="cursor-pointer">ABOUT US</p>
            <p className="cursor-pointer">OUR STORY</p>
            <p className="cursor-pointer">OUR PROJECTS</p>
            <button className="flex justify-center text-[12px] items-center gap-2 bg-[#F3ECDC] text-black text-sm w-full h-[40px] rounded-full mx-auto mt-2">
              <img src={contact} className="h-[18px] w-[18px]" alt="contact" /> 
              CONTACT US
            </button>
          </div>
          </div>
        )}  
    </div>
  )
}

export default Navbar
