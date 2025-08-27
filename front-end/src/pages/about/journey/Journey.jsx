import React, { useEffect, useState } from 'react';
import TimeLine from '../../../components/timeline/TimeLine.jsx';
import './Journey.css';

const Journey = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [starsVisible, setStarsVisible] = useState(false);

  useEffect(() => {
    // Trigger title animation after component mounts
    const titleTimer = setTimeout(() => setTitleVisible(true), 500);
    const starsTimer = setTimeout(() => setStarsVisible(true), 1000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(starsTimer);
    };
  }, []);

  return (
    <div className="journey-container">
      {/* Animated Background Stars */}
      <div className={`stars-container ${starsVisible ? 'visible' : ''}`}>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      {/* Main Content */}
      <div className="journey-content">
        {/* Animated Title */}
        <div className="title-section">
          <h1 className={`journey-title ${titleVisible ? 'animate' : ''}`}>
            <span className="title-word title-word-1">My</span>
            <span className="title-word title-word-2">Cosmic</span>
            <span className="title-word title-word-3">Journey</span>
          </h1>
          <p className={`journey-subtitle ${titleVisible ? 'animate' : ''}`}>
            Exploring the universe of technology, one innovation at a time
          </p>
        </div>

        {/* Main Layout */}
        <div className="journey-layout">
          {/* Left Container - Timeline */}
          <div className="left-container">
            <div className="timeline-wrapper">
              <TimeLine />
            </div>
          </div>

          {/* Right Container - Empty for now */}
          <div className="right-container">
            <div className="placeholder-content">
              <div className="cosmic-placeholder">
                <div className="orbit">
                  <div className="planet"></div>
                </div>
                <p>Future content coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
