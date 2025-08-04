import React, { useRef, useState } from 'react';
import image01 from '../assets/image-0.jpg';
import video1 from '../assets/videos/gallery-1.mp4';
import video2 from '../assets/videos/gallery-2.mp4';

function Gallery() {
  const extraGalleryRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prev => !prev);
    setTimeout(() => {
      if (!showMore) {
        extraGalleryRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className='text-center bg-[#F3ECDC] py-12 md:py-20 lg:py-30 px-4 md:px-8 lg:px-12'>
      <p className='mb-4 md:mb-5 text-[#048886] text-sm md:text-[15px] font-medium'>GALLERY</p>
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[50px] text-[#2D2D2D] font-[abril] font-bold mb-8 md:mb-12 lg:mb-16'>
        Our Fabulous Projects
      </h2>

      {/* Main Gallery Section */}
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 mx-auto md:mx-20'>
        <div className='md:w-2/3 w-full flex flex-wrap gap-8 justify-center'>
          <video 
            className='w-full md:w-[800px] h-[200px] md:h-[280px] lg:h-[300px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300'
            autoPlay
            loop
            muted
          >
            <source src={video1} type="video/mp4" />
          </video>
          <img src={image01} className='w-[170px] md:w-[380px] h-[180px] md:h-[280px] lg:h-[320px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
          <img src={image01} className='w-[170px] md:w-[380px] h-[180px] md:h-[280px] lg:h-[320px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
        </div>
        <div className='md:w-1/3 w-full'>
          <video 
            className='w-full h-[300px] md:h-[280px] lg:h-[655px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300'
            autoPlay
            loop
            muted
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Extra Gallery Section */}
      {showMore && (
        <div
          ref={extraGalleryRef}
          className='mt-16 flex flex-wrap justify-center gap-6 px-2 md:px-10'
        >
          <img src={image01} className='w-[90%] sm:w-[380px] h-[200px] md:h-[280px] lg:h-[300px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="extra" />
          <img src={image01} className='w-[90%] sm:w-[780px] h-[200px] md:h-[280px] lg:h-[300px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="extra" />
          <img src={image01} className='w-[90%] sm:w-[580px] h-[200px] md:h-[280px] lg:h-[300px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="extra" />
          <img src={image01} className='w-[90%] sm:w-[180px] h-[200px] md:h-[280px] lg:h-[300px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="extra" />
          <img src={image01} className='w-[90%] sm:w-[380px] h-[200px] md:h-[280px] lg:h-[300px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="extra" />
        </div>
      )}

      {/* Toggle Button */}
      <p
        onClick={handleToggle}
        className='cursor-pointer text-[13px] md:text-[15px] text-[#2D2D2D] mt-8 md:mt-12 lg:mt-16 font-medium animate-pulse transition-colors duration-200'
      >
        {showMore ? 'SHOW LESS' : 'SEE OUR GALLERY SECTION LEGACY OF ARADHYA INFRA'}
      </p>
    </div>
  );
}

export default Gallery;
