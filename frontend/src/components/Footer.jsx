import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/ardhya-logo.jpeg";

import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import pin from "../assets/icons/pinterest.png";
import arrow from "../assets/icons/caret-right.png";
import icon01 from "../assets/icons/map.png";
import icon02 from "../assets/icons/envelope.png";
import icon03 from "../assets/icons/phone-square.png";

function Footer() {
  return (
    <div className="bg-black font-sans px-4 md:px-6 lg:px-12 xl:px-30 pt-8 lg:pt-10">
      <div className="flex flex-col md:flex-row md:gap-10 lg:gap-20 mb-12 md:mb-20">
        {/* Company Info */}
        <div className="md:w-[200px] lg:w-1/4">
          <img
            src={logo}
            className="h-20 w-20 lg:h-28 lg:w-28 mb-4 md:mb-6"
            alt="Aradhya Infra logo"
          />
          <p className="text-[12px] md:text-[13px] lg:text-[15px] text-[#FFFFFFBF] leading-relaxed mb-6">
            Discover the exceptional plots at Aradhya Infratech Nagpur, a
            premier residential enclave that perfectly blends modern living with
            the calmness of nature. Here, at Aradhya Infratech Ngpur Plots,
            select from diverse plots surrounded by verdant greenery and
            orchards, providing a peaceful living environment in sync with the
            natural world.
          </p>
          <div className="flex gap-3 lg:gap-4 items-center">
            <img
              src={facebook}
              className=" cursor-pointer hover:opacity-80 transition-opacity"
              alt="facebook"
            />
            <img
              src={twitter}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              alt="twitter"
            />
            <img
              src={instagram}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              alt="instagram"
            />
            <img
              src={pin}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              alt="pinterest"
            />
          </div>
        </div>

        <div className=" lg:w-3/4 flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-30 text-[14px] md:text-[12px] lg:text-[18px] mt-15 ">
          {/* Quick Links */}
          <div className="">
            <h3 className="font-bold font-[abril] text-[#F3ECDC] text-[15px] md:text-[16px] lg:text-[25px] mb-2 md:mb-4 lg:mb-6">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 lg:gap-5 text-[#FFFFFFBF]">
              <Link
                to="/"
                className="flex items-center gap-2 lg:gap-4 hover:text-white transition-colors duration-200"
              >
                <img src={arrow} alt="arrow" className="h-2 md:h-3 lg:h-3.5 " />{" "}
                Home
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 lg:gap-4 hover:text-white transition-colors duration-200"
              >
                <img src={arrow} alt="arrow" className="h-2 md:h-3 lg:h-3.5 " />{" "}
                About Us
              </Link>
              <Link
                to="/story"
                className="flex items-center gap-2 lg:gap-4 hover:text-white transition-colors duration-200"
              >
                <img src={arrow} alt="arrow" className="h-2 md:h-3 lg:h-3.5 " />{" "}
                Our Story
              </Link>
              <Link
                to="/projects"
                className="flex items-center gap-2 lg:gap-4 hover:text-white transition-colors duration-200"
              >
                <img src={arrow} alt="arrow" className="h-2 md:h-3 lg:h-3.5 " />{" "}
                Our Projects
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-70">
            <h3 className="font-bold text-[#F3ECDC] font-[abril] text-[15px] md:text-[16px] lg:text-[25px] mb-2 md:mb-4 lg:mb-6">
              Location, Contact
            </h3>
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 text-[#FFFFFFBF]">
              <div className="flex gap-3 lg:gap-4">
                <img
                  src={icon01}
                  alt="location"
                  className="h-3.5 md:h-4 lg:h-5 mt-1"
                />
                <span>
                  2nd Floor,
                  <br className="block md:hidden" /> Suyog nagar Square,
                  <br /> Opp. Yokohama Tyres,
                  <br /> Manewada Ring Road,
                  <br /> Nagpur-440027.
                  <br /> Ph. No. : 0712 - 4244020
                </span>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <img
                  src={icon02}
                  alt="email"
                  className="h-2.5 md:h-3 lg:h-3.5"
                />
                <a
                  href="mailto:Hello@Email.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  aradhyainfratech07@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <img
                  src={icon03}
                  alt="phone"
                  className="h-3 md:h-3.5 lg:h-4.5"
                />
                <a
                  href="tel:+91123456789"
                  className="hover:text-white transition-colors duration-200"
                >
                  ( +91 ) 7666044916
                </a>
              </div>
            </div>
          </div>

          {/* Other Links */}
          <div className="">
            <h3 className="font-bold text-[#F3ECDC] font-[abril] text-[15px] md:text-[16px] lg:text-[25px] mb-2 md:mb-4 lg:mb-6">
              Other Links
            </h3>
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 text-[#FFFFFFBF]">
              <div className="flex items-center gap-2 lg:gap-4 cursor-pointer hover:text-white transition-colors duration-200">
                <img src={arrow} alt="arrow" className="h-2 md:h-3 lg:h-3.5 " />{" "}
                Terms & Conditions
              </div>
              <div className="flex items-center gap-2 lg:gap-4 cursor-pointer hover:text-white transition-colors duration-200">
                <img src={arrow} alt="arrow" className="h-2 md:h-3 lg:h-3.5 " />{" "}
                Privacy Policy
              </div>
              <div className="flex items-center gap-2 lg:gap-4 cursor-pointer hover:text-white transition-colors duration-200">
                <img src={arrow} alt="arrow" className="h-2 md:h-3 lg:h-3.5 " />{" "}
                Cookies Policy
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />
      <p className="py-6 lg:py-8 text-[8px] md:text-[12px] lg:text-[15px] text-center font-semibold text-[#F3ECDC]">
        @COPYRIGHT ALL RIGHTS RESERVED
      </p>
    </div>
  );
}

export default Footer;
