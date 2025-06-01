import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure this path is correct
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Initialize AOS only once
    if (typeof window !== 'undefined') {
      AOS.init({
        once: true, // Animations only happen once
        offset: 100,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
      
      // Refresh AOS when components mount
      AOS.refresh();
    }

    // Clean up AOS when component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        AOS.refreshHard(); // Reset AOS animations
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "info@restaurant.com",
      link: "mailto:info@restaurant.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Address",
      value: "123 Food Street, Culinary City",
      link: "https://maps.google.com"
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Hours",
      value: "Mon-Sun: 10AM - 10PM"
    }
  ];

  return (
    <section 
      id="contact"
      className={`${darkMode ? 'bg-black' : 'bg-gray-50'} py-16 lg:py-20`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            data-aos="fade-down"
          >
            Get In Touch
          </h2>
          <p 
            className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            We'd love to hear from you! Reach out for reservations, questions, or feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Form */}
          <div 
            className={`rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            data-aos="fade-right"
          >
            <div className="p-8 sm:p-10">
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name='name'
                    id='name'
                    placeholder="Your Name" 
                    className={`w-full px-5 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name='email'
                    id='mail'
                    placeholder="Your Email" 
                    className={`w-full px-5 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name='telephone'
                    id='phone'
                    placeholder="Phone Number" 
                    className={`w-full px-5 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                  />
                </div>
                <div>
                  <textarea 
                    rows="5" 
                    placeholder="Your Message" 
                    name='comments'
                    id='feedback'
                    className={`w-full px-5 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`px-6 py-3 rounded-lg font-semibold ${darkMode ? 'bg-yellow-600 hover:bg-yellow-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div 
            className="space-y-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Contact Information
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We're here to help and answer any questions you might have. We look forward to hearing from you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-red-100 text-red-600'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className={`${darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-red-600'} transition duration-300`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button 
                className={`px-6 py-3 rounded-lg font-semibold ${darkMode ? 'bg-yellow-600 hover:bg-yellow-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
              >
                View Location on Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;