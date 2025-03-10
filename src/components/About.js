import React from 'react';
import "../styles/About.css"; 
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description"; // Resume Icon

function About() {
  return (
    <section className="about-section">
       <h2>About Me</h2>
      <div className="about-container"> {/* Transparent box */}
       
        <div className="about-content">
          <div className="about-image">
            <img src="profile.jpeg" alt="Your Name" />
          </div>
          <div className="about-text">
            <p className="bio">
            Hey, I'm Sithu! I'm a Computer Science student at Virginia Tech with a passion for building and creating. I love diving into full-stack development and bringing intelligent applications to life—whether it's solving real-world problems or just making something cool. 
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sithu-sharma/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              <a href="mailto:sithusharma@vt.edu"><EmailIcon /></a>
              <a href="https://github.com/sithusharma" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
              <a href="/kshitij-sharma-resume-2025.pdf" download="kshiitj-sharma-resume.pdf"><DescriptionIcon /></a> {/* Resume Download */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
