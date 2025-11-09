import React from "react";
import "../CSS/Auth.css";

const Register = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Sign Up</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-btn">Register</button>
        </form>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default Register;
