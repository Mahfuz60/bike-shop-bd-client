import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
  const { registerUser, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      swal('Password Didnt match');
      return;
    }
    registerUser(data.email, data.password, data.name, navigate);
    reset();
  };
  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit(onSubmit)} className='form-style'>
        <h2 className='text-center my-5'>
          <span className='bg-white px-5 py-1 rounded fw-bold'>Register Here! </span>
        </h2>

        <input
          className='form-control'
          type='text'
          {...register('name', { required: true, pattern: /^[a-zA-Z ]+$/ })}
          placeholder='user name'
        />
        {errors.name && (
          <span className='text-white'>Name Required & can contain only letters</span>
        )}

        <input
          className='form-control'
          
          type='email'
          {...register('email', { required: true })}
          placeholder='user email'
        />

        <input
          className='form-control'
          
          type='password'
          {...register('password', { required: true })}
          placeholder='user password'
        />

        <input
          className='form-control'
         
          type='password'
          {...register('password2', { required: true })}
          placeholder='confirm password'
        />

        <input className='form-control btn btn-success' type='submit' value='Submit' />

        <span className='text-white'>{error}</span>
        <Link to='/login' className='text-decoration-none text-white fw-bold '>
          <h6>Already Have An Account ? Click Here</h6>{' '}
        </Link>
      </form>
    </div>
  );
};

export default Register;
