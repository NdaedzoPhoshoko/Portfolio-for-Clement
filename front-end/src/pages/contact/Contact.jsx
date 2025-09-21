import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Section - Text */}
      <div className="contact-left-section">
        <div className="contact-text-content">
          <h1 className="contact-main-title">
            Trying to
          </h1>
          <h2 className="contact-highlight-word">
            be creative
          </h2>
          <h3 className="contact-tagline">
            together!
          </h3>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-right-section">
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input 
                type="text" 
                className="form-input"
                placeholder=""
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Your email</label>
              <input 
                type="email" 
                className="form-input"
                placeholder=""
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                className="form-textarea"
                placeholder=""
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
