import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/icons/ardhya-logo.jpeg';
import contact from '../assets/icons/Vector.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    {
      name: 'OUR STORY',
      path: '/story',
      dropdown: [
        { name: 'Our Services', path: '/services' },
      ],
    },
    {
      name: 'OUR PROJECTS',
      path: '/projects',
      dropdown: [
        { name: 'Project Details', path: '/project-details' },
      ],
    },
  ];

  return (
    <div className={`w-full relative ${className}`}>
      {/* Top Navbar */}
      <div className='w-full h-[100px] md:h-[130px] border-b border-[rgba(255, 255, 255, 0.75)] flex justify-evenly items-center text-gray-200 '>
        <div className="flex justify-between px-10 md:px-25 w-full items-center">
          <Link to="/">
            <img src={logo} className='h-[75px] md:h-[104px] w-[75px] md:w-[104px] rounded-[50%] m-3' alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex md:gap-25 text-[15px] text-[rgba(255, 255, 255, 0.75)] relative'>
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <Link
                  to={link.path}
                  className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                    isActive(link.path) ? 'text-white font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us button (desktop) */}
          <Link
            to="/contact"
            className='hidden md:flex justify-center items-center gap-4 bg-[#F3ECDC] text-black text-[15px] w-[240px] h-[60px] rounded-[30px] hover:bg-[#e8dcc5] transition-colors duration-200'
          >
            <img src={contact} className='h-[29px] w-[29px]' alt="Contact" /> CONTACT US
          </Link>

          {/* Mobile Hamburger */}
          <div className='md:hidden text-[rgba(255,255,255,0.85)] text-xl cursor-pointer'>
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='absolute bg-[rgba(0,0,0,0.90)] backdrop-blur-sm w-full px-5 py-3 text-[14px] z-50'>
          <div className="flex flex-col mt-4 gap-4 text-center text-[rgba(255,255,255,0.75)] md:hidden">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                    isActive(link.path) ? 'text-white font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col gap-1 mt-2">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-[13px] text-gray-400 hover:text-white"
                      >
                        ↳ {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex justify-center text-[12px] items-center gap-2 bg-[#F3ECDC] text-black text-sm w-full h-[40px] rounded-full mx-auto mt-2 hover:bg-[#e8dcc5] transition-colors duration-200"
            >
              <img src={contact} className="h-[18px] w-[18px]" alt="contact" />
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
