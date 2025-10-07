import React from 'react'
import '../contacts/Contacts.css'
import contactlogo from '../Assets/contact.jpg'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contact-container">
        <div className="contact-image-wrapper">
          <div className="neon-rhombus"></div>
          <img src={contactlogo} alt="contact" className="contactimage" />
        </div>
        <div className="contact-info">
          <h1>Contact Me</h1>
          <h3>Location: Madurai, India</h3>
          <h3>Email: praveen.aeropilot@gmail.com</h3>
          <h3>Phone: +91 93605 85253</h3>

          <h2>Social Links</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/praveen-j19/">LinkedIn</a>
            <a href="https://github.com/Praveen02003">GitHub</a>
          </div>

          <h3>"Feel free to reach out for collaboration, job opportunities, or just to say hi.”</h3>

          <div className="contact-form">
            <TextField variant="outlined" placeholder="Your message" fullWidth />
            <Button variant="contained" id="send-button">Send</Button>
          </div>
        </div>
      </div>
    </div>

  )
}
