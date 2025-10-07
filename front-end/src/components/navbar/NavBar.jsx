import React, { useState } from "react"; // Import useState
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faTrophy,
  faFileAlt,
  faPenToSquare,
  faBook,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import './NavBar.css'
import profileImage from "./../../../src/assets/images/author-profile.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBlogMegaMenu, setShowBlogMegaMenu] = useState(false); // State for blog mega menu visibility
  const [showAboutMegaMenu, setShowAboutMegaMenu] = useState(false); // State for about mega menu visibility
  const [showContactMegaMenu, setShowContactMegaMenu] = useState(false); // State for contact mega menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Check if current page is home
  const isHomePage = location.pathname === '/';

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when navigating
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Show page icon only on home page */}
        {isHomePage && (
          <div className="page-icon">
            <img src={profileImage} alt="Page Icon" className="page-icon-img" />
          </div>
        )}
      </div>
      
      {/* Mobile menu button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-sidebar-content" onClick={(e) => e.stopPropagation()}>
            {/* Profile Section */}
            <div className="mobile-profile-section">
              <div className="mobile-profile-avatar">
                <img src={profileImage} alt="Profile" />
              </div>
              <div className="mobile-profile-info">
                <h3>Clement Phoshoko</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="mobile-nav-menu">
              <div className="mobile-nav-item">
                <Link to="/" onClick={closeMobileMenu} className="mobile-nav-link">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <span>Home</span>
                </Link>
              </div>

              <div className="mobile-nav-item">
                <div className="mobile-nav-link">
                  <FontAwesomeIcon icon={faTrophy} />
                  <span>About Me</span>
                </div>
                <ul className="mobile-nav-submenu">
                  <li onClick={() => { navigate('/journey'); closeMobileMenu(); }}>
                    <span>My Journey</span>
                  </li>
                  <li onClick={() => { navigate('/achievements'); closeMobileMenu(); }}>
                    <span>Achievements</span>
                  </li>
                  <li onClick={() => { navigate('/resume'); closeMobileMenu(); }}>
                    <span>My Resume</span>
                  </li>
                </ul>
              </div>

              <div className="mobile-nav-item">
                <div className="mobile-nav-link">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <span>Blog World</span>
                </div>
                <ul className="mobile-nav-submenu">
                  <li onClick={() => { navigate('/blog'); closeMobileMenu(); }}>
                    <span>Latest Posts</span>
                  </li>
                  <li>
                    <span>Tutorials</span>
                  </li>
                </ul>
              </div>

              <div className="mobile-nav-item">
                <Link to="/contact" onClick={closeMobileMenu} className="mobile-nav-link">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Contact Me</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      <ul className="navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          onMouseEnter={() => setShowAboutMegaMenu(true)} // Show on hover
          onMouseLeave={() => setShowAboutMegaMenu(false)} // Hide on mouse leave
          style={{ position: "relative" }} // Needed for positioning the mega menu
        >
        <Link>About Me</Link>
        {showAboutMegaMenu && (
          <div className="about-mega-menu-placeholder blog-mega-menu-placeholder">
            <div className="mega-menu-item" onClick={() => navigate('/journey')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faLightbulb} className="icon-my-journey" /> {/* Icon for My Journey */}
              </div>
              <div className="mega-menu-text">
                <h4>My Journey</h4>
                <p>Discover my professional evolution from early beginnings to current expertise, including key career transitions and learning experiences that shaped my path in technology and development.</p>
              </div>
            </div>
            <div className="mega-menu-item" onClick={() => navigate('/achievements')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faTrophy} className="icon-achievements" /> {/* Icon for Achievements */}
              </div>
              <div className="mega-menu-text">
                <h4>Achievements</h4>
                <p>Explore my notable accomplishments, certifications, project successes, and recognition received throughout my professional journey in software development and technology innovation.</p>
              </div>
            </div>
            <div className="mega-menu-item" onClick={() => navigate('/resume')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faFileAlt} className="icon-my-resume" /> {/* Icon for My Resume */}
              </div>
              <div className="mega-menu-text">
                <h4>My Resume</h4>
                <p>Access my comprehensive professional resume showcasing technical skills, work experience, educational background, and project portfolio that demonstrates my expertise in full-stack development and software engineering.</p>
              </div>
            </div>
          </div>
        )}
      </li>

      {/* Blog World Mega Menu */}
      <li
        onMouseEnter={() => setShowBlogMegaMenu(true)}
        onMouseLeave={() => setShowBlogMegaMenu(false)}
        style={{ position: "relative" }}
      >
        <Link>Blog World</Link>
        {showBlogMegaMenu && (
          <div className="blog-mega-menu-placeholder">
            <div className="mega-menu-item" onClick={() => navigate('/blog')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faPenToSquare} className="icon-latest-posts" /> {/* Icon for Latest Posts */}
              </div>
              <div className="mega-menu-text">
                <h4>Latest Posts</h4>
                <p>Browse through my most recent blog entries covering industry insights, technical tutorials, personal reflections, and thought-provoking discussions about current trends in software development.</p>
              </div>
            </div>
            <div className="mega-menu-item">
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faBook} className="icon-tutorials" /> {/* Icon for Tutorials */}
              </div>
              <div className="mega-menu-text">
                <h4>Tutorials</h4>
                <p>Access comprehensive step-by-step guides, code examples, and practical walkthroughs designed to help developers master new technologies, frameworks, and programming concepts.</p>
              </div>
            </div>
          </div>
        )}
      </li>

      {/* Contact Me Mega Menu */}
      <li
        onMouseEnter={() => setShowContactMegaMenu(true)}
        onMouseLeave={() => setShowContactMegaMenu(false)}
        style={{ position: "relative" }}
      >
        <Link to="/contact">Contact Me</Link>
        {showContactMegaMenu && (
          <div className="contact-mega-menu-placeholder blog-mega-menu-placeholder">
            <div className="mega-menu-item" onClick={() => navigate('/contact')}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faEnvelope} className="icon-email-me" /> {/* Icon for Email Me */}
              </div>
              <div className="mega-menu-text">
                <h4>Email Me</h4>
                <p>Reach out directly via email for collaboration opportunities, technical discussions, project inquiries, or any questions about my work and expertise in software development.</p>
              </div>
            </div>
          </div>
        )}
      </li>
    </ul>
  </nav>
)};

export default Navbar;
