import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Ndaedzo Clement Phoshoko';
  }, []);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-illustration">
          <img 
            src="/assets/illustrations/undraw_knowledge_0ty5.svg" 
            alt="Page not found illustration" 
            className="notfound-image"
          />
        </div>
        
        <div className="notfound-text">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Page Not Found</h2>
          <p className="notfound-description">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <button className="notfound-button" onClick={handleGoHome}>
          <FontAwesomeIcon icon={faChevronLeft} className="notfound-icon" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;

