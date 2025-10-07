import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../skills/Skills.css'
import htmllogo from '../Assets/html.jpg'
import csslogo from '../Assets/CSS3.jpg'
import jslogo from '../Assets/js.jpg'
import pythonlogo from '../Assets/Python-Logo.jpg'
import reactlogo from '../Assets/React-Symbol.png'
import nodelogo from '../Assets/node.jpg'
import expresslogo from '../Assets/express.png'
import mongdblogo from '../Assets/mongo.png'

export const Skills = () => {
  const skills = [
    { img: htmllogo, title: 'HTML5', desc: 'Semantic and structured markup for responsive, accessible websites.' },
    { img: csslogo, title: 'CSS3', desc: 'Modern layouts and styling with Flexbox, Grid, and animations.' },
    { img: jslogo, title: 'JavaScript', desc: 'Primary language for frontend and backend development (Node.js).' },
    { img: pythonlogo, title: 'Python', desc: 'Solving logical problems and scripting.' },
    { img: reactlogo, title: 'React.js', desc: 'Creating reusable components, managing state, building responsive UIs.' },
    { img: nodelogo, title: 'Node.js', desc: 'Server-side development, API integration, and real-time apps.' },
    { img: expresslogo, title: 'Express.js', desc: 'Building RESTful APIs, middleware, and authentication.' },
    { img: mongdblogo, title: 'MongoDB', desc: 'CRUD operations, schema design, and cloud hosting with Atlas.' },
  ];

  return (
    <div className="skills-page">
      <h1 className="skill">Skills</h1>
      <hr />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.title} className="skilllogo" />
            <h1 className="h1">{skill.title}</h1>
            <h3 className="h3">{skill.desc}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
