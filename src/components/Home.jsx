import React, { useState, useEffect } from 'react';
import img from '../assets/images/f3.png';
import qormo from '../assets/qormo.jpg';
import biyani from '../assets/images/f2.jpg';
import { useDarkMode } from './DarkModeContext';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-scroll';

const BestSeller = () => {
  const { darkMode, toogleDarkMode } = useDarkMode();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <section 
      id='home' 
      className={`${darkMode ? 'bg-black' : 'bg-white'} grid grid-cols-1 lg:grid-cols-2 gap-8 w-full py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12`}
    >
      <div className='flex flex-col justify-center order-2 lg:order-1'>
        <div className={`${darkMode ? 'text-white' : 'text-black'} text-3xl sm:text-4xl md:text-5xl font-medium leading-tight`}>
          The taste of tradition, <br /> with a modern twist 
        </div>
        <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-6 text-base sm:text-lg md:text-xl text-justify`}>
          Delicious food restaurants offer a memorable dining experience with flavorful dishes crafted from fresh, high-quality ingredients. From cozy local eateries to upscale gourmet spots, they cater to a variety of tastes and cuisines, leaving guests craving for more.
        </div>
        <Link
          to="services" 
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className='mt-8 w-fit'
        >
          <button className={`${darkMode ? 'text-white' : 'text-black'} text-sm sm:text-[15px] uppercase font-semibold cursor-pointer p-3 rounded-lg bg-yellow-400 hover:bg-yellow-600 hover:text-white transition-all duration-300`}>
            Get Started
          </button>
        </Link>
      </div>
      
      <div className='flex items-center justify-center order-1 lg:order-2'>
        <img
          src={darkMode ? img : biyani}
          alt={darkMode ? "Dark mode content" : "Light mode content"}
          data-aos="fade-in"
          className="h-auto w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
          onError={(e) => {
            console.error('Failed to load image:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
      </div>
    </section>
  );
}

export default BestSeller;