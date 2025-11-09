import React from "react";
import "../CSS/Login.css";

const Login = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default Login;
