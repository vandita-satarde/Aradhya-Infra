import React from 'react'
import Navbar from '../components/Navbar'
import Nintynine from '../components/nintynine'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

import image01 from '../assets/image-0.jpg'
import arrow from '../assets/icons/g-caret-right.png'

function AboutUs() {
  return (
    <>
      <div className="bg-cover bg-center h-[552px]" style={{ backgroundImage: `url(${image01})` }}>
        <div>
          <Navbar />
          <div className='p-30'>
            <p className='flex gap-5 items-center text-[15px] '><span className='text-[#34FF00] '>HOMEPAGE</span> <img src={arrow} className='w-[10px] h-[20px]'/><span className='text-[#FFFFFFBF] '>ABOUT US</span></p>
            <p className='font-bold text-[55px] py-7 font-[abril] text-[#F3ECDC]'>Welcome to Nagpur</p>
            <p className='text-[15px] text-[#FFFFFFBF] '>Aradhya Infra is deeply rooted in Nagpur, wiht a vision to build sustainable,<br/> community-oriented living across Central India.</p>
          </div>
        </div>
      </div>


      <div className='relative bg-[#F3ECDC] p-30'>
                  <Nintynine />

                  <div className='mt-60'>
                    <p className='text-[15px] text-[#048886] '>OUR BELIEFS</p>
                    <p className='text-[45px] text-[#2D2D2D] font-bold font-[abril] my-8'>Aradhya Infra - rooted in Nagpur, inspired to build thriving communities across Central India</p>
                    <p className=' text-[#6E6E6E] text-[18px] '>Aradhya Infra - rooted in Nagpur, inspired to build thriving communities across Central India</p>

                    <div className='flex gap-6 mt-10 font-[abril]'>
                      <div className='w-1/2 bg-[#F9F9F9] rounded-4xl p-10 shadow-2xs '>
                        <p className='font-semibold text-[#2D2D2D] text-[25px]'>Our Beliefs</p>
                        <hr className='my-8'/>
                        <div className='flex flex-col gap-10'>
                          <div className='flex gap-8'>
                          <p className='text-[40px] font-bold text-[#048886]'>01</p>
                          <div>
                            <p className='text-[21px] font-bold text-[#2D2D2D]'>Trust is Built, Not Given</p>
                            <p className='text-[18px] font-sans text-[#6E6E6E]'>- We keep our promises and communicate openly.</p>
                          </div>                          
                        </div>
                        <div className='flex gap-8'>
                          <p className='text-[40px] font-bold text-[#048886] '>02</p>
                          <div>
                            <p className='text-[21px] font-bold text-[#2D2D2D]'>Homes are for Life</p>
                            <p className='text-[18px] font-sans text-[#6E6E6E]'>– We design with durability, comfort, and purpose in mind.</p>
                          </div>                         
                        </div>
                        <div className='flex gap-8'>
                          <p className='text-[40px] font-bold text-[#048886] '>03</p>
                          <div>
                            <p className='text-[21px] font-bold text-[#2D2D2D] '>Community Matters</p>
                            <p className='text-[18px] font-sans text-[#6E6E6E]'>– Our townships are crafted with shared spaces and thoughtful amenities that bring people together.</p>
                          </div>                         
                        </div>
                        </div>
                      </div>              

                      <div className='w-1/2 bg-[#F9F9F9] rounded-4xl p-10 shadow-2xs'>
                        <p className='italic font-semibold text-[22px] py-9 '>" About Us - Aradhya Infra "</p>
                        <p className='text-[18px] font-sans'>
                          At Aradhya Infra, we don’t just build homes—we build communities, trust, and long-term value. Founded with a vision to redefine urban living in Central India, we are committed to crafting thoughtfully planned residential and township developments that offer comfort, sustainability, and peace of mind.
                          With deep roots in Nagpur and surrounding regions, our team brings together local expertise, architectural excellence, and modern design sensibilities to create spaces where families thrive and futures take shape.</p>
                      </div>  
                    </div>      
                  </div>

                  <div className='mt-40 text-center'>
                    <p className='text-[15px] text-[#048886] font-sans mb-3'>WHAT WE STAND FOR</p>
                    <p className='text-[45px] text-[#2D2D2D] font-bold font-[abril] '>Aradhya Infra<br/> Commitments that Defines Us</p>
                    <div className='flex gap-20 mt-20 mx-10 font-[abril]'>
                      <div className=''>
                        <p className='text-[35px] text-[#048886] font-extrabold '>01</p>
                        <p className='text-[23px] text-[#2D2D2D] font-extrabold mt-4 mb-3'>Local Insight</p>
                        <p className='text-[18px] text-[#6E6E6E] font-sans'>We understand the region’s climate, culture, and expectations.</p>
                      </div>
                      <div>
                        <p className='text-[35px] text-[#048886] font-extrabold '>02</p>
                        <p className='text-[23px] text-[#2D2D2D] font-extrabold mt-4 mb-3'>Building With Purpose</p>
                        <p className='text-[18px] text-[#6E6E6E] font-sans'>Eco-conscious design, vastu compliance, and community-first amenities.</p>
                      </div>
                      <div>
                        <p className='text-[35px] text-[#048886] font-extrabold '>03</p>
                        <p className='text-[21px] text-[#2D2D2D] font-extrabold mt-4 mb-3'>Transparent By Design</p>
                        <p className='text-[18px] text-[#6E6E6E] font-sans'>Clear pricing, straightforward timelines, and real customer care.</p>
                      </div>
                      <div>
                        <p className='text-[35px] text-[#048886] font-extrabold '>04</p>
                        <p className='text-[21px] text-[#2D2D2D] font-extrabold mt-4 mb-3'>Supporting You Always</p>
                        <p className='text-[18px] text-[#6E6E6E] font-sans'>From inquiry to after-handover support, we walk with you at every step.</p>
                      </div>
                    </div>
                  </div>
              </div>

      <Testimonials />
      <GetStarted />
      <Footer />
    </>
  )
}

export default AboutUs
