import React from 'react';
import '../CSS/Footer.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
return (
<footer className="footer">
  <p className="footer-text">
    ⚡ Made with ❤️ by <span className="highlight">Hiloni Shah</span>
  </p>
  <div className="social-icons">
    {/* instagram */}
    <NavLink to="https://www.instagram.com/hiloni_.shah?igsh=MTJtNjV4dm1pcGE5Nw%3D%3D&utm_source=qr" target="_blank"
      rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
    </NavLink>

    {/* thread*/}
    <NavLink to="https://www.threads.com/@hiloni_.shah?igshid=NTc4MTIwNjQ2YQ==" target="_blank"
      rel="noopener noreferrer">
      <img src="../images/Thread_logo.jpg.webp" alt="Thread" />
    </NavLink>

{/* linkedIn */}
    <NavLink to="http://www.linkedin.com/in/hiloni-shah-522092259" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
    </NavLink>

    {/* snapchat */}
    <NavLink to="https://snapchat.com/t/UPn0HfTN" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/2048px-Snapchat_logo.svg.png"
        alt="Snapchat" />
    </NavLink>

    {/* x */}
    <NavLink to="https://x.com/s98343008?s=21" target="_blank" rel="noopener noreferrer">
      <img src="../images/x-social-media-logo-icon-1.svg" alt="X" />
    </NavLink>

    {/* GitHub */}
    <NavLink to="https://github.com/shahhiloni" target="_blank" rel="noopener noreferrer">
  <img 
    src="https://cdn-icons-png.flaticon.com/512/733/733553.png" 
    alt="GitHub" 
  />
</NavLink>

    {/* Pinterest */}
    <NavLink to="http://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" />
    </NavLink>
  </div>
</footer>
);
};

export default Footer;