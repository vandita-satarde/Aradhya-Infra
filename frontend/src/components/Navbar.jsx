import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/icons/Ardhya-logo.jpeg'
import contact from '../assets/icons/Vector.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react'

function Navbar({className = ''}) {
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
    { name: 'OUR STORY', path: '/story' },
    { name: 'OUR PROJECTS', path: '/projects' },
  ];

  return (
    <div className={ `w-full relative ${className}` } >
      <div className='w-full h-[100px] md:h-[130px] border-b border-[rgba(255, 255, 255, 0.75)] flex justify-evenly items-center text-gray-200 '>
        <div className="flex justify-between px-10 md:px-25 w-full items-center ">
          <Link to="/">
            <img src={logo} className=' h-[75px] md:h-[104px] w-[75px] md:w-[104px] rounded-[50%] m-3 ' />
          </Link>
            <div className=' hidden md:flex md:gap-23 text-[15px] text-[rgba(255, 255, 255, 0.75)] '>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                      isActive(link.path) ? 'text-white font-semibold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
            </div>
            <Link 
              to="/contact"
              className=' hidden md:flex justify-center items-center gap-4 bg-[#F3ECDC] text-black text-[15px] w-[240px] h-[60px] rounded-[30px] hover:bg-[#e8dcc5] transition-colors duration-200 '
            >
              <img src={contact} className='h-[29px] w-[29px] '/> CONTACT US
            </Link>

            <div className='md:hidden text-[rgba(255,255,255,0.85)] text-xl cursor-pointer'>
              {menuOpen ? (
                <FaTimes onClick={() => setMenuOpen(false)} />
              ) : (
                <FaBars onClick={() => setMenuOpen(true)} />
              )
              }
            </div>  
        </div> 
        
      </div>
       {menuOpen && (
        <div className='absolute bg-[rgba(0,0,0,0.90)] backdrop-blur-sm w-full px-5 py-3 text-[14px] z-50'>
            <div className="flex flex-col mt-4 gap-4 text-center text-[rgba(255,255,255,0.75)] md:hidden">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                  isActive(link.path) ? 'text-white font-semibold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
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
  )
}

export default Navbar
