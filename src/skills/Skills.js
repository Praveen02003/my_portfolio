import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../App.css'
import htmllogo from '../Assets/html.jpg'
import csslogo from '../Assets/CSS3.jpg'
import jslogo from '../Assets/js.jpg'
import pythonlogo from '../Assets/Python-Logo.jpg'
import reactlogo from '../Assets/React-Symbol.png'
import nodelogo from '../Assets/node.jpg'
import expresslogo from '../Assets/express.png'
import mongdblogo from '../Assets/mongo.png'
export const Skills = () => {
  return (
    <div className='logo'>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h1 className='skill'>Skills</h1>
      <hr />
      <div className='logo1'>
        <div className='logo2'>
          <img src={htmllogo} alt="html" className='skilllogo'/>
          <h1 className='h1'>HTML5</h1>
          <h3 className='h3'>Semantic and structured markup for responsive, accessible websites.</h3>
        </div>
        <div className='logo2'>
          <img src={csslogo} alt="css" className='skilllogo'/>
          <h1 className='h1'>CSS3</h1>
          <h3 className='h3'>Modern layouts and styling with Flexbox, Grid, and animations.</h3>
        </div>
        <div className='logo2'>
          <img src={jslogo} alt="javascript" className='skilllogo'/>
          <h1 className='h1'>JavaScript</h1>
          <h3 className='h3'>Primary language for frontend and backend development (Node.js).</h3>
        </div>
        <div className='logo2'>
          <img src={pythonlogo} alt="python" className='skilllogo'/>
          <h1 className='h1'>Python</h1>
          <h3 className='h3'>solving logical problems</h3>
        </div>
        <div className='logo2'>
          <img src={reactlogo} alt="react" className='skilllogo'/>
          <h1 className='h1'>React.js</h1>
          <h3 className='h3'>Creating reusable components, managing state with hooks (useState, useContext), and building responsive UIs.</h3>
        </div>
        <div className='logo2'>
          <img src={nodelogo} alt="node" className='skilllogo'/>
          <h1 className='h1'>Node.js</h1>
          <h3 className='h3'>Server-side development, API integration, and managing real-time communication.</h3>
        </div>
        <div className='logo2'>
          <img src={expresslogo} alt="express" className='skilllogo'/>
          <h1 className='h1'>Express.js</h1>
          <h3 className='h3'>Building RESTful APIs, handling middleware, and implementing authentication (JWT).</h3>
        </div>
        <div className='logo2'>
          <img src={mongdblogo} alt="mongodb" className='skilllogo'/>
          <h1 className='h1'>MongoDB</h1>
          <h3 className='h3'>Experience with CRUD operations, schema design, and cloud hosting using MongoDB Atlas.</h3>
        </div>
      </div>
    </div>
  )
}
