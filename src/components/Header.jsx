import logo from '../assets/sky_logo.png';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value based on when you want the blur to start
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDashboard = location.pathname === '/';
  const textColor = isDashboard ? 'text-white' : 'text-black';
  const bgColor = isBlurred ? 'backdrop-blur bg-white/50' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 font-luxjost flex z-20 w-full transition-all duration-300 ${bgColor} ${textColor}`}>
      <img src={logo} alt="Logo" className="h-[80px] ml-4" />
      <ul className="flex space-x-9 items-center px-20 ml-auto font-medium">
        <li><Link className={`hover:text-orange-500 ${textColor}`} to="/home">Home</Link></li>
        <li><Link className={`hover:text-orange-500 ${textColor}`} to="/hotelRooms">Hotel Rooms</Link></li>
        <li><Link className={`hover:text-orange-500 ${textColor}`} to="/aboutUs">About Us</Link></li>
        <li><Link className={`hover:text-orange-500 ${textColor}`} to="/contactUs">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
