import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleProduct from '../../AllProducts/SingleProduct/SingleProduct';

const Products = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setAllProduct(data), setLoading(false));
  }, [allProduct._id]);

  const showProduct = allProduct.slice(0, 6);

  return (
    <Container className='py-5'>
      <div className='text-center'>
        {loading && <Spinner animation='border' variant='info' />}
        <h2 className='fw-bold pt-3'>
          Our <span className='text-danger '> Products</span>{' '}
        </h2>
      </div>

      <Row xs={1} md={3} lg={3} className='d-flex  g-3'>
        {showProduct.map((product) => (
          <SingleProduct product={product} key={product._id} />
        ))}
      </Row>
      <div className='text-center mt-4 '>
        <Link to='/products'>
          <button className='btn btn-outline-success fw-bold '>
            {' '}
            View All Products <i className='ms-2 fas fa-arrow-right'></i>
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Products;
