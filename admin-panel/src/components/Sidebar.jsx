import React from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name"); // clear stored name
    navigate("/"); // redirect to login page
  };


  return (
    <div className="w-64 h-screen bg-[#048886] text-[#F9F9F9] flex flex-col p-6 fixed">
      <h1 className="text-[25px] font-bold mb-10 border-b border-teal-800 pb-6">Admin Panel</h1>
      <NavLink to="/dashboard" className="mb-4 hover:text-teal-200">Dashboard</NavLink>
      <NavLink to="/ourprojects" className="mb-4 hover:text-teal-200">Our Projects</NavLink>
      <NavLink to="/contactus" className="mb-4 hover:text-teal-200">Contact Submissions</NavLink>
      <NavLink to="/Enquiry" className="mb-4 hover:text-teal-200">Enquiry</NavLink>
      <button onClick={handleLogout} className="p-2 mt-auto text-center rounded-sm text-[#048886] bg-[#F9F9F9] ">Logout</button>
    </div>
  );
};

export default Sidebar;
