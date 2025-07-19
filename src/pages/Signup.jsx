import React from 'react';
import './Signup.css';
import quoteImage from '../assets/quote.jpg'; // ✅ local image import

function Signup() {
  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${quoteImage})`,
      }}
    >
      <div className="signup-form-glass">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
