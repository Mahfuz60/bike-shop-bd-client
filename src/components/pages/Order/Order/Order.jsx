import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import OrderModal from '../OrderModal/OrderModal';
import ProductDetails from '../ProductDetails/ProductDetails';

const Order = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  fetch(`http://localhost:5000/api/products/${productId}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  return (
    <Container className='py-5'>
      <h2 className='text-center pt-3 text-success fw-bold'>Place Your Order</h2>
      <h6 className='text-center text-info fw-bold  '>--------------------------------------</h6>
      <ProductDetails product={product} handleShow={handleShow} />

      <OrderModal product={product} handleClose={handleClose} show={show}></OrderModal>
    </Container>
  );
};

export default Order;
