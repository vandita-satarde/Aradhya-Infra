import React from 'react'
import image01 from '../assets/image-0.jpg'
import icon1 from '../assets/icons/p-icon1.png'
import icon2 from '../assets/icons/p-icon2.png'
import icon3 from '../assets/icons/p-icon3.png'
import icon4 from '../assets/icons/p-icon4.png'

function PropertyCard() {
  return (
    <>
      <div className='w-full md:w-[1241px] mx-auto flex flex-col md:flex-row  '>
              <img src={image01} className=' md:w-[480px] md:h-[288px] rounded-[30px] object-cover m-1' />
              <div className='flex flex-col md:flex-row justify-between md:ml-10 gap-10 md:gap-32 w-full '>
                <div className='text-[15px] text-[#048886] p-2'>
                  <p className='text-[22px]'>1 BHK</p>
                  <div className='text-[12px] md:text-[13px] flex flex-wrap gap-2 my-4 '>
                    <img src={icon1} className='w-[20px] h-[20px] ' /><p>1 Bedroom</p>
                    <img src={icon2} className='w-[20px] h-[20px] ' /><p>1 Guest</p>
                    <img src={icon3} className='w-[20px] h-[20px] ' /><p>1 Bathroom</p>
                    <img src={icon4} className='w-[20px] h-[20px] ' /><p>67 Sq ft</p>
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

                <div className='flex flex-col md:items-end'>
                  <p className='text-[18px] md:text-[23px] text-[#9C1E15] '>Rp. 500.000</p>
                  <p className='text-[9px] text-[#048886] '>Sq /meter</p>
                  <button className='text-[16px] border border-[#9C9C9C] px-6 md:px-15 py-2 md:py-5 rounded-[98px] mt-5 md:mt-45   '>View Details</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default PropertyCard
