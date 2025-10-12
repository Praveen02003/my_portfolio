import React from 'react'
import { Header } from '../Headers/Header'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import about from '../Assets/about.jpg'
import '../about/About.css'
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate=useNavigate()
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
          <li>User panel</li>
          <li><a href="https://foodcart-frontend-user.vercel.app/">SmartCart — Personalized E-Commerce Platform</a></li>
          <li><a href="https://amazon-user-frontend.vercel.app/">TasteNow — Intelligent Food Ordering Platform</a></li>
          <li>Admin panel</li>
          <li><a href="https://foodcart-frontend-y24b.vercel.app/">SmartCart Admin — Inventory & Sales Management System</a></li>
          <li><a href="https://amazon-admin-frontend.vercel.app/">TasteNow Admin — Restaurant Operations & Analytics Dashboard</a></li>
        </ul>
      </div>
    </div>
  )
}
