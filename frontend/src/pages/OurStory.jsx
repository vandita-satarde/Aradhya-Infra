import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StoryandBelief from "../components/StoryandBelief";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

import image01 from "../assets/image-0.jpg";
import arrow from "../assets/icons/caret-right.png";
import mainImg from "../assets/images/mainimg5.jpg";

function OurStory() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[438px] md:h-[523px] "
        style={{ backgroundImage: `url(${mainImg})` }}
      >
        <div className="pt-[100px]">
          <Navbar />
          <div className="p-12 md:p-30">
            <p className="flex gap-3 md:gap-5 items-center text-[12px] md:text-[15px] ">
              <Link to="/">
                <span className="text-[#34FF00] ">HOMEPAGE</span>
              </Link>
              <img src={arrow} />
              <span className="text-[#FFFFFFBF] "> OUR STORY</span>
            </p>
            <p className="font-bold text-[34px] md:text-[55px] py-5 md:py-11 font-[abril] text-[#F3ECDC] leading-8 md:leading-12">
              What Defines Our Journey
            </p>
            <p className="text-[12px] md:text-[15px] text-[#FFFFFFBF] ">
              Building dreams, creating communities”—that’s not just a
              tagline—it’s why Aradhya Infra exists.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F3ECDC] px-5 md:px-8 lg:px-30 py-5 md:py-10 lg:py-22">
        <StoryandBelief
          subtitle="OUR STORY"
          title="Building dreams, creating communities”—that’s not just a tagline—it’s why Aradhya Infra exists."
          description="Rooted in Nagpur, committed to transparency, fueled by innovation, and motivated by community-first principle, we design homes that stand the test of time—where every address becomes a legacy."
          subtitle1="Growth Anchored in Vision"
          heading1="Local roots"
          content1="Nagpur-based, with deep knowledge of local climate, culture, and city planning needs."
          heading2="RERA & Compliance certified"
          content2="Every project meets legal standards and quality benchmarks."
          heading3="Sustained development"
          content3="A holistic township with infrastructure—for roads, water, electrification, drainage, and green spaces—delivered through thoughtful planning."
          heading4="Quality & Sustainability"
          content4="– Eco-conscious design, vastu compliance, and green building practices are standard."
          heading5="Customer First, Always"
          content5="– From inquiry to after-handover support, we walk with you at every step."
          heading6="Innovation Drives Us"
          content6="– We embrace new technologies and ideas to enhance quality and efficiency."
          subtitle2="“ Our Story – Aradhya Infra “"
          subtitle2content="Founded in September 2011, Aradhya Infratech Private Limited began with a simple yet powerful goal: to create thoughtfully planned residential developments rooted in trust, quality craftsmanship, and a deep understanding of local needs in Nagpur, Maharashtra, and beyond. Incorporated under CIN U45400MH2011PTC222002, our company has maintained an active status and steadily expanded its footprint in Central India’s real estate sector. 
Our leadership team—comprising experts like Yogesh Nagpure, Ashish Kahate, and Keya Sarkar (directors since incorporation)—continues to be driven by strong values of transparency, reliability, and long-term client relationships."
        />
      </div>

      <GetStarted />
      <Footer />
    </>
  );
}

export default OurStory;
