import React from 'react';
import './Login.css';
const Login = () => {
  const submitLogin = () => {};

  return (
    <div className='login-form'>
      <form onSubmit={submitLogin}>
        <button className='facebook-login'>Connect With Facebook</button>
        <button className='google-login'>Connect With Google</button>
        <div className='login-or center'>
          <span>or</span>
          <div className='or-divider'></div>
        </div>
        <input
          type='text'
          className='browser-default'
          placeholder='Email address'
        />
        <input
          type='password'
          className='browser-default'
          placeholder='Password'
        />
        <button className='sign-up-button'>Login</button>
        <div className='divider'></div>
        <div>Don't have an account? Sign up</div>
      </form>
    </div>
  );
};

export default Login;
