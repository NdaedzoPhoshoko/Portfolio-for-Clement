import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import laptopImage from '../../assets/images/danieljoshualaptop.jpg';

const programmingLanguages = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'C++', icon: '📘' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Assembly', icon: '🍃' },
  { name: 'Git', icon: '📝' },
  { name: 'VS Code', icon: '🐳' }
];

const Home = () => {
  const [greeting, setGreeting] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToMainContainer = () => {
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning';
      } else if (currentHour >= 12 && currentHour < 17) {
        return 'Good Afternoon';
      } else if (currentHour >= 17 && currentHour < 21) {
        return 'Good Evening';
      } else {
        return 'Good Night';
      }
    };

    setGreeting(getGreeting());
  }, []);

  useEffect(() => {
    const fullText = `${greeting}, Explorer`;
    
    if (greeting && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [greeting, currentIndex]);

  return (
    <div className="home-container">
      <div className="top-container">
        <div className="top-left-container">
          <h1 
            className="greeting-heading"
            style={{
              fontSize: `${Math.max(2.5, 6 - (currentIndex / 5))}rem`
            }}
          >
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <p className="greeting-subtitle">
            Where innovation meets creativity, and technology transforms ideas into reality. I have built this website using ReactJs, NodeJs, & ExpressJS. You are welcomed to explore my work and learn more about me.
          </p>
          <div className="scroll-indicator" onClick={scrollToMainContainer}>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-down" />
          </div>
        </div>
        <div className="top-right-container">
          <img 
            src="/src/assets/images/reactJscode.png" 
            alt="ReactJS script preview image" 
            className="script-preview-image"
          />
        </div>
        <div className="languages-scroll-container">
          <div className="languages-scroll">
            {programmingLanguages.map((lang, index) => (
              <div 
                key={index} 
                className="language-item"
                style={{ '--item-index': index }}
              >
                <span className="language-icon">{lang.icon}</span>
                <span className="language-name">{lang.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {programmingLanguages.map((lang, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="language-item"
                style={{ '--item-index': index }}
              >
                <span className="language-icon">{lang.icon}</span>
                <span className="language-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
              <div className="main-container">
          <div className="services-section">
            <h2 className="services-title">Why, Clement?</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">Responsive Sites</h3>
                <p className="service-card-description">
                  Mobile-first websites that adapt seamlessly across all devices. 
                  Modern UI/UX design with clean interfaces and optimal performance. 
                  Every pixel crafted with attention to detail for brand differentiation.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="service-card-title">Readable Code</h3>
                <p className="service-card-description">
                  Clean, maintainable code following industry best practices and 
                  comprehensive documentation. Well-structured with proper naming 
                  conventions for effortless collaboration and scalability.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="service-card-title">Software Development</h3>
                <p className="service-card-description">
                  Robust, scalable software solutions using cutting-edge technologies. 
                  Full-stack applications and API development with high-performance 
                  solutions that handle complex business logic securely.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="service-card-title">Technical Excellence</h3>
                <p className="service-card-description">
                  Highest standards through rigorous testing and continuous integration. 
                  Performance optimization with security best practices and 
                  future-proof architecture for business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
