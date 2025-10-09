import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import './WebsiteDown.css';

const WebsiteDown = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="websitedown-container">
      <div className="websitedown-content">
        <div className="websitedown-illustration">
          <img 
            src="/assets/illustrations/undraw_forgot-password_nttj.svg" 
            alt="Website down illustration" 
            className="websitedown-image"
          />
        </div>
        
        <div className="websitedown-text">
          <h1 className="websitedown-title">We'll Be Right Back</h1>
          <h2 className="websitedown-subtitle">Website Temporarily Down</h2>
          <p className="websitedown-description">
            We're currently performing some maintenance. Please check back in a few moments.
          </p>
        </div>

        <button className="websitedown-button" onClick={handleReload}>
          <FontAwesomeIcon icon={faRotateRight} className="websitedown-icon" />
          <span>Reload Page</span>
        </button>
      </div>
    </div>
  );
};

export default WebsiteDown;

