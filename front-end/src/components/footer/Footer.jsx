import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faYoutube,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Footer Section */}
      <div className="footer-top">
        <div className="footer-content">
          {/* Left Column - Company Info & Social Media */}
          <div className="footer-column company-info">
            <div className="logo">
              <span className="logo-text">CLEMENT</span>
              <span className="logo-dot"></span>
            </div>
            <div className="social-media">
              {/* <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a> */}
              {/* make it open on new tab */}
              <a href="https://www.linkedin.com/in/phoshokondaedzo/" className="social-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/NdaedzoPhoshoko" className="social-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {/* <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a> */}
              {/* <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a> */}
              <a href="https://www.youtube.com/@emkidncp" className="social-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-column">
            <h3 className="footer-title">Solutions</h3>
            <ul className="footer-links">
              <li><a href="#">Full Stack Dev</a></li>
              <li><a href="#">DevOps</a></li>
              <li><a href="#">Oracle Cloud</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Platforms</h3>
            <ul className="footer-links">
              <li><a href="#">AWS</a></li>
              <li><a href="#">Docker</a></li>
              <li><a href="#">Oracle</a></li>
              <li><a href="#">Swagger Docs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Tools</h3>
            <ul className="footer-links">
              <li><a href="#">Jira</a></li>
              <li><a href="#">Huawei Cloud, GitHub</a></li>
              <li><a href="#">Postman</a></li>
              <li><a href="#">VS Code</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Me</h3>
            <ul className="footer-links">
              <li><a href="#">About Me</a></li>
              <li><a href="#">Contact Me</a></li>
              <li><a href="#">My Resume</a></li>
              <li><a href="#">My Projects</a></li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div className="footer-column newsletter">
            <h3 className="footer-title">SUBSCRIBE TO MY NEWSLETTER</h3>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Email*" 
                className="newsletter-input"
              />
              <button className="newsletter-button">SUBSCRIBE</button>
            </div>
            <p className="privacy-text">
              By subscribing to my newsletter you agreed with the conditions of Clement's Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            Copyright © {new Date().getFullYear()} Ndaedzo Clement Phoshoko
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms & Conditions</a>
            <span className="separator">|</span>
            <a href="#">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
