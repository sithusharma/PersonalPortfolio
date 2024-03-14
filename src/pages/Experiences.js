import React from 'react';
import '../styles/Experiences.css'; // Assume this CSS file adds styling for the timeline

// Updated timeline data structure with title and content
const timelineData = [
  { year: 2021, title: 'Competitive Robotics', content: 'Assisted with mechanical and automation development' },
  { year: 2022, title: 'Introduction to Java', content: 'Began development with OOP Principles. Developed Tic-Tac-Toe Application.' },
  { year: 2023, title: 'Introduction to Python and More', content: 'Began development in Python, SQL, and JavaScript and learned the basics of Full Stack Development' },
  { year: 2023, title: 'First Internship', content: 'Began first internship as a Market Researcher and Data Analyst' },
  { year: 2024, title: 'Further Education', content: 'Completed first Full Stack Application utilizing three tier system (Front End, Back End, DB)' },
  // Add more events as needed
];

function TimelineItem({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: '#4a7ba7' }}> {/* Updated color */}
          {data.year}
        </span>
        <h3>{data.title}</h3> {/* Added title */}
        <p>{data.content}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="timeline-container">
      {timelineData.map((item, idx) => (
        <TimelineItem data={item} key={idx} />
      ))}
    </div>
  );
}

export default function Experiences() {
  return (
    <div>
      <h2>My Developer Journey</h2>
      <Timeline />
    </div>
  );
}
