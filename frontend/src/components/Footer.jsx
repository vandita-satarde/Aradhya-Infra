import React from 'react'
import logo from '../assets/icons/Ardhya-logo.jpeg'

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
    <>
    <div className='bg-black font-sans px-30 pt-10'>
      <div className=' flex mb-25 '>
        
        <div>
            <img src={logo} className='h-28 w-28 rounded-[50%] m-3 ' />
            <p className='text-[18px] text-[#FFFFFFBF] ' >Aplikasi terbaik layanan penginapan<br/><br/> di seluruh apartemen dan hotel di<br/> India.</p>
            <div className='flex gap-4 items-center mt-6 '>
                <img src={facebook} />
                <img src={twitter} />
                <img src={instagram} />
                <img src={pin} />
            </div>
        </div>

        <div className='flex gap-35 text-[18px] text-[#FFFFFFBF] pt-17 pl-28 '>
          <div >
            <p className='font-bold font-[abril] text-[#F3ECDC] text-[25px] '>Quick Links</p><br/>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-4'><img src={arrow} /> Home</div>
              <div className='flex items-center gap-4'><img src={arrow} /> About Us</div>
              <div className='flex items-center gap-4'><img src={arrow} /> Our Story</div>
              <div className='flex items-center gap-4'><img src={arrow} /> Our Projects</div>
            </div>
          </div>
          <div>
            <p className='font-bold text-[#F3ECDC] font-[abril] text-[25px] '>Location, Contact</p><br/>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-4'><img src={icon01} /> Nagpur, India</div>
              <div className='flex items-center gap-4'><img src={icon02} /> Hello@Email.com</div>
              <div className='flex items-center gap-4'><img src={icon03} /> ( +91 ) 123 456 789 </div>
            </div>
          </div>
          <div>
            <p className='font-bold text-[#F3ECDC] font-[abril] text-[25px] '>Other Links</p><br/>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-4'><img src={arrow} /> Terms & Conditions</div>
              <div className='flex items-center gap-4'><img src={arrow} /> Privacy Policy</div>
              <div className='flex items-center gap-4'><img src={arrow} /> Cookies Policy</div>
            </div>
          </div>
        </div>
      </div>
      <hr className='text-gray-500 '/>
      <p className='py-8 text-[15px] text-center font-semibold font-[#F3ECDC] ' >@COPYRIGHT ALL RIGHTS RESERVED</p>
    </div>
    </>
  )
}

export default Footer
