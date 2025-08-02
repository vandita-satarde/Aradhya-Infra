import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // icon for menu toggle

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-5 flex justify-between items-center bg-[#048886] text-white fixed w-full z-50 border-b border-teal-700">
        <h1 className="text-[17px] font-bold">Admin Panel</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <X size={22} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#048886] text-[#F9F9F9] flex-col p-6 transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex`}>
        <h1 className="text-[25px] font-bold mb-10 border-b border-teal-800 pb-6 hidden md:block">Admin Panel</h1>
        <NavLink to="/dashboard" className="mb-4 hover:text-teal-200 block text-[14px] md:text-[16px] pt-15 md:pt-0 ">Dashboard</NavLink>
        <NavLink to="/ourprojects" className="mb-4 hover:text-teal-200 block text-[14px] md:text-[16px]">Add Property</NavLink>
        <NavLink to="/contactus" className="mb-4 hover:text-teal-200 block text-[14px] md:text-[16px]">Contact Submissions</NavLink>
        <NavLink to="/Enquiry" className="mb-4 hover:text-teal-200 block text-[14px] md:text-[16px]">Enquiries</NavLink>
        <button onClick={handleLogout} className="p-1 md:p-2 mt-85 md:mt-auto text-center rounded-sm text-[#048886] bg-[#F9F9F9] w-full text-[14px] md:text-[16px]">Logout</button>
      </div>
    </>
  );
};

export default Sidebar;
