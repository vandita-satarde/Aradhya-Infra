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
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
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
      sonderStandard: project.sonderStandard || ['']
    });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/projects/${id}`, editFormData);
      const updated = projects.map(p => p._id === id ? res.data : p);
      setProjects(updated);
      setEditingProject(null);
      alert("Project updated successfully!");
    } catch (err) {
      console.error("Error updating project", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
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

                  <div className="flex gap-4 mt-4">
                    <button onClick={() => handleUpdate(project._id)} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                    <button onClick={() => setEditingProject(null)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-sm md:text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-500">{project.location}</p>
                  <img src={`http://localhost:5000/uploads/${project.mainImage}`} alt={project.title} className="w-40 mt-2 rounded" />
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
