import React from 'react'
import './style.css'
import logo from '../../Data/userLogo.webp'
function ProfileConponent() {
  return (
    <div className='profile-container'>
        
        <div>
          <img style={{width:'200px'}} src={logo} alt="" />
        </div>
         
    </div>
  )
}

export default ProfileConponent