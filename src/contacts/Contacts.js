import React from 'react'
import '../App.css'
import contactlogo from '../Assets/contact.jpg'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Contacts = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div class="container">
        <div class="row">
          <div class="col">
            <img src={contactlogo} alt="contact" className='contactimage'/>
          </div>
          <div class="col">
            <h1 className='h1'>Contact Details</h1>
            <h3 className='h3'>Location: Madurai, India</h3>
            <h3 className='h3'>Email: praveen.aeropilot@gmail.com</h3>
            <h3 className='h3'>Phone: +91 93605 85253</h3>  
            <h1 className='h1'>Socialmedia Links</h1>
            <h2 className='h2'><a href="https://www.linkedin.com/in/praveen-j19/">LinkedIn</a></h2>
            <h2 className='h2'><a href="https://github.com/Praveen02003">GitHub</a></h2>
            <h3 className='h3'>"Feel free to reach out for collaboration, job opportunities, or just to say hi.”</h3>
            <div id='input'>
              <TextField variant="outlined" type="text" />
            </div>
            <br />
            <Button variant="contained" id='button'>Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
