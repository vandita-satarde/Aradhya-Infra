import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Select from 'react-select';


const Dashboard = () => {
  const name = localStorage.getItem("name");
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    location: '',
    rating: '',
    reviews: '',
    area: '',
    tags: '',
    facilities: [''],
    sonderStandard: [''],
    images: [],
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('https://aradhya-infra-e57v.vercel.app/api/projects');
      console.log('Projects fetched:', res.data);
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  const handleEdit = (projectId) => {
    const project = projects.find(p => p._id === projectId);
    setEditingProject(projectId);
    setEditFormData({
      title: project.title || '',
      description: project.description || '',
      location: project.location || '',
      rating: project.rating || '',
      reviews: project.reviews || '',
      area: project.area || '',
      tags: project.tags || '',
      facilities: project.facilities || [''],
      sonderStandard: project.sonderStandard || [''],
      images: project.images || []
    });
  };

  // Handle change for normal inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle changing an item in facilities or sonderStandard arrays
  const handleListChange = (field, index, value) => {
    const updatedList = [...editFormData[field]];
    updatedList[index] = value;
    setEditFormData(prev => ({ ...prev, [field]: updatedList }));
  };

  // Add item to list
  const addListItem = (field) => {
    setEditFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  // Remove item from list
  const removeListItem = (field, index) => {
    const updated = [...editFormData[field]];
    updated.splice(index, 1);
    setEditFormData(prev => ({ ...prev, [field]: updated }));
  };

  // Handle image file change: replace specific image at index
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create preview URL to show instantly
    const previewUrl = URL.createObjectURL(file);

    // Replace the image at index with the file object wrapped with preview URL (we keep file for upload)
    const updatedImages = [...editFormData.images];
    updatedImages[index] = file; // store file object

    setEditFormData(prev => ({ ...prev, images: updatedImages }));
  };

  // Add new image slot (empty)
  const addImage = () => {
    setEditFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  // Remove image by index
  const removeImage = (index) => {
    const updated = [...editFormData.images];
    updated.splice(index, 1);
    setEditFormData(prev => ({ ...prev, images: updated }));
  };

  // Upload new images and update project
  const handleUpdate = async () => {
    try {
      const data = new FormData();
      data.append('title', editFormData.title);
      data.append('description', editFormData.description);
      data.append('location', editFormData.location);
      data.append('rating', editFormData.rating);
      data.append('reviews', editFormData.reviews);
      data.append('area', editFormData.area);
      data.append('tags', editFormData.tags);
      editFormData.facilities.forEach(f => data.append('facilities[]', f));
      editFormData.sonderStandard.forEach(s => data.append('sonderStandard[]', s));

      // For images:
      // If the image is a file (newly uploaded), append the file
      // If it is a string (existing URL), append the URL as is (backend should handle this)
      editFormData.images.forEach(img => {
        if (typeof img === 'string') {
          // Existing image URL - send as string
          data.append('existingImages[]', img);
        } else {
          // New file to upload
          data.append('images', img);
        }
      });

      const res = await axios.put(`https://aradhya-infra-e57v.vercel.app/api/projects/${editingProject}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Updated project response:', res.data); // <-- add this!

      // Option 1: update local projects with response (only if res.data contains full updated project)
      // setProjects(prev => prev.map(p => (p._id === editingProject ? res.data : p)));

      // Option 2: re-fetch projects from server after update (recommended if unsure)
      await fetchProjects();

      setEditingProject(null);
      alert('Project updated successfully!');
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Failed to update project. Check console for details.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`https://aradhya-infra-e57v.vercel.app/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
      alert('Failed to delete project.');
    }
  };


  const areaOptions = [
    { value: 'Premium Commercial Space', label: 'Premium Commercial Space' },
    { value: 'Premium Residential Space', label: 'Premium Residential Space' },
    { value: 'Commercial Space', label: 'Commercial Space' },
    { value: 'Residential Space', label: 'Residential Space' },
    { value: 'Other', label: 'Other' },
  ];

  const tagsOptions = [
    { value: 'Under Construction', label: 'Under Construction' },
    { value: 'Sold Out', label: 'Sold Out' },
  ];

  const facilitiesOptions = [
    { value: 'gym', label: 'Gym' },
    { value: 'wifi', label: 'Wi-Fi' },
    { value: 'parking', label: 'Parking' },
    { value: 'pool', label: 'Swimming Pool' },
  ];

  const sonderStandardOptions = [
    { value: 'kitchen', label: 'Modular Kitchen' },
    { value: 'furnished', label: 'Furnished' },
    { value: 'balcony', label: 'Balcony' },
  ];


  return (
    <div className="flex ">
      <Sidebar />
      <div className="pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[20px] md:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Welcome, {name}</h2>

        <div className="flex flex-wrap gap-8">
          {projects.map((project) => (
            <div key={project._id} className="text-[12px] md:text-[16px] w-[500px] p-4 rounded shadow-xl">
              {editingProject === project._id ? (
                <>
                  <input name='title' value={editFormData.title} onChange={handleChange} className="border p-1 md:p-2 w-full mb-2" placeholder="Title" />
                  <input name="location" value={editFormData.location} onChange={handleChange} className="border p-1 md:p-2 w-full mb-2" placeholder="Location" />
                  <input name="rating" value={editFormData.rating} onChange={handleChange} className="border p-1 md:p-2 w-full mb-2" placeholder="Rating" />
                  <input name="reviews" value={editFormData.reviews} onChange={handleChange} className="border p-1 md:p-2 w-full mb-2" placeholder="Reviews" />
                  <div className="mb-2">
                    <label className="font-semibold">Area</label>
                    <Select
                      options={areaOptions}
                      value={areaOptions.find(opt => opt.value === editFormData.area) || null}
                      onChange={(selected) => {
                        setEditFormData(prev => ({
                          ...prev,
                          area: selected ? selected.value : ''
                        }));
                      }}
                      placeholder="Select Area"
                      isClearable
                    />
                  </div>

                  <div className="mb-2">
                    <label className="font-semibold">Tags</label>
                    <Select
                      options={tagsOptions}
                      value={tagsOptions.find(opt => editFormData.tags.includes(opt.value))}
                      onChange={(selected) => {
                        setEditFormData(prev => ({
                          ...prev,
                          tags: selected ? selected.value : ''
                        }));
                      }}
                      placeholder="Select Tag"
                      isClearable
                    />
                  </div>
                  <textarea name="description" value={editFormData.description} onChange={handleChange} className="border p-1 md:p-2 w-full mb-2" placeholder="Description" />
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 md:gap-6 justify-start my-2 md:my-4 mx-3 md:mx-5 ">
                      {editFormData.images.map((img, idx) => (
                        <div key={idx} className="flex flex-col ">
                          <label className="md:text-sm font-medium block mb-1 md:mb-2">Image {idx + 1}</label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, idx)}
                            className="border p-1 md:p-2 rounded w-45 md:w-50 "
                          />

                          {/* Show preview: if string URL or if file object show object URL */}
                          {img && (
                            <div className="relative inline-block mt-2">
                              <img
                                src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                                alt={`Project Image ${idx + 1}`}
                                className="w-37 md:w-42 md:h-25 object-cover rounded border"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="absolute top-1 right-1 bg-red-600 bg-opacity-50 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] "
                                title="Remove image"
                              >
                                ✕
                              </button>
                            </div>
                          )}
                        </div>
                      ))}

                    </div>
                    <button
                      type="button"
                      onClick={addImage}
                      className="text-blue-600 md:text-sm mb-4"
                    >
                      + Add Image
                    </button>
                  </div>


                  {/* Facilities Multi-select */}
                  <div>
                    <label className="font-semibold">Facilities</label>
                    <Select
                      isMulti
                      options={facilitiesOptions}
                      value={facilitiesOptions.filter(opt => editFormData.facilities.includes(opt.value))}
                      onChange={(selected) => {
                        setEditFormData(prev => ({
                          ...prev,
                          facilities: selected ? selected.map(opt => opt.value) : []
                        }));
                      }}
                    />
                  </div>

                  {/* Sonder Standard Multi-select */}
                  <div className="mt-2 md:mt-4">
                    <label className="font-semibold">Sonder Standards</label>
                    <Select
                      isMulti
                      options={sonderStandardOptions}
                      value={sonderStandardOptions.filter(opt => editFormData.sonderStandard.includes(opt.value))}
                      onChange={(selected) => {
                        setEditFormData(prev => ({
                          ...prev,
                          sonderStandard: selected ? selected.map(opt => opt.value) : []
                        }));
                      }}
                    />
                  </div>


                  <div className="flex gap-2 md:gap-4 mt-2 md:mt-4 text-[13px] md:text-[16px]">
                    <button onClick={handleUpdate} className="text-green-600 hover:text-green-700 bg-green-200 hover:bg-green-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm md:rounded-md font-medium transition duration-200">Save</button>
                    <button onClick={() => setEditingProject(null)} className="text-gray-600 hover:text-gray-700 bg-gray-300 hover:bg-gray-400 px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm md:rounded-md font-medium transition duration-200">Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className=" text-[15px] md:text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-500">{project.location}</p>
                  <img
                    src={project.images?.[0] || '/placeholder.jpg'}
                    alt={project.title}
                    className="w-40 mt-2 rounded"
                  />
                  <p className="text-[13px] md:text-[14px] mt-2">{project.description}</p>
                  <p className=" text-gray-600 mt-1">⭐ {project.rating}/5 | {project.reviews}+ reviews</p>
                  <p className="mt-1">Area: {project.area}</p>
                  <p className="mt-1">Tags: {project.tags}</p>
                  <p className="mt-1">Facilities: {project.facilities?.join(', ')}</p>
                  <p className="mt-1">Sonder Standard: {project.sonderStandard?.join(', ')}</p>

                  <div className="flex gap-2 md:gap-4 mt-3 md:mt-4 text-[12px] md:text-[14px] ">
                    <button onClick={() => handleEdit(project._id)} className="text-yellow-600 hover:text-yellow-700 bg-yellow-200 hover:bg-yellow-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm md:rounded-md font-medium transition duration-200">Edit</button>
                    <button onClick={() => handleDelete(project._id)} className="text-red-600 hover:text-red-700 bg-red-200 hover:bg-red-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm md:rounded-md font-medium transition duration-200">Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
