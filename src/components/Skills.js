import React from "react";
import "../styles/Skills.css";

// Icon Imports (You can use something like react-icons or your own images if you prefer)
import { FaJava, FaPython, FaJs, FaCuttlefish } from "react-icons/fa"; // C++ icon approximation
import { SiMysql, SiReact, SiAngular, SiFlask, SiSpring, SiTensorflow } from "react-icons/si";
import { FaAws, FaDocker, FaLinux } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import {VscAzure} from "react-icons/vsc"

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "C++", icon: <FaCuttlefish /> }, // Could also use a custom image if you prefer
      { name: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Spring", icon: <SiSpring /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Azure", icon: <VscAzure /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Jira", icon: <SiJira /> },
    ],
  },
];

function Skills() {
  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">Skills</h2>
      <div className="skillsContainer">
        {skillsData.map((skillCategory, index) => (
          <div className="skillsCard" key={index}>
            <h3 className="skillsCategory">{skillCategory.category}</h3>
            <ul className="skillsList">
              {skillCategory.items.map((item, idx) => (
                <li key={idx} className="skillItem">
                  <span className="skillIcon">{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
