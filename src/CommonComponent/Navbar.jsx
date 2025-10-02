import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="glass-navbar">
      {/* <div className="logo">Hiloni.dev</div> */}
      <ul className="nav-items">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About Me</NavLink></li>
        <li><NavLink to="/education" className="nav-link">Education</NavLink></li>
        <li><NavLink to="/job-experience" className="nav-link">Work Experience</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        <li><NavLink to="/media" className="nav-link">Media</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
