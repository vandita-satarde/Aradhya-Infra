import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/icons/ardhya-logo.jpeg';
import contact from '../assets/icons/Vector.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    },
  ];

  return (
    <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${navbarBg ? 'bg-white' : 'bg-transparent'} ${className}`}>
      {/* Top Navbar */}
      <div className='w-full h-[60px] md:h-[74px] lg:h-[70px] flex justify-evenly items-center text-black '>
        <div className="flex justify-between px-10 md:px-11 lg:px-24 w-full items-center">
          <Link to="/">
            <img src={logo} className='h-[55px] md:h-[58px] lg:h-[60px] w-[55px] md:w-[58px] lg:w-[60px] m-3' alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex md:gap-7 lg:gap-20 text-[15px] md:text-[14px] lg:text-[16px] text-[rgba(255, 255, 255, 0.75)] relative'>
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <Link
                  to={link.path}
                  className={`cursor-pointer hover:text-black transition-colors duration-200 ${
                    isActive(link.path) ? 'text-black font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-44 md:w-48 lg:w-56 bg-[#F3ECDC] text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block px-4 py-2 md:px-5 md:py-2.5 hover:bg-[#f8f4ec] hover:rounded text-sm md:text-base"
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
            className='hidden md:flex justify-center items-center gap-3 md:gap-3 shadow-md bg-[#F3ECDC] text-[#050810] text-[15px] md:text-[14px] lg:text-[16px] w-[150px] md:w-[150px] lg:w-[200px] h-[36px] md:h-[40px] lg:h-[45px] rounded-[30px] hover:bg-[#e8dcc5] transition-colors duration-200'
          >
            <img src={contact} className='h-[22px] w-[22px] md:h-[23px] md:w-[23px] lg:h-[29px] lg:w-[29px]' alt="Contact" /> CONTACT US
          </Link>

          {/* Mobile Hamburger */}
          <div className='md:hidden text-gray-700 text-xl cursor-pointer'>
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
        <div className='absolute bg-[rgba(255,255,255,0.90)] backdrop-blur-sm w-full px-5 py-3 text-[14px] z-50'>
          <div className="flex flex-col mt-4 gap-4 text-center text-[rgba(0,0,0,0.75)] md:hidden">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer hover:text-black transition-colors duration-200 ${
                    isActive(link.path) ? 'text-black font-semibold' : ''
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
                        className="text-[13px] text-gray-600 hover:text-black"
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
              className="flex justify-center text-[12px] items-center gap-2 bg-[#bdb8ad] text-black shadow-md text-sm w-[130px] md:w-full h-[40px] rounded-full mx-auto mt-2 hover:bg-[#e8dcc5] transition-colors duration-200"
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
