import React from 'react'
import { Header } from '../Headers/Header'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import image from '../Assets/photo.jpg'
import '../App.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Home = () => {
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
                    <h2 id='h2'>Hello, my name is</h2>
                    <hr id='hr'/>
                    <h1 id='name'>Praveen</h1>
                    <h2 id='passion'>Web Developer</h2>
                    <div id='mail'>
                        <h2 className='icon'><MailOutlineIcon/></h2>
                        <h2 id='mail1'>praveen.aeropilot@gmail.com</h2>
                    </div>
                    <div id='number'>
                        <h2 className='icon'><CallIcon/></h2>
                        <h2 id='number1'>9360585253</h2>
                    </div>
                    <h2 className='h21'><a href="https://www.linkedin.com/in/praveen-j19/">LinkedIn</a></h2>
                    <h2 className='h21'><a href="https://github.com/Praveen02003">GitHub</a></h2>
                </div>
                
                <div className="col">
                    <div>
                        <div>
                            <img src={image} alt="img" id='image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}
