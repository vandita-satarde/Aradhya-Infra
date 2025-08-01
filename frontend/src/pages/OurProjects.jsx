import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';

import image01 from '../assets/image-0.jpg';
import arrow from '../assets/icons/caret-right.png';

const projectsData = [
  {
    tag: 'Under Construction',
    image: image01,
    name: 'Aradhya Business Park',
    location: 'Shankar Nagar, Nagpur',
    area: 'Premium Commercial Space',
    category: 'Commercial',
  },
  {
    tag: 'Under Construction',
    image: image01,
    name: 'Aradhya Business Park',
    location: 'Shankar Nagar, Nagpur',
    area: 'Premium Residential Space',
    category: 'Residential',
  },
  {
    tag: 'Sold Out',
    image: image01,
    name: 'Aradhya Business Park',
    location: 'Shankar Nagar, Nagpur',
    area: 'Premium Commercial Space',
    category: 'Commercial',
  },
  {
    tag: 'Under Construction',
    image: image01,
    name: 'Aradhya Business Park',
    location: 'Shankar Nagar, Nagpur',
    area: 'Premium Residential Space',
    category: 'Residential',
  },
  {
    tag: 'Sold Out',
    image: image01,
    name: 'Aradhya Business Park',
    location: 'Shankar Nagar, Nagpur',
    area: 'Premium Residential Space',
    category: 'Residential',
  },
  {
    tag: 'Under Construction',
    image: image01,
    name: 'Aradhya Business Park',
    location: 'Shankar Nagar, Nagpur',
    area: 'Premium Commercial Space',
    category: 'Commercial',
  },
  {
    tag: 'Upcoming',
    image: image01,
    name: 'New Heights',
    location: 'Ramdas Peth, Nagpur',
    area: 'Upcoming Residential Tower',
    category: 'Residential',
  },
  {
    tag: 'Under Construction',
    image: image01,
    name: 'Tech Plaza',
    location: 'IT Park, Nagpur',
    area: 'Modern Office Space',
    category: 'Commercial',
  },
  {
    tag: 'Completed',
    image: image01,
    name: 'Green Villas',
    location: 'Manewada, Nagpur',
    area: 'Luxury Residential Villas',
    category: 'Residential',
  },
  {
    tag: 'Upcoming',
    image: image01,
    name: 'Skyline Towers',
    location: 'Dharampeth, Nagpur',
    area: 'High-rise Commercial Tower',
    category: 'Commercial',
  },
];

function OurProjects() {
  const [filter, setFilter] = useState('All PROPERTIES');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = filter === 'All PROPERTIES'
    ? projectsData
    : projectsData.filter((project) => project.category === filter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const toggleView = () => setShowAll(!showAll);

  return (
    <>
      <div>
        {/* Header */}
        <div className="bg-cover bg-center h-[523px]" style={{ backgroundImage: `url(${image01})` }}>
          <div className='pt-[100px]'>
            <Navbar />
            <div className='p-12 md:p-30'>
              <p className='flex gap-3 md:gap-5 items-center text-[12px] md:text-[15px]'>
                <Link to="/">
                  <span className='text-[#34FF00]'>HOMEPAGE</span>
                </Link>
                <img src={arrow} />
                <span className='text-[#FFFFFFBF]'> OUR PROJECTS</span>
              </p>
              <p className='font-bold text-[38px] md:text-[55px] py-7 font-[abril] text-[#E6FFFF]'>List Of Your Dreams</p>
              <p className='text-[12px] md:text-[15px] text-[#FFFFFFBF]'>Crafting spaces that reflect our values—design, sustainability, and community.</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className='flex flex-col items-center bg-[#E6FFFF] pb-8 md:pb-25'>
            <p className='text-[22px] md:text-[55px] text-[#048886] font-bold font-[abril] my-5 md:my-8'>Location</p>
            <div className='bg-[#E6FFFF] p-1 md:p-4 rounded-4xl shadow-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3107336364287!2d79.05486597503466!3d21.140028780537307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16fe7f30a71%3A0x96d1eb35911d1226!2sTARS%20Technologies!5e0!3m2!1sen!2sin!4v1753256633156!5m2!1sen!2sin" 
                    className='w-[270px] md:w-[1289px] md:h-[460px] rounded-4xl'
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">            
                </iframe>
            </div>
        </div>

        {/* Projects */}
        <div className='text-center mt-8 md:mt-18 px-5 font-sans'>
          <p className='m-3 md:m-5 text-[#050810] text-[12px] md:text-[16px]'>ALL PROJECTS</p>
          <p className='text-[30px] md:text-[45px] text-[#050810] font-[abril] font-bold mb-10'>Aradhya Business Park</p>

          {/* Filter Buttons */}
          <div className='flex flex-wrap gap-3 md:gap-8 justify-center text-[13px] md:text-[17px]'>
            {['All PROPERTIES', 'Commercial', 'Residential'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setShowAll(false); }}
                className={`border py-3 px-6 md:py-4 md:px-12 ${filter === cat ? 'bg-[#050810] text-[#E6FFFF]' : ''}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className='flex flex-wrap gap-3 md:gap-8 justify-center mt-12'>
            {visibleProjects.map((project, index) => (
              <ProductCard key={index} {...project} />
            ))}
          </div>

          {/* Toggle Button */}
          {filteredProjects.length > 6 && (
            <button
              onClick={toggleView}
              className='bg-[#048886] text-[12px] md:text-[15px] text-[#E6FFFF] my-7 md:my-15 py-2 md:py-4 px-6 md:px-10 rounded-4xl'
            >
              {showAll ? 'VIEW LESS PROJECTS' : 'VIEW MORE PROJECTS'}
            </button>
          )}
        </div>

        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default OurProjects;
