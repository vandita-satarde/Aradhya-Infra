import React from 'react'
import image1 from '../assets/image-0.jpg'
import batch from '../assets/icons/b-award.png'

function nintynine() {
  return (
    <>
      <div className='absolute'>
                          <img src={image1} className=' w-[170px] md:w-[390px] h-[210px] md:h-[500px] object-cover rounded-[30px] ' />
                          <div className='absolute w-[170px] md:w-[390px] top-[50px] md:top-[110px] left-[60px] md:left-[195px] bg-[#E6FFFF] p-2 md:p-3.5 rounded-[30px] shadow-xl shadow-[#00000012] '>
                            <img src={image1} className=' h-[210px] md:h-[499px] rounded-[30px] object-cover ' />            
                          </div>
                          <div className='absolute w-[120px] md:w-[234px] h-[60px] md:h-[149px] top-[170px] md:top-[395px] left-[10px] md:left-[55px] bg-[#041E1F] text-white inline-block text-center p-4 rounded-4xl object-cover '>
                            <p className='relative  text-[20px] md:text-[50px] text-[#A3B18A] '>
                              99
                              <p className='absolute top-1.5 left-32 text-[18px] font-[abril] '>%</p>  
                            </p>
                            <p className='font-[abril] font-bold text-[10px] md:text-[23px] text-[#E6FFFF] '>Customer Support</p>
                          </div>
                        </div>
            
                        <div className='flex-1 mt-80 lg:mt-26 md:ml-167'>
                          <p className='text-[15px] text-[#00000099] font-semibold md:text-base font-sans '>ABOUT US</p>
                          <br/><br/>
                          <p className=' text-[26px] md:text-[45px] text-[#2D2D2D] font-[abril] font-extrabold '>“Aradhya Infra: Building Futures in Central India”</p>          
                          <br/>
                          <p className='text-[14px] md:text-[18px] text-[#6E6E6E] font-sans '>"Aradhya Infra: Building Futures in Central India"</p>
                          <br/>
                          <div className=' font-bold text-[16px] md:text-[18px] '>
                            <div className=' flex items-start  '>
                              <img src={batch} className=' w-[27px] h-[35px] mr-5 ' />
                              <p className='font-[abril] text-[21px] text-[#2D2D2D] ffont-extrabold'>Local experts deeply rootes in Nagpur and surrounding areas.</p>
                            </div>
                            <br/>
                            <div className='flex items-start '>
                              <img src={batch} className=' w-[27px] h-[35px] mr-5 ' />
                              <p className='font-[abril] text-[21px] text-[#2D2D2D] font-extrabold'>Focus on community-centric planning and future-ready infrastructure.</p>
                            </div>
                          </div>
                          <br/><br/>
                          <a href='/about'>
                            <button className=' bg-[#048886] text-[#E6FFFF] text-[12px] md:text-[15px] py-3 md:py-5 px-8 md:px-14 rounded-4xl '>MORE ABOUT US →</button>
                          </a>
                        </div>
      
                  <div className='mt-20 md:mt-34 flex flex-col lg:flex-row gap-10'>
                                      <div className='flex flex-row items-start '>
                                        <img src={batch} className=' w-[27px] h-[35px] mr-4' />
                                        <div className='text-[#2D2D2D] '>
                                          <p className='text-[19px] md:text-[21px] font-extrabold font-[abril] mb-1'>Vision</p>
                                          <p className='text-[16px] md:text-[18px] font-semibold font-sans '>"To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."</p>
                                        </div>
                                      </div>
                                      <div className='flex flex-row items-start md:ml-10 '>
                                        <img src={batch} className=' w-[27px] h-[35px] mr-4' />
                                        <div className='text-[#2D2D2D]'>
                                          <p className='text-[19px] md:text-[21px] font-extrabold font-[abril] mb-1'>Mission</p>
                                          <p className='text-[16px] md:text-[18px] font-semibold font-sans '>"To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."</p>
                                        </div>
                                      </div>
                                </div>
    </>
  )
}

export default nintynine

