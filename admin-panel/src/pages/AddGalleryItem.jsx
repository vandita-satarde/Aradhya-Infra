import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';


function AddGalleryItem() {
    const [file, setFile] = useState(null);
    const [type, setType] = useState('');
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this item?')) {
            return;
        }
        
        setDeleting(true);
        try {
            await axios.delete(`https://aradhya-infra-e57v.vercel.app/api/gallery/${id}`);
            await fetchGalleryItems();
            alert('Item deleted successfully');
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('Failed to delete item');
        } finally {
            setDeleting(false);
        }
    };

    const fetchGalleryItems = async () => {
        try {
            const response = await axios.get('https://aradhya-infra-e57v.vercel.app/api/gallery');
            setGalleryItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching gallery items:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !type) {
            alert('Please fill all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
        formData.append('location', 'gallerypage');

        try {
            const res = await axios.post('https://aradhya-infra-e57v.vercel.app/api/gallery/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            alert('Upload successful!');
            fetchGalleryItems(); // Refresh the gallery items
            setFile(null);
            setType('');
        } catch (err) {
            console.error(err);
            alert('Upload failed.');
        }
    };

    return (
        <>
            <Sidebar />
            <div className="pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#048886] mb-6 ">
                    Add to Gallery
                </h2>
                <div className="max-w-md bg-gray-100 rounded-xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Upload File</label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="w-full text-[14px] border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#048886]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Type</label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full text-[14px] border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#048886]"
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                        </div>



                        <button
                            type="submit"
                            className=" bg-[#048886] hover:bg-[#03696b] text-white font-semibold px-6 py-2 rounded transition duration-200"
                        >
                            Upload
                        </button>
                    </form>
                </div>

                <div className="mt-12">
                    <h3 className="text-xl font-bold text-[#048886] mb-6">Gallery Items</h3>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                            {galleryItems.map((item) => (
                                <div key={item._id} className="break-inside-avoid mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                                    {item.type === 'image' ? (
                                        <img 
                                            src={item.url} 
                                            alt="Gallery item" 
                                            onClick={() => setSelectedItem(item)}
                                            className="w-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        />
                                    ) : (
                                        <video 
                                            src={item.url}
                                            onClick={() => setSelectedItem(item)}
                                            className="w-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                            muted
                                            loop
                                            playsInline
                                            onMouseEnter={(e) => e.target.play()}
                                            onMouseLeave={(e) => e.target.pause()}
                                        />
                                    )}
                                    <div className="p-4">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm text-gray-600">
                                                Added: {new Date(item.uploadedAt).toLocaleDateString()}
                                            </p>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDelete(item._id);
                                                }}
                                                disabled={deleting}
                                                className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md text-sm font-medium transition duration-200"
                                            >
                                                {deleting ? 'Deleting...' : 'Delete'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Modal for viewing items */}
                {selectedItem && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
                        <div className="relative p-4 bg-white rounded-lg max-w-[90vw] max-h-[90vh] shadow-xl">
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-500"
                            >
                                &times;
                            </button>

                            {selectedItem.type === 'image' ? (
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
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default AddGalleryItem;
