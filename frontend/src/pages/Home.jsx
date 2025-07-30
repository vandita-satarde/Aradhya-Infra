import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import ServicesCard from '../components/ServicesCard'
import Gallery from '../components/Gallery'
import GetStarted from '../components/GetStarted'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

import quotes from '../assets/message.png'
import image1 from '../assets/image-0.jpg'
import batch from '../assets/icons/b-award.png'
import image01 from '../assets/image-0.jpg'
import hsIcon1 from '../assets/icons/hs-icon1.png'
import hsIcon2 from '../assets/icons/hs-icon2.png'
import hsIcon3 from '../assets/icons/hs-icon3.png'



function Home() {
  return (
    <div>
      <HeroSection />
      <div className='bg-[#F3ECDC] min-h-screen p-12 lg:p-30 '>
      
              {/* Section 01 */}
              <div className='mb-30'>
              <p className='text-[13px] md:text-base'>OUR LUXURIOUS PROJECTS</p>
              <br/>
              <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 '>
                <h2 className=' text-[26px] md:text-[48px] font-bold '>Premium Residential,<br/>Commercial & Township Projects.</h2>
                <p className='text-[13px] md:text-[19px] mr-0 md:mr-30 '>SHOW MORE → </p>
              </div>
              <br/><br/>
              <div className=' flex relative flex-col lg:flex-row'>
                  <div className=' relative w-full lg:w-[420px] h-auto lg:h-[290px] rounded-4xl p-6 md:p-10 pr-4 md:pr-30 bg-black text-white '>
                    <img src={quotes} className=' h-10 ' />
                    <br/>
                    <p>"Doloremque consequatur quasi accusantium ea non excepturi! Saepe accusantium placeat maiores... "</p>
                    <br/>
                    <span className=' font-bold text-[18px] '>Nikhil Bawane</span>
                  </div>
      
                  <div className='md:absolute left-[355px] top-7 flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 ' >
                    <div className=' bg-fuchsia-50 w-full sm:w-[310px]  p-3 rounded-2xl shadow-2xs '>
                      <img src={image1} className='  rounded-2xl h-[210px] w-full object-cover ' />                
                    </div>
                    <div className=' bg-fuchsia-50 w-full sm:w-[300px] p-3 rounded-2xl shadow-2xs '>
                      <img src={image1} className='  rounded-2xl h-[210px] w-full object-cover ' />                
                    </div>
                    <div className=' bg-fuchsia-50 w-full sm:w-[300px] p-3 rounded-2xl shadow-2xs '>
                      <img src={image1} className='  rounded-2xl h-[210px] w-full object-cover ' />                
                    </div>
                  </div>
              </div>
              </div>
      
              {/* Section 02 */}
              <div className='relative flex flex-col md:flex-row mt-30 gap-10 '>
                  <div className='absolute'>
                    <img src={image1} className=' w-[170px] md:w-[400px] h-[210px] md:h-[500px] object-cover rounded-2xl ' />
                    <div className='absolute w-[170px] md:w-[400px] top-[50px] md:top-[110px] left-[60px] md:left-[195px] bg-fuchsia-50 p-2 md:p-4 rounded-2xl '>
                      <img src={image1} className=' h-[210px] md:h-[500px] rounded-2xl object-cover ' />            
                    </div>
                    <div className='absolute w-[120px] md:w-[220px] h-[60px] md:h-[120px] top-[170px] md:top-[400px] left-[10px] md:left-[70px] bg-black text-white inline-block text-center p-1 rounded-4xl object-cover '>
                      <p className='text-[20px] md:text-[50px] '>99</p>
                      <p className='text-[10px] md:text-[21px] '>Customer Support</p>
                    </div>
                  </div>
      
                  <div className='flex-1 mt-80 lg:mt-0 md:ml-200'>
                    <p className='text-[12px] md:text-base'>ABOUT US</p>
                    <br/><br/>
                    <p className=' text-[26px] md:text-[45px] text-[#2D2D2D] font-[abril] font-bold '>“Aradhya Infra: Building Futures in Central India”</p>          
                    <br/>
                    <p className='text-[14px] md:text-[20px] text-gray-400 '>"Aradhya Infra: Building Futures in Central India"</p>
                    <br/>
                    <div className=' font-bold text-[16px] md:text-[18px] '>
                      <div className=' flex items-start  '>
                        <img src={batch} className=' h-8 mr-5 ' />
                        <p className='font-[abril] text-[21px] text-[#2D2D2D] font-bold '>Local experts deeply rootes in Nagpur and surrounding areas.</p>
                      </div>
                      <br/>
                      <div className='flex items-start '>
                        <img src={batch} className=' h-8 mr-5 ' />
                        <p className='font-[abril] text-[21px] text-[#2D2D2D] font-bold '>Focus on community-centric planning and future-ready infrastructure.</p>
                      </div>
                    </div>
                    <br/><br/>
                    <button className=' bg-teal-600 text-gray-100 text-[12px] md:text-[15px] py-3 md:py-5 px-8 md:px-14 rounded-4xl '>MORE ABOUT US →</button>
                  </div>
              </div>


              <div className='mt-20 md:mt-40 flex flex-col lg:flex-row gap-10'>
                    <div className='flex flex-row items-start '>
                      <img src={batch} className=' h-8 mr-3' />
                      <div className='text-[#2D2D2D] '>
                        <p className='text-[22px] md:text-[24px] font-bold '>Vision</p>
                        <p className='text-[17px] md:text-[19px] '>"To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."</p>
                      </div>
                    </div>
                    <div className='flex flex-row items-start md:ml-25 '>
                      <img src={batch} className=' h-8 mr-3' />
                      <div className='text-[#2D2D2D]'>
                        <p className='text-[22px] md:text-[24px] font-bold '>Mission</p>
                        <p className='text-[17px] md:text-[19px] '>"To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."</p>
                      </div>
                    </div>
                  </div>
      
              {/* Section 03 */}
                <div className='mt-60 text-center '>
                  <p className='text-sm md:text-base'>WHY ARADHYA INFRA?</p>
                  <br/><br/>
                  <p className=' text-[32px] md:text-[48px] font-bold'>Why Aradhya Infra?</p>
                  <br/>
                  <div className='w-full flex flex-col md:flex-row gap-8 justify-center items-center mb-10'>
                    <ServicesCard 
                icon={hsIcon1}
                name="Nagpur Expertise"
                description="Deep regional insights to build projects that match local culture and climate"
            />
                   <ServicesCard 
                icon={hsIcon2}
                name="Sustainable by Design"
                description="Each project includes rainwater harvesting, solar readiness, and green landscaping."
            />
            <ServicesCard 
                icon={hsIcon3}
                name="Quality & Transparency"
                description="Vastu‑compliant, clearly priced and inspected, with on‑time delivery."
            />
                  </div>
                  <p className='text-[12px] md:text-[17px] '><span className=' font-sans font-bold'>CLIENT SUPPORT</span> - DEDICATED GUIDANCE FROM BOOKING TO POST-HANDOVER. </p>
                </div>
            </div>


            
      {/* <Projects /> */}
      <div className=' text-center mt-18 mb-20 px-5 '>
              <p className='m-5 text-[#050810] text-[12px] md:text-[16px] '>ALL PROJECTS</p>
              <p className=' text-[30px] md:text-[45px] text-[#050810] font-[abril] font-bold mb-10 '>Aradhya Business Park</p>
      
              <div className='flex flex-wrap gap-8 justify-center text-[13px] md:text-[17px] '>
                  <button className=' border py-3 px-6 md:py-4 md:px-12 bg-black text-white '>All PROPERTIES</button>
                  <button className=' border py-3 px-6 md:py-4 md:px-12 '>COMMERCIAL</button>
                  <button className=' border py-3 px-6 md:py-4 md:px-12 '>RESIDENTAL</button>
              </div>
              <br/><br/><br/><br/>
              <div className='flex flex-wrap gap-8 justify-center' >
                  <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Serenity Shirur"
                    location="Wardha Road Nagpur"
                  />
                  <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Shree Gajanan Nagari"
                    location="Pewtha, Nagpur"
                  />
                  <ProductCard
                    tag="Sold Out"
                    image={image01}
                    name="Anandam"
                    location="Anandam 06 Gotal Panjri, Nagpur"
                  />
              </div>
      
            </div>
      <Gallery />
      <GetStarted />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
