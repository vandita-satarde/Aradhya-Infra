import React from 'react'
import image01 from '../assets/image-0.jpg'

function Gallery() {
  return (
    <>
        <div className='text-center bg-[#F3ECDC] p-30'>
            <p className='mb-5 text-[#048886] text-[15px] '>GALLERY</p>
            <p className='text-[50px] text-[#2D2D2D] font-[abril] font-bold '>Our Fabulous Projects</p>
            <br/><br/>
            <div className='flex gap-10 flex-wrap'>
                <img src={image01} className=' h-[320px] w-[600px] rounded-4xl ' />
                <img src={image01} className=' h-[320px] w-[300px] rounded-4xl ' />
                <img src={image01} className=' h-[320px] w-[300px] rounded-4xl ' />
                <img src={image01} className=' h-[320px] w-[400px] rounded-4xl ' />
                <img src={image01} className=' h-[320px] w-[400px] rounded-4xl ' />
                <img src={image01} className=' h-[320px] w-[400px] rounded-4xl ' />
            </div>
            <br/><br/>
            <p className='text-[15px] text-[#2D2D2D] '>SEE OUR GALLERY SECTION LEGACY OF ARADHYA INFRA</p> 
        </div> 
        
    </>
  )
}

export default Gallery
