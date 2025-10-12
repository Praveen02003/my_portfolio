import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Footer/Footer.css'
export const Footer = () => {
    const navigate=useNavigate()
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h2 className="footer-logo" onClick={() => navigate('/')}>Praveen</h2>
                <p className="footer-tagline">Building Digital Experiences with Code & Creativity</p>

                <div className="footer-socials">
                    <a href="https://github.com/Praveen02003" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/praveen-j19/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:praveen.aeropilot@gmail.com">Email</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Praveen. All Rights Reserved.</p>
            </div>
        </footer>

    )
}
