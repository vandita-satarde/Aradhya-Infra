import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import image01 from '../assets/image-0.jpg'
import arrow from '../assets/icons/g-caret-right.png'
import icon01 from '../assets/icons/b-map.png'
import icon02 from '../assets/icons/b-envelope.png'
import icon03 from '../assets/icons/b-phone-square.png'

function ContactUs() {
  return (
    <>
        <div className="bg-cover bg-center h-[523px] " style={{ backgroundImage: `url(${image01})` }}>
            <div>
                <Navbar />
                <div className='p-30'>
                    <p className='flex gap-5 items-center text-[15px] '><span className='text-[#34FF00] '>HOMEPAGE</span> <img src={arrow} className='w-[10px] h-[20px]'/><span className='text-[#FFFFFFBF] '>CONTACT US</span></p>
                    <p className='font-bold text-[58px] py-7 font-[abril] text-[#F3ECDC]'>Reach Out <span className='text-[#048886] '>Anytime</span></p>
                    <p className='text-[15px] text-[#FFFFFFBF] '>Get in touch with our team for expert guidance on your next property move.</p>
                </div>
            </div>
        </div>

        <div className='bg-[#F3ECDC] px-30 pt-30 pb-14'>
            <div className='flex'>
                <div className='w-1/2 h-[747px] p-[50px] bg-[#F9F9F9] rounded-[30px] shadow-xl '>
                    <p className='text-[35px] font-[abril] font-bold'>Contact Us</p>
                    <p className='text-[18px] mt-5 mb-4 text-[#6E6E6E]'>Connect with us anytime—we’re here to make your home-buying journey seamless and stress-free.</p>
                    <div className='flex flex-wrap gap-5'>
                        <div className='text-[17px] font-semibold '>First Name <br/><input placeholder='first name' className='w-[230px] h-[60px] p-[20px] mt-3 text-[15px] bg-[#F1F1F1] rounded-[30px] ' /></div>
                        <div className='text-[17px] font-semibold '>Last Name <br/><input placeholder='last name' className='w-[230px] h-[60px] p-[20px] mt-3 text-[15px] bg-[#F1F1F1] rounded-[30px] ' /></div>
                        <div className='text-[17px] font-semibold '>Email Address <br/><input placeholder='Hello@email' className='w-[230px] h-[60px] p-[20px] mt-3 text-[15px] bg-[#F1F1F1] rounded-[30px] ' /></div>
                        <div className='text-[17px] font-semibold '>Subject <br/><input placeholder='-- Choose Topic --' className='w-[230px] h-[60px] p-[20px] mt-3 text-[15px] bg-[#F1F1F1] rounded-[30px] ' /></div>
                        <div className='text-[17px] font-semibold '>Message <br/><input placeholder='message' className='w-[490px] h-[115px] p-[20px] mt-3 text-[15px] bg-[#F1F1F1] rounded-[30px] ' /></div>                    
                    </div>
                    <button className='rounded-[30px] text-[15px] px-11 py-4 mt-12 bg-[#048886] text-[#F1F1F1] '>SEND MESSAGE</button>
                </div>
                <div className='w-1/2 ml-15 my-auto'>
                    <p className='text-[15px] text-[#A3B18A] '>GET IN TOUCH WITH ARADHYA INFRA</p>
                    <p className='text-[45px] my-5 font-[abril] font-bold'>We’re Here for You</p>
                    <p className='text-[18px] text-[#6E6E6E] mb-15'>Let’s turn your vision into reality — reach out today.</p>
                    <div className='flex flex-col gap-6'>
                        <div className='flex '>
                            <img src={icon01} className='w-[40px] h-[30px] mr-[30px] ' />
                            <div>
                                <p className='text-[21px] font-bold font-[abril]'>Location</p>
                                <p className='text-[18px] text-[#6E6E6E]'>Nagpur, India</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={icon02} className='w-[35px] h-[28px] mr-[30px] ' />
                            <div>
                                <p className='text-[21px] font-bold font-[abril]'>Email Address</p>
                                <p className='text-[18px] text-[#6E6E6E]'>aradhya@Email.com</p>
                            </div>
                        </div>
                        <div className='flex '>
                            <img src={icon03} className='w-[31px] h-[33px] mr-[30px] ' />
                            <div>
                                <p className='text-[21px] font-bold font-[abril]'>Telephone</p>
                                <p className='text-[18px] text-[#6E6E6E]'>( +91 ) 123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className='bg-[#F3ECDC] px-30 pt-14 pb-25'>
            <img src={image01} className=' w-[1240px] h-[350px] rounded-[30px] ' />
        </div>
        <Footer />
    </>
  )
}

export default ContactUs
