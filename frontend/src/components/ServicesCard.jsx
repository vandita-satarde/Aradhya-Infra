import React from 'react'

function ServicesCard({icon, name, description}) {
  return (
    <div className='w-full max-w-[393px] md:h-[357px] hover:bg-[#344E41] bg-[#F9F9F9] hover:text-[#E6FFFF] text-[#2D2D2D] rounded-[20px] md:rounded-[30px] text-center p-6 md:p-8 lg:p-15 transition-all duration-300 hover:shadow-lg mx-auto'>
      <img src={icon} className='h-[25px] w-[25px] md:h-[45px] md:w-[45px] mx-auto mb-4'/>
      <p className='text-[16px] md:text-xl lg:text-[25px] mt-4 md:mt-6 mb-4 md:mb-6 lg:mb-10 font-[abril] font-semibold leading-tight'>{name}</p>
      <p className='text-[12px] md:text-base lg:text-[18px] leading-relaxed'>{description}</p>
    </div>
  )
}

export default ServicesCard
