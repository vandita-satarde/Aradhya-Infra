// frontend/src/pages/GalleryPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";

function GalleryPage({ className = "", limit }) {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // ✅ For modal
  const [selectedIndex, setSelectedIndex] = useState(0); // ✅ For navigation
  const [visibleCount, setVisibleCount] = useState(4); // ✅ Show only one row initially (4 images)

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_ENDPOINTS.GALLERY)
      .then((res) => {
        setGalleryItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load gallery:", err);
        setError("Failed to load gallery items");
        setLoading(false);
      });
  }, []);

  const displayedItems = limit
    ? galleryItems.slice(0, limit)
    : galleryItems.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4); // Add one more row (4 images)
  };

  const showLess = () => {
    setVisibleCount(4); // Reset to one row (4 images)
  };

  // Navigation functions for modal
  const openModal = (item, index) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const goToPrevious = () => {
    const newIndex =
      selectedIndex > 0 ? selectedIndex - 1 : galleryItems.length - 1;
    setSelectedIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      selectedIndex < galleryItems.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedItem) return;

      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedItem, selectedIndex]);

  return (
    <>
      <div className={`bg-[#e7dfce] h-[80px] ${className} `}></div>
      <div className="text-center bg-[#F3ECDC] pb-4 pt-9 md:pt-14 lg:pt-18 px-4 md:px-6 lg:px-12">
        <h2 className="text-[24px] md:text-3xl lg:text-[42px] text-[#2D2D2D] font-[Abril_Fatface] font-bold mb-2 md:mb-5 ">
          GALLERY
        </h2>
        <div className="bg-[#F3ECDC] p-3 md:p-5 lg:p-10">
          {loading ? (
            <div className="text-center text-xl text-gray-600">
              Loading gallery items...
            </div>
          ) : error ? (
            <div className="text-center text-xl text-red-600">{error}</div>
          ) : displayedItems.length === 0 ? (
            <div className="text-center text-xl text-gray-600">
              No gallery items found
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
              {displayedItems.map((item, index) => (
                <div key={item._id} className="aspect-square">
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt="Gallery Image"
                      onClick={() =>
                        openModal(
                          item,
                          galleryItems.findIndex(
                            (gItem) => gItem._id === item._id
                          )
                        )
                      }
                      className="w-full h-full rounded-[20px] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  ) : item.type === "video" ? (
                    <video
                      src={item.url}
                      muted
                      loop
                      playsInline
                      onClick={() =>
                        openModal(
                          item,
                          galleryItems.findIndex(
                            (gItem) => gItem._id === item._id
                          )
                        )
                      }
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                      className="w-full h-full rounded-[20px] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {!limit && !loading && !error && galleryItems.length > 4 && (
            <div className="text-center mt-8">
              {visibleCount < galleryItems.length && (
                <button
                  onClick={loadMore}
                  className="bg-[#048886] text-white px-6 py-3 rounded-lg hover:bg-[#036b69] transition-colors duration-300 font-medium"
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ✅ MODAL POPUP WITH NAVIGATION */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300"
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

            {/* Image/Video Content */}
            <div className="relative shadow-xl">
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-2 right-4 text-3xl font-bold text-white hover:text-red-500 hover:scale-110 transition-all duration-200 z-50 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Close modal"
              >
                &times;
              </button>

              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.url}
                  alt="Modal View"
                  className="rounded-lg max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedItem.url}
                  controls
                  autoPlay
                  className="rounded-lg max-w-full max-h-[80vh] object-contain"
                />
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedIndex + 1} / {galleryItems.length}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group z-10"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>

          {/* Instructions */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            <p>
              Use arrow keys or click arrows to navigate • Press ESC to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryPage;
