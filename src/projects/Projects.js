import React from 'react';
import projects from '../Jsondata/Projectsdata.json';
import './Projects.css';

export const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <hr className="projects-divider" />

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.desc}</p>

            <h3 className="tech-title">Tech Stack:</h3>
            <ul className="tech-list">
              {project.tech.map((tech, idx) => <li key={idx}>{tech}</li>)}
            </ul>

            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
