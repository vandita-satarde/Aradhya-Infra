import React from 'react'
import image01 from '../assets/image-0.jpg'

function GetStarted() {
  return (
    <div>
      <div className='relative py-20 pb-138 px-30 bg-[#F3ECDC] '>
              <img src={image01} className='absolute h-[500px] w-[1300px] rounded-4xl ' />
              <div className='absolute text-white text-center px-75 py-25 '>
                <p className=' text-[60px] text-[#F3ECDC] font-bold font-[abril] '>Turning your Dreams into<br/> Foundation</p>
                <br/>
                <p className='text-[#FFFFFFBF] text-[18px] font-sans '>"More Than Homes-Moments, Memories, Meaning."</p>
                <br/>
                <button className='bg-teal-600 text-[15px] font-sans text-[#F3ECDC] py-4 px-10 rounded-4xl '>GET STARTED</button>
              </div>
            </div>
    </div>
  )
}

export default GetStarted
