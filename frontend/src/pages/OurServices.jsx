import React from 'react'
import Navbar from '../components/Navbar'
import ServicesCard from '../components/ServicesCard'
import Gallery from '../components/Gallery'
import Testimonals from '../components/Testimonials'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

import image01 from '../assets/image-0.jpg'
import arrow from '../assets/icons/g-caret-right.png'
import icon01 from '../assets/icons/icon-01.png'
import icon02 from '../assets/icons/icon-02.png'
import icon03 from '../assets/icons/icon-03.png'
import icon04 from '../assets/icons/icon-04.png'
import icon05 from '../assets/icons/icon-05.png'
import icon06 from '../assets/icons/icon-06.png'

function OurServices() {
  return (
    <>
        <div className="bg-cover bg-center h-[523px] " style={{ backgroundImage: `url(${image01})` }}>
            <div>
                <Navbar />
                <div className='p-12 md:p-30'>
                    <p className='flex gap-3 md:gap-5 items-center text-[12px] md:text-[15px] '>
                        <span className='text-[#34FF00] '>HOMEPAGE</span>
                        <img src={arrow}/>
                        <span className='text-[#34FF00] '>OUR STORY</span>
                        <img src={arrow}/>
                        <span className='text-[#FFFFFFBF] '>OUR SERVICES</span>
                    </p>
                    <p className='font-bold text-[38px] md:text-[55px] py-7 font-[abril] text-[#F3ECDC]'>What Aradhya Infra Offers</p>
                    <p className='text-[12px] md:text-[15px] text-[#FFFFFFBF] '>Building dreams, creating communities”—that’s not just a tagline—it’s why Aradhya Infra exists.</p>
                </div>
            </div>
        </div>

        <div className='bg-[#F3ECDC] p-12 md:p-30 flex flex-wrap gap-6'>
            <ServicesCard 
                icon={icon01}
                name="Pre-Launch Marketing"
                description="Soft-launch strategies, NRI campaigns, exhibitions to build demand early."
            />
            <ServicesCard 
                icon={icon02}
                name="Residential & Townships"
                description="Design and build homes, apartments, and integrated communities."
            />
            <ServicesCard 
                icon={icon03}
                name="Commercial Properties"
                description="Develop offices, retail spaces, & mixed-use complexes."
            />
            <ServicesCard 
                icon={icon04}
                name="Property & Asset Management"
                description="Tenant services, upkeep, asset reporting, long-term maintenance."
            />
            <ServicesCard 
                icon={icon05}
                name="Sales & Channel"
                description="Partner with brokers, use digital platforms, host expos, engage cross-border buyers."
            />
            <ServicesCard 
                icon={icon06}
                name="Eco & Sustainability Solutions"
                description="Green-certified construction, rainwater harvesting, solar, native landscaping."
            />
        </div>

        <Gallery />
        <Testimonals />
        <GetStarted />
        <Footer />
    </>
  )
}

export default OurServices
