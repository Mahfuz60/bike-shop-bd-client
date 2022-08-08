import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setAllProduct(data), setLoading(false));
  }, [allProduct._id]);

 

  return (
    <Container className='py-5'>
      <div className='text-center'>
        {loading && <Spinner animation='border' variant='info' />}
        <h2 className='fw-bold pt-3'>
          Our <span className='text-danger '> Products</span>{' '}
        </h2>
      </div>

      <Row xs={1} md={3} lg={3} className='d-flex  g-3'>
        {allProduct.map((product) => (
          <SingleProduct product={product} key={product._id} />
        ))}
      </Row>
    </Container>
  );
};

export default AllProducts;
