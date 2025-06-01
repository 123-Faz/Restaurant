import React from 'react';
import { useDarkMode } from './DarkModeContext';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer
        className={`${
          darkMode ? 'dark bg-black' : 'light bg-gray-800'
        } w-full m-auto px-5 sm:px-10 lg:px-20 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {/* About Us */}
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-2xl font-semibold text-white'>About us</h1>
          <p className='text-slate-200 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore
            facilis rerum, tempora porro id iusto cupiditate assumenda ipsam
            deleniti.
          </p>
        </div>

        {/* Social Icons and Copyright */}
        <div className='flex flex-col justify-between'>
          <div className='flex flex-wrap gap-4 mt-4'>
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <div
                key={index}
                className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'
              >
                <Icon className='size-5' />
              </div>
            ))}
          </div>
          <h1 className='text-white mt-10 font-bold'>
            © Real Estate, <br /> All Rights Reserved
          </h1>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className='text-white text-2xl font-semibold'>Contact us</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8'>
            <div className='flex items-center gap-3'>
              <FaBuilding className='size-5 text-white' />
              <p className='text-slate-200'>Address</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaMobile className='size-5 text-white' />
              <p className='text-slate-200'>121-123 758</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaFax className='size-5 text-white' />
              <p className='text-slate-200'>897420579248</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoMdMail className='size-5 text-white' />
              <p className='text-slate-200'>you@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Dark Mode Toggle Button */}
      <div>
        <button
          onClick={toggleDarkMode}
          className='flex items-center justify-center p-4 rounded-full bg-orange-500 hover:bg-orange-600 fixed top-5 right-5 z-50 hover:scale-110 transition-all duration-300'
        >
          {darkMode ? (
            <FaMoon size={25} className='text-white' />
          ) : (
            <FaSun size={25} className='text-white' />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
