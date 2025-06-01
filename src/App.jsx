import React from 'react'
import Footer from './components/Footer'
import { DarkModeProvider } from './components/DarkModeContext'
import BestSeller from './components/BestSeller';
import Header from './components/Header';
import SpecialFood from './components/SpecialFood';
import Contact from './components/Contact';
import Subscription from './components/Subscription';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <DarkModeProvider>
        <Header></Header>
        <Home></Home>
        <SpecialFood></SpecialFood>
        <BestSeller></BestSeller>
        <Subscription></Subscription>
        <Contact></Contact>
        <Footer></Footer>
      </DarkModeProvider>
    </div>
  )
}

export default App