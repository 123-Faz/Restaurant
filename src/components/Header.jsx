import { useState } from 'react';
import logo from '../assets/logo.png'; 
import { useDarkMode } from './DarkModeContext';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Header = () => {
  const nav = [
    {
      path: 'home',
      link: 'Home'
    },
    {
      path: 'about',
      link: 'About'
    },
    {
      path: 'services',
      link: 'Services'
    },
    {
      path: 'testimonials',
      link: 'Testimonials'
    },
    {
      path: 'contact',
      link: 'Contact'
    },
  ];

  const { darkMode, toogleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      id="home"
      className={`${darkMode ? 'dark bg-black' : 'light bg-white'} 
        flex justify-between items-center 
        px-4 sm:px-6 md:px-8 lg:px-10 
        py-3 sticky top-0 z-50
        shadow-md`}
    >
      {/* Logo/Brand Section */}
      <div className="flex items-center">
        <span className={`${darkMode ? 'text-white' : 'text-black'} 
          text-2xl sm:text-3xl md:text-4xl font-medium`}>
          <span className="text-yellow-500">R</span>estaurant
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <ul className="flex items-center gap-4 xl:gap-6">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`${darkMode ? 'text-white' : 'text-black'} 
                  text-sm xl:text-[15px] uppercase font-medium 
                  px-3 py-2 rounded-lg 
                  hover:bg-yellow-500 hover:text-white 
                  transition-all duration-300`}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        
        <button 
          className={`${darkMode ? 'text-white' : 'text-black'} 
            text-sm xl:text-[15px] uppercase font-semibold 
            px-4 py-2 rounded-lg 
            bg-yellow-400 hover:bg-yellow-600 hover:text-white 
            transition-all duration-300`}
        >
          Signup
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={`${darkMode ? 'text-white' : 'text-black'} 
          text-2xl lg:hidden p-2`}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
          lg:hidden fixed top-16 right-0 w-full max-w-xs h-[calc(100vh-4rem)]
          ${darkMode ? 'bg-gray-900' : 'bg-white'}
          shadow-xl
          transition-transform duration-300 ease-in-out 
          z-40`}
      >
        <div className="flex flex-col p-4 h-full">
          <ul className="flex flex-col gap-1">
            {nav.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${darkMode ? 'text-white' : 'text-black'} 
                    text-base uppercase font-medium
                    px-4 py-3 rounded-lg 
                    ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
                    transition-all duration-200
                    flex items-center`}
                  onClick={closeMenu}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-4 border-t border-gray-200">
            <button 
              className={`w-full 
                ${darkMode ? 'text-white' : 'text-black'} 
                text-base uppercase font-semibold 
                px-4 py-3 rounded-lg 
                bg-yellow-400 hover:bg-yellow-600 hover:text-white 
                transition-all duration-300`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;