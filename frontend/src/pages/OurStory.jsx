import React from 'react'
import Navbar from '../components/Navbar'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

import image01 from '../assets/image-0.jpg'
import arrow from '../assets/icons/caret-right.png'

function OurStory() {
  return (
    <>
    <div className="bg-cover bg-center h-[523px] " style={{ backgroundImage: `url(${image01})` }}>
            <div>
              <Navbar />
              <div className='p-12 md:p-30'>
                <p className='flex gap-3 md:gap-5 items-center text-[12px] md:text-[15px] '>
                  <span className='text-[#34FF00] '>HOMEPAGE</span>
                  <img src={arrow}/>
                  <span className='text-[#FFFFFFBF] '> OUR STORY</span>
                </p>
                <p className='font-bold text-[38px] md:text-[55px] py-7 font-[abril] text-[#F3ECDC]'>What Defines Our Journey</p>
                <p className='text-[12px] md:text-[15px] text-[#FFFFFFBF] '>Building dreams, creating communities”—that’s not just a tagline—it’s why Aradhya Infra exists.</p>
              </div>
            </div>
    </div>

    <div className=' bg-[#F3ECDC] p-12 md:p-30'>
                    <p className='text-[12px] md:text-[15px] text-[#048886] '>OUR STORY</p>
                    <p className='text-[29px] md:text-[45px] text-[#2D2D2D] font-bold font-[abril] my-8'>Building dreams, creating communities”—that’s not just a tagline—it’s why Aradhya Infra exists.</p>
                    <p className=' text-[#6E6E6E] text-[16px] md:text-[18px] '>Rooted in Nagpur, committed to transparency, fueled by innovation, and motivated by community-first principle, we design homes that stand the test of time—where every address becomes a legacy.</p>

                    <div className='flex flex-col lg:flex-row gap-6 mt-10 font-[abril]'>
                      <div className='w-full md:w-1/2 bg-[#F9F9F9] rounded-4xl p-6 md:p-10 shadow-2xs '>
                        <p className='font-semibold text-[#2D2D2D] text-[21px] md:text-[25px] '>Growth Anchored in Vision</p>
                        <hr className='my-6 md:my-8'/>
                        <div className='flex flex-col gap-6 md:gap-10 font-[abril] '>
                          <div className='flex gap-6 md:gap-8'>
                          <p className='text-[32px] md:text-[40px] font-bold text-[#048886] '>01</p>
                          <div>
                            <p className='text-[18px] md:text-[21px] font-bold text-[#2D2D2D]'>Local roots</p>
                            <p className='text-[15px] md:text-[18px] font-sans text-[#6E6E6E]'>Nagpur-based, with deep knowledge of local climate, culture, and city planning needs.</p>
                          </div>                          
                          </div>
                          <div className='flex gap-6 md:gap-8'>
                          <p className='text-[32px] md:text-[40px] font-bold text-[#048886] '>02</p>
                          <div>
                            <p className='text-[18px] md:text-[21px] font-bold text-[#2D2D2D] '>RERA & Compliance certified</p>
                            <p className='text-[15px] md:text-[18px] font-sans text-[#6E6E6E]'>Every project meets legal standards and quality benchmarks.</p>
                          </div>                          
                          </div>
                          <div className='flex gap-6 md:gap-8'>
                          <p className='text-[32px] md:text-[40px] font-bold text-[#048886] '>03</p>
                          <div>
                            <p className='text-[18px] md:text-[21px] font-bold text-[#2D2D2D] '>Sustained development</p>
                            <p className='text-[15px] md:text-[18px] font-sans text-[#6E6E6E]'>A holistic township with infrastructure—for roads, water, electrification, drainage, and green spaces—delivered through thoughtful planning.</p>
                          </div>                          
                          </div>
                        </div>
                      </div>              

                      <div className='w-full lg:w-1/2 bg-[#F9F9F9] rounded-4xl p-6 md:p-10 shadow-2xs'>
                        <p className='italic font-semibold text-[18px] md:text-[22px] py-5 md:py-9 '>“ Our Story – Aradhya Infra “</p>
                        <p className='text-[15px] md:text-[18px] font-sans '>
                          Founded in September 2011, Aradhya Infratech Private Limited began with a simple yet powerful goal: to create thoughtfully planned residential developments rooted in trust, quality craftsmanship, and a deep understanding of local needs in Nagpur, Maharashtra, and beyond. Incorporated under CIN U45400MH2011PTC222002, our company has maintained an active status and steadily expanded its footprint in Central India’s real estate sector. 
                          Our leadership team—comprising experts like Yogesh Nagpure, Ashish Kahate, and Keya Sarkar (directors since incorporation)—continues to be driven by strong values of transparency, reliability, and long-term client relationships.</p>
                      </div>
                    </div>   


                    <div className=' py-20 md:py-40'>
                      <p className='text-[#048886] text-[13px] md:text-[15px] '>WHERE WE ARE TODAY & BEYOND</p>
                      <p className='text-[30px] md:text-[45px] text-[#2D2D2D] font-bold font-[abril] mt-3 mb-20 '>Where We Are Today & Beyond</p>
                      <ul className='list-disc font-semibold font-sans text-[16px] md:text-[22px] flex flex-col gap-14'>
                        <li>A roster of completed and ready-to-develop projects, ranging from NA plots to premium townships, backed by strong client satisfaction and repeat investments.</li>
                        <li>Rigorous quality audits and on-time delivery are non-negotiable for us.</li>
                        <li>Now, with over a decade of experience, we’re growing into future-ready communities—focusing on residential comfort, green design, vastu-aligned layouts, and community wellbeing.</li>
                      </ul>
                    </div>   
    </div>

    <GetStarted />
    <Footer />
    </>
  )
}

export default OurStory
