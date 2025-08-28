// frontend/src/pages/GalleryPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function GalleryPage({className='', limit}) {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null); // ✅ For modal


    useEffect(() => {
        setLoading(true);
        axios.get('https://aradhya-infra-e57v.vercel.app/api/gallery')
            .then((res) => {
                setGalleryItems(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load gallery:', err);
                setError('Failed to load gallery items');
                setLoading(false);
            });
    }, []);

    const displayedItems = limit ? galleryItems.slice(0, limit) : galleryItems;

    return (
        <>
            
            <div className={`bg-[#e7dfce] h-[80px] ${className} `}></div>
            <div className='text-center bg-[#F3ECDC] pb-4 pt-9 md:pt-14 lg:pt-18 px-4 md:px-6 lg:px-12'>
                <p className=' md:mb-2 text-[#048886] text-[11px] md:text-[13px] lg:text-[15px] font-medium'>GALLERY</p>
                <h2 className='text-[24px] md:text-3xl lg:text-[42px] text-[#2D2D2D] font-[abril] font-bold mb-2 md:mb-5 '>
                    Our Fabulous Projects
                </h2>
                <div className="bg-[#F3ECDC] p-3 md:p-5 lg:p-10">
                    {loading ? (
                        <div className="text-center text-xl text-gray-600">Loading gallery items...</div>
                    ) : error ? (
                        <div className="text-center text-xl text-red-600">{error}</div>
                    ) : displayedItems.length === 0 ? (
                        <div className="text-center text-xl text-gray-600">No gallery items found</div>
                    ) : ( 
                        <div className="columns-2 lg:columns-4 gap-3 md:gap-4">
                            {displayedItems.map((item) => (
                                <div key={item._id} className="break-inside-avoid mb-4">
                                    {item.type === 'image' ? (
                                        <img
                                            src={item.url}
                                            alt="Gallery Image"
                                            onClick={() => setSelectedItem(item)}
                                            className="w-full rounded-[20px] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        />
                                    ) : item.type === 'video' ? (
                                        <video
                                            src={item.url}
                                            muted
                                            loop
                                            playsInline
                                            onClick={() => setSelectedItem(item)}
                                            onMouseEnter={(e) => e.target.play()}
                                            onMouseLeave={(e) => e.target.pause()}
                                            className="w-full rounded-[20px] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* ✅ MODAL POPUP */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh] shadow-xl">
            {/* Close button positioned outside the content area */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-500 hover:scale-110 transition-all duration-200 z-50"
              aria-label="Close modal"
            >
              &times;
            </button>

            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt="Modal View"
                className="rounded-lg max-w-full max-h-[80vh] object-contain bg-black"
              />
            ) : (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="rounded-lg max-w-full max-h-[80vh] object-contain bg-black"
              />
            )}
          </div>
        </div>
      )}
        
        </>
    )
}

export default GalleryPage
