import React from 'react';
import './Resume.css';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-document">
        {/* Left Column - Light Grey Background */}
        <div className="resume-left-column">
          {/* Profile Image */}
          <div className="profile-image">
            <img src="/src/assets/images/author-profile.jpg" alt="NDAEDZO CLEMENT PHOSHOKO" />
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h2 className="section-heading">CONTACT</h2>
            <div className="contact-item">
              <i className="icon-phone"></i>
              <span>+27723157290</span>
            </div>
            <div className="contact-item">
              <i className="icon-email"></i>
              <span>clement.phoshoko@outlook.com</span>
            </div>
            <div className="contact-item">
              <i className="icon-location"></i>
              <span>Alexandra, 2014, South Africa</span>
              <span className="relocation-note">(willing to relocate)</span>
            </div>
          </div>

          {/* Core Skills Section */}
          <div className="skills-section">
            <h2 className="section-heading">CORE SKILLS</h2>
            <ul className="skills-list">
              <li>Java, Python, C++, C#, JavaScript (React.js, Node.js, Express.js), SQL</li>
              <li>HTML5, CSS3, XML, Angular, Android Studio</li>
              <li>Java Spring, Git, Huawei Cloud Version Control, Microsoft Assembly, Oracle Cloud, Power BI</li>
              <li>MySQL, REST APIs, CRUD Operations, Sequelize</li>
              <li>Agile & Scrum, SDLC, DevOps Practices</li>
            </ul>
          </div>

          {/* Qualities Section */}
          <div className="qualities-section">
            <h2 className="section-heading">QUALITIES</h2>
            <ul className="qualities-list">
              <li>Excellent collaboration and interpersonal communication skills</li>
              <li>Resilient under pressure, with the ability to perform in high-demand environments</li>
              <li>Analytical thinker with a detail-oriented mindset</li>
              <li>Effective time management and task prioritization skills</li>
              <li>Committed to continuous learning and personal growth</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="social-section">
            <h2 className="section-heading">SOCIAL</h2>
            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/in/phoshokondaedzo/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn className="social-icon" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/NdaedzoPhoshoko" target="_blank" rel="noopener noreferrer">
                  <GitHub className="social-icon" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - White Background */}
        <div className="resume-right-column">
          {/* Name Section */}
          {/* <div className="name-section">
            <h1 className="first-name">NDAEDZO CLEMENT</h1>
            <h1 className="last-name">PHOSHOKO</h1>
          </div> */}

          {/* Job Title */}
          {/* <div className="job-title">
            <h2>SOFTWARE DEVELOPER INTERN</h2>
          </div> */}

          {/* Summary Section */}
          <div className="summary-section">
            <h2 className="section-heading">SUMMARY</h2>
            <p>
              A skilled IT intern with a Cum Laude BSc Honours in Mathematics, driven by
              the goal of becoming a top-tier information technology professional.
              Motivated to apply smart, effective, and optimized analytical techniques to
              solve real-world problems and contribute meaningfully to innovative tech
              solutions.
            </p>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h2 className="section-heading">EDUCATION</h2>
            <div className="education-item">
              <h3>Bachelor of Science Honours in Mathematics</h3>
              <p className="institution">University of Limpopo | Jan 2024 – Nov 2024</p>
              <p className="project-detail"><em>Research project:</em> Cryptography: Linear Codes and G-modules.</p>
            </div>
            <div className="education-item">
              <h3>Bachelor of Science in Mathematics and Computer Science</h3>
              <p className="institution">University of Limpopo | Jan 2020 – Dec 2022</p>
              <p className="project-detail"><em>Final Year project:</em> Developed a mobile tutorship app.</p>
            </div>
          </div>

          {/* Career Summary Section */}
          <div className="career-section">
            <h2 className="section-heading">CAREER SUMMARY</h2>
            <div className="career-item">
              <h3>IT Intern - REDM Professional Services (PTY) LTD</h3>
              <p className="duration">Jan 2025 – Dec 2025 | Woodmead Business Park, Sandton, 2191</p>
              <ul className="responsibilities">
                <li>Collaborated within the DevOps team to develop and refine
                    application features, including full CRUD operations, for client-facing
                    projects, ensuring usability and performance.</li>
                <li>Collaborated with fellow interns to develop an ATS website, contributing to both front-end and back-end tasks to ensure smooth functionality.</li>
                <li>Actively participated in COE team standup for knowledge sharing, innovation discussions, and continuous learning to support business goals and personal growth.</li>
              </ul>
            </div>
            <div className="career-item">
              <h3>Tutor – Centre for Academic Excellence (CAE)</h3>
              <p className="duration">Jan 2021 – Jun 2022 | University of Limpopo, Mankweng, 0720</p>
              <ul className="responsibilities">
                <li>Mentored and tutored Math and Computer science students.</li>
                <li>Addressed academic challenges faced by first year students.</li>
              </ul>
            </div>
          </div>

          {/* References Section */}
          <div className="references-section">
            <h2 className="section-heading">REFERENCES</h2>
            <div className="reference-item">
              <p>Mabore Thusago, Coordinator at CAE BSSP (mabore.thosago@ul.ac.za)</p>
            </div>
            <div className="reference-item">
              <p>Sofuthe Nomsa, Internship Line Manager at REDMPS (nomsa.sofuthe@remps.com)</p>
            </div>
            <div className="reference-item">
              <p>Dr Amin Saeidi, Honours project supervisor (amin.saeidi@ul.ac.za)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
