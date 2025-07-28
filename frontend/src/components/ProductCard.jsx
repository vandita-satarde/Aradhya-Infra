import React from 'react';
import icon01 from '../assets/icons/location.png'

function ProductCard({ tag, image, name, location }) {
  return (
    <div className='relative w-[400px] border-2 font-sans'>
                    <p className='absolute text-[#050810] text-[14px] bg-gray-100 py-0.5 px-4 m-3 rounded '>{tag}</p>
                    <img src={image} />
                    <div className=' flex flex-col items-start m-8 text-[19px] '>
                        <p className=' font-bold font-[abril] text-[#050810] text-[22px] mb-4 '>{name} </p>
                        <div className='flex justify-center items-center mb-4 '>
                            <img src={icon01} className='h-5 mr-4 text-[18px]' />
                            <p>{location} </p>
                        </div>
                        <p className='font-semibold text-[18px] '>Premium Commercial Space</p>
                        <div  className='text-[12px] m-5 flex gap-10 '>
                            <p className='bg-[#F3ECDC] text-[#050810] px-3'>Retail</p><p className='bg-[#F3ECDC] px-3'> Office Space</p>
                        </div>
                        <div className='text-[15px] flex gap-6'>
                            <button className=' py-2 px-7 bg-[#050810] text-[#F3ECDC] '>BOOK</button>
                            <button className=' py-2 px-7 border text-[#050810] '>VIEW DETAILS</button>
                        </div>
                    </div>
    </div>
  );
}

export default ProductCard;
