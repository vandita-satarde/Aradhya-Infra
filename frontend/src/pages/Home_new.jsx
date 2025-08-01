import React from 'react'
import { Link } from 'react-router-dom'
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
      <div className='bg-[#E6FFFF] min-h-screen p-4 md:p-8 lg:p-12 xl:p-30'>
      
        {/* Section 01 - Luxurious Projects */}
        <div className='mb-20 md:mb-32 lg:mb-40'>
          <p className='text-sm md:text-base text-gray-600'>OUR LUXURIOUS PROJECTS</p>
          <br/>
          <div className='flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4 mb-8'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-bold leading-tight text-gray-800'>
              Premium Residential,<br/>Commercial & Township Projects.
            </h2>
            <Link to="/projects" className='text-base md:text-lg lg:text-[19px] cursor-pointer hover:text-gray-600 transition-colors duration-200 font-medium'>
              SHOW MORE →
            </Link>
          </div>

          {/* Featured Content */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4'>
            {/* Testimonial Card */}
            <div className='lg:col-span-1 bg-black text-white rounded-[30px] lg:rounded-4xl p-6 lg:p-8'>
              <img src={quotes} className='w-[27px] h-[35px] lg:h-10 mb-4' alt="quotes" />
              <p className='text-sm lg:text-base mb-4 leading-relaxed'>
                "Doloremque consequatur quasi accusantium ea non excepturi! Saepe accusantium placeat maiores..."
              </p>
              <span className='font-bold text-base lg:text-[18px]'>Nikhil Bawane</span>
            </div>

            {/* Project Images */}
            <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-white p-3 rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <img src={image1} className='w-full rounded-[30px] h-[200px] lg:h-[210px] object-cover' alt="project" />
              </div>
              <div className='bg-white p-3 rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <img src={image1} className='w-full rounded-[30px] h-[200px] lg:h-[210px] object-cover' alt="project" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 02 - About Us */}
        <div className='mb-20 md:mb-32 lg:mb-40'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Image Section */}
            <div className='relative order-2 lg:order-1'>
              <div className='relative'>
                <img src={image1} className='w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[30px] object-cover' alt="about" />
                <div className='absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white p-3 rounded-[30px] shadow-lg'>
                  <img src={image1} className='w-[150px] md:w-[200px] lg:w-[250px] h-[120px] md:h-[160px] lg:h-[200px] rounded-[30px] object-cover' alt="about overlay" />
                </div>
                <div className='absolute -bottom-6 -left-4 md:-bottom-8 md:-left-6 bg-black text-white text-center p-4 md:p-6 rounded-[30px] lg:rounded-4xl'>
                  <p className='text-3xl md:text-4xl lg:text-[50px] font-bold'>99%</p>
                  <p className='text-sm md:text-base lg:text-[21px]'>Customer Support</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className='order-1 lg:order-2'>
              <p className='text-sm md:text-base text-gray-600 mb-4'>ABOUT US</p>
              <div className='flex items-start gap-2 mb-6'>
                <img src={quotes} className='h-4 w-4 mt-2 flex-shrink-0' alt="quote" />
                <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-bold leading-tight text-gray-800'>
                  Aradhya Infra: Building Futures in Central India
                </h3>
                <img src={quotes} className='h-4 w-4 mt-2 flex-shrink-0' alt="quote" />
              </div>
              <p className='text-lg md:text-xl lg:text-[20px] text-gray-500 mb-8'>
                "Aradhya Infra: Building Futures in Central India"
              </p>

              <div className='space-y-6 mb-8'>
                <div className='flex items-center gap-4'>
                  <img src={batch} className='h-6 md:w-[27px] h-[35px] flex-shrink-0' alt="badge" />
                  <p className='text-base md:text-lg font-medium'>Local experts deeply rooted in Nagpur and surrounding areas.</p>
                </div>
                <div className='flex items-center gap-4'>
                  <img src={batch} className='h-6 md:w-[27px] h-[35px] flex-shrink-0' alt="badge" />
                  <p className='text-base md:text-lg font-medium'>Focus on community-centric planning and future-ready infrastructure.</p>
                </div>
              </div>

              <Link 
                to="/about" 
                className='inline-block bg-teal-600 hover:bg-teal-700 text-white py-3 md:py-4 lg:py-5 px-8 md:px-12 lg:px-14 rounded-[30px] lg:rounded-4xl transition-colors duration-300 font-medium'
              >
                MORE ABOUT US →
              </Link>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className='mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            <div className='flex gap-4'>
              <img src={batch} className='h-6 md:w-[27px] h-[35px] mt-1 flex-shrink-0' alt="badge" />
              <div>
                <h4 className='text-xl md:text-2xl lg:text-[24px] font-bold mb-3 text-gray-800'>Vision</h4>
                <p className='text-base md:text-lg lg:text-[19px] text-gray-600 leading-relaxed'>
                  "To deliver thoughtfully designed living spaces-built sustainably, driven by innovation, and grounded in trust-to elevate communities and lives across Central India."
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <img src={batch} className='h-6 md:w-[27px] h-[35px] mt-1 flex-shrink-0' alt="badge" />
              <div>
                <h4 className='text-xl md:text-2xl lg:text-[24px] font-bold mb-3 text-gray-800'>Mission</h4>
                <p className='text-base md:text-lg lg:text-[19px] text-gray-600 leading-relaxed'>
                  "To become the leading regional developer known for modern architecture, green initiatives, and socially conscious township developments that foster strong neighborhood bonds."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 03 - Why Aradhya Infra */}
        <div className='mb-20 md:mb-32 lg:mb-40 text-center'>
          <p className='text-sm md:text-base text-gray-600 mb-4'>WHY ARADHYA INFRA?</p>
          <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-bold mb-12 lg:mb-16 text-gray-800'>
            Why Aradhya Infra?
          </h3>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-16'>
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
          
          <p className='text-base md:text-lg'>
            <span className='font-bold'>CLIENT SUPPORT</span> - DEDICATED GUIDANCE FROM BOOKING TO POST-HANDOVER.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className='text-center py-12 md:py-16 lg:py-20 px-4 md:px-8'>
        <p className='text-sm md:text-base text-gray-600 mb-4'>ALL PROJECTS</p>
        <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-[45px] font-bold mb-8 lg:mb-10 text-gray-800'>
          Aradhya Business Park
        </h3>

        <div className='flex flex-wrap justify-center gap-4 mb-12 lg:mb-16'>
          <button className='border border-gray-300 py-3 md:py-4 px-8 md:px-12 bg-black text-white hover:bg-gray-800 transition-colors duration-300 rounded-lg'>
            ALL PROPERTIES
          </button>
          <button className='border border-gray-300 py-3 md:py-4 px-8 md:px-12 hover:bg-gray-50 transition-colors duration-300 rounded-lg'>
            COMMERCIAL
          </button>
          <button className='border border-gray-300 py-3 md:py-4 px-8 md:px-12 hover:bg-gray-50 transition-colors duration-300 rounded-lg'>
            RESIDENTIAL
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto'>
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
