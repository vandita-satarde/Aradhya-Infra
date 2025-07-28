import React from 'react'
import image01 from '../assets/image-0.jpg'
import icon1 from '../assets/icons/p-icon1.png'
import icon2 from '../assets/icons/p-icon2.png'
import icon3 from '../assets/icons/p-icon3.png'
import icon4 from '../assets/icons/p-icon4.png'

function PropertyCard() {
  return (
    <>
      <div className=' w-[1241px] h-[290.9px] flex '>
              <img src={image01} className='w-[480px] h-[288px] rounded-2xl ' />
              <div className='flex ml-10 gap-32'>
                <div className='text-[15px] text-[#048886]'>
                  <p className='text-[22px]'>1 BHK</p>
                  <div className='text-[13px] flex gap-2 my-4 '>
                    <img src={icon1} className='w-[20px] h-[20px] ' /><p className='text-[13px] '>1 Bedroom</p>
                    <img src={icon2} className='w-[20px] h-[20px] ' /><p className='text-[13px] '>1 Guest</p>
                    <img src={icon3} className='w-[20px] h-[20px] ' /><p className='text-[13px] '>1 Bathroom</p>
                    <img src={icon4} className='w-[20px] h-[20px] ' /><p className='text-[13px] '>67 Sq ft</p>
                  </div>
                  <p>Total Facilities:</p>
                  <div className='flex'>
                    <ul className='list-disc ml-10'>
                    <li>Twin bed</li>
                    <li>Air Conditioning</li>
                    <li>Television</li>
                  </ul>
                  <ul className='list-disc ml-15'>
                    <li>Cable TV</li>
                    <li>Streaming device</li>
                  </ul>
                  </div>
                </div>
                <div className='flex flex-col items-end'>
                  <p className='text-[23px] text-[#9C1E15] '>Rp. 500.000</p>
                  <p className='text-[9px] text-[#048886] '>Sq /meter</p>
                  <button className='text-[15px] border border-[#9C9C9C] px-15 py-5 rounded-[98px] mt-45 '>View Details</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default PropertyCard
