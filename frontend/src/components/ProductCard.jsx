import React from 'react';
import { Link } from 'react-router-dom';
import icon01 from '../assets/icons/location.png'

function ProductCard({ tag, image, name, location }) {
  return (
    <div className='relative w-full max-w-[400px] border-2 border-gray-200 rounded-lg overflow-hidden font-sans hover:shadow-lg transition-shadow duration-300 my-5 mx-auto'>
      <div className='relative'>
        <p className='absolute z-10 text-[#050810] text-xs md:text-[14px] bg-gray-100 py-1 px-3 md:px-4 m-3 rounded-full shadow-sm'>{tag}</p>
        <img src={image} className='w-full h-[200px] md:h-[250px] object-cover' alt={name} />
      </div>
      
      <div className='flex flex-col items-start p-4 md:p-6 lg:p-8'>
        <h3 className='font-bold font-[abril] text-[#050810] text-lg md:text-xl lg:text-[22px] mb-3 md:mb-4 leading-tight'>{name}</h3>
        
        <div className='flex items-center mb-3 md:mb-4'>
          <img src={icon01} className='h-4 md:h-5 mr-2 md:mr-3 flex-shrink-0' alt="location" />
          <p className='text-sm md:text-base lg:text-[18px] text-gray-600'>{location}</p>
        </div>
        
        <p className='font-semibold text-sm md:text-base lg:text-[18px] mb-3 md:mb-4 text-gray-800'>Premium Commercial Space</p>
        
        <div className='flex flex-wrap gap-2 mb-4 md:mb-6'>
          <span className='bg-[#F3ECDC] text-[#050810] px-3 py-1 rounded-full text-xs md:text-sm'>Retail</span>
          <span className='bg-[#F3ECDC] text-[#050810] px-3 py-1 rounded-full text-xs md:text-sm'>Office Space</span>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-3 md:gap-4 w-full'>
          <button className='flex-1 py-2 md:py-3 px-4 md:px-6 bg-[#050810] text-[#F3ECDC] hover:bg-gray-800 transition-colors duration-300 rounded-md text-sm md:text-[15px] font-medium'>
            BOOK
          </button>
          <Link 
            to="/project-details"
            className='flex-1 py-2 md:py-3 px-4 md:px-6 border border-[#050810] text-[#050810] hover:bg-[#050810] hover:text-[#F3ECDC] transition-colors duration-300 rounded-md text-sm md:text-[15px] font-medium text-center'
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
