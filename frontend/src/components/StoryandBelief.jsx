import React from 'react'

function StoryandBelief({subtitle, title, description, subtitle1, heading1, content1, heading2, content2, heading3, content3, subtitle2, subtitle2content  }) {
  return (
    <>
      <div>
          <p className='text-[12px] md:text-[15px] text-[#048886] pt-5 md:pt-0 '>{subtitle} </p>
          <p className='text-[27px] md:text-[45px] text-[#2D2D2D] font-bold font-[abril] my-4 leading-9 md:leading-16 '>{title} </p>
          <p className=' text-[#6E6E6E] text-[12px] md:text-[18px] '>{description} </p>

          <div className='flex flex-col lg:flex-row gap-3 md:gap-6 mt-10 mx-4 md:mx-0 font-[abril]'>
            <div className='w-full md:w-1/2 bg-[#F9F9F9] rounded-4xl p-6 md:p-10 shadow-2xs '>
              <p className='font-semibold text-[#2D2D2D] text-[22px] md:text-[25px]'>{subtitle1} </p>
              <hr className='my-4 md:my-8' />
              <div className='flex flex-col gap-5 md:gap-10 font-[abril]'>
                <div className='flex gap-4 md:gap-8'>
                  <p className='text-[30px] md:text-[40px] font-bold text-[#048886]'>01</p>
                  <div>
                    <p className='text-[18px] md:text-[21px] font-bold text-[#2D2D2D]'>{heading1} </p>
                    <p className='text-[14px] md:text-[18px] font-sans text-[#6E6E6E]'>{content1} </p>
                  </div>
                </div>
                <div className='flex gap-4 md:gap-8'>
                  <p className='text-[30px] md:text-[40px] font-bold text-[#048886] '>02</p>
                  <div>
                    <p className='text-[18px] md:text-[21px] font-bold text-[#2D2D2D]'>{heading2} </p>
                    <p className='text-[14px] md:text-[18px] font-sans text-[#6E6E6E]'>{content2} </p>
                  </div>
                </div>
                <div className='flex gap-4 md:gap-8'>
                  <p className='text-[30px] md:text-[40px] font-bold text-[#048886] '>03</p>
                  <div>
                    <p className='text-[18px] md:text-[21px] font-bold text-[#2D2D2D] '>{heading3} </p>
                    <p className='text-[14px] md:text-[18px] font-sans text-[#6E6E6E]'>{content3} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full lg:w-1/2 bg-[#F9F9F9] rounded-[30px] p-6 md:p-10 shadow-2xs'>
              <p className='italic font-semibold text-[18px] md:text-[22px] py-3 md:py-9 '>{subtitle2} </p>
              <p className='text-[16px] md:text-[18px] font-sans'>{subtitle2content} </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default StoryandBelief
