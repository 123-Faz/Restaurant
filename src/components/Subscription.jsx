import { useEffect } from 'react'
import { client } from '../components/export'
import { useDarkMode } from '../components/DarkModeContext'
import { FaStar } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Subscription = () => {
  useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, []);
    
      const { darkMode, toggleDarkMode } = useDarkMode();


  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-gray-100'}`}>
      <section id='testimonials' className={`${darkMode ? 'dark text-white': ' light text-black '} lg:w-[95%] w-full h-fit m-auto bg-cover bg-center flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20 `}>

      <div className='flex flex-col justify-center items-start gap-4 '>
          <h1 data-aos='zoom-in' className={`${darkMode ? 'dark text-yellow-400': ' light  text-black'} `}>OUR CLIENTS</h1>
          <h1 data-aos='zoom-in' className={`${darkMode ? 'dark text-white': ' light text-black '} text-[40px] font-semibold leading-10`}>What our Clients <br /> Saying about us </h1>
          <div id='client-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full '> {
            client.map((item, index)=>(
              <div data-aos='zoom-in' data-aos-delay='200' key={index} className={`${darkMode ? 'dark bg-gray-900' : 'light bg-white'} hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full`}>
                <div className="flex justify-start items-center w-full gap-4 ">
                  <img src={item.image}  alt="img"  className='w-[70px] transform hover:scale-110 transition-transform duation-300  '/>
                  <div className='flex flex-col justify-center items-start gap-1 '>
                    <h1 className={`${darkMode ? 'dark text-white': ' light text-black '} text-xl font-semibold  `}>{item.name}</h1>
                    <h1 className={`${darkMode ? 'dark text-white': ' light text-slate-600 '} `}>{item.text}</h1>
                  </div>
                </div>
                <p className={`${darkMode ? 'dark text-white': ' light text-slate-600 '} text-md text-justify`}>{item.feedback}</p>
                <div className='flex justify-start items-start gap-2 w-full '><FaStar className='size-4 text-yellow-400'></FaStar>
                <FaStar className='size-4 text-yellow-400'></FaStar>
                <FaStar className='size-4 text-yellow-400'></FaStar>
                <FaStar className='size-4 text-yellow-400'></FaStar>
                <FaStar className='size-4 text-yellow-400'></FaStar> 
                </div>
                
              </div>
            ))
            }
            </div>
        </div>
       
      </section>
    </div>
  )
}

export default Subscription 