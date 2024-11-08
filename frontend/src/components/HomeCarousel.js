// src/components/HomeCarousel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import shopImage from 'file:///D:/speedhunter/fathisfashion/frontend/public/WhatsApp%20Image%202024-11-07%20at%2013.45.23_681c26a9.jpg';
import shopImage2 from 'file:///D:/speedhunter/fathisfashion/frontend/public/WhatsApp%20Image%202024-11-07%20at%2013.45.38_49bf962b.jpg';
import shopImage3 from 'file:///D:/speedhunter/fathisfashion/frontend/public/WhatsApp%20Image%202024-11-07%20at%2013.45.47_22505324.jpg';
import shopImage4 from 'file:///D:/speedhunter/fathisfashion/frontend/public/WhatsApp%20Image%202024-11-07%20at%2013.45.31_716f938d.jpg';

const HomeCarousel = () => {
  return (
    <Carousel pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage}
          alt="First slide"
          style={{
            width: '160px',
            height: 'auto',
            margin: '0 auto',
            objectFit: 'cover',
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage2}
          alt="Second slide"
          style={{
            width: '160px',
            height: 'auto',
            margin: '0 auto',
            objectFit: 'cover',
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage3}
          alt="Third slide"
          style={{
            width: '160px',
            height: 'auto',
            margin: '0 auto',
            objectFit: 'cover',
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shopImage4}
          alt="Fourth slide"
          style={{
            width: '160px',
            height: 'auto',
            margin: '0 auto',
            objectFit: 'cover',
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
