import React from 'react'

import image01 from '../assets/image-0.jpg'
import icon01 from '../assets/award.png'

function Projects() {
  return (
    <>
      <div className=' text-center mt-18 mb-20'>
        <p className='m-5 '>ALL PROJECTS</p>
        <p className=' text-[45px] font-bold mb-10 '>Aradhya Business Park</p>

        <div className='flex gap-12 justify-center text-[17px] '>
            <button className=' border py-4 px-12 bg-black text-white '>All PROPERTIES</button>
            <button className=' border py-4 px-12 '>COMMERCIAL</button>
            <button className=' border py-4 px-12 '>RESIDENTAL</button>
        </div>
        <br/><br/><br/><br/>
        <div className='flex gap-10 justify-center' >
            <div className='relative w-[400px] border-2 '>
                <p className='absolute bg-gray-100 py-0.5 px-4 m-3 rounded '>Under Construction</p>
                <img src={image01} />
                <div className=' flex flex-col items-start m-8 text-[19px] '>
                    <p className=' font-bold text-[22px] mb-4 '>Aradhya Business Park</p>
                    <div className='flex justify-center items-center mb-4 '>
                        <img src={icon01} className='h-5 mr-4' />
                        <p>Shankar Nagar, Nagpur</p>
                    </div>
                    <p className='font-medium'>Premium Commercial Space</p>
                    <div  className='text-[12px] m-5 flex gap-10 '><p>Retail</p><p> Office Space</p></div>
                    <div className='text-[17px] flex gap-6'>
                        <button className=' py-2 px-7 bg-black text-white '>BOOK</button>
                        <button className=' py-2 px-7 border '>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
            <div className='relative w-[400px] border-2 '>
                <p className='absolute bg-gray-100 py-0.5 px-4 m-3 rounded '>Under Construction</p>
                <img src={image01} />
                <div className=' flex flex-col items-start m-8 text-[19px] '>
                    <p className=' font-bold text-[22px] mb-4 '>Aradhya Business Park</p>
                    <div className='flex justify-center items-center mb-4 '>
                        <img src={icon01} className='h-5 mr-4' />
                        <p>Shankar Nagar, Nagpur</p>
                    </div>
                    <p className='font-medium'>Premium Commercial Space</p>
                    <div  className='text-[12px] m-5 flex gap-10 '><p>Retail</p><p> Office Space</p></div>
                    <div className='text-[17px] flex gap-6'>
                        <button className=' py-2 px-7 bg-black text-white '>BOOK</button>
                        <button className=' py-2 px-7 border '>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
            <div className='relative w-[400px] border-2 '>
                <p className='absolute bg-gray-100 py-0.5 px-4 m-3 rounded '>Sold out</p>
                <img src={image01} />
                <div className=' flex flex-col items-start m-8 text-[19px] '>
                    <p className=' font-bold text-[22px] mb-4 '>Aradhya Business Park</p>
                    <div className='flex justify-center items-center mb-4 '>
                        <img src={icon01} className='h-5 mr-4' />
                        <p>Shankar Nagar, Nagpur</p>
                    </div>
                    <p className='font-medium'>Premium Commercial Space</p>
                    <div  className='text-[12px] m-5 flex gap-10 '><p>Retail</p><p> Office Space</p></div>
                    <div className='text-[17px] flex gap-6'>
                        <button className=' py-2 px-7 bg-black text-white '>BOOK</button>
                        <button className=' py-2 px-7 border '>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Projects
