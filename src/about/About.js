import React from 'react'
import { Header } from '../Headers/Header'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import about from '../Assets/about.jpg'
import '../App.css'
export const About = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <hr />
        <div className="container">
          <div className="row">
              <div className="col">
                <img src={about} alt="img" id='image1'/>
              </div>
              <div className="col">
                <h1 className='about'>About</h1> 
              </div>
          </div>
        </div>
        <div>
          <h1 className='about1'>About Me</h1> 
          <hr />
          <h2 className='about2'>
          Hi, I'm Praveen, a passionate Full-Stack Developer with a strong foundation in building modern and user-friendly web applications. 
          I enjoy turning ideas into interactive products by combining clean code, intuitive design, and scalable solutions.
          I hold a B.E. in Electronics and Communication Engineering from Sethu Institute of Technology, 
          and during my journey, I discovered my interest in web development. 
          Since then, I've worked on projects ranging from React-based applications like
          <ul className='list1'>
            <li>Food Ordering App</li>
            <li>User Messaging Dashboard</li>
            <li>E-Moy</li>
          </ul>
          </h2>
          <hr />
        </div>
    </div>
  )
}
