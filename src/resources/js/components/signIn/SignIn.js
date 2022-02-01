import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../customs/header/Header';
import Footer from '../../customs/footer/Footer';
import signinStyles from '../signIn/SignIn.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);

    if (email === '') {
      setErrorMsg('Email is required');
    } else if (password === '') {
      setErrorMsg('Password is required');
    } else {
      setErrorMsg('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <Header />
      <div className={signinStyles.signin_container}>
        <div className={signinStyles.header_container}>
          <h3>Sign in here...</h3>
        </div>
        {errorMsg === '' ? '' : <h5 className="text-danger text-center">{errorMsg}</h5>}
        <div className={signinStyles.signin}>
          <label>
            Email:
            <br />
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <br />
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <div className={signinStyles.signin_btn}>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
        </div>
        <p>
          Don't have an account? 
          Sign up
          {' '}
          <Link to='/signup'>here</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;