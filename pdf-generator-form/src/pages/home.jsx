import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/jwcar.jpg'; // Make sure this image is placed inside src/assets
import './Home.css';

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="overlay">
        <div className="content">
          <h1>PDF Generator</h1>
          <p>
            Quickly generate customized PDFs. Just enter your details, preview your document,
            and download instantly!
          </p>
          <div className="buttons">
            <Link to="/pdf">
              <button className="btn">Start Generating</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-secondary">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-secondary">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
