import React from 'react';
import "../styles/Home.css";
import Typing from '../helpers/Typing';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <Typing />
        <div className="prompt">
          <h3>Aspiring software developer with a love for creation</h3>
        </div>
      </div>
      {/* <div className="socialMedia">
          <a href="https://github.com/sithusharma" target="_blank" rel="noopener noreferrer">
            <GitHub style={{ fontSize: 60, color: "white" }} />
          </a>
          <a href="https://www.linkedin.com/in/sithu-sharma/" target="_blank" rel="noopener noreferrer">
            <LinkedIn style={{ fontSize: 60, color: "white" }} />
          </a>
          <a href="mailto:sithusharma@vt.edu">
            <Email style={{ fontSize: 60, color: "white" }} />
          </a>
        </div> */}
    </div>
  );
}

export default Home;
