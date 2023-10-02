// src/components/AboutUs.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import shopImage from 'file:///E:/fathisfashion/frontend/shop.jpg';
//import '../index.css'// Import your custom CSS file for styling

const AboutUs = () => { 
  return (
    <div className="about-us" style={{  color: '#333'}}>
      <div className="about-us-overlay"></div>
      <Container>
        <h1 className="text-center">Welcome to Sahara Buildware!</h1>
        <p className="intro-text text-center">
          We are your one-stop destination for all your building and construction needs.
        </p>
        <p>
          Our extensive range of products includes:
        </p>
        <ul className="product-list">
          <li>Steels</li>
          <li>Cement</li>
          <li>Plywood</li>
          <li>Roofing Sheets</li>
          <li>Paints</li>
          <li>Fancy Lights</li>
          <li>Hardwares</li>
          <li>Sanitary Wares</li>
          <li>Kitchenware</li>
          <li>Electrical and Plumbing Materials</li>
        </ul>
        <p className="main-text">
          Whether you are a homeowner, contractor, or builder, we have the products and expertise to help you complete your project with ease.
        </p>

        <Row>
          <Col md={6}>
            <p>
              We understand that your time is valuable, which is why we offer a hassle-free shopping experience. Our knowledgeable and friendly staff is always on hand to answer any questions you may have and to help you find the right products for your project.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Our commitment to customer satisfaction is second to none. We know that building and construction projects can be stressful, which is why we go above and beyond to make sure our customers have a positive experience. From the moment you walk through our doors, you will be greeted with a smile and treated with the utmost respect.
            </p>
          </Col>
        </Row>

        <p className="text-center main-text">
          So why choose Sahara Buildware? We offer:
        </p>
        <ul className="feature-list">
          <li>A wide range of high-quality building and construction products</li>
          <li>Competitive pricing</li>
          <li>Expert advice and assistance from our knowledgeable staff</li>
          <li>A hassle-free shopping experience</li>
          <li>A commitment to customer satisfaction</li>
        </ul>

        <p className="text-center main-text">
          Whether you are building a new home, renovating an existing property, or completing a commercial project, Sahara Buildware has the products and expertise to help you succeed. Visit us today and experience the Sahara Buildware difference!
        </p>
      </Container>
      <img src={shopImage} alt="Shop" className="shop-image" />
    </div>
  );
}

export default AboutUs;

