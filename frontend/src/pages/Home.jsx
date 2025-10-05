import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINTS } from "../config/api";

import HeroSection from "../components/HeroSection";
import LatestProject from "../components/LatestProject";
import Nintynine from "../components/nintynine";
import ProductCard from "../components/ProductCard";
import ServicesCard from "../components/ServicesCard";
import GalleryPage from "./GalleryPage";
import GetStarted from "../components/GetStarted";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import aboutImage from "../assets/images/nintynine-1.jpeg";
import image1 from "../assets/images/nintynine-2.jpeg";
import image2 from "../assets/images/nintynine-1.jpeg";
import image3 from "../assets/images/grpimg.jpg";

import hsIcon1 from "../assets/icons/hs-icon1.png";
import hsIcon2 from "../assets/icons/hs-icon2.png";
import hsIcon3 from "../assets/icons/hs-icon3.png";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const locations = [
    {
      main: "GOTAL PANJRI",
      sub: "Near Singapore City",
      image: "./garden.jpeg",
    },
    { main: "PEWTHA", sub: "50ft Road Touch", image: "./streetLighting.jpg" },
    { main: "SHIRUR", sub: "Wardha Road", image: "./lands.jpeg" },
    { main: "KAMPTEE", sub: "Highway Touch", image: "./garden.jpeg" },
    { main: "SAONER", sub: "Main Road", image: "./streetLighting.jpg" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.PROJECTS);
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Circular slider effect - true infinite loop without reset
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => prev + 1);
      }, 3000); // Change every 3 seconds for slow transition

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.area?.toLowerCase().includes(filter.toLowerCase())
        );

  const displayedProjects = filteredProjects.slice(0, 3);

  return (
    <div>
      <HeroSection />
      <div className="text-center py-10 lg:py-12 px-1 lg:px-5">
        <p className=" lg:m-5 text-[#050810] text-[12px] md:text-[13px] lg:text-[16px] font-sans">
          ALL PROJECTS
        </p>
        <p className="text-[25px] md:text-[33px] lg:text-[45px] text-[#050810] font-[abril] font-extrabold mb-1 md:mb-5 lg:mb-10">
          Aradhya Business Park
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-8 justify-center text-[10px] md:text-[16px] lg:text-[17px]">
          <button
            onClick={() => setFilter("all")}
            className={`border py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-12 hover:bg-black hover:text-[#F3ECDC] transition duration-500 ease-in-out cursor-pointer ${
              filter === "all" ? "bg-[#050810] text-[#F3ECDC]" : ""
            }`}
          >
            ALL PROPERTIES
          </button>
          <button
            onClick={() => setFilter("commercial")}
            className={`border py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-12 hover:bg-black hover:text-[#F3ECDC] transition duration-500 ease-in-out cursor-pointer ${
              filter === "commercial" ? "bg-[#050810] text-[#F3ECDC]" : ""
            }`}
          >
            COMMERCIAL
          </button>
          <button
            onClick={() => setFilter("residential")}
            className={`border py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-12 hover:bg-black hover:text-[#F3ECDC] transition duration-500 ease-in-out cursor-pointer ${
              filter === "residential" ? "bg-[#050810] text-[#F3ECDC]" : ""
            }`}
          >
            TOWNSHIP
          </button>
        </div>

        <br />

        <div className="flex flex-wrap justify-center gap-5 lg:gap-8  ">
          {displayedProjects.map((project, index) => (
            <ProductCard
              key={index}
              tag={project.tag}
              image={project.image}
              name={project.name}
              location={project.location}
              area={project.area}
              project={project}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#F3ECDC] px-9 md:px-4 lg:px-25 pt-12 md:pt-14 lg:pt-25 md:pb-1 ">
        {/* Section 01 */}
        <div className=" pb-10 md:pb-15 lg:pb-30">
          <p className="text-[13px] md:text-[13px] lg:text-[15px] font-semibold text-[#048886] mb-3 ">
            OUR LUXURIOUS PROJECTS
          </p>
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 ">
            <h2 className=" text-[26px] md:text-[32px] lg:text-[48px]  font-[Abril_Fatface] leading-7 md:leading-11 lg:leading-17 ">
              Premium Residential,
              <br />
              Commercial & Township Projects.
            </h2>
            <a href="/projects">
              <p className="flex items-center gap-2 tracking-wider text-[12px] md:text-[13px] lg:text-[16px] font-semibold font-sans mr-0 md:mr-5 lg:mr-30 text-[#00000099] ">
                SHOW MORE <FaArrowRight size={20} />{" "}
              </p>
            </a>
          </div>
          <br />
          <br />
          <div
            className={`flex relative ${
              isMobile ? "flex-col" : "flex-col lg:flex-row"
            } items-center md:items-start -mt-5`}
          >
            <div
              className={`${
                isMobile
                  ? "w-full mx-4 mb-6"
                  : "w-[280px] md:w-[230px] lg:w-[417px]"
              } h-[240px] md:h-[220px] lg:h-[305px] rounded-4xl py-4 md:py-4 lg:py-5 px-6 md:px-6 lg:px-12 pr-4 md:pr-14 lg:pr-30 bg-black text-[#FFFFFFBF] relative z-5`}
            >
              <FaQuoteLeft className="w-[30px] h-[20px] md:w-[35px] lg:w-[40px] md:h-[35px] lg:h-[45px] text-[#DADADA] mb-1 md:mb-2 lg:mb-4 " />
              <p className="italic text-[13px] md:text-[17px] lg:text-[18px] mb-0 md:mb-2 lg:mb-3">
                “At Aradhya Infratech, we are committed to providing affordable
                and quality real estate with trust, transparency, and lasting
                value. “
              </p>
              <span className=" font-bold text-[15px] md:text-[22px] lg:text-[20px] text-[#F3ECDC] font-[abril] leading-1 md:leading-7 lg:leading-6">
                Lekhraj Patle
                <br />- Chairman
              </span>
            </div>

            <div
              className={`${
                isMobile
                  ? "relative w-full px-4 h-auto flex justify-center -mt-20 z-10"
                  : "absolute md:left-[160px] lg:left-[320px] md:mx-3 top-[20px] md:top-[20px] lg:top-[40px] mt-6 lg:mt-0 w-[720px] md:w-[540px] lg:w-[930px] h-auto z-10"
              } overflow-hidden`}
              onMouseEnter={() => !isMobile && setIsPaused(true)}
              onMouseLeave={() => !isMobile && setIsPaused(false)}
            >
              {/* Circular slider container */}
              <div
                className={`flex ${
                  isMobile
                    ? "flex-col"
                    : "flex-row transition-transform duration-1000 ease-in-out"
                }`}
                style={{
                  transform: isMobile
                    ? "translateY(0px)"
                    : `translateX(-${currentSlide * (240 + 12)}px)`,
                }}
              >
                {/* Mobile: Show only first 3 cards, Desktop: Show infinite loop */}
                {(isMobile
                  ? locations.slice(0, 3)
                  : Array.from({ length: locations.length * 10 })
                ).map((location, index) => {
                  const locationIndex = isMobile
                    ? index
                    : index % locations.length;
                  const currentLocation = isMobile
                    ? location
                    : locations[locationIndex];

                  return (
                    <div
                      key={`card-${index}`}
                      className={`bg-[#F3ECDC] p-1.5 lg:p-3 rounded-[30px] shadow-xs shadow-[#00000012] relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 flex-shrink-0 ${
                        isMobile
                          ? "mb-4 h-[140px] w-[300px] mx-auto"
                          : "mr-3 md:mr-2 lg:mr-3 h-full w-[240px] md:w-[180px] lg:w-[310px]"
                      }`}
                      onMouseEnter={() => setHoveredImageIndex(`card-${index}`)}
                      onMouseLeave={() => setHoveredImageIndex(null)}
                    >
                      <img
                        src={currentLocation.image}
                        className={`rounded-[30px] md:h-[130px] lg:h-[210px] object-cover w-full transition-all duration-500 ${
                          hoveredImageIndex === `card-${index}`
                            ? "blur-md scale-110"
                            : ""
                        }`}
                      />

                      {/* Address overlay */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                          hoveredImageIndex === `card-${index}`
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <div className="bg-black/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20 shadow-2xl">
                          <div className="flex items-center justify-center mb-3">
                            <div className="bg-[#048886] rounded-full p-3 shadow-lg">
                              <svg
                                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>

                          <div className="text-center">
                            <p className="text-white text-lg lg:text-xl font-bold tracking-wide drop-shadow-lg">
                              {currentLocation.main}
                            </p>
                            {currentLocation.sub && (
                              <p className="text-white/80 text-sm lg:text-base font-medium tracking-wide drop-shadow-lg mt-1">
                                {currentLocation.sub}
                              </p>
                            )}
                            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#048886] to-transparent mx-auto mt-2"></div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute inset-0 rounded-[30px] border-2 transition-all duration-300 ${
                          hoveredImageIndex === `card-${index}`
                            ? "border-[#048886] shadow-lg shadow-[#048886]/25"
                            : "border-transparent"
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 02 */}
      <div className=" px-6 md:px-10 lg:px-30 pb-10 md:pb-20">
        {/* mobile view */}
        <img
          src={aboutImage}
          className="md:hidden block my-10 mx-auto w-[340px] h-[210px] object-cover rounded-[30px] "
        />

        {/* other devices view */}
        <Nintynine className="mt-10 md:mt-15 lg:mt-30 bg-white" />
      </div>
      {/* Section 03 */}
      <div className="bg-[#F3ECDC] px-10 md:px-4 lg:px-25 pb-10 lg:pb-15 pt-10 md:pt-12 lg:pt-20 text-center ">
        <p className="text-[12px] md:text-[13px] lg:text-base mb-1 md:-mb-1 lg:mb-3 font-sans">
          WHY ARADHYA INFRA?
        </p>
        <p className=" text-[26px] md:text-[35px] lg:text-[48px] font-extrabold mb-7 font-[abril] ">
          Why Aradhya Infra?
        </p>
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-5 lg:gap-8 justify-center items-center mb-10">
          <ServicesCard
            icon={hsIcon1}
            name="Nagpur Expertise"
            description="Deep regional insights to build projects that match local culture and climate"
          />
          <ServicesCard
            icon={hsIcon2}
            name="Sustainable by Design"
            description="Each project includes underground electrification, waterline & Sewerage Treatment Plant and green landscaping"
          />
          <ServicesCard
            icon={hsIcon3}
            name="Quality & Transparency"
            description="Vastu‑compliant, clearly priced and inspected, with on‑time delivery."
          />
        </div>
        <p className="text-[#2D2D2D] text-[10px] md:text-[14px] lg:text-[17px] ">
          <span className=" font-sans font-bold">CLIENT SUPPORT</span> -
          DEDICATED GUIDANCE FROM BOOKING TO POST-HANDOVER.{" "}
        </p>
      </div>

      {/* <Projects /> */}
      <LatestProject />

      {/* Gallery Section */}
      <GalleryPage className="!h-0" />
      <GetStarted />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
