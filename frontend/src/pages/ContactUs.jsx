import React from "react";
import { useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import mainImg from "../assets/images/mainimg7.jpg";

import image01 from "../assets/images/mainimg1.jpg";
import arrow from "../assets/icons/g-caret-right.png";
import icon01 from "../assets/icons/b-map.png";
import icon02 from "../assets/icons/b-envelope.png";
import icon03 from "../assets/icons/b-phone-square.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    status: "",
    mobileNumber: "",
    gender: "",
    pinCode: "",
    city: "",
    email: "",
    preferredCommunication: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const {
      fullName,
      dateOfBirth,
      address,
      status,
      mobileNumber,
      gender,
      pinCode,
      city,
      email,
      preferredCommunication,
    } = formData;

    if (
      !fullName ||
      !dateOfBirth ||
      !address ||
      !status ||
      !mobileNumber ||
      !gender ||
      !pinCode ||
      !city ||
      !email ||
      !preferredCommunication
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mobile number validation (10 digits)
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Pin code validation (6 digits)
    if (pinCode.length !== 6) {
      alert("Please enter a valid 6-digit pin code.");
      return;
    }

    try {
      await axios.post(API_ENDPOINTS.CONTACT, formData);
      alert("Contact saved successfully");
      setFormData({
        fullName: "",
        dateOfBirth: "",
        address: "",
        status: "",
        mobileNumber: "",
        gender: "",
        pinCode: "",
        city: "",
        email: "",
        preferredCommunication: "",
      });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-[438px] md:h-[523px] "
        style={{ backgroundImage: `url(${mainImg})` }}
      >
        <div className="pt-[100px]">
          <Navbar />
          <div className="p-12 md:p-30">
            <p className="flex gap-5 items-center text-[12px] md:text-[15px] ">
              <Link to="/">
                <span className="text-[#34FF00] ">HOMEPAGE</span>
              </Link>
              <img src={arrow} />
              <span className="text-[#FFFFFFBF] ">CONTACT US</span>
            </p>
            <p className="font-bold text-[34px] md:text-[55px] py-7 font-[abril] text-[#F3ECDC]">
              Reach Out <span className="text-[#048886] ">Anytime</span>
            </p>
            <p className="text-[12px] md:text-[15px] text-[#FFFFFFBF] ">
              Get in touch with our team for expert guidance on your next
              property move.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F3ECDC] px-6 md:px-10 lg:px-30 pt-10 md:pt-30 pb-10 md:pb-14">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-10 mx-auto ">
          <div className="w-full md:w-[700px] lg:w-2/3 p-6 md:p-[50px] mx-auto bg-[#F9F9F9] rounded-[30px] shadow-xl ">
            <p className="text-[20px] md:text-[35px] font-[abril] font-bold">
              Contact Us
            </p>
            <p className="text-[14px] md:text-[18px] mt-4 md:mt-5 mb-4 text-[#6E6E6E]">
              Connect with us anytime—we’re here to make your home-buying
              journey seamless and stress-free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="text-sm md:text-[17px] font-semibold">
                Full Name <span className="text-red-500">*</span>
                <br />
                <input
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              {/* Date of Birth */}
              <div className="text-sm md:text-[17px] font-semibold">
                Date of Birth <span className="text-red-500">*</span>
                <br />
                <input
                  name="dateOfBirth"
                  type="date"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              {/* Gender */}
              <div className="text-sm md:text-[17px] font-semibold">
                Gender <span className="text-red-500">*</span>
                <br />
                <select
                  name="gender"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Status */}
              <div className="text-sm md:text-[17px] font-semibold">
                Marital Status <span className="text-red-500">*</span>
                <br />
                <select
                  name="status"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>

              {/* Mobile Number */}
              <div className="text-sm md:text-[17px] font-semibold">
                Mobile Number <span className="text-red-500">*</span>
                <br />
                <input
                  name="mobileNumber"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  maxLength="10"
                />
              </div>

              {/* Email */}
              <div className="text-sm md:text-[17px] font-semibold">
                Email Address <span className="text-red-500">*</span>
                <br />
                <input
                  name="email"
                  type="email"
                  placeholder="hello@gmail.com"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* City */}
              <div className="text-sm md:text-[17px] font-semibold">
                City <span className="text-red-500">*</span>
                <br />
                <input
                  name="city"
                  placeholder="Enter your city"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              {/* Pin Code */}
              <div className="text-sm md:text-[17px] font-semibold">
                Pin Code <span className="text-red-500">*</span>
                <br />
                <input
                  name="pinCode"
                  type="tel"
                  placeholder="Enter 6-digit pin code"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.pinCode}
                  onChange={handleChange}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  maxLength="6"
                />
              </div>

              {/* Preferred Communication */}
              <div className="text-sm md:text-[17px] font-semibold">
                Preferred Communication <span className="text-red-500">*</span>
                <br />
                <select
                  name="preferredCommunication"
                  className="w-full h-[30px] md:h-[60px] pl-4 md:pl-5 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px]"
                  value={formData.preferredCommunication}
                  onChange={handleChange}
                >
                  <option value="">Select Communication Mode</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Email">Email</option>
                </select>
              </div>

              {/* Address - Full Width */}
              <div className="text-sm md:text-[17px] font-semibold md:col-span-2">
                Address <span className="text-red-500">*</span>
                <br />
                <textarea
                  name="address"
                  placeholder="Enter your complete address"
                  className="w-full h-[60px] md:h-[80px] pl-4 md:pl-5 pt-3 md:pt-4 mt-2 md:mt-3 md:text-[15px] bg-[#F1F1F1] rounded-[30px] resize-none"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="rounded-[30px] text-[12px] md:text-[15px] px-8 md:px-11 py-3 md:py-4 mt-8 md:mt-12 bg-[#048886] text-[#F1F1F1] "
            >
              SEND MESSAGE
            </button>
          </div>
          <div className="w-full md:w-[500px] lg:w-1/3 md:ml-15 my-auto ">
            <p className="text-[12px] md:text-[13px] lg:text-[15px] text-[#A3B18A] ">
              GET IN TOUCH WITH ARADHYA INFRA
            </p>
            <p className="text-[30px] md:text-[40px] lg:text-[45px] my-1 lg:my-5 font-[abril] font-bold">
              We’re Here for You
            </p>
            <p className="text-[12px] md:text-[17px] lg:text-[18px] text-[#6E6E6E] mb-8 md:mb-10 lg:mb-15">
              Let’s turn your vision into reality — reach out today.
            </p>
            <div className="flex flex-col gap-6 mr-15 md:mr-0">
              <div className="flex ">
                <img
                  src={icon01}
                  className="w-5 md:w-[40px] h-5 md:h-[30px] mr-5 md:mr-[30px] "
                />
                <div>
                  <p className=" md:text-[21px] font-bold font-[abril]">
                    Location
                  </p>
                  <p className="text-[13px] md:text-[18px] text-[#6E6E6E]">
                    2nd Floor,
                    <br className="block md:hidden" /> Suyog nagar Square,
                    <br /> Opp. Yokohama Tyres,
                    <br /> Manewada Ring Road,
                    <br /> Nagpur-440027.
                    <br /> Ph. No. : 0712 - 4244020
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  src={icon02}
                  className="w-5 md:w-[35px] h-4 md:h-[28px] mr-5 md:mr-[30px] "
                />
                <div>
                  <p className="md:text-[21px] font-bold font-[abril]">
                    Email Address
                  </p>
                  <p className="text-[13px] md:text-[18px] text-[#6E6E6E]">
                    aradhyainfratech07@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex ">
                <img
                  src={icon03}
                  className="w-5 md:w-[31px] h-5 md:h-[33px] mr-5 md:mr-[30px] "
                />
                <div>
                  <p className="md:text-[21px] font-bold font-[abril]">
                    Telephone
                  </p>
                  <p className="text-[12px] md:text-[18px] text-[#6E6E6E]">
                    ( +91 ) 9049965981
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3ECDC] border border-gray-300 px-5 md:px-10 lg:px-30 py-6 md:py-12 lg:py-20">
        <img
          src={image01}
          className="object-cover w-full md:w-[1240px] h-[120px] md:h-[240px] lg:h-[370px] rounded-[13px] md:rounded-[30px] "
        />
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
