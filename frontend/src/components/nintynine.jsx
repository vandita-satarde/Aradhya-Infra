import React from 'react'
import image01 from '../assets/image-0.jpg'
import batch from '../assets/icons/b-award.png'

function nintynine() {
  return (
    <>
      <div className='absolute'>
                          <img src={image01} className=' w-[170px] md:w-[400px] h-[210px] md:h-[500px] object-cover rounded-2xl ' />
                          <div className='absolute w-[170px] md:w-[400px] top-[50px] md:top-[110px] left-[60px] md:left-[195px] bg-fuchsia-50 p-2 md:p-4 rounded-2xl '>
                            <img src={image01} className=' h-[210px] md:h-[500px] rounded-2xl object-cover ' />            
                          </div>
                          <div className='absolute w-[120px] md:w-[220px] h-[60px] md:h-[120px] top-[170px] md:top-[400px] left-[10px] md:left-[70px] bg-black text-white inline-block text-center p-1 rounded-4xl object-cover '>
                            <p className='text-[20px] md:text-[50px] '>99</p>
                            <p className='text-[10px] md:text-[21px] '>Customer Support</p>
                          </div>
                        </div>
      
                  <div className='flex-1 mt-80 lg:mt-0 md:ml-200'>
                    <p className='text-[12px] md:text-base text-[#048886] font-sans '>ABOUT US</p>
                    <br/><br/>
                    <p className=' text-[26px] md:text-[45px] text-[#2D2D2D] font-[abril] font-bold '>“Aradhya Infra: Building Futures in Central India”</p>          
                    <br/>
                    <p className=' text-[14px] md:text-[18px] text-[#6E6E6E] font-sans '>"Aradhya Infra: Building Futures in Central India"</p>
                    <br/>
                    <div className=' font-bold text-[16px] md:text-[18px] '>
                      <div className=' flex items-start '>
                        <img src={batch} className=' h-8 mr-5 ' />
                        <p className=' font-[abril] text-[21px] text-[#2D2D2D] font-bold '>Local experts deeply rootes in Nagpur and surrounding areas.</p>
                      </div>
                      <br/>
                      <div className='flex items-start '>
                        <img src={batch} className=' h-8 mr-5 ' />
                        <p className=' font-[abril] text-[21px] text-[#2D2D2D] font-bold '>Focus on community-centric planning and future-ready infrastructure.</p>
                      </div>
                    </div>
                    <br/><br/>
                    <button className=' bg-teal-600 text-gray-100 text-[12px] md:text-[15px] py-3 md:py-5 px-8 md:px-14 rounded-4xl '>MORE ABOUT US →</button>
                  </div>
      
                  <div className='mt-20 md:mt-50 flex flex-col lg:flex-row gap-10'>
                    <div className='flex items-start '>
                      <img src={batch} className=' h-8 mr-3' />
                      <div className='text-[#2D2D2D] '>
                        <p className='text-[22px] md:text-[21px] font-[abril] font-bold '>Vision</p>
                        <p className='text-[17px] md:text-[18px] '>"To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."</p>
                      </div>
                    </div>
                    <div className='flex items-start md:ml-25 '>
                      <img src={batch} className=' h-8 mr-3' />
                      <div className='text-[#2D2D2D]'>
                        <p className='text-[22px] md:text-[21px] font-[abril] font-bold '>Mission</p>
                        <p className='text-[17px] md:text-[18px] '>"To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."</p>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default nintynine

