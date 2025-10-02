import React, { useState } from 'react';
import "../CSS/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="contact-form-container">
    <h2 className="contact-heading">
  Reach Me <span className="emoji">📬</span>
</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder="10-digit number"
            value={formData.contact}
            onChange={handleChange}
            minLength={10}
            maxLength={10}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            placeholder="Write your feedback here..."
            value={formData.feedback}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
