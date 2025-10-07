import React from 'react'
import '../Headers/Headers.css'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="header-colorful">
      <div className="header-container-colorful">
        <h3 className="header-logo-colorful" onClick={() => navigate('/')}>Praveen</h3>
        <nav className="header-nav-colorful">
          <h3 className="nav-item-colorful" onClick={() => navigate('/')}>Home</h3>
          <h3 className="nav-item-colorful" onClick={() => navigate('/about')}>About</h3>
          <h3 className="nav-item-colorful" onClick={() => navigate('/skills')}>Skills</h3>
          <h3 className="nav-item-colorful" onClick={() => navigate('/projects')}>My Projects</h3>
          <h3 className="nav-item-colorful" onClick={() => navigate('/contact')}>Contacts</h3>
        </nav>
      </div>
    </header>
  )
}
