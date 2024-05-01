import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="profile">
                <img src="/pic.jpg" alt="Kshitij Sithu Sharma" className="profile-pic" />
            </div>
            <div className="about">
                <h2>Kshitij Sithu Sharma</h2>
                <div className="prompt">
                    <p>Aspiring software developer with a love for creation</p>
                    <a href="https://www.linkedin.com/in/sithu-sharma/"><LinkedInIcon /></a>
                    <a href="mailto:sithusharma@vt.edu"><EmailIcon /></a>
                    <a href="https://github.com/sithusharma"><GithubIcon /></a>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Programming Languages</h2>
                        <span>
                            Java, JavaScript, Python, C, C++, x86Assembly, HTML/CSS, SQL(MongoDB, PostgreSQL, MySQL)
                        </span>
                    </li>
                    <li className="item">
                        <h2>Technologies/Frameworks</h2>
                        <span>
                            Flask, ReactJS, TensorFlow, Keras, REST APIs, Git, JUnit, Spring, MatLab, SolidWorks, Docker, AWS
                        </span>
                    </li>
                    <li className="item">
                        <h2>Developer Tools</h2>
                        <span>
                            Eclipse, VSCode, GitHub, GitLab, Postman API, MongoDB Compass, Tableau, pgAdmin
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
