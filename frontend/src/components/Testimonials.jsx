import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../config/api";
import image01 from "../assets/images/testimonials.jpg";
import { FaShieldAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Default testimonial in case no testimonials are found
  const defaultTestimonial = {
    heading: "Township Living",
    paragraph:
      "We were first-time home buyers and nervous about everything. But Aradhya Infra made the process smooth and stress-free. From site visit to final handover, their team was transparent, responsive, and genuinely cared about our needs. We love our new 2BHK!",
    writtenBy: "Mr. and Mrs. Maheshwari, Central India",
    image: image01,
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.TESTIMONIALS);
        const data = await response.json();

        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          // If no testimonials, use default
          setTestimonials([defaultTestimonial]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Use default testimonial on error
        setTestimonials([defaultTestimonial]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-play functionality with right-to-left movement (pauses on hover)
  useEffect(() => {
    if (testimonials.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds for better readability

    return () => clearInterval(interval);
  }, [testimonials.length, isHovered]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="px-3 md:px-4 lg:px-12 xl:px-30 py-12 md:py-12 lg:py-27">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#048886] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];
  return (
    <div className="px-3 md:px-4 lg:px-12 xl:px-30 py-12 md:py-12 lg:py-27">
      <div className="flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Section - Features */}
        <div className="w-full lg:w-2/3">
          <p className="text-[11px] md:text-[13px] text-[#048886] font-medium mb-1 md:mb-4">
            OUR TESTIMONIALS
          </p>
          <h2 className="text-[22px] md:text-[27px] lg:text-4xl xl:text-[50px] font-[abril] font-bold mb-8 lg:mb-12 leading-tight text-gray-800">
            Why Families Choose Aradhya Infra
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-5 lg:gap-8">
            {/* Image */}
            <div className="bg-[#F3ECDC] md:w-[220px] lg:w-[380px] h-full p-3 rounded-[20px] md:rounded-[30px] mx-auto md:mx-0">
              <img
                src={image01}
                className=" h-[250px] md:h-[190px] lg:h-[350px] w-full rounded-[20px] md:rounded-[30px] object-cover"
                alt="testimonial"
              />
            </div>

            {/* Features List */}
            <div className="flex flex-col justify-around gap-5 md:gap-3 ">
              <div className="flex items-start gap-3 lg:gap-6">
                <FaShieldAlt className="text-[#048886] w-[23px] md:w-[26px] lg:w-[35px] h-[23px] md:h-[26px] lg:h-[35px] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-[abril] font-bold text-lg md:text-[16px] lg:text-[21px] md:mb-1 lg:mb-3 text-gray-800">
                    NMRDA & RL Approved
                  </h3>
                  <p className="font-sans text-sm lg:text-[18px] text-[#050810]">
                    NMRDA SANCTION WITH RL PLOTS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-6">
                <FaList className="text-[#048886] w-[23px] md:w-[26px] lg:w-[35px] h-[23px] md:h-[26px] lg:h-[35px] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-[abril] font-bold text-lg md:text-[16px] lg:text-[21px] lg:mb-3 text-gray-800">
                    List Apartments Nagpur
                  </h3>
                  <p className="font-sans text-sm lg:text-[18px] text-[#050810]">
                    Apartments Exist in India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-6">
                <FaShieldAlt className="text-[#048886] w-[23px] md:w-[26px] lg:w-[35px] h-[23px] md:h-[26px] lg:h-[35px] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-[abril] font-bold text-lg md:text-[16px] lg:text-[21px] lg:mb-3 text-gray-800">
                    Free Consultation
                  </h3>
                  <p className="font-sans text-sm lg:text-[18px] text-[#050810]">
                    Ask to Our Experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Testimonial Slider */}
        <div
          className="mx-auto w-[240px] md:w-[320px] lg:w-[350px] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fixed size container with overflow hidden for smooth transitions */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="border p-5 md:p-4 lg:p-8 rounded-[30px] lg:rounded-4xl font-sans bg-white shadow-xl h-[450px] md:h-[420px] lg:h-[500px] flex flex-col">
                    <FaQuoteLeft className="w-[28px] lg:w-[40px] h-[33px] lg:h-[45px] text-[#DADADA] mb-2 lg:mb-4 flex-shrink-0" />

                    <h3 className="font-medium italic text-lg md:text-xl lg:text-[22px] text-[#050810] mb-3 md:mb-1 lg:mb-4 flex-shrink-0 leading-tight">
                      {testimonial.heading}
                    </h3>

                    {/* Content container with fixed height and flexible growth */}
                    <div className="flex-grow flex flex-col justify-between">
                      <p className="text-[13px] lg:text-[16px] text-[#050810] leading-relaxed mb-4 flex-grow overflow-hidden text-ellipsis">
                        "{testimonial.paragraph}"
                      </p>

                      <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                        <img
                          src={testimonial.image || image01}
                          className="border border-[#0000004D] h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover flex-shrink-0"
                          alt="testimonial author"
                          onError={(e) => {
                            e.target.src = image01; // Fallback to default image
                          }}
                        />
                        <p className="font-medium text-sm md:text-[13px] lg:text-[16px] text-gray-700 leading-tight">
                          – {testimonial.writtenBy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show if more than 1 testimonial */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#048886] hover:text-white text-[#048886] rounded-full p-2 shadow-lg transition-all duration-300 z-10 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#048886] hover:text-white text-[#048886] rounded-full p-2 shadow-lg transition-all duration-300 z-10 hover:scale-110"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
