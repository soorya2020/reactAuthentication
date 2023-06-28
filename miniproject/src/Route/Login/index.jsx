import React from 'react'
import LoginContainerConponent from '../../Component/LoginContainer'
import './style.css'
function Login() {
  return (
    <div className='login-container '>
      <div className='login-image'></div>
      <div className='login-form'>
        <LoginContainerConponent />
      </div>
    </div>
  )
}

export default Login