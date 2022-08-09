import React from 'react';
import { Container, Modal, ModalTitle } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const OrderModal = ({ product, handleClose, show }) => {
  const { user } = useAuth();
  const { model, price, photo } = product;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.status = 'pending';

    fetch(`http://localhost:5000/api/addOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/josn' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal('Order Place Successfully!', 'success');
          reset();
          handleClose();
        }
      });
  };

  return (
    <Container>
      {user?.email && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <ModalTitle.Title>Place Order</ModalTitle.Title>
            <Modal.Body>
              <div className='modal-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    defaultValue={user?.displayName}
                    className='form-control'
                    {...register('name', { required: true })}
                    placeholder='Name'
                  />
                  <input
                    defaultValue={user?.email}
                    className='form-control'
                    {...register('email', { required: true })}
                    placeholder='Email'
                  />
                  <input
                    type='number'
                    className='form-control'
                    {...register('Mobile Number', { required: true })}
                    placeholder='Mobile Number'
                  />
                  <input
                    defaultValue={model}
                    className='form-control'
                    {...register('Model', { required: true })}
                    placeholder='Product Model'
                  />
                  <input
                    defaultValue={price}
                    className='form-control'
                    {...register('price', { required: true })}
                    placeholder='Product Price'
                  />
                  <input
                    defaultValue={photo}
                    className='form-control'
                    {...register('photo', { required: true })}
                    placeholder='Product Img Url'
                  />
                  <textarea
                    className='form-control'
                    {...register('address', { required: true })}
                    placeholder='Address'
                  />

                  <input
                    className='btn btn-success form-control'
                    type='submit'
                    value='Place Order'
                  />
                </form>
              </div>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      )}
    </Container>
  );
};

export default OrderModal;
