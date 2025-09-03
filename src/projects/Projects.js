import React from 'react'
import '../App.css'
export const Projects = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div>
        <h1 className='project'>Projects</h1>
      </div>
      <div className='border'>
        <h1 className='h1'>Food Ordering App</h1>
        <hr />
        <h2 className='h1'>Tech Stack:</h2> 
        <hr />
        <ul className='list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
        <hr />
        <h1 className='h1'>Description:</h1>
        <hr />
        <h3 className='h3'> 
          Developed a full-stack food ordering system with Admin and User login.
          Implemented secure login and session handling using JWT.
          Built an Admin dashboard to manage food items (CRUD).
          Designed a responsive User interface for browsing menus, managing carts, and simulating payments.
        </h3>
      </div>
      <br />
      <br />
      <div className='border'>
        <h1 className='h1'>User Messaging Dashboard</h1>
        <hr />
        <h2 className='h1'>Tech Stack:</h2> 
        <hr />
        <ul className='list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
        <hr />
        <h1 className='h1'>Description:</h1>
        <hr />
        <h3 className='h3'>
          Created a full-stack admin panel to manage real-time user messages.
          Integrated RESTful APIs for fetch, create, and delete operations.
          Automated email sending using NodeMailer
          Connected to MongoDB Atlas with Mongoose for efficient data handling.
        </h3>
      </div>
      <br />
      <br />
      <div className='border'>
        <h1 className='h1'>E-Moy</h1> 
        <hr />
         <h2 className='h1'>Tech Stack:</h2> 
         <hr />
          <ul className='list'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
          <hr />  
          <h1 className='h1'>Description:</h1>
          <hr />
          <h3 className='h3'>
            Built a full-stack application for managing user details with form-based input.
            Integrated REST APIs for CRUD operations.
            Implemented React state management with useState and useContext.
            Applied Mongoose for database operations and secured credentials with dotenv.
          </h3>
      </div>
    </div>
  )
}
