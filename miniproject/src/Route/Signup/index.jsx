import React from 'react'
import SignupContainerComponent from '../../Component/SignUpContainer/SignupContainerComponent'
import './style.css'
function SignUp() {
  return (
    <div className='login-container black-bg '>
      <div className='signup-image'></div>
      <div className='login-form'>
        <SignupContainerComponent/>
      </div>
    </div>
  )
}

export default SignUp