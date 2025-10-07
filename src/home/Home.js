import React from 'react'
import { Header } from '../Headers/Header'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import image from '../Assets/photo.jpg'
import '../home/Home.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Home = () => {
    return (
        <div className="home-colorful">
            <div className="home-container-colorful">
                <div className="home-left-colorful">
                    <h2 className="home-intro-colorful">Hello, my name is</h2>
                    <div className="home-divider-colorful"></div>
                    <h1 className="home-name-colorful">Praveen</h1>
                    <h2 className="home-title-colorful">Web Developer</h2>

                    <div className="home-contact-colorful">
                        <div className="home-contact-item-colorful">
                            <MailOutlineIcon className="home-icon-colorful" />
                            <span className="home-contact-text-colorful">praveen.aeropilot@gmail.com</span>
                        </div>
                        <div className="home-contact-item-colorful">
                            <CallIcon className="home-icon-colorful" />
                            <span className="home-contact-text-colorful">9360585253</span>
                        </div>
                    </div>

                    <div className="home-socials-colorful">
                        <a href="https://www.linkedin.com/in/praveen-j19/" className="home-social-link-colorful">LinkedIn</a>
                        <a href="https://github.com/Praveen02003" className="home-social-link-colorful">GitHub</a>
                    </div>
                </div>

                <div className="home-right-colorful">
                    <img src={image} alt="Praveen" className="home-image-colorful" />
                </div>
            </div>
        </div>
    )
}
