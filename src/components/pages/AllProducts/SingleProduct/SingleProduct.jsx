import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  const { model, brand, color, engine, mileage, details, photo, price, stock } = product;

  return (
    <CardGroup className='py-3'>
      <Card className='shadow p-2 text-center'>
        <Card.Img variant='top' src={photo} width='60%' height='60%' />
        <Card.Body>
          <Card.Title>
            Model:<span className='text-danger fw-bold'>{model}</span>
          </Card.Title>
          <Card.Text>
            <h5>
              Brand:<span className='fw-bold text-success'>{brand}</span>
            </h5>
            <h6>
              Color:<span className='text-black'>{color}</span>
            </h6>
            <h6>
              Engine:<span className='text-info'>{engine}</span>
            </h6>
            <h6>
              Mileage:<span className='text-success'>{mileage}</span>
            </h6>
            <p>
              Details:<small className='text-secondary'>{details}</small>
            </p>
            <h6>Price:{price}BDT</h6>
            <p>
              <i className='fas fa-check text-success me-1 '></i>
              {stock}
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='border bg-white border-0'>
          <Link to='/'>
            <Button className='btn btn-danger w-100'>
              <i className='fas fa-shopping-cart me-2'></i>Order Now
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default SingleProduct;
