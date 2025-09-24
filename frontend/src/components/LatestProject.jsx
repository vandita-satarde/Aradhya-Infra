import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LatestProject = () => {
  const navigate = useNavigate();
  const [latestProject, setLatestProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [loadingExtra, setLoadingExtra] = useState(false);
  const [extraError, setExtraError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestProject = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Get the last entry from the array
        if (data && data.length > 0) {
          const lastProject = data[data.length - 1];
          console.log("Latest project data:", lastProject);
          setLatestProject(lastProject);
        }
      } catch (error) {
        console.error("Failed to fetch latest project:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProject();
  }, []);

  // Get all available images
  const getImages = () => {
    if (!latestProject) return [];

    const images = [];

    // Handle images array
    if (latestProject.images && Array.isArray(latestProject.images)) {
      images.push(...latestProject.images);
    }

    // Handle single image field
    if (latestProject.image && !images.includes(latestProject.image)) {
      images.push(latestProject.image);
    }

    // If no images, return placeholder
    if (images.length === 0) {
      images.push(
        "https://via.placeholder.com/800x400?text=No+Image+Available"
      );
    }

    return images;
  };

  const images = getImages();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Load more details (facilities, rating, sonderStandards, reviews) on demand
  const loadMoreDetails = async () => {
    if (!latestProject) return;

    // If we've already loaded these fields, skip
    if (
      latestProject.facilities ||
      latestProject.rating ||
      latestProject.sonderStandards ||
      latestProject.reviews
    ) {
      return;
    }

    setLoadingExtra(true);
    setExtraError(null);

    try {
      // Try a dedicated endpoint first if project has an ID
      const id = latestProject._id || latestProject.id;
      let fetched = null;

      if (id) {
        try {
          const res = await fetch(
            `http://localhost:5000/api/projects/${id}/details`
          );
          if (res.ok) {
            fetched = await res.json();
          }
        } catch (e) {
          console.debug("Project details endpoint failed, falling back", e);
        }
      }

      // Fallback: re-fetch projects list and take the last entry
      if (!fetched) {
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          fetched = data[data.length - 1];
        }
      }

      if (fetched) {
        // Merge extra fields into current project state
        setLatestProject((prev) => ({ ...(prev || {}), ...(fetched || {}) }));
      } else {
        setExtraError("No additional details available");
      }
    } catch (err) {
      console.error("Failed to load extra details:", err);
      setExtraError(err.message || "Failed to load more details");
    } finally {
      setLoadingExtra(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white px-6 md:px-10 lg:px-30 py-8">
        <div className="text-center">
          <p className="text-gray-500">Loading latest project...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white px-6 md:px-10 lg:px-30 py-8">
        <div className="text-center">
          <p className="text-red-500">Failed to load latest project: {error}</p>
        </div>
      </div>
    );
  }

  if (!latestProject) {
    return (
      <div className="bg-white px-6 md:px-10 lg:px-30 py-8">
        <div className="text-center">
          <p className="text-gray-500">No projects found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 md:px-10 lg:px-30 py-8 md:py-12 lg:py-16">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `,
        }}
      />

      <div className="text-center mb-8">
        <h2 className="text-[26px] md:text-[32px] lg:text-[48px] font-[Abril_Fatface] leading-7 md:leading-11 lg:leading-17">
          Our Latest Project
        </h2>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Full Width Image Section with Scroller */}
          <div className="lg:w-3/5 relative">
            {/* Main Image Display */}
            <div className="relative h-64 md:h-80 lg:h-[500px] overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt={`${
                  latestProject.name || latestProject.title || "Latest Project"
                } - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                onError={(e) => {
                  console.log("Image failed to load:", e.target.src);
                  e.target.src =
                    "https://via.placeholder.com/800x400?text=Image+Not+Found";
                }}
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 z-10"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 z-10"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Scroller */}
          </div>

          {/* Project Details Section */}
          <div className="lg:w-2/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              {(latestProject.tag || latestProject.tags) && (
                <span className="inline-block bg-[#048886] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {latestProject.tag ||
                    (latestProject.tags && latestProject.tags[0])}
                </span>
              )}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#050810] mb-3 font-[Abril_Fatface]">
                {latestProject.name || latestProject.title || "Latest Project"}
              </h3>
              <p className="text-[#048886] font-semibold mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {latestProject.location || "Location not specified"}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Area:</span>{" "}
                {latestProject.area || "Not specified"}
              </p>
            </div>

            {/* Basic Description */}
            {!showDetails && latestProject.description && (
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {latestProject.description.length > 150
                    ? `${latestProject.description.substring(0, 150)}...`
                    : latestProject.description}
                </p>
              </div>
            )}

            {/* Detailed Information */}
            {showDetails && (
              <div className="mb-6 space-y-4">
                {latestProject.description && (
                  <div>
                    <h4 className="font-semibold text-[#050810] mb-2">
                      Project Description
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {latestProject.description}
                    </p>
                  </div>
                )}

                {/* Additional Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestProject.price && (
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-[#048886]">
                        Price
                      </h5>
                      <p className="text-gray-700">{latestProject.price}</p>
                    </div>
                  )}

                  {latestProject.size && (
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-[#048886]">
                        Size
                      </h5>
                      <p className="text-gray-700">{latestProject.size}</p>
                    </div>
                  )}

                  {latestProject.status && (
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-[#048886]">
                        Status
                      </h5>
                      <p className="text-gray-700">{latestProject.status}</p>
                    </div>
                  )}

                  {latestProject.completion && (
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-[#048886]">
                        Completion
                      </h5>
                      <p className="text-gray-700">
                        {latestProject.completion}
                      </p>
                    </div>
                  )}
                </div>

                {/* Amenities */}
                {latestProject.amenities &&
                  latestProject.amenities.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-[#050810] mb-2">
                        Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {latestProject.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="bg-[#048886]/10 text-[#048886] px-3 py-1 rounded-full text-sm"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Features */}
                {latestProject.features &&
                  latestProject.features.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-[#050810] mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {latestProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="text-gray-700 flex items-center"
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-[#048886]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Contact Information */}
                {(latestProject.contactNumber || latestProject.email) && (
                  <div className="bg-[#048886]/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#050810] mb-2">
                      Contact Information
                    </h4>
                    {latestProject.contactNumber && (
                      <p className="text-gray-700 flex items-center mb-1">
                        <svg
                          className="w-4 h-4 mr-2 text-[#048886]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {latestProject.contactNumber}
                      </p>
                    )}
                    {latestProject.email && (
                      <p className="text-gray-700 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-[#048886]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {latestProject.email}
                      </p>
                    )}
                  </div>
                )}

                {/* Facilities */}
                {latestProject.facilities && (
                  <div>
                    <h4 className="font-semibold text-[#050810] mb-2">
                      Facilities
                    </h4>
                    {Array.isArray(latestProject.facilities) ? (
                      <div className="flex flex-wrap gap-2">
                        {latestProject.facilities.map((facility, index) => (
                          <span
                            key={index}
                            className="bg-[#048886]/10 text-[#048886] px-3 py-1 rounded-full text-sm"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700">
                        {latestProject.facilities}
                      </p>
                    )}
                  </div>
                )}

                {/* Rating */}
                {latestProject.rating && (
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#050810] mb-2">
                      Rating
                    </h4>
                    <div className="flex items-center">
                      {typeof latestProject.rating === "number" ? (
                        <>
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${
                                  i < latestProject.rating
                                    ? "fill-current"
                                    : "fill-gray-300"
                                }`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-700">
                            ({latestProject.rating}/5)
                          </span>
                        </>
                      ) : (
                        <p className="text-gray-700">{latestProject.rating}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Sonder Standards */}
                {latestProject.sonderStandards && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#050810] mb-2">
                      Sonder Standards
                    </h4>
                    {Array.isArray(latestProject.sonderStandards) ? (
                      <ul className="space-y-1">
                        {latestProject.sonderStandards.map(
                          (standard, index) => (
                            <li
                              key={index}
                              className="text-gray-700 flex items-center"
                            >
                              <svg
                                className="w-4 h-4 mr-2 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {standard}
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      <p className="text-gray-700">
                        {latestProject.sonderStandards}
                      </p>
                    )}
                  </div>
                )}

                {/* Reviews */}
                {latestProject.reviews && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-[#050810] mb-3">
                      Reviews
                    </h4>
                    {Array.isArray(latestProject.reviews) ? (
                      <div className="space-y-3">
                        {latestProject.reviews.map((review, index) => (
                          <div
                            key={index}
                            className="bg-white p-3 rounded-lg border border-blue-100"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h5 className="font-medium text-[#050810]">
                                  {review.name ||
                                    review.reviewer ||
                                    "Anonymous"}
                                </h5>
                                {review.rating &&
                                  typeof review.rating === "number" && (
                                    <div className="flex text-yellow-400 text-sm mt-1">
                                      {[...Array(5)].map((_, i) => (
                                        <svg
                                          key={i}
                                          className={`w-4 h-4 ${
                                            i < review.rating
                                              ? "fill-current"
                                              : "fill-gray-300"
                                          }`}
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      ))}
                                    </div>
                                  )}
                              </div>
                              {review.date && (
                                <span className="text-xs text-gray-500">
                                  {new Date(review.date).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-700 text-sm">
                              {review.comment || review.review || review.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700">{latestProject.reviews}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => {
                  const projectId = latestProject._id || latestProject.id;
                  if (projectId) {
                    navigate(`/project-details/${projectId}`);
                  }
                }}
                className="bg-[#048886] text-white px-6 py-3 rounded-lg hover:bg-[#037573] transition duration-300 font-semibold"
              >
                View Details
              </button>

              {/* Show explicit Load More button if extra fields are missing */}
              {!latestProject.facilities &&
                !latestProject.rating &&
                !latestProject.sonderStandards &&
                !latestProject.reviews && (
                  <button
                    onClick={loadMoreDetails}
                    className="px-4 py-2 border border-[#048886] text-[#048886] rounded-lg hover:bg-[#048886] hover:text-white transition duration-300 text-sm"
                    disabled={loadingExtra}
                  >
                    {loadingExtra ? "Loading more..." : "Load more info"}
                  </button>
                )}

              {extraError && (
                <div className="text-red-500 text-sm bg-red-50 px-3 py-1 rounded">
                  {extraError}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
