import React from "react";
import "../styles/Project.css";
import { ProjectList } from "../helpers/ProjectList";

function ProjectItem({ project }) {
  return (
    <div className="projectItem">
      {/* Project Image */}
      <div
        className="bgImage"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      {/* Project Content */}
      <div className="projectItem-content">
        <h3>{project.name}</h3> {/* Project Name */}
        <p className="skills"> {project.skills}</p> {/* Skills */}
        
        {/* Project Link (only if URL is provided) */}
        {project.url && (
          <a
            href={project.url}
            className="projectLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="projects">
      <h2 className="projectTitle">Projects</h2>
      <div className="projectContainer"> {/* New wrapper for the box */}
        <div className="projectList">
          {ProjectList.map((project, idx) => (
            <ProjectItem project={project} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
