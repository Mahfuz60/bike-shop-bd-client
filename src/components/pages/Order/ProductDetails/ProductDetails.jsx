import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

const ProductDetails = ({ product, handleShow }) => {
  const { model, price, photo, details, brand, stock, color, engine, mileage } = product;
  return (
    <Container className='d-flex pt-3'>
      <Row md={5} lg={5} className='justify-content-start'>
        <img src={photo} alt='' className='w-100 h-100 img-fluid' />
      </Row>
      <Row md={7} lg={7} className=' flex-column  justify-content-end lh-lg  '>
        <h4>Model : {model}</h4>
        <h5>Brand : {brand}</h5>
        <h5>Engine: {engine}</h5>
        <h5>Mileage : {mileage}</h5>
        <h6>Price : {price} BDT </h6>
        <h6>Color : {color}</h6>
        <p>
          <i className='fas fa-check text-success me-1 '></i>
          {stock}
        </p>
        <p>
          Details:<small className='text-secondary'>{details}</small>
        </p>
        <Button className='btn btn-success mt-1 w-50 mb-5' onClick={handleShow}>
          <h6>
            <i className='fas fa-shopping-cart me-2'></i> Order Now
          </h6>
        </Button>
      </Row>
    </Container>
  );
};

export default ProductDetails;
