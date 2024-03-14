import React from 'react'
import ProjectItem from "../components/ProjectItem";
import movie from '../assets/movie.jpeg'
import emotion from '../assets/emotion.jpeg'
import plane from '../assets/plane.jpeg'
import web from '../assets/web.jpeg'
import weather from '../assets/weather.jpeg'
import find from '../assets/find.jpg'
import "../styles/Project.css"
import {ProjectList} from "../helpers/ProjectList"

function Project() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Project;