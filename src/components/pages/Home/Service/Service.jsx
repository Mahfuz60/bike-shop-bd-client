import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
  const { title, description, images } = service;

  return (
   
      <CardGroup>
      <Card style={{ width: '18rem', height: '25rem' }}>
        <Card.Img variant='top' src={images} className='serviceImg mx-auto' />

        <Card.Body className='text-center'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    
  );
};

export default Service;
