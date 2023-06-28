import React from 'react'
import './style.css'
function ButtonComponent({color,text,onClick,size}) {

  const handleClick=()=>{
    onClick()
  }

  return (
    <div>
         <span className='button-span' style={{backgroundColor:color,padding:size}} onClick={handleClick} >{text}</span>
    </div>
  )
}

export default ButtonComponent