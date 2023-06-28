import React from 'react'
import logo from '../../Data/dbzlogo.png'
import './style.css'
import userLogo from '../../Data/userLogo.webp'
import ButtonComponent from '../Button/ButtonComponent'
import { useNavigate } from 'react-router-dom'


function HeaderComponent() {
 const navigate= useNavigate()
 const token=localStorage.getItem('accessToken')

 const hangleLogout=()=>{
  localStorage.removeItem('accessToken')
  navigate('/logout')
 }

  return (
    <div className='header-container'>
      <img className='dbiz-logo' src={logo} alt="dbizlogo" />
      <div className='nav-right-content'>
        <img className='user-logo' src={userLogo} alt="" />
        {
          token ? (
            <ButtonComponent color={"blue"} text={'Log out'} size={'8px'} onClick={hangleLogout} />

          ) :
            <ButtonComponent color={"blue"} text={'Log in'} size={'8px'} onClick={()=>navigate('/login')}/>

        }
      </div>
    </div>
  )
}

export default HeaderComponent