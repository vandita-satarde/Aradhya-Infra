import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Select from 'react-select';


function Addprojects() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    area: '',
    rating: '',
    reviews: '',
    description: '',
    tags: '',
    facilities: [],
    sonderStandard: [],
  });
  
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === 'file') {
      const newFiles = Array.from(files);
      setSelectedImages(prev => [...prev, ...newFiles]);
      
      // Create preview URLs for the new images
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));
      setPreviewImages(prev => [...prev, ...newPreviews]);
    } else {
      // Handle other inputs
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDeleteImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setPreviewImages(prev => {
      // Revoke the URL to prevent memory leaks
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  };

  // const handleListChange = (index, field, value) => {
  //   const updated = [...formData[field]];
  //   updated[index] = value.trimStart(); // optional: only remove leading space
  //   setFormData({ ...formData, [field]: updated });
  // };

  // const addListItem = (field) => {
  //   setFormData({ ...formData, [field]: [...formData[field], ''] });
  // };

  // const removeListItem = (field, index) => {
  //   const updated = [...formData[field]];
  //   updated.splice(index, 1);
  //   setFormData({ ...formData, [field]: updated });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('location', formData.location);
    data.append('area', formData.area);
    data.append('tags', formData.tags);
    data.append('rating', formData.rating.includes('/') ? Number(formData.rating.split('/')[0]) : Number(formData.rating));
    data.append('reviews', formData.reviews); // renamed to match backend
    data.append('description', formData.description);
    formData.facilities.forEach(facility => {
      data.append('facilities[]', facility.trim());
    });

    formData.sonderStandard.forEach(item => {
      data.append('sonderStandard[]', item.trim());
    });


    if (selectedImages.length === 0) {
      alert('Please select at least one image');
      return;
    }

    // Append all selected images
    selectedImages.forEach(image => {
      data.append('images', image);
    });

    try {
      setIsUploading(true);
      setUploadProgress(0);
      
      console.log('Submitting form with data:', {
        title: formData.title,
        location: formData.location,
        area: formData.area,
        tags: formData.tags,
        rating: formData.rating,
        reviews: formData.reviews,
        description: formData.description,
        facilities: formData.facilities,
        sonderStandard: formData.sonderStandard,
        imageCount: selectedImages.length
      });

      const response = await axios.post('https://aradhya-infra-e57v.vercel.app/api/projects', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 300000, // Increased to 5 minutes timeout for multiple large images
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
          console.log('Upload progress:', percentCompleted + '%');
        }
      });

      console.log('✅ Server response:', response.data);
      alert(`Project "${formData.title}" submitted successfully! Images uploaded to Cloudinary.`);
      
      // Reset form data
      setFormData({
        title: '',
        location: '',
        area: '',
        rating: '',
        reviews: '',
        description: '',
        tags: '',
        facilities: [],
        sonderStandard: [],
      });
      
      // Clear images and revoke URLs
      setSelectedImages([]);
      setPreviewImages(prev => {
        prev.forEach(url => URL.revokeObjectURL(url));
        return [];
      });
      
    } catch (error) {
      console.error('❌ Error submitting project:', error);
      
      let errorMessage = 'Error submitting project';
      if (error.response) {
        console.error('Error response:', error.response.data);
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        errorMessage = 'No response from server. Please check if the backend is running.';
      }
      
      alert(errorMessage);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };


  return (
    <div className="flex">
      <Sidebar />
      <div className="pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[21px] sm:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Add Property</h2>

        <form onSubmit={handleSubmit} className=" w-full max-w-4xl p-3 md:p-6 rounded shadow-2xl space-y-3 md:space-y-4 text-[13px] md:text-[16px] ">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" className="w-full p-1 md:p-2 border rounded" required />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full p-1 md:p-2 border rounded" required />
          <select name="area" value={formData.area} onChange={handleChange} className="w-full p-1 md:p-2 border rounded" required >
            <option value="">Select Area</option>
            <option value="Premium Commercial Space">Premium Commercial Space</option>
            <option value="Premium Residential Space">Premium Residential Space</option>
            <option value="Commercial Space">Commercial Space</option>
            <option value="Residential Space">Residential Space</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-1 md:p-2 border rounded"
            required
          >
            <option value="">Select Tag</option>
            <option value="Under Construction">Under Construction</option>
            <option value="Sold Out">Sold Out</option>
          </select>

          <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (out of 5)" className="w-full p-1 md:p-2 border rounded" required />
          <input name="reviews" value={formData.reviews} onChange={handleChange} placeholder="Review Count (e.g + reviews)" className="w-full p-1 md:p-2 border rounded" required />

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description (use \\n\\n for new paragraphs)" rows="4" className="w-full p-1 md:p-2 border rounded" required />
          {/* Image Upload Section */}
          <div className="space-y-4">
            <input
              type="file"
              name="images"
              accept="image/*,.jpg,.jpeg,.png,.gif,.bmp,.webp,.svg,.tiff,.ico,.avif,.heic,.heif"
              onChange={handleChange}
              multiple
              className="w-full p-1 md:p-2 border rounded"
              required={selectedImages.length === 0}
            />
            
            {/* Image Preview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {previewImages.map((url, index) => (
                <div key={index} className="relative group">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-18 md:h-40 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-1 md:top-2 right-1 md:right-2 bg-red-500 text-white w-4 md:w-5 h-4 md:h-5 text-[9px] md:text-[11px] rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Dropdown */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Facilities</label>
            <Select
              isMulti
              options={[
                { value: 'gym', label: 'Gym' },
                { value: 'wifi', label: 'Wi-Fi' },
                { value: 'parking', label: 'Parking' },
                { value: 'pool', label: 'Swimming Pool' },
              ]}
              value={formData.facilities.map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))}
              onChange={(selected) =>
                setFormData({ ...formData, facilities: selected.map(opt => opt.value) })
              }
              className="w-full"
            />
          </div>

          {/* Sonder Standard Dropdown */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2 mt-4">Sonder Standard</label>
            <Select
              isMulti
              options={[
                { value: 'kitchen', label: 'Modular Kitchen' },
                { value: 'furnished', label: 'Furnished' },
                { value: 'balcony', label: 'Balcony' },
              ]}
              value={formData.sonderStandard.map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))}
              onChange={(selected) =>
                setFormData({ ...formData, sonderStandard: selected.map(opt => opt.value) })
              }
              className="w-full"
            />
          </div>


          {/* Upload Progress */}
          {isUploading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-[#048886] h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="text-sm text-gray-600 mt-2">
                Uploading images... {uploadProgress}% ({selectedImages.length} images)
              </p>
            </div>
          )}

          <button
            type="submit" 
            disabled={isUploading}
            className={`font-semibold px-2 md:px-4 py-1 md:py-2 rounded  ${
              isUploading 
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                : 'bg-[#048886] hover:bg-[#03696b] text-white'
            }`}
          >
            {isUploading ? `Uploading... ${uploadProgress}%` : 'Submit Project'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addprojects;
