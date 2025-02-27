import React from 'react';
import "../styles/Experiences.css"; 

const experienceData = [
  { year: 2023, title: 'Data Analyst Intern', content: 'Utilized data analytics to evaluate market expansion opportunities, applying tools such as Excel, Tableau, and SQL.' },
  { year: 2024, title: 'Software Engineering Intern', content: 'Developed cross-functional document management services for diverse clients as part of a development team.' },
  { year: 2025, title: 'Student Researcher', content: 'Helping to develop and fix an AI-powered reading platform, enhancing parent-child engagement using conversational AI.' },
];

function ExperienceItem({ data }) {
  return (
    <a 
      href="https://www.linkedin.com/in/sithu-sharma/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="experience-item"
    >
      <div className="experience-item-content">
        <span className="experience-tag">{data.year}</span>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
      </div>
    </a>
  );
}


function Experiences() {
  return (
    <div>
      <h2 className="title">My Developer Journey</h2>
      <div className="experience-container">
        {experienceData.map((item, idx) => (
          <ExperienceItem data={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
