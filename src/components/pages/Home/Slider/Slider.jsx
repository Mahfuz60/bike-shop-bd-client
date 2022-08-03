import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100 h-40'
          src='https://images.pexels.com/photos/163414/motorcycles-race-helmets-pilots-163414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className='d-block w-100  h-40'
          src='https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100  h-40'
          src='https://images.pexels.com/photos/5803464/pexels-photo-5803464.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100  h-40'
          src='https://images.pexels.com/photos/926/person-motor-racing-motorbike-motorcycle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100  h-40 '
          src='https://images.pexels.com/photos/2611684/pexels-photo-2611684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100  h-40'
          src='https://images.pexels.com/photos/1005263/pexels-photo-1005263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Third slide'
        />
      </Carousel.Item>
     
      <Carousel.Item>
        <img
          className='d-block w-100  h-40'
          src='https://images.pexels.com/photos/9182753/pexels-photo-9182753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
