import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from 'file:///D:/speedhunter/fathisfashion/frontend/logo.jpg'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#fff', color: '#000', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col className="text-center mb-3">
            <a href="/">
              <img src={logo} alt="speedhunter" style={{ maxWidth: '250px',height: '180px' }} />
            </a>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center mb-3">
            <ul className="links d-flex justify-content-center list-unstyled mb-0">
              <li className="mx-2">
                <a href="/" style={{ color: '#000', textDecoration: 'none' }}>Contact Us</a>
              </li>
              <li className="mx-2">
                <a href="/" style={{ color: '#000', textDecoration: 'none' }}>My Account</a>
              </li>
              <li className="mx-2">
                <a href="/" style={{ color: '#000', textDecoration: 'none' }}>Return</a>
              </li>
              <li className="mx-2">
                <a href="/" style={{ color: '#000', textDecoration: 'none' }}>Shipping</a>
              </li>
              <li className="mx-2">
                <a href="/" style={{ color: '#000', textDecoration: 'none' }}>Privacy Policy</a>
              </li>
              <li className="mx-2">
                <a href="/" style={{ color: '#000', textDecoration: 'none' }}>Terms of Service</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mb-3">
            <ul className="social-icons d-flex justify-content-center list-unstyled mb-0">
              <li className="mx-2">
                <a href="https://twitter.com" style={{ color: '#000' }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="https://instagram.com" style={{ color: '#000' }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="https://youtube.com" style={{ color: '#000' }}>
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0" style={{ color: '#000' }}>Copyright © SPEEDHUNTERMOTORSPOT</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

