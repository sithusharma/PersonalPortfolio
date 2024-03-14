import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://instagram.com"><InstagramIcon /></a>
            <a href = "https://github.com/sithusharma"><GithubIcon/></a>
            <a href="https://www.linkedin.com/in/sithu-sharma/"><LinkedInIcon/></a>
        </div>
        <p> &copy; 2024 Developed by Kshitij Sharma</p>
    </div>
  );
}

export default Footer;