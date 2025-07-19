import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Make sure this is imported

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/signup" className="nav-item">Sign Up</NavLink></li>
        <li><NavLink to="/login" className="nav-item">Login</NavLink></li>
        <li><NavLink to="/pdf" className="nav-item">PDF Generator</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
