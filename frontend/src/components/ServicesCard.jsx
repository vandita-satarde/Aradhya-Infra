import React from 'react'

function ServicesCard({icon, name, description}) {
  return (
    <div className='w-[220px] md:w-[270px] lg:w-[393px]  hover:bg-[#344E41] bg-[#F9F9F9] hover:text-[#F3ECDC] text-[#2D2D2D] rounded-[20px] md:rounded-[30px] text-center p-4 md:p-8 lg:p-12 transition-all duration-300 hover:shadow-lg mx-auto'>
      <img src={icon} className='h-[25px] md:h-[30px] lg:h-[45px] w-[25px] md:w-[30px] lg:w-[45px] mx-auto mb-4'/>
      <p className=' md:h-12 lg:h-16 text-[16px] md:text-[20px] lg:text-[25px] mt-4 md:mt-5 lg:mt-6 mb-2 font-[abril] font-semibold leading-tight'>{name}</p>
      <p className='text-[12px] md:text-[14px] lg:text-[18px] lg:leading-relaxed'>{description}</p>
    </div>
  )
}

export default ServicesCard
