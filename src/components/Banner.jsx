import React, { useState, useEffect } from 'react';
import banner from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';


export default function OpeningScreen() {
  const images = [
    banner,
    banner2,
    banner3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000); // Slide to the nex1t image every minute

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="flex font-luxjost justify-center items-center relative h-50">
      <div></div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className="w-full object-cover h-[450px]" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        {/* <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold text-orange-300 tracking-wider">FIND A HOME IN THE SKYS</h1> */}
      </div>
    </div>
  );
}
