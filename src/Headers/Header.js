import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
export const Header = () => {
  const navigate=useNavigate()
  return (
    <div id='head'>
        <div id='list1'>
            <h3>Praveen</h3>
            <div id='list2'>
                <h3 onClick={()=>{navigate('/')}}>Home</h3>
                <h3 onClick={()=>{navigate('/about')}}>About</h3>
                <h3 onClick={()=>{navigate('/skills')}}>Skills</h3>
                <h3 onClick={()=>{navigate('/projects')}}>My Projects</h3>
                <h3 onClick={()=>{navigate('/contact')}}>Contacts</h3>
            </div>
        </div>
    </div>
  )
}
