import React from 'react';
import './Tutorials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Tutorials = () => {
  const upcomingCategories = [
    {
      icon: faCode,
      title: "Web Development",
      description: "Full-stack tutorials covering React, Node.js, and modern frameworks"
    },
    {
      icon: faLaptopCode,
      title: "Mobile Development",
      description: "Full-stack tutorials covering Android Studio, Kotlin, and etc."
    },
    {
      icon: faBookOpen,
      title: "Computer Science and Math Courses",
      description: "Computer Science and Math courses covering university level courses"
    }
  ];

  return (
    <div className="tutorials-container">
      {/* Hero Section */}
      <div className="tutorials-hero">
        <div className="tutorials-hero-content">
          <h1 className="tutorials-main-title">
            Programming <span className="tutorials-highlight">Tutorials</span>
          </h1>
          
          <p className="tutorials-description">
            I'm currently crafting in-depth, step-by-step programming tutorials to help you master 
            modern development skills. Stay tuned for comprehensive guides, code examples, and 
            practical projects that will elevate your coding journey.
          </p>
        </div>

        {/* Animated Code Preview */}
        <div className="tutorials-preview">
          <div className="code-window">
            <div className="code-window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-title">upcoming-tutorial.jsx</div>
            </div>
            <div className="code-window-content">
              <pre>
                <code>
{`import React from 'react';

const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>Coming Soon!</h1>
      <p>Amazing content ahead...</p>
    </div>
  );
};

export default Tutorial;`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Categories Section */}
      <div className="tutorials-upcoming-section">
        <h2 className="section-title">What to Expect</h2>
        <div className="section-underline"></div>
        
        <div className="upcoming-categories-grid">
          {upcomingCategories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;

