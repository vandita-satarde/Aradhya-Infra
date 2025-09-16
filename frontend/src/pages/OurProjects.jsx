import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

import image01 from "../assets/image-0.jpg";
import arrow from "../assets/icons/caret-right.png";

function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All PROPERTIES");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const filteredProjects =
    filter === "All PROPERTIES"
      ? projects
      : projects.filter((project) =>
          project.area?.toLowerCase().includes(filter.toLowerCase())
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const toggleView = () => setShowAll(!showAll);

  return (
    <>
      <div>
        {/* Header */}
        <div
          className="bg-cover bg-center h-[438px] md:h-[523px]"
          style={{ backgroundImage: `url(${image01})` }}
        >
          <div className="pt-[100px]">
            <Navbar />
            <div className="p-12 md:p-30">
              <p className="flex gap-3 md:gap-5 items-center text-[12px] md:text-[15px]">
                <Link to="/">
                  <span className="text-[#34FF00]">HOMEPAGE</span>
                </Link>
                <img src={arrow} />
                <span className="text-[#FFFFFFBF]"> OUR PROJECTS</span>
              </p>
              <p className="font-bold text-[34px] md:text-[55px] py-5 md:py-11 font-[abril] text-[#F3ECDC] leading-9">
                List Of Your Dreams
              </p>
              <p className="text-[12px] md:text-[15px] text-[#FFFFFFBF]">
                Crafting spaces that reflect our values—design, sustainability,
                and community.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className=" flex flex-col items-center bg-[#F3ECDC] pb-8 md:pb-15 lg:pb-25">
          <p className="text-[20px] md:text-[38px] lg:text-[55px] text-[#048886] font-bold font-[abril] my-3 md:my-5 lg:my-8">
            Location
          </p>
          <div className="bg-[#F3ECDC] rounded-4xl shadow-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.162692636463!2d79.08519319999999!3d21.106078999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf0007d08eff%3A0xea2fdc0c38399ec2!2sARADHYA%20INFRATECH!5e0!3m2!1sen!2sin!4v1757916672267!5m2!1sen!2sin"
              className="w-[330px] md:w-[640px] lg:w-[1289px] md:h-[260px] lg:h-[460px] rounded-lg md:rounded-4xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
          </div>
        </div>

        {/* Projects */}
        <div className="text-center py-10 lg:py-12 px-1 lg:px-5 font-sans">
          <p className=" lg:m-5 text-[#050810] text-[12px] md:text-[13px] lg:text-[16px] font-sans">
            ALL PROJECTS
          </p>
          <p className="text-[25px] md:text-[33px] lg:text-[45px] text-[#050810] font-[abril] font-extrabold  mb-1 md:mb-5 lg:mb-10">
            Aradhya Business Park
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-8 justify-center text-[10px] md:text-[17px]">
            {["All PROPERTIES", "Commercial", "Residential"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setShowAll(false);
                }}
                className={`border py-2 md:py-3 px-4 md:px-6 lg:px-12 hover:bg-black hover:text-[#F3ECDC] transition duration-500 ease-in-out cursor-pointer ${
                  filter === cat ? "bg-[#050810] text-[#F3ECDC]" : ""
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center md:justify-start md:mx-15 gap-5 md:gap-0 m-8">
            {visibleProjects.map((project, idx) => (
              <ProductCard key={project._id || idx} project={project} />
            ))}
          </div>

          {/* Toggle Button */}
          {filteredProjects.length > 6 && (
            <button
              onClick={toggleView}
              className="bg-[#048886] text-[12px] md:text-[15px] text-[#F3ECDC] my-7 md:my-15 py-2 md:py-4 px-6 md:px-10 rounded-4xl"
            >
              {showAll ? "VIEW LESS PROJECTS" : "VIEW MORE PROJECTS"}
            </button>
          )}
        </div>

        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default OurProjects;
