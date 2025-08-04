import React from 'react';
import { Link } from 'react-router-dom';
import icon01 from '../assets/icons/location.png'

function ProductCard({ project }) {

  const {
    _id,
    title,
    location,
    area,
    tags,
    images,
  } = project;
  return (
    <div className='relative w-[270px] md:w-full max-w-[400px] border-2 border-gray-200 rounded-lg overflow-hidden font-sans hover:shadow-lg transition-shadow duration-300 my-5 mx-5'>
      <div className='relative'>

        {tags && tags.length > 0 && (
          <div className='absolute z-10 flex flex-wrap gap-2 top-2 left-2'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='text-[#050810] text-xs md:text-[14px] bg-gray-100 bg-opacity-80 py-1 px-3 md:px-4 m-3  rounded-full shadow-sm'
              >
                {tag}
              </span>
            ))}
          </div>
        )}


        <img
          src={
            project.mainImage
              ? project.mainImage
              : "https://via.placeholder.com/400x250?text=No+Image"
          }
          alt={project.title}
          className="w-full h-[200px] md:h-[250px] object-cover rounded-t-lg"
        />

      </div>

      <div className='flex flex-col items-start p-4 md:p-6 lg:p-8'>
        <h3 className='font-bold font-[abril] text-[#050810] text-lg md:text-xl lg:text-[22px] mb-3 md:mb-4 leading-tight'>{title}</h3>

        <div className='flex items-center mb-3 md:mb-4'>
          <img src={icon01} className='h-4 md:h-5 mr-2 md:mr-3 flex-shrink-0' alt="location" />
          <p className='text-sm md:text-base lg:text-[18px] text-gray-600'>{location}</p>
        </div>

        <p className='font-semibold text-sm md:text-base lg:text-[18px] mb-3 md:mb-4 text-gray-800'>{area}</p>

        <div className='flex flex-wrap gap-2 mb-4 md:mb-6'>
          <span className='bg-[#F3ECDC] text-[#050810] px-3 py-1 rounded-full text-xs md:text-sm'>Retail</span>
          <span className='bg-[#F3ECDC] text-[#050810] px-3 py-1 rounded-full text-xs md:text-sm'>Office Space</span>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 md:gap-4 w-full'>
          <Link
            to="/enquiry"
            className=' text-center flex-1 py-2 md:px-4 bg-black text-[#F3ECDC] hover:bg-gray-800 transition-colors duration-300 rounded-md text-sm md:text-[15px] font-medium'
          >
            ENQUIRY
          </Link>
          <Link
            to={`/project-details/${project._id}`}
            className='flex-1 py-2 md:px-4 border border-black text-black hover:bg-black hover:text-[#F3ECDC] transition-colors duration-300 rounded-md text-sm md:text-[15px] font-medium text-center'
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
