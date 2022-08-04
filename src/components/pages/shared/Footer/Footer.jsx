import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div className='bg-dark w-100 '>
        <Container className='pb-3'>
          {/* Footer is devided into three columns */}
          <Row xs={1} md={3} lg={3} className='g-4'>
            <Col className='text-white'>
              <ul>
                <h5>Our Services</h5>
                <li>
                  <h6>Periodic Service</h6>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>General Repairs</h6>
                </li>
                <li>
                  <h6>Engine Work</h6>
                </li>
                <li>
                  <h6>Insurance Services</h6>
                </li>
                <li>
                  <h6>RSA Services</h6>
                </li>
                <li>
                  <h6>Batteries</h6>
                </li>
                <li>
                  <h6> Custom Services</h6>
                </li>
              </ul>
            </Col>

            <Col>
              <div className=' text-white mb-3  text-center'>
                <ul>
                  <h5>Follow Us</h5>
                  <i className='fab fa-linkedin-in'></i>
                  <i className='fab fa-pinterest'></i>
                  <i className='fab fa-youtube'></i>
                  <i className='fab fa-facebook'></i>
                  <i className='fab fa-instagram'></i>
                  {/* <i className="fab fa-twitter"></i> */}
                </ul>
              </div>
            </Col>

            <Col className=' text-white text-lg-end'>
              <ul>
                <h5>Contact Us</h5>
                <h6 className='phone-num-color '>
                  <i className='fas fa-phone-alt'></i>+8801500000010
                </h6>
                <h6 className='phone-num-color '>
                  <i className='fas fa-phone-alt'></i>+8801800000052
                </h6>

                <h6 className='contactHeader'>
                  <i className='far fa-envelope me-2'></i>info@bikeshopbd.com
                </h6>
                <h6 className='contactHeader'>
                  <i className='far fa-envelope me-2'></i>bikeshop@gmail.com
                </h6>
              </ul>
            </Col>
          </Row>
        </Container>
        <p className='text-center text-gray mb-0 copyright-bg text-secondary py-1'>
          ©Copyright {year} || bikeshopBD
        </p>
      </div>
    </div>
  );
};

export default Footer;
