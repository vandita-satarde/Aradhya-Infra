import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection'
import Nintynine from '../components/nintynine'
import ProductCard from '../components/ProductCard'
import ServicesCard from '../components/ServicesCard'
import GalleryPage from './GalleryPage';
import GetStarted from '../components/GetStarted'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

import image1 from '../assets/image-0.jpg'
import hsIcon1 from '../assets/icons/hs-icon1.png'
import hsIcon2 from '../assets/icons/hs-icon2.png'
import hsIcon3 from '../assets/icons/hs-icon3.png'
import { FaQuoteLeft } from "react-icons/fa6";



function Home() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://aradhya-infra-e57v.vercel.app/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);


  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project =>
      project.area?.toLowerCase().includes(filter.toLowerCase())
    );


  const displayedProjects = filteredProjects.slice(0, 3);


  return (
    <div>
      <HeroSection />
      <div className='bg-[#F3ECDC] min-h-screen p-12 lg:p-25 '>

        {/* Section 01 */}
        <div className='mb-30'>
          <p className='text-[13px] md:text-[15px] font-semibold text-[#048886] mb-3 '>OUR LUXURIOUS PROJECTS</p>
          <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 '>
            <h2 className=' text-[26px] md:text-[48px]  font-extrabold font-[abril] '>Premium Residential,<br />Commercial & Township Projects.</h2>
            <a href='/projects'>
              <p className='text-[13px] md:text-[15px] font-semibold font-sans mr-0 md:mr-30 text-[#00000099] '>SHOW MORE → </p>
            </a>
          </div>
          <br /><br />
          <div className=' flex relative flex-col lg:flex-row -mt-5 '>
            <div className=' relative w-full lg:w-[417px] h-[260px] lg:h-[305px] rounded-4xl p-6 md:py-8 md:px-12 pr-4 md:pr-40 bg-black text-[#FFFFFFBF] '>
              <FaQuoteLeft className='w-[30px] h-[30px] md:w-[40px] md:h-[45px] text-[#DADADA] mb-4 ' />
              <p className='italic text-[15px] md:text-[22px] mb-3'>“Layanan apartemen paling terbaik di Indonesia, suka banget.. “</p>
              <span className=' font-bold md:text-[25px] text-[#F3ECDC] font-[abril] '>Nikhil Bawane</span>
            </div>

            <div className='absolute md:left-[320px] top-40 md:top-9 flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 ' >
              <div className=' bg-[#F3ECDC] w-full sm:w-[310px] p-1 md:p-3 rounded-[30px] shadow-sm shaadow-[#00000012] '>
                <img src={image1} className='  rounded-[30px] md:h-[210px] w-full object-cover ' />
              </div>
              <div className=' bg-[#F3ECDC] w-full sm:w-[300px] p-1 md:p-3 rounded-[30px] shadow-sm shaadow-[#00000012] '>
                <img src={image1} className='  rounded-[30px] md:h-[210px] w-full object-cover ' />
              </div>
              <div className=' bg-[#F3ECDC] w-full sm:w-[300px] p-1 md:p-3 rounded-[30px] shadow-sm shaadow-[#00000012] '>
                <img src={image1} className='  rounded-[30px] md:h-[210px] w-full object-cover ' />
              </div>
            </div>
          </div>
        </div>

        {/* Section 02 */}
        <Nintynine className='mt-130 md:mt-50'/>

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
            className={`border py-3 px-6 md:py-4 md:px-12 hover:bg-black hover:text-[#F3ECDC] transition duration-500 ease-in-out cursor-pointer ${filter === 'all' ? 'bg-black text-[#F3ECDC]' : ''}`}>
            ALL PROPERTIES
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`border py-3 px-6 md:py-4 md:px-12 hover:bg-black hover:text-[#F3ECDC] transition duration-500 ease-in-out cursor-pointer ${filter === 'commercial' ? 'bg-black text-[#F3ECDC]' : ''}`}>
            COMMERCIAL
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`border py-3 px-6 md:py-4 md:px-12 hover:bg-black hover:text-[#F3ECDC] transition duration-500 ease-in-out cursor-pointer ${filter === 'residential' ? 'bg-black text-[#F3ECDC]' : ''}`}>
            RESIDENTIAL
          </button>
        </div>

        <br /><br /><br /><br />

        <div className='flex flex-wrap justify-center md:justify-start gap-8  '>
          {displayedProjects.map((project, index) => (
            <ProductCard
              key={index}
              tag={project.tag}
              image={project.image}
              name={project.name}
              location={project.location}
              area={project.area}
              project={project}
            />
          ))}
        </div>
      </div>



      <GalleryPage limit={5} className='!h-0' />
      <Link to='/gallery-page' >
        <p className='bg-[#F3ECDC] text-center cursor-pointer text-[9px] md:text-[15px] text-[#2D2D2D] font-medium'>
          SEE OUR GALLERY SECTION LEGACY OF ARADHYA INFRA →
        </p>
      </Link>

      <GetStarted />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
