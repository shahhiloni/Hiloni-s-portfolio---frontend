import React from 'react';
import "../CSS/About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-card">
          {/* Profile Image */}
          <div className="about-image">
            <img src="../images/Hiloni.jpg" alt="Hiloni" />
          </div>

          {/* Content Section */}
          <div className="about-content">
            <h1>Hello, I'm <span className="highlight">Hiloni Shah</span> 👋</h1>
            <p className="para">
              I’m a passionate <strong>Full-Stack Developer</strong> and an aspiring 
              <strong> FinTech Professional</strong>.  
              With experience in <strong>React, Node.js, and modern UI/UX design</strong>, I create
              responsive, user-friendly, and scalable web applications.  
              Along with technology, I also have a strong background in <strong>Finance</strong>, 
              including <em>Stock Market, Mutual Funds, F&O, Forex, and Blockchain</em>.  
              This unique blend of skills helps me build solutions at the intersection of 
              <strong> Technology and Finance (FinTech)</strong>.
            </p>

            {/* Quote */}
            <blockquote className="quote">
              “Code + Finance = The Future of Innovation 🚀”
            </blockquote>

            {/* Skills Section */}
            <h3>💡 Technical Skills</h3>
            <ul className="skills-list">
              <li>HTML5 / CSS3</li>
              <li>Tailwind & Bootstrap</li>
              <li>JavaScript (ES6+), TypeScript</li>
              <li>React.js</li>
              <li>Node.js / Express.js</li>
              <li>MongoDB / MySQL</li>
              <li>Git & GitHub</li>
              <li>Firebase, Vercel, Hostinger</li>
              <li>React Native (Expo / CLI)</li>
              <li>Google Play Console</li>
              <li>Jira (Agile Tools)</li>
            </ul>

            {/* Finance Section */}
            <h3>📊 Finance Knowledge</h3>
            <ul className="skills-list">
              <li>Stock Market & Technical Analysis</li>
              <li>Mutual Funds & Portfolio Management</li>
              <li>Derivatives (F&O)</li>
              <li>Forex Market</li>
              <li>Blockchain & Cryptocurrencies</li>
              <li>FinTech Solutions</li>
            </ul>

            {/* Interests Section */}
            <h3>🎯 Interests</h3>
            <p style={{ textAlign: "justify" }}>
              Apart from coding and finance, I enjoy cycling, exploring new tech & market trends, 
              reading inspirational books, and traveling to discover new cities and cultures.  
              I’m also deeply influenced by the principles of Jainism, which guide my values 
              of simplicity, integrity, and lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
