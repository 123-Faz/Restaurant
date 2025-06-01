import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useDarkMode } from '../components/DarkModeContext';
import aboutimg from '../assets/images/about.jpg'
import { FaStore, FaUtensils, FaUsers, FaGlobeAmericas } from 'react-icons/fa';

const SpecialFood = () => {
   useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
    }, []);
    
  const { darkMode } = useDarkMode();

  const stats = [
    {
      icon: <FaStore className="text-3xl sm:text-4xl" />,
      value: "123",
      label: "Outlets",
      aosDelay: "0"
    },
    {
      icon: <FaUsers className="text-3xl sm:text-4xl" />,
      value: "100",
      label: "Chefs",
      aosDelay: "100"
    },
    {
      icon: <FaUtensils className="text-3xl sm:text-4xl" />,
      value: "300",
      label: "Menus",
      aosDelay: "200"
    },
    {
      icon: <FaGlobeAmericas className="text-3xl sm:text-4xl" />,
      value: "30",
      label: "Countries",
      aosDelay: "300"
    }
  ];

  return (
    <section 
      id="about" 
      className={`${darkMode ? 'bg-black' : 'bg-white'} w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`${darkMode ? 'text-yellow-400' : 'text-black'} text-center text-3xl sm:text-4xl font-bold mb-12 md:mb-16`}
          data-aos="fade-down"
        >
          Our Special Foods
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div 
            className="flex justify-center" 
            data-aos="fade-right"
          >
            <img 
              src={aboutimg} 
              alt="About our special foods" 
              className="rounded-xl w-full max-w-[500px] h-auto object-cover shadow-xl"
            />
          </div>
          
          <div 
            className="flex flex-col gap-6 sm:gap-8"
            data-aos="fade-left"
          >
            <div>
              <h3 
                className={`${darkMode ? 'text-yellow-400' : 'text-orange-600'} text-xl sm:text-2xl font-semibold mb-2`}
              >
                A Little Information for Our Guests
              </h3>
              <h2 
                className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4`}
              >
                Experience culinary excellence with our authentic flavors
              </h2>
              <p 
                className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-base sm:text-lg`}
              >
                Our chefs combine traditional recipes with modern techniques to create unforgettable dining experiences. Using only the freshest ingredients, we bring you flavors that tell a story.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4"
                  data-aos="fade-up"
                  data-aos-delay={stat.aosDelay}
                >
                  <div className={`${darkMode ? 'text-yellow-400' : 'text-orange-600'} p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-orange-50'}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className={`${darkMode ? 'text-white' : 'text-black'} text-2xl sm:text-3xl font-bold`}>
                      {stat.value}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base uppercase font-medium`}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialFood