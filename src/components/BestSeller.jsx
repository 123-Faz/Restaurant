import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-carousel-fixes.css"; // Our custom fixes file
import image1 from '../assets/images/leg.jpg';
import image2 from '../assets/images/mix.jpg';
import image3 from '../assets/images/murgi.jpg';
import image4 from '../assets/images/pulao.jpg';
import image5 from '../assets/images/ras.jpg';
import image6 from '../assets/images/biryani.png';
import { useDarkMode } from '../components/DarkModeContext';
import { FaStar } from 'react-icons/fa';

const BestSeller = () => {
  const { darkMode } = useDarkMode();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  const dishes = [
    { 
      id: 1, 
      src: image1, 
      alt: "Leg Piece", 
      price: "$12.99",
      rating: 4.8
    },
    { 
      id: 2, 
      src: image2, 
      alt: "Mix Dishes", 
      price: "$15.99",
      rating: 4.5
    },
    { 
      id: 3, 
      src: image3, 
      alt: "Chicken Karahi", 
      price: "$14.50",
      rating: 4.9
    },
    { 
      id: 4, 
      src: image4, 
      alt: "Pulao", 
      price: "$10.99",
      rating: 4.7
    },
    { 
      id: 5, 
      src: image5, 
      alt: "Murgi Karhai", 
      price: "$16.99",
      rating: 4.6
    },
    { 
      id: 6, 
      src: image6, 
      alt: "Biryani", 
      price: "$13.99",
      rating: 5.0
    }
  ];

  const CustomDot = ({ onClick, active }) => (
    <button
      onClick={onClick}
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        margin: '0 8px',
        padding: 0,
        border: 'none',
        cursor: 'pointer',
        backgroundColor: active 
          ? (darkMode ? '#A78BFA' : '#4F46E5')
          : (darkMode ? 'rgba(167, 139, 250, 0.5)' : 'rgba(79, 70, 229, 0.5)'),
        transform: active ? 'scale(1.3)' : 'scale(1)',
        transition: 'all 0.3s ease'
      }}
    />
  );

  return (
    <section 
      id="services"
      className={`py-16 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Best Sellers
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Discover our most popular dishes loved by customers worldwide
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Slider 
            {...settings}
            appendDots={dots => (
              <div style={{ bottom: '-50px' }}>
                <ul style={{ margin: '0', padding: '0', display: 'flex', justifyContent: 'center' }}>
                  {dots}
                </ul>
              </div>
            )}
            customPaging={i => <CustomDot active={false} />}
          >
            {dishes.map((dish) => (
              <div key={dish.id} className="px-3 focus:outline-none">
                <div className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
                  <div className="relative">
                    <img 
                      src={dish.src} 
                      alt={dish.alt}
                      className="w-full h-64 md:h-72 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full flex items-center">
                      <FaStar className="mr-1" />
                      <span className="text-sm font-bold">{dish.rating}</span>
                    </div>
                  </div>
                  <div className={`p-5 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    <h3 className="font-bold text-xl capitalize mb-2">{dish.alt}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-yellow-600">{dish.price}</span>
                      <button className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-yellow-600 hover:bg-yellow-700 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'}`}>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;