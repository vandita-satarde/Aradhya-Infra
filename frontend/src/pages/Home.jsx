import React, {useState} from 'react'

import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import ServicesCard from '../components/ServicesCard'
import Gallery from '../components/Gallery'
import GetStarted from '../components/GetStarted'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

import image1 from '../assets/image-0.jpg'
import batch from '../assets/icons/b-award.png'
import image01 from '../assets/image-0.jpg'
import hsIcon1 from '../assets/icons/hs-icon1.png'
import hsIcon2 from '../assets/icons/hs-icon2.png'
import hsIcon3 from '../assets/icons/hs-icon3.png'
import { FaQuoteLeft } from "react-icons/fa6";



function Home() {
  const [activeTab, setActiveTab] = useState('all');const allProjects = [
  {
    tag: 'Under Construction',
    image: image01,
    name: 'Serenity Shirur',
    location: 'Wardha Road Nagpur',
    area: 'Premium Commercial Space',
    type: 'commercial'
  },
  {
    tag: 'Under Construction',
    image: image01,
    name: 'Shree Gajanan Nagari',
    location: 'Pewtha, Nagpur',
    area: 'Premium Residential Space',
    type: 'residential'
  },
  {
    tag: 'Sold Out',
    image: image01,
    name: 'Anandam',
    location: 'Anandam 06 Gotal Panjri, Nagpur',
    area: 'Premium Residential Space',
    type: 'residential'
  }
];

const [filter, setFilter] = useState('all');

const filteredProjects = allProjects.filter(project => {
  if (filter === 'all') return true;
  return project.type === filter;
});


  return (
    <div>
      <HeroSection />
      <div className='bg-[#F3ECDC] min-h-screen p-12 lg:p-25 '>
      
              {/* Section 01 */}
              <div className='mb-30'>
              <p className='text-[13px] md:text-[15px] font-semibold text-[#048886] mb-3 '>OUR LUXURIOUS PROJECTS</p>
              <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 '>
                <h2 className=' text-[26px] md:text-[48px]  font-extrabold font-[abril] '>Premium Residential,<br/>Commercial & Township Projects.</h2>
                <a href='/projects'>
                  <p className='text-[13px] md:text-[15px] font-semibold font-sans mr-0 md:mr-30 text-[#00000099] '>SHOW MORE → </p>
                </a>
              </div>
              <br/><br/>
              <div className=' flex relative flex-col lg:flex-row -mt-5 '>
                  <div className=' relative w-full lg:w-[417px] h-auto lg:h-[305px] rounded-4xl p-6 md:py-8 md:px-12 pr-4 md:pr-40 bg-black text-[#FFFFFFBF] '>
                    <FaQuoteLeft className='w-[30px] h-[35px] md:w-[40px] md:h-[45px] text-[#DADADA] mb-4 ' />
                    <p className='italic text-[22px] mb-3'>“Layanan apartemen paling terbaik di Indonesia, suka banget.. “</p>
                    <span className=' font-bold text-[25px] text-[#F3ECDC] font-[abril] '>Nikhil Bawane</span>
                  </div>
      
                  <div className='md:absolute left-[320px] top-9 flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 ' >
                    <div className=' bg-[#F3ECDC] w-full sm:w-[310px]  p-3 rounded-[30px] shadow-sm shaadow-[#00000012] '>
                      <img src={image1} className='  rounded-[30px] h-[210px] w-full object-cover ' />                
                    </div>
                    <div className=' bg-[#F3ECDC] w-full sm:w-[300px] p-3 rounded-[30px] shadow-sm shaadow-[#00000012] '>
                      <img src={image1} className='  rounded-[30px] h-[210px] w-full object-cover ' />                
                    </div>
                    <div className=' bg-[#F3ECDC] w-full sm:w-[300px] p-3 rounded-[30px] shadow-sm shaadow-[#00000012] '>
                      <img src={image1} className='  rounded-[30px] h-[210px] w-full object-cover ' />                
                    </div>
                  </div>
              </div>
              </div>
      
              {/* Section 02 */}
              <div className='relative flex flex-col md:flex-row mt-30 md:mt-50 gap-10 '>
                  <div className='absolute'>
                    <img src={image1} className=' w-[170px] md:w-[390px] h-[210px] md:h-[500px] object-cover rounded-[30px] ' />
                    <div className='absolute w-[170px] md:w-[390px] top-[50px] md:top-[110px] left-[60px] md:left-[195px] bg-[#F3ECDC] p-2 md:p-3.5 rounded-[30px] shadow-xl shadow-[#00000012] '>
                      <img src={image1} className=' h-[210px] md:h-[499px] rounded-[30px] object-cover ' />            
                    </div>
                    <div className='absolute w-[120px] md:w-[234px] h-[60px] md:h-[149px] top-[170px] md:top-[395px] left-[10px] md:left-[55px] bg-black text-white inline-block text-center p-[6px] md:p-4 rounded-4xl object-cover '>
                      <p className='relative  text-[20px] md:text-[50px] text-[#A3B18A] '>
                        99
                        <p className='absolute top-0.5 md:top-1.5 left-16 md:left-32 text-[8px] md:text-[18px] font-[abril] '>%</p>  
                      </p>
                      <p className='font-[abril] font-bold text-[10px] md:text-[23px] text-[#F3ECDC] '>Customer Support</p>
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
                      <button className=' bg-[#048886] text-[#F3ECDC] text-[12px] md:text-[15px] py-3 md:py-5 px-8 md:px-14 rounded-4xl '>MORE ABOUT US →</button>
                    </a>
                  </div>
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
      
              {/* Section 03 */}
                <div className='mt-30 md:mt-55 text-center '>
                  <p className='text-sm md:text-base mb-3 font-sans'>WHY ARADHYA INFRA?</p>
                  <p className=' text-[32px] md:text-[48px] font-extrabold mb-7 font-[abril] '>Why Aradhya Infra?</p>
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
                  <p className='text-[#2D2D2D] text-[12px] md:text-[17px] '><span className=' font-sans font-bold'>CLIENT SUPPORT</span> - DEDICATED GUIDANCE FROM BOOKING TO POST-HANDOVER. </p>
                </div>
            </div>


            
      {/* <Projects /> */}
      <div className='text-center mt-18 mb-20 px-5'>
  <p className='m-5 text-[#050810] text-[12px] md:text-[16px] font-sans'>ALL PROJECTS</p>
  <p className='text-[30px] md:text-[45px] text-[#050810] font-[abril] font-extrabold mb-10'>Aradhya Business Park</p>

  <div className='flex flex-wrap gap-8 justify-center text-[13px] md:text-[17px]'>
    <button
      onClick={() => setFilter('all')}
      className={`border py-3 px-6 md:py-4 md:px-12 ${filter === 'all' ? 'bg-black text-[#F3ECDC]' : ''}`}>
      ALL PROPERTIES
    </button>
    <button
      onClick={() => setFilter('commercial')}
      className={`border py-3 px-6 md:py-4 md:px-12 ${filter === 'commercial' ? 'bg-black text-white' : ''}`}>
      COMMERCIAL
    </button>
    <button
      onClick={() => setFilter('residential')}
      className={`border py-3 px-6 md:py-4 md:px-12 ${filter === 'residential' ? 'bg-black text-white' : ''}`}>
      RESIDENTIAL
    </button>
  </div>

  <br /><br /><br /><br />

  <div className='flex flex-wrap gap-8  '>
    {filteredProjects.map((project, index) => (
      <ProductCard
        key={index}
        tag={project.tag}
        image={project.image}
        name={project.name}
        location={project.location}
        area={project.area}
      />
    ))}
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
