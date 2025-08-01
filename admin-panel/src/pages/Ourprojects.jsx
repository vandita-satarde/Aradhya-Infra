import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Ourprojects() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleListChange = (index, field, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
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
  data.append('rating', Number(formData.rating.split('/')[0]));
  data.append('reviewCount', formData.reviewCount); // renamed to match backend
  data.append('description', formData.description);
  data.append('tags', formData.tags);
  data.append('facilities', JSON.stringify(formData.facilities));
  data.append('sonderStandard', JSON.stringify(formData.sonderStandard));

  if (mainImage) data.append('mainImage', mainImage);
  if (sideImage1) data.append('sideImage1', sideImage1);
  if (sideImage2) data.append('sideImage2', sideImage2);

  try {
    await axios.post('http://localhost:5000/api/projects', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    alert('Project submitted successfully');

    // Reset form
    setFormData({
      title: '',
      location: '',
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
      <div className="ml-64 p-8 w-full min-h-screen bg-[#E6FFFF]">
        <h2 className="text-3xl font-bold mb-8 text-[#048886]">Add Project</h2>
        <form onSubmit={handleSubmit} className="bg-[#f3efe7] w-[900px] p-6 rounded shadow-md space-y-4">

          <input name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" className="w-full p-2 border rounded" required />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" required />
          <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (e.g., 4.5/5)" className="w-full p-2 border rounded" required />
          <input name="reviewCount" value={formData.reviewCount} onChange={handleChange} placeholder="Review Count (e.g., 900+ reviews)" className="w-full p-2 border rounded" required />

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description (use \\n\\n for new paragraphs)" rows="4" className="w-full p-2 border rounded" required />

          <input name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="w-full p-2 border rounded" required />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="file" accept="image/*" onChange={(e) => setMainImage(e.target.files[0])} className="p-2 border rounded" required />
            <input type="file" accept="image/*" onChange={(e) => setSideImage1(e.target.files[0])} className="p-2 border rounded" required />
            <input type="file" accept="image/*" onChange={(e) => setSideImage2(e.target.files[0])} className="p-2 border rounded" required />
          </div>

          {/* Facilities */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Facilities</label>
            {formData.facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  value={facility}
                  onChange={(e) => handleListChange(index, 'facilities', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder={`Facility ${index + 1}`}
                  required
                />
                {formData.facilities.length > 1 && (
                  <button type="button" onClick={() => removeListItem('facilities', index)} className="text-red-500">✕</button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => addListItem('facilities')} className="text-sm text-blue-600">+ Add Facility</button>
          </div>

          {/* Sonder Standard */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Sonder Standard</label>
            {formData.sonderStandard.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  value={item}
                  onChange={(e) => handleListChange(index, 'sonderStandard', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder={`Standard ${index + 1}`}
                  required
                />
                {formData.sonderStandard.length > 1 && (
                  <button type="button" onClick={() => removeListItem('sonderStandard', index)} className="text-red-500">✕</button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => addListItem('sonderStandard')} className="text-sm text-blue-600">+ Add Standard</button>
          </div>

          <button type="submit" className="bg-[#048886] hover:bg-[#03696b] text-white font-semibold px-4 py-2 rounded">
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default Ourprojects;
