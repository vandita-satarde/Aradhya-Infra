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
import batch from '../assets/award.png'
import image01 from '../assets/image-0.jpg'
import hsIcon1 from '../assets/icons/hs-icon1.png'
import hsIcon2 from '../assets/icons/hs-icon2.png'
import hsIcon3 from '../assets/icons/hs-icon3.png'



function Home() {
  return (
    <div>
      <HeroSection />
      <div className='bg-[#E6FFFF] min-h-screen p-12 md:p-12 lg:p-30 '>
      
              {/* Section 01 */}
              <div className='mb-140'>
              <p className='text-sm md:text-base'>OUR LUXURIOUS PROJECTS</p>
              <br/>
              <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 '>
                <h2 className=' text-[48px] font-bold '>Premium Residential,<br/>Commercial & Township Projects.</h2>
                <p className='text-[19px] mr-30 '>SHOW MORE → </p>
              </div>
              <br/><br/>
              <div className=' flex relative '>
                  <div className=' absolute w-[420px] h-[290px] rounded-4xl p-10 pr-30 bg-black text-white '>
                    <img src={quotes} className=' h-10 ' />
                    <br/>
                    <p>"Doloremque consequatur quasi accusantium ea non excepturi! Saepe accusantium placeat maiores... "</p>
                    <br/>
                    <span className=' font-bold text-[18px] '>Nikhil Bawane</span>
                  </div>
      
                  <div className='absolute left-[355px] top-7 flex gap-3 ' >
                    <div className=' bg-[#E6FFFF] w-[310px]  p-3 rounded-[30px] shadow-2xs '>
                      <img src={image1} className='  rounded-[30px] h-[210px] ' />                
                    </div>
                    <div className=' bg-[#E6FFFF] w-[300px] p-3 rounded-[30px] shadow-2xs '>
                      <img src={image1} className='  rounded-[30px] h-[210px] ' />                
                    </div>
                    <div className=' bg-[#E6FFFF] w-[300px] p-3 rounded-[30px] shadow-2xs '>
                      <img src={image1} className='  rounded-[30px] h-[210px] ' />                
                    </div>
                  </div>
              </div>
              </div>
      
              {/* Section 02 */}
              <div className='relative'>
                  <img src={image1} className='absolute w-[400px] h-[500px] rounded-[30px] ' />
                  <div className='absolute top-30 left-55 bg-[#E6FFFF]  p-5 rounded-[30px] '>
                    <img src={image1} className=' w-[400px] h-[500px] rounded-[30px] ' />            
                  </div>
                  <div className='absolute top-100 left-20 bg-black text-white inline-block text-center p-6 rounded-4xl '>
                    <p className=' text-[50px] '>99</p>
                    <p className=' text-[21px] '>Customer Support</p>
                  </div>
      
                  <div className='ml-200 '>
                    ABOUT US
                    <br/><br/><br/>
                    <div className='flex '>
                      <img src={quotes} className=' h-4 ' />
                      <p className=' text-[44px] font-bold '>Aradhya Infra: Building Futures in Central India</p>
                      <img src={quotes} className=' h-4 '/>
                    </div>
                    <br/>
                    <p className=' text-[20px] text-gray-400 '>"Aradhya Infra: Building Futures in Central India"</p>
                    <br/>
                    <div className=' font-bold text-[18px] '>
                      <div className=' flex items-center '>
                        <img src={batch} className=' w-[27px] h-[35px] mr-5 ' />
                        <p>Local experts deeply rootes in Nagpur and surrounding areas.</p>
                      </div>
                      <br/>
                      <div className='flex justify-center items-center '>
                        <img src={batch} className=' w-[27px] h-[35px] mr-5 ' />
                        <p>Focus on community-centric planning and future-ready infrastructure.</p>
                      </div>
                    </div>
                    <br/><br/>
                    <button className=' bg-teal-600 text-gray-100 py-5 px-14 rounded-4xl '>MORE ABOUT US →</button>
                  </div>
      
                  <div className='mt-50 flex'>
                    <div className='flex'>
                      <img src={batch} className=' w-[27px] h-[35px] mr-3' />
                      <div>
                        <p className='text-[24px] font-bold '>Vision</p>
                        <p className='text-[19px] '>"To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."</p>
                      </div>
                    </div>
                    <div className='flex ml-25 '>
                      <img src={batch} className=' w-[27px] h-[35px] mr-3' />
                      <div>
                        <p className='text-[24px] font-bold '>Mission</p>
                        <p className='text-[19px] '>"To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."</p>
                      </div>
                    </div>
                  </div>
              </div>
      
              {/* Section 03 */}
                <div className='mt-60 text-center '>
                  WHY ARADHYA INFRA?
                  <br/><br/>
                  <p className=' text-[48px] font-bold'>Why Aradhya Infra?</p>
                  <br/>
                  <div className='w-full flex gap-8 mb-10'>
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
                  <p><span className=' font-sans font-bold'>CLIENT SUPPORT</span> - DEDICATED GUIDANCE FROM BOOKING TO POST-HANDOVER. </p>
                </div>
              
            </div>


            
      {/* <Projects /> */}
      <div className=' text-center mt-18 mb-20'>
              <p className='m-5 '>ALL PROJECTS</p>
              <p className=' text-[45px] font-bold mb-10 '>Aradhya Business Park</p>
      
              <div className='flex gap-12 justify-center text-[17px] '>
                  <button className=' border py-4 px-12 bg-black text-white '>All PROPERTIES</button>
                  <button className=' border py-4 px-12 '>COMMERCIAL</button>
                  <button className=' border py-4 px-12 '>RESIDENTAL</button>
              </div>
              <br/><br/><br/><br/>
              <div className='flex gap-10 justify-center' >
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
