import React, { useRef } from 'react';
import image01 from '../assets/image-0.jpg';
import video1 from '../assets/videos/gallery-1.mp4';
import video2 from '../assets/videos/gallery-2.mp4';

function Gallery() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    videoRef.current?.play();
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };


  return (
    <div className='text-center bg-[#F3ECDC] pb-4 pt-12 md:pt-20 lg:pt-30 px-4 md:px-8 lg:px-12'>
      <p className='mb-4 md:mb-5 text-[#048886] text-sm md:text-[15px] font-medium'>GALLERY</p>
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[50px] text-[#2D2D2D] font-[abril] font-bold mb-8 md:mb-12 lg:mb-16'>
        Our Fabulous Projects
      </h2>

      {/* Main Gallery Section */}
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 mx-auto md:mx-20'>
        <div className='md:w-2/3 w-full flex flex-wrap gap-8 justify-center'>
          <video
            ref={videoRef1}
            className='w-full md:w-[800px] h-[200px] md:h-[280px] lg:h-[300px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300'
            loop
            muted
            onMouseEnter={() => handleMouseEnter(videoRef1)}
            onMouseLeave={() => handleMouseLeave(videoRef1)}
          >
            <source src={video1} type="video/mp4" />
          </video>
          <img src={image01} className='w-[170px] md:w-[380px] h-[180px] md:h-[280px] lg:h-[320px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
          <img src={image01} className='w-[170px] md:w-[380px] h-[180px] md:h-[280px] lg:h-[320px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300' alt="project" />
        </div>
        <div className='md:w-1/3 w-full'>
          <video
            ref={videoRef2}
            className='w-full h-[300px] md:h-[280px] lg:h-[655px] rounded-[20px] lg:rounded-4xl object-cover hover:scale-105 transition-transform duration-300'
            loop
            muted
            onMouseEnter={() => handleMouseEnter(videoRef2)}
            onMouseLeave={() => handleMouseLeave(videoRef2)}
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
