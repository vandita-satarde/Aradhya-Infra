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
    reviewCount: '',
    description: '',
    tags: '',
    facilities: [''],
    sonderStandard: [''],
  });

  const [mainImage, setMainImage] = useState(null);
  const [sideImage1, setSideImage1] = useState(null);
  const [sideImage2, setSideImage2] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === 'file') {
      // Handle file inputs
      switch (name) {
        case 'mainImage':
          setMainImage(files[0]);
          break;
        case 'sideImage1':
          setSideImage1(files[0]);
          break;
        case 'sideImage2':
          setSideImage2(files[0]);
          break;
        default:
          break;
      }
    } else {
      // Handle other inputs
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleListChange = (index, field, value) => {
    const updated = [...formData[field]];
    updated[index] = value.trimStart(); // optional: only remove leading space
    setFormData({ ...formData, [field]: updated });
  };

  const addListItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeListItem = (field, index) => {
    const updated = [...formData[field]];
    updated.splice(index, 1);
    setFormData({ ...formData, [field]: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('location', formData.location);
    data.append('area', formData.area);
    data.append('tags', formData.tags);
    data.append('rating', Number(formData.rating.split('/')[0]));
    data.append('reviewCount', formData.reviewCount); // renamed to match backend
    data.append('description', formData.description);
    formData.facilities.forEach(facility => {
      data.append('facilities[]', facility.trim());
    });

    formData.sonderStandard.forEach(item => {
      data.append('sonderStandard[]', item.trim());
    });


    if (mainImage) data.append('mainImage', mainImage);
    if (sideImage1) data.append('sideImage1', sideImage1);
    if (sideImage2) data.append('sideImage2', sideImage2);

    try {
      const response = await axios.post('http://localhost:5000/api/projects', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log('Upload progress:', percentCompleted + '%');
        }
      });

      console.log('Server response:', response.data);
      alert('Project submitted successfully');
      setFormData({
        title: '',
        location: '',
        area: '',
        rating: '',
        reviewCount: '',
        description: '',
        tags: '',
        facilities: [''],
        sonderStandard: [''],
      });
      setMainImage(null);
      setSideImage1(null);
      setSideImage2(null);
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Error submitting project');
    }
  };


  return (
    <div className="flex">
      <Sidebar />
      <div className="pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[21px] sm:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Add Property</h2>
        <form onSubmit={handleSubmit} className=" w-full max-w-4xl p-5 md:p-6 rounded shadow-2xl space-y-4 text-[13px] md:text-[16px] ">

          <input name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" className="w-full p-2 border rounded" required />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" required />
          <select name="area" value={formData.area} onChange={handleChange} className="w-full p-2 border rounded" required >
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
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Tag</option>
            <option value="Under Construction">Under Construction</option>
            <option value="Sold Out">Sold Out</option>
          </select>

          <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (out of 5)" className="w-full p-2 border rounded" required />
          <input name="reviewCount" value={formData.reviewCount} onChange={handleChange} placeholder="Review Count (e.g., 900+ reviews)" className="w-full p-2 border rounded" required />

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description (use \\n\\n for new paragraphs)" rows="4" className="w-full p-2 border rounded" required />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="file"
              name="mainImage"
              accept="image/*"
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="file"
              name="sideImage1"
              accept="image/*"
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="file"
              name="sideImage2"
              accept="image/*"
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
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


          <button type="submit" className="bg-[#048886] hover:bg-[#03696b] text-white font-semibold px-4 py-2 rounded w-full sm:w-auto">
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addprojects;
