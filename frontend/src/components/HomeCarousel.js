// src/components/HomeCarousel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import shopImage from 'file:///E:/fathisfashion/frontend/public/WhatsApp%20Image%202023-10-02%20at%2012.41.09.jpeg';
import shopImage2 from 'file:///E:/fathisfashion/frontend/public/WhatsApp%20Image%202023-10-02%20at%2012.41.08.jpeg';
import shopImage3 from 'file:///E:/fathisfashion/frontend/public/8cdbb629-ac80-495e-8b27-b015b6961fe1.jpeg';
import shopImage4 from 'file:///E:/fathisfashion/frontend/public/2857ef34-50dd-4599-a379-14f2d9c15980.jpeg';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HomeCarousel = () => {

    const imageStyle = {
        maxHeight: '300px', // Adjust the maximum height as needed
        width: 'auto',
      };
  return (
    <Carousel pause='hover'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage} // Replace with your image URL
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage2} // Replace with your image URL
          alt="Second slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage3} // Replace with your image URL
          alt="Third slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage4} // Replace with your image URL
          alt="fourth slide"
          
        />
      </Carousel.Item>
     
    </Carousel>
  );
};

export default HomeCarousel;
