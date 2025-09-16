import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Nintynine from "../components/nintynine";
import Testimonials from "../components/Testimonials";
import StoryandBelief from "../components/StoryandBelief";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

import image01 from "../assets/image-0.jpg";
import mainImg from "../assets/images/mainimg7.jpg";
import arrow from "../assets/icons/g-caret-right.png";
import aboutImage from "../assets/images/nintynine-1.jpeg";

function AboutUs() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[438px] md:h-[523px]"
        style={{ backgroundImage: `url(${mainImg})` }}
      >
        <div className="pt-[100px]">
          <Navbar />
          <div className=" p-12 md:p-30 text-[12px] md:text-[15px] ">
            <p className="flex gap-3 md:gap-5 items-center">
              <Link to="/">
                <span className="text-[#34FF00] ">HOMEPAGE</span>
              </Link>
              <img src={arrow} />
              <span className="text-[#FFFFFFBF] ">ABOUT US</span>
            </p>
            <p className="font-bold text-[34px] md:text-[55px] py-5 md:py-11 font-[abril] text-[#F3ECDC] leading-10">
              Welcome to Nagpur
            </p>
            <p className="text-[12px] md:text-[15px] text-[#FFFFFFBF] ">
              Aradhya Infra is deeply rooted in Nagpur, wiht a vision to build
              sustainable,
              <br /> community-oriented living across Central India.
            </p>
          </div>
        </div>
      </div>

      <div className=" px-6 md:px-10 lg:px-30 pb-10 md:pb-10 lg:pb-20 ">
        {/* mobile view */}
        <img
          src={aboutImage}
          className="md:hidden block my-10 mx-auto w-[340px] h-[210px] object-cover rounded-[30px] "
        />

        {/* other devices view */}
        <Nintynine className=" md:pt-15 lg:pt-30 " />
      </div>

      <div className="relative gap-10 bg-[#F3ECDC] px-5 md:px-8 lg:px-30 py-5 md:py-10 lg:py-22">
        <StoryandBelief
          subtitle="OUR BELIEFS"
          title="Aradhya Infra - rooted in Nagpur, inspired to build thriving communities across Central India"
          description="Aradhya Infra - rooted in Nagpur, inspired to build thriving communities across Central India"
          subtitle1="Our Beliefs"
          heading1="Trust is Built, Not Given"
          content1="- We keep our promises and communicate openly."
          heading2="Homes are for Life"
          content2="– We design with durability, comfort, and purpose in mind."
          heading3="Community Matters"
          content3="– Our townships are crafted with shared spaces and thoughtful amenities that bring people together."
          heading4="Sustainability is Non-Negotiable"
          content4="– Eco-conscious design, vastu compliance, and green building practices are standard."
          heading5="Customer First, Always"
          content5="– From inquiry to after-handover support, we walk with you at every step."
          heading6="Innovation Drives Us"
          content6="– We embrace new technologies and ideas to enhance quality and efficiency."
          subtitle2='" Chairman - Shri. Lekhraj Patle "'
          subtitle2content="Shri. Lekhraj Patle is the visionary founder and dynamic driving force behind Aradhya Infra, a name synonymous with excellence and integrity in the real estate sector of Central India. With an unwavering commitment to quality, transparency, and sustainable development, Shri. Patle has been instrumental in redefining the real estate landscape across the region.

Driven by a deep-rooted passion for community upliftment and urban transformation, he established Aradhya Infra with the aim of creating not just buildings, but holistic living spaces that nurture families, foster connections, and enhance lifestyles. His leadership is guided by a clear philosophy—to deliver modern, thoughtfully designed homes and townships that offer long-term value while remaining deeply rooted in trust and ethical practices"
        />

        <hr className="text-gray-300 mt-12 md:mt-14 lg:mt-25 mx-20 md:mx-9 lg:mx-15 " />

        <div className=" mt-10 md:mt-10 lg:mt-25 text-center">
          <p className="text-[10px] md:text-[12px] lg:text-[14px] text-[#048886] font-sans mb-1 lg:mb-3">
            WHAT WE STAND FOR
          </p>
          <p className="text-[24px] md:text-[33px] lg:text-[45px] text-[#2D2D2D] font-bold font-[abril] leading-8 md:leading-9 lg:leading-17 mx-5 ">
            Aradhya Infra
            <br className="hidden md:block" /> Commitments that Defines Us
          </p>

          <div className="mb-5 md:mb-0 flex flex-col sm:flex-row gap-7 md:gap-5 lg:gap-20 mt-7 md:mt-9 lg:mt-18 mx-18 md:mx-4 lg:mx-10 font-[abril]">
            <div>
              <p className="text-[30px] lg:text-[35px] text-[#048886] font-extrabold ">
                01
              </p>
              <p className="text-[20px] lg:text-[23px] text-[#2D2D2D] font-extrabold md:mt-1 lg:mt-4 md:mb-1 lg:mb-3 md:leading-6 lg:leading-9">
                Local
                <br className=" hidden md:block lg:hidden" /> Insight
              </p>
              <p className="text-[15px] lg:text-[18px] text-[#6E6E6E] font-sans leading-4 lg:leading-7">
                We understand the region’s climate, culture, and expectations.
              </p>
            </div>
            <div>
              <p className="text-[30px] lg:text-[35px] text-[#048886] font-extrabold ">
                02
              </p>
              <p className="text-[20px] lg:text-[23px] text-[#2D2D2D] font-extrabold md:mt-1 lg:mt-4 md:mb-1 lg:mb-3 md:leading-6 lg:leading-9">
                Building With Purpose
              </p>
              <p className="text-[15px] lg:text-[18px] text-[#6E6E6E] font-sans leading-4 lg:leading-7">
                Eco-conscious design, vastu compliance, and community-first
                amenities.
              </p>
            </div>
            <div>
              <p className="text-[30px] lg:text-[35px] text-[#048886] font-extrabold ">
                03
              </p>
              <p className="text-[20px] lg:text-[21px] text-[#2D2D2D] font-extrabold md:mt-1 lg:mt-4 md:mb-1 lg:mb-3 md:leading-6 lg:leading-9">
                Transparent By Design
              </p>
              <p className="text-[15px] lg:text-[18px] text-[#6E6E6E] font-sans leading-4 lg:leading-7">
                Clear pricing, straightforward timelines, and real customer
                care.
              </p>
            </div>
            <div>
              <p className="text-[30px] lg:text-[35px] text-[#048886] font-extrabold ">
                04
              </p>
              <p className="text-[20px] lg:text-[21px] text-[#2D2D2D] font-extrabold md:mt-1 lg:mt-4 md:mb-1 lg:mb-3 md:leading-6 lg:leading-9">
                Supporting You Always
              </p>
              <p className="text-[15px] lg:text-[18px] text-[#6E6E6E] font-sans leading-4 lg:leading-7">
                From inquiry to after-handover support, we walk with you at
                every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <GetStarted />
      <Footer />
    </>
  );
}

export default AboutUs;
