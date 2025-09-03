import React, { useEffect, useState } from 'react';
import TimeLine from '../../../components/timeline/TimeLine.jsx';
import './Journey.css';

const Journey = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Trigger title animation after component mounts
    const titleTimer = setTimeout(() => setTitleVisible(true), 500);

    return () => {
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <div className="journey-container">
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

          {/* Right Container - Additional Info */}
          <div className="right-container">
            <div className="info-wrapper">
              <div className="info-content">
                <h3>About My Journey</h3>
                <p>I am Ndaedzo "Clement" Phoshoko, a mathematician and technologist with a strong academic foundation and a growing professional journey. From Jan 2020 to Dec 2022, I completed my <b>BSc in Mathematics and Computer Science</b> at the University of Limpopo,
                  where I built my passion for problem-solving and technology.<br /><br />
                  In Jan 2024 to Dec 2024, I pursued my <b>BSc Honours in Mathematics</b> at the University of Limpopo, graduating Cum Laude as the top of my class with an 76% average. Alongside my studies,
                  I spent three years tutoring Mathematics and Computer Science, an experience that strengthened both my analytical thinking and ability to mentor others effectively. <br /><br />
                  Currently, from Jan 2025 to Dec 2025, I am serving as an <b>IT Intern</b> at Redmps, where I am applying my technical skills in real-world projects while learning from industry practice. My journey reflects not only a love for mathematics but also a
                  deep passion for technology and data. I enjoy working with programming languages such as Java, C++, and SQL, and developing systems that bring real solutions to challenges. As Tony Stark said, “It’s not about me, it’s not about you, it’s about legacy.”
                  For me, that legacy is about using data and technology to innovate, inspire growth, and open opportunities for others.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
