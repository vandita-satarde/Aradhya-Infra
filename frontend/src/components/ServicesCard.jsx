import React from 'react'

function ServicesCard({icon, name, description}) {
  return (
    <>
        <div className='w-[393px] h-[357px] hover:bg-[#344E41] bg-[#F9F9F9] hover:text-[#F3ECDC] text-[#2D2D2D] rounded-[30px] text-center p-15 '>
                <img src={icon} className='h-[45px] w-[45px] mx-auto '/>
                <p className='text-[25px] mt-6 mb-10 font-[abril] font-semibold '>{name}</p>
                <p className='text-[18px] '>{description}</p>
        </div>
    </>
  )
}

export default ServicesCard
