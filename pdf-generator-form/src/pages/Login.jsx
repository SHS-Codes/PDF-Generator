// src/pages/Login.jsx

import React from 'react';
import './Login.css';
import loginbg from '../assets/klmrng.jpg'; // Your background image

function Login() {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${loginbg})`,
      }}
    >
      <div className="overlay">
        <div className="login-form">
          <h2>🌴Log In🌴</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
