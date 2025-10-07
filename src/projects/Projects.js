import React from 'react'
import '../projects/Projects.css'

export const Projects = () => {
  const projects = [
    {
      title: 'Food Ordering App',
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      desc: `Developed a full-stack food ordering system with Admin and User login.
        Implemented secure login and session handling using JWT.
        Built an Admin dashboard to manage food items (CRUD).
        Designed a responsive User interface for browsing menus, managing carts, and simulating payments.`
    },
    {
      title: 'User Messaging Dashboard',
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      desc: `Created a full-stack admin panel to manage real-time user messages.
        Integrated RESTful APIs for fetch, create, and delete operations.
        Automated email sending using NodeMailer.
        Connected to MongoDB Atlas with Mongoose for efficient data handling.`
    },
    {
      title: 'E-Moy',
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      desc: `Built a full-stack application for managing user details with form-based input.
        Integrated REST APIs for CRUD operations.
        Implemented React state management with useState and useContext.
        Applied Mongoose for database operations and secured credentials with dotenv.`
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="project">Projects</h1>
      <hr />
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h1 className="h1">{project.title}</h1>
          <hr />
          <h2 className="h1">Tech Stack:</h2>
          <hr />
          <ul className="list">
            {project.tech.map((tech, idx) => <li key={idx}>{tech}</li>)}
          </ul>
          <hr />
          <h1 className="h1">Description:</h1>
          <hr />
          <h3 className="h3">{project.desc}</h3>
        </div>
      ))}
    </div>
  )
}
