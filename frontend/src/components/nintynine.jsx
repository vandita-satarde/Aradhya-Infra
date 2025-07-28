import React from 'react'
import image01 from '../assets/image-0.jpg'
import batch from '../assets/icons/b-award.png'

function nintynine() {
  return (
    <>
      <img src={image01} className='absolute w-[400px] h-[500px] rounded-2xl ' />
                  <div className='absolute top-55 left-85 bg-fuchsia-50  p-5 rounded-2xl '>
                    <img src={image01} className=' w-[400px] h-[500px] rounded-2xl ' />            
                  </div>
                  <div className='absolute top-130 left-50 bg-black text-white inline-block text-center p-6 rounded-4xl '>
                    <p className=' text-[50px] '>99</p>
                    <p className=' text-[21px] '>Customer Support</p>
                  </div>
      
                  <div className='ml-180 my-20 '>
                    <p className='text-[15px] text-[#048886] font-sans '>ABOUT US</p>
                    <br/><br/>
                    <p className=' text-[45px] text-[#2D2D2D] font-[abril] font-bold '>“Aradhya Infra: Building Futures in Central India”</p>          
                    <br/>
                    <p className=' text-[18px] text-[#6E6E6E] font-sans '>"Aradhya Infra: Building Futures in Central India"</p>
                    <br/>
                    <div className=' font-bold text-[18px] '>
                      <div className=' flex items-center '>
                        <img src={batch} className=' h-8 mr-5 ' />
                        <p className=' font-[abril] text-[21px] text-[#2D2D2D] font-bold '>Local experts deeply rootes in Nagpur and surrounding areas.</p>
                      </div>
                      <br/>
                      <div className='flex justify-center items-center '>
                        <img src={batch} className=' h-8 mr-5 ' />
                        <p className=' font-[abril] text-[21px] text-[#2D2D2D] font-bold '>Focus on community-centric planning and future-ready infrastructure.</p>
                      </div>
                    </div>
                    <br/><br/>
                    <button className=' bg-[#048886] font-sans text-[#F3ECDC] text-[15px] py-5 px-14 rounded-4xl '>MORE ABOUT US →</button>
                  </div>
      
                  <div className='mt-50 flex'>
                    <div className='flex'>
                      <img src={batch} className=' h-8 mr-3' />
                      <div className='text-[#2D2D2D] '>
                        <p className='text-[21px] font-[abril] font-bold '>Vision</p>
                        <p className='text-[18px] '>"To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."</p>
                      </div>
                    </div>
                    <div className='flex ml-25 '>
                      <img src={batch} className=' h-8 mr-3' />
                      <div className='text-[#2D2D2D]'>
                        <p className='text-[21px] font-[abril] font-bold '>Mission</p>
                        <p className='text-[18px] '>"To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."</p>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default nintynine

