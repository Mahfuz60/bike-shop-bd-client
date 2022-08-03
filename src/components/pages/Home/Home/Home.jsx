import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <AboutUs />
    </div>
  );
};

export default Home;
