import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './style.css'
function ParagraphLinkComponent({path,text,color}) {
  return (
    <div className='login-content'>
        
            <Link style={{color:color}} to={path}>{text}</Link>
    </div>
  )
}

export default ParagraphLinkComponent