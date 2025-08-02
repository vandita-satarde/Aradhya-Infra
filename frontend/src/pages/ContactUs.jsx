import React from 'react'
import { useState } from 'react';
import axios from 'axios';


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import image01 from '../assets/image-0.jpg'
import arrow from '../assets/icons/g-caret-right.png'
import icon01 from '../assets/icons/b-map.png'
import icon02 from '../assets/icons/b-envelope.png'
import icon03 from '../assets/icons/b-phone-square.png'

function ContactUs() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        topic: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { firstName, lastName, email, topic, message } = formData;

        if (!firstName || !lastName || !email || !topic || !message) {
            alert('Please fill in all fields before submitting.');
            return;
    }

        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            alert('Message sent successfully');
            setFormData({ firstName: '', lastName: '', email: '', topic: '', message: '' });
        } catch (error) {
            alert('Error sending message');
        }
    };


    return (
        <>
            <div className="bg-cover bg-center h-[523px] " style={{ backgroundImage: `url(${image01})` }}>
                <div className='pt-[100px]'>
                    <Navbar />
                    <div className='p-12 md:p-30'>
                        <p className='flex gap-5 items-center text-[12px] md:text-[15px] '>
                            <Link to="/">
                                <span className='text-[#34FF00] '>HOMEPAGE</span>
                            </Link>
                            <img src={arrow} />
                            <span className='text-[#FFFFFFBF] '>CONTACT US</span>
                        </p>
                        <p className='font-bold text-[38px] md:text-[55px] py-7 font-[abril] text-[#F3ECDC]'>Reach Out <span className='text-[#048886] '>Anytime</span></p>
                        <p className='text-[12px] md:text-[15px] text-[#FFFFFFBF] '>Get in touch with our team for expert guidance on your next property move.</p>
                    </div>
                </div>
            </div>

            <div className='bg-[#F3ECDC] px-6 md:px-10 lg:px-30 pt-10 md:pt-30 pb-10 md:pb-14'>
                <div className='flex flex-col lg:flex-row gap-10 mx-auto '>
                    <div className='w-full lg:w-1/2 md:h-[747px] p-6 md:p-[50px] bg-[#F9F9F9] rounded-[30px] shadow-xl '>
                        <p className='text-[20px] md:text-[35px] font-[abril] font-bold'>Contact Us</p>
                        <p className='text-[14px] md:text-[18px] mt-4 md:mt-5 mb-4 text-[#6E6E6E]'>Connect with us anytime—we’re here to make your home-buying journey seamless and stress-free.</p>
                        <div className='flex flex-wrap gap-4'>
                            <div className='text-sm md:text-[17px] font-semibold w-full sm:w-[48%] '>
                                First Name <br />
                                <input
                                    name="firstName"
                                    placeholder='first name'
                                    className='w-full md:w-[230px] h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px] '
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='text-sm md:text-[17px] font-semibold w-full sm:w-[48%]'>
                                Last Name <br />
                                <input
                                    name="lastName"
                                    placeholder='last name'
                                    className='w-full md:w-[230px] h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='text-sm md:text-[17px] font-semibold w-full sm:w-[48%]'>
                                Email Address <br />
                                <input
                                    name="email"
                                    placeholder='Hello@email'
                                    className='w-full md:w-[230px] h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='text-sm md:text-[17px] font-semibold w-full sm:w-[48%]'>
                                Subject <br />
                                <input
                                    name="topic"
                                    placeholder='-- Choose Topic --'
                                    className='w-full md:w-[230px] h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]'
                                    value={formData.topic}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='text-sm md:text-[17px] font-semibold w-full sm:w-[48%]'>
                                Message <br />
                                <input
                                    name="message"
                                    placeholder='message'
                                    className='w-full md:w-[490px] h-[90px] md:h-[115px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px] '
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='rounded-[30px] text-[12px] md:text-[15px] px-8 md:px-11 py-3 md:py-4 mt-8 md:mt-12 bg-[#048886] text-[#F1F1F1] '>SEND MESSAGE</button>
                    </div>
                    <div className='w-full md:w-1/2 md:ml-15 my-auto'>
                        <p className='text-[12px] md:text-[15px] text-[#A3B18A] '>GET IN TOUCH WITH ARADHYA INFRA</p>
                        <p className='text-[30px] md:text-[45px] my-4 md:my-5 font-[abril] font-bold'>We’re Here for You</p>
                        <p className='text-[12px] md:text-[18px] text-[#6E6E6E] mb-15'>Let’s turn your vision into reality — reach out today.</p>
                        <div className='flex flex-col gap-6'>
                            <div className='flex '>
                                <img src={icon01} className='w-5 md:w-[40px] h-5 md:h-[30px] mr-5 md:mr-[30px] ' />
                                <div>
                                    <p className=' md:text-[21px] font-bold font-[abril]'>Location</p>
                                    <p className='text-[13px] md:text-[18px] text-[#6E6E6E]'>Nagpur, India</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img src={icon02} className='w-5 md:w-[35px] h-4 md:h-[28px] mr-5 md:mr-[30px] ' />
                                <div>
                                    <p className='md:text-[21px] font-bold font-[abril]'>Email Address</p>
                                    <p className='text-[13px] md:text-[18px] text-[#6E6E6E]'>aradhya@Email.com</p>
                                </div>
                            </div>
                            <div className='flex '>
                                <img src={icon03} className='w-5 md:w-[31px] h-5 md:h-[33px] mr-5 md:mr-[30px] ' />
                                <div>
                                    <p className='md:text-[21px] font-bold font-[abril]'>Telephone</p>
                                    <p className='text-[12px] md:text-[18px] text-[#6E6E6E]'>( +91 ) 123 456 789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='bg-[#F3ECDC] px-3 md:px-10 lg:px-30 pt-10 md:pt-14 pb-10 md:pb-25'>
                <img src={image01} className=' w-full md:w-[1240px] h-[100px] md:h-[350px] rounded-[30px] ' />
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
