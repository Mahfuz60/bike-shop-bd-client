import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />

      <Products />
      <AboutUs />
    </div>
  );
};

export default Home;
