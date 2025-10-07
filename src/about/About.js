import React from 'react'
import { Header } from '../Headers/Header'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import about from '../Assets/about.jpg'
import '../about/About.css'

export const About = () => {
  return (
    <div className="about-page">
      {/* About Me Card */}
      <div className="about-me">
        <h2>About Me</h2>
        <div className="about-divider"></div>
        <p>
          Hi, I'm Praveen, a passionate Full-Stack Developer with a strong foundation in building modern and user-friendly web applications. 
          I enjoy turning ideas into interactive products by combining clean code, intuitive design, and scalable solutions.
          I hold a B.E. in Electronics and Communication Engineering from Sethu Institute of Technology, 
          and during my journey, I discovered my interest in web development. 
          Since then, I've worked on projects ranging from React-based applications like:
        </p>
        <ul>
          <li>Food Ordering App</li>
          <li>User Messaging Dashboard</li>
          <li>E-Moy</li>
        </ul>
      </div>
    </div>
  )
}
