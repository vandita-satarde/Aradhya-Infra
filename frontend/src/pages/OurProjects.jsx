import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

import image01 from '../assets/image-0.jpg'
import arrow from '../assets/icons/caret-right.png'

function OurProjects() {
  return (
    <>
      <div>
        <div className="bg-cover bg-center h-[523px]" style={{ backgroundImage: `url(${image01})` }}>
            <div className='pt-[100px]'>
            <Navbar />
            <div className='p-12 md:p-30'>
                <p className='flex gap-3 md:gap-5 items-center text-[12px] md:text-[15px] '>
                    <span className='text-[#34FF00] '>HOMEPAGE</span>
                    <img src={arrow} />
                    <span className='text-[#FFFFFFBF] '> OUR PROJECTS</span>
                </p>
                <p className='font-bold text-[38px] md:text-[55px] py-7 font-[abril] text-[#F3ECDC]'>List Of Your Dreams</p>
                <p className='text-[12px] md:text-[15px] text-[#FFFFFFBF] '>Crafting spaces that reflect our values—design, sustainability, and community.</p>
              </div>
            </div>
        </div>

        <div className='flex flex-col items-center bg-[#F3ECDC] pb-8 md:pb-25'>
            <p className='text-[22px] md:text-[55px] text-[#048886] font-bold font-[abril] my-5 md:my-8'>Location</p>
            <div className='bg-fuchsia-50 p-1 md:p-4 rounded-4xl'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3107336364287!2d79.05486597503466!3d21.140028780537307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16fe7f30a71%3A0x96d1eb35911d1226!2sTARS%20Technologies!5e0!3m2!1sen!2sin!4v1753256633156!5m2!1sen!2sin" 
                    className='w-[270px] md:w-[1289px] md:h-[460px] rounded-4xl'
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">            
                </iframe>
            </div>
        </div>

        <div className=' text-center mt-8 md:mt-18 px-5 font-sans'>
            <p className=' m-3 md:m-5 text-[#050810] text-[12px] md:text-[16px]  '>ALL PROJECTS</p>
            <p className=' text-[30px] md:text-[45px] text-[#050810] font-[abril] font-bold mb-10 '>Aradhya Business Park</p>
            <div className='flex flex-wrap gap-3 md:gap-8 justify-center text-[13px] md:text-[17px] '>
                <button className=' border py-3 px-6 md:py-4 mdpx-12 bg-[#050810] text-[#F3ECDC] '>All PROPERTIES</button>
                <button className=' border py-3 px-6 md:py-4 mdpx-12 '>COMMERCIAL</button>
                <button className=' border py-3 px-6 md:py-4 mdpx-12 '>RESIDENTAL</button>
            </div>
            <br/><br/><br/>
            <div className='flex flex-wrap gap-3 md:gap-8 justify-center' >
                <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Aradhya Business Park"
                    location="Shankar Nagar, Nagpur"
                />
                <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Aradhya Business Park"
                    location="Shankar Nagar, Nagpur"
                />
                <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Aradhya Business Park"
                    location="Shankar Nagar, Nagpur"
                />
                <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Aradhya Business Park"
                    location="Shankar Nagar, Nagpur"
                />
                <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Aradhya Business Park"
                    location="Shankar Nagar, Nagpur"
                />
                <ProductCard
                    tag="Under Construction"
                    image={image01}
                    name="Aradhya Business Park"
                    location="Shankar Nagar, Nagpur"
                />
            </div>
            <button className='bg-[#048886] text-[12px] md:text-[15px] text-[#F3ECDC] my-7 md:my-15 py-2 md:py-4 px-6 md:px-10 rounded-4xl '>VIEW MORE PROJECTS</button>
        </div>

        <GetStarted />
        <Footer />
      </div>
    </>
  )
}

export default OurProjects
