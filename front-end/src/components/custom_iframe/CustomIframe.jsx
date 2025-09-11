import React, { useEffect } from 'react';
import './CustomIframe.css';

const CustomIframe = ({ isOpen, onClose, url, title = "External Link" }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="iframe-modal-overlay" onClick={onClose}>
      <div className="iframe-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="iframe-modal-header">
          <div className="iframe-modal-title">
            <div className="iframe-modal-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span>{title}</span>
          </div>
          <div className="iframe-modal-controls">
            <button className="iframe-control-btn minimize" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13H5v-2h14v2z"/>
              </svg>
            </button>
            <button className="iframe-control-btn close" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="iframe-modal-content">
          <div className="iframe-loading" id="iframe-loading">
            <div className="loading-spinner"></div>
            <p>Loading content...</p>
          </div>
          <iframe
            src={url}
            className="custom-iframe"
            title={title}
            onLoad={() => {
              const loading = document.getElementById('iframe-loading');
              if (loading) loading.style.display = 'none';
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="iframe-modal-footer">
          <div className="iframe-url-bar">
            <div className="url-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            </div>
            <span className="url-text">{url}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomIframe;
