import React from 'react';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    title: "Stock Prediction Model",
    category: "Academic Project",
    description: "Developed a machine learning model using Python and statistical analysis to predict stock market trends with 85% accuracy.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    image: "/src/assets/images/danieljoshualaptop.jpg",
    year: "2024"
  },
  {
    id: 2,
    title: "Cryptographic Analysis",
    category: "Academic Project", 
    description: "Implemented and analyzed encryption algorithms including RSA, AES, and elliptic curve cryptography.",
    technologies: ["Python", "Cryptography", "Number Theory"],
    image: "/src/assets/images/danieljoshualaptop.jpg",
    year: "2024"
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "IT Project",
    description: "Built a responsive portfolio website using React.js, Node.js, and Express.js with modern UI/UX design.",
    technologies: ["React.js", "Node.js", "Express.js", "CSS3"],
    image: "/src/assets/images/danieljoshualaptop.jpg",
    year: "2024"
  },
  {
    id: 4,
    title: "Data Visualization",
    category: "Academic Project",
    description: "Created interactive data visualization tools using statistical analysis and programming techniques.",
    technologies: ["Python", "D3.js", "Tableau", "Statistics"],
    image: "/src/assets/images/danieljoshualaptop.jpg",
    year: "2023"
  },
  {
    id: 5,
    title: "AI Chatbot",
    category: "IT Project",
    description: "Developed an intelligent chatbot using Natural Language Processing and machine learning algorithms.",
    technologies: ["Python", "NLP", "TensorFlow", "ML"],
    image: "/src/assets/images/danieljoshualaptop.jpg",
    year: "2024"
  },
  {
    id: 6,
    title: "Optimization Engine",
    category: "Academic Project",
    description: "Designed optimization algorithms for complex systems modeling using linear algebra and calculus.",
    technologies: ["Python", "Linear Algebra", "Optimization"],
    image: "/src/assets/images/danieljoshualaptop.jpg",
    year: "2023"
  }
];

const certificates = [
  {
    id: 1,
    title: "React.js Fundamentals",
    date: "December 2024",
    place: "Coursera",
    icon: "/src/assets/certs_icons/Learning-Path_badge_default.png"
  },
  {
    id: 2,
    title: "Python for Data Science",
    date: "November 2024",
    place: "edX",
    icon: "/src/assets/certs_icons/Learning-Path_badge_default.png"
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    date: "October 2024",
    place: "Udemy",
    icon: "/src/assets/certs_icons/Learning-Path_badge_default.png"
  },
  {
    id: 4,
    title: "Full Stack Development",
    date: "September 2024",
    place: "FreeCodeCamp",
    icon: "/src/assets/certs_icons/Learning-Path_badge_default.png"
  },
  {
    id: 5,
    title: "JavaScript Advanced",
    date: "August 2024",
    place: "Pluralsight",
    icon: "/src/assets/certs_icons/Learning-Path_badge_default.png"
  },
  {
    id: 6,
    title: "Database Design",
    date: "July 2024",
    place: "LinkedIn Learning",
    icon: "/src/assets/certs_icons/Learning-Path_badge_default.png"
  }
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      {/* Projects Section */}
      <div className="section-header">
        <h1 className="section-title">Projects</h1>
        <div className="section-underline"></div>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <div className="achievement-image-container">
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="achievement-image"
                onError={(e) => {
                  e.target.src = '/src/assets/images/placeholder-project.jpg';
                }}
              />
              <div className="github-icon-overlay">
                <svg 
                  className="github-icon" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
            
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-category">{achievement.category}</p>
              <p className="achievement-description">{achievement.description}</p>
              
              <div className="achievement-technologies">
                {achievement.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="section-header">
        <h1 className="section-title">Certificates & Badges</h1>
        <div className="section-underline"></div>
      </div>
      
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-item">
            <div className="certificate-icon">
              <img 
                src={cert.icon} 
                alt={cert.title}
                className="cert-icon"
                onError={(e) => {
                  e.target.src = '/src/assets/certs_icons/Learning-Path_badge_default.png';
                }}
              />
            </div>
            <div className="certificate-details">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-place">{cert.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
