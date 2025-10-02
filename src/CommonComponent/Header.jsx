import React from 'react';
import "../CSS/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Hiloni.dev</div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
      </div>
    </header>
  );
};

export default Header;
