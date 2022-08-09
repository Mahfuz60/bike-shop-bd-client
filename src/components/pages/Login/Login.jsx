import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { loginUser, error } = useAuth();
  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, navigate);
  };
  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center my-5'>
          <span className='bg-white px-5 py-1 rounded fw-bold'>Please Login !</span>
        </h2>

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
        <span className='text-white'>{error}</span>
        <input type='submit' className='btn btn-success' value='Login' />

        <Link to='/register' className='text-decoration-none text-white fs-6 fw-bold'>
          <h6>Dont Have An Account ? Click Here</h6>{' '}
        </Link>
      </form>
    </div>
  );
};

export default Login;
