import { useState } from 'react';
import './App.css';
import AboutUsHeader from './components/common/AboutUs/AboutUsHeader';
import OurMission from './components/common/AboutUs/OurMession';
import TestimonialSlider from './components/common/AboutUs/TestimonialSlider';
import OurLocations from './components/common/AboutUs/OurLocations';
import Footer from './components/common/Footer/Footer';


function App() {
  return (
    <>
      
      <AboutUsHeader/>
      <OurMission/>
      <TestimonialSlider/>
      <OurLocations/>
      <Footer/>
    </>
  );
}

export default App;
