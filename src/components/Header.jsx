// import logo from '../assets/sky_logo.png';
// import React, { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';

// const Header = () => {
//   const [isBlurred, setIsBlurred] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) { // Adjust this value based on when you want the blur to start
//         setIsBlurred(true);
//       } else {
//         setIsBlurred(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isDashboard = location.pathname === '/';
//   const textColor = isDashboard ? 'text-white' : 'text-black';
//   const bgColor = isBlurred ? 'backdrop-blur bg-white/50' : 'bg-transparent';

//   return (
//     <nav className={`fixed md:top-0 md:left-0 font-luxjost flex z-20 w-full transition-all duration-300 ${bgColor} ${textColor}`}>
//       <Link to="/"><img src={logo} alt="Logo" className="h-[80px] ml-4" /></Link>
//       <ul className="flex space-x-9 items-center px-20 ml-auto font-medium">
//         <li><Link className={`hover:text-orange-500 ${textColor}`} to="/">Home</Link></li>
//         <li><Link className={`hover:text-orange-500 ${textColor}`} to="/hotelRooms">Hotel Rooms</Link></li>
//         <li><Link className={`hover:text-orange-500 ${textColor}`} to="/aboutUs">About Us</Link></li>
//         <li><Link className={`hover:text-orange-500 ${textColor}`} to="/contactUs">Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;

import logo from '../assets/sky_logo.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ textColour }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // Adjust this value based on when you want the blur to start
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
    <nav className={`fixed pt-5 justify-center font-luxjost md:flex top-0 p-4 z-20 w-full transition-all duration-300 ${isBlurred ? 'backdrop-blur bg-orange-100/50 text-orange' : 'bg-transparent text-white '}`}>
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" className="text-2xl text-orange-600 font-bold">
          Sky-Swift <span className="block text-2xl text-orange-600">Apartments</span>
        </Link>
        <button
          className="md:hidden text-orange-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}></path>
          </svg>
        </button>
      </div>
      <ul className={`md:flex font-fredoka md:ml-[700px] md:space-x-10  text-lg font-medium mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <li><a className={`hover:text-orange-500 ${textColor}`} href="https://sky-swift.com/">Home</a></li>
        {/* <li><Link className={`hover:text-orange-500 ${textColor}`} to="/hotelRooms">Hotel Rooms</Link></li> */}
        <li><a className={`hover:text-orange-500 ${textColor}`} href="https://sky-swift.com/about-us/">About Us</a></li>
        <li><a className={`hover:text-orange-500 ${textColor}`} href="https://sky-swift.com/contact/">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
