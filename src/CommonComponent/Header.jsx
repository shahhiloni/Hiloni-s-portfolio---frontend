import React, { useState } from "react";
import "../CSS/Header.css";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
  
const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">Hiloni.dev</div>
<div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>

        <div className="auth-buttons">
          <button onClick={() => {
            setShowLogin(true);
            setShowRegister(false);
          }} className="login-btn">
            Login
          </button>

          <button onClick={() => {
            setShowRegister(true);
            setShowLogin(false);
          }} className="signup-btn">
            Sign Up
          </button>
        </div>
      </header>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </>
  );
};

export default Header;
