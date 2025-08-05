import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Dashboard = () => {
  const name = localStorage.getItem("name");
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    location: '',
    rating: '',
    reviewCount: '',
    tags: '',
    facilities: [''],
    sonderStandard: [''],
    mainImage: '',
    sideImage1: '',
    sideImage2: ''
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('https://aradhya-infra-e57v.vercel.app/api/projects');
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
      reviewCount: project.reviews || '',
      tags: project.tags || '',
      facilities: project.facilities || [''],
      sonderStandard: project.sonderStandard || [''],
      mainImage: project.mainImage || '',
      sideImage1: project.sideImage1 || '',
      sideImage2: project.sideImage2 || ''
    });
  };

  const [uploadProgress, setUploadProgress] = useState({});
  const [previewImages, setPreviewImages] = useState({});

  const handleImageChange = async (e) => {
    const { name, files } = e.target;
    if (!files || !files[0]) return;

    const file = files[0];
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPEG, PNG)');
      return;
    }

    console.log('Uploading file:', file.name, 'for field:', name);

    // Set initial progress and preview
    setUploadProgress(prev => ({ ...prev, [name]: 0 }));
    
    // Create object URL for immediate preview
    const previewUrl = URL.createObjectURL(file);
    setPreviewImages(prev => ({ ...prev, [name]: previewUrl }));

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'newerror');

      console.log('Starting Cloudinary upload...');
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`Upload progress: ${percentCompleted}%`);
            setUploadProgress(prev => ({ ...prev, [name]: percentCompleted }));
          }
        }
      );

      console.log('Upload successful:', response.data);
      
      // Revoke object URL to free memory
      URL.revokeObjectURL(previewUrl);
      
      // Update form data with the new image URL
      setEditFormData(prev => {
        const newState = {
          ...prev,
          [name]: response.data.secure_url
        };
        console.log('Updated form data:', newState);
        return newState;
      });

      // Update preview with the actual uploaded image URL
      setPreviewImages(prev => ({ ...prev, [name]: response.data.secure_url }));
      
      // Clear progress
      setUploadProgress(prev => ({ ...prev, [name]: null }));

    } catch (error) {
      console.error('Error uploading image:', error);
      if (error.response) {
        console.error('Cloudinary response:', error.response.data);
      }
      
      // Clear progress and preview on error
      setUploadProgress(prev => ({ ...prev, [name]: null }));
      setPreviewImages(prev => ({ ...prev, [name]: null }));
      
      alert('Error uploading image. Please try again.');
    }
  };


  // We can remove this function as we're now handling image removal directly in the UI
  // using the onClick handlers in the image preview sections


  const handleUpdate = async (id) => {
    try {
      console.log('Updating project with data:', editFormData);
      
      const dataToUpdate = {
        ...editFormData,
        mainImage: editFormData.mainImage || '',
        sideImage1: editFormData.sideImage1 || '',
        sideImage2: editFormData.sideImage2 || ''
      };

      console.log('Sending update request with data:', dataToUpdate);
      
      const res = await axios.put(`https://aradhya-infra-e57v.vercel.app/api/projects/${id}`, dataToUpdate);
      console.log('Update response:', res.data);
      
      const updated = projects.map(p => p._id === id ? res.data : p);
      setProjects(updated);
      setEditingProject(null);
      alert("Project updated successfully!");
    } catch (err) {
      console.error("Error updating project:", err);
      if (err.response) {
        console.error('Server response:', err.response.data);
      }
      alert("Error updating project. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`https://aradhya-infra-e57v.vercel.app/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  const handleListChange = (field, index, value) => {
    const updatedList = [...editFormData[field]];
    updatedList[index] = value;
    setEditFormData({ ...editFormData, [field]: updatedList });
  };

  const addListItem = (field) => {
    setEditFormData({ ...editFormData, [field]: [...editFormData[field], ''] });
  };

  const removeListItem = (field, index) => {
    const updated = [...editFormData[field]];
    updated.splice(index, 1);
    setEditFormData({ ...editFormData, [field]: updated });
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className="pt-23 md:pt-8 md:ml-64 p-8 w-full min-h-screen bg-gray-100">
        <h2 className="text-[20px] md:text-3xl font-bold mb-4 md:mb-10 text-[#048886]">Welcome, {name}</h2>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project._id} className=" p-4 rounded shadow-xl">
              {editingProject === project._id ? (
                <>
                  <input value={editFormData.title} onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })} className="border p-2 w-full mb-2" placeholder="Title" />
                  <input value={editFormData.location} onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })} className="border p-2 w-full mb-2" placeholder="Location" />
                  <input value={editFormData.rating} onChange={(e) => setEditFormData({ ...editFormData, rating: e.target.value })} className="border p-2 w-full mb-2" placeholder="Rating" />
                  <input value={editFormData.reviewCount} onChange={(e) => setEditFormData({ ...editFormData, reviewCount: e.target.value })} className="border p-2 w-full mb-2" placeholder="Reviews" />
                  <input value={editFormData.tags} onChange={(e) => setEditFormData({ ...editFormData, tags: e.target.value })} className="border p-2 w-full mb-2" placeholder="Tags" />
                  <textarea value={editFormData.description} onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })} className="border p-2 w-full mb-2" placeholder="Description" />
                  <div className="space-y-4">
                    {['mainImage', 'sideImage1', 'sideImage2'].map((fieldName) => (
                      <div key={fieldName} className="mb-6">
                        <label className="text-sm font-medium block mb-2">
                          {fieldName === 'mainImage' ? 'Main Image' : 
                           fieldName === 'sideImage1' ? 'Side Image 1' : 'Side Image 2'}
                        </label>
                        <div className="space-y-3">
                          {/* File Input */}
                          <div className="flex items-center gap-4">
                            <input
                              type="file"
                              name={fieldName}
                              accept="image/*"
                              onChange={handleImageChange}
                              className="flex-1 border p-2 rounded"
                            />
                          </div>

                          {/* Upload Progress */}
                          {uploadProgress[fieldName] !== null && uploadProgress[fieldName] !== undefined && (
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress[fieldName]}%` }}
                              ></div>
                              <p className="text-sm text-gray-600 mt-1">
                                Uploading... {uploadProgress[fieldName]}%
                              </p>
                            </div>
                          )}

                          {/* Image Preview */}
                          {(previewImages[fieldName] || editFormData[fieldName]) && (
                            <div className="relative group inline-block">
                              <img
                                src={previewImages[fieldName] || editFormData[fieldName]}
                                alt={`Preview ${fieldName}`}
                                className="w-32 h-32 object-cover rounded border"
                              />
                              <button
                                onClick={() => {
                                  setEditFormData(prev => ({ ...prev, [fieldName]: '' }));
                                  setPreviewImages(prev => ({ ...prev, [fieldName]: null }));
                                }}
                                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Remove image"
                              >
                                ✕
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>



                  {/* Facilities */}
                  <div>
                    <label className="font-semibold">Facilities</label>
                    {editFormData.facilities.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center mb-2">
                        <input
                          value={item}
                          onChange={(e) => handleListChange('facilities', index, e.target.value)}
                          className="w-full border p-2"
                        />
                        <button type="button" onClick={() => removeListItem('facilities', index)} className="text-red-500">✕</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addListItem('facilities')} className="text-blue-500 text-sm">+ Add Facility</button>
                  </div>

                  {/* Sonder Standard */}
                  <div className="mt-4">
                    <label className="font-semibold">Sonder Standards</label>
                    {editFormData.sonderStandard.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center mb-2">
                        <input
                          value={item}
                          onChange={(e) => handleListChange('sonderStandard', index, e.target.value)}
                          className="w-full border p-2"
                        />
                        <button type="button" onClick={() => removeListItem('sonderStandard', index)} className="text-red-500">✕</button>
                      </div>
                    ))} 
                    <button type="button" onClick={() => addListItem('sonderStandard')} className="text-blue-500 text-sm">+ Add Standard</button>
                  </div>

                  <div className="flex gap-4 mt-4 text-[14px] md:text-[16px]">
                    <button onClick={() => handleUpdate(project._id)} className="bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded">Save</button>
                    <button onClick={() => setEditingProject(null)} className="bg-gray-400 text-white px-2 md:px-4 py-1 md:py-2 rounded">Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-sm md:text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-500">{project.location}</p>
                  <img src={project.mainImage} alt={project.title} className="w-40 mt-2 rounded" />
                  <p className="mt-2">{project.description}</p>
                  <p className="text-sm text-gray-600 mt-1">⭐ {project.rating} | {project.reviews} reviews</p>
                  <p className="text-sm mt-1">Tags: {project.tags}</p>
                  <p className="text-sm mt-1">Facilities: {project.facilities?.join(', ')}</p>
                  <p className="text-sm mt-1">Sonder Standard: {project.sonderStandard?.join(', ')}</p>

                  <div className="flex gap-4 mt-4 text-[14px] md:text-[16px] ">
                    <button onClick={() => handleEdit(project._id)} className="px-2 md:px-4 py-1 md:py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded">Edit</button>
                    <button onClick={() => handleDelete(project._id)} className="px-2 md:px-4 py-1 md:py-2 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
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
