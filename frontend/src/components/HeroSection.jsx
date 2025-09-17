import React from "react";
import { Instagram, Twitter } from "lucide-react";
import Navbar from "./Navbar";

import introVideo from "../assets/videos/intro.mp4";

function HeroSection() {
  return (
    <>
      <div className="relative h-[860px] md:h-[950px] lg:h-[930px] bg-opacity-80 bg-black font-sans overflow-hidden">
        {/* Video Background */}

        {/* Dark overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full pt-[100px] ">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            autoPlay
            muted
            loop
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Navbar />

          <div className="p-12 md:p-20 lg:p-30 pb-30 md:pb-70 lg:pb-50 space-y-6">
            <p className="text-[12px] md:text-[15px] lg:text-[18px] text-[#048886] font-semibold opacity-0">
              - A LAND GUIDE
            </p>
            <h1 className="text-[38px] md:text-[57px] lg:text-[85px] text-[#FFFFFF] font-[abril] font-extrabold leading-tight opacity-0">
              Be Prepared For The
              <br /> Mountains And Beyond!
            </h1>
            <p className="text-[12px] md:text-[15px] lg:text-[18px] text-[#FFFFFF] opacity-0">
              scroll down ↓
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-around text-[#F3ECDC] font-[abril] font-bold gap-8 md:gap-10 px-6 text-center">
            <div>
              <p className="text-[30px] md:text-[35px] lg:text-[45px]">07</p>
              <p className="text-[15px] md:text-[18px] lg:text-[21px]">
                YEARS OF LEGACY
              </p>
            </div>
            <div>
              <p className="text-[30px] md:text-[35px] lg:text-[45px]">
                15+
              </p>
              <p className="text-[15px] md:text-[18px] lg:text-[21px]">
                PROJECTS ARE UNDER PLANNING & DEVELOPMENT
              </p>
            </div>
            <div>
              <p className="text-[30px] md:text-[35px] lg:text-[45px]">56</p>
              <p className="text-[15px] md:text-[18px] lg:text-[21px]">
                LANDMARKS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
