import React from 'react'
import './style.css'
function HeadingComponent({text,color}) {
  return (
    <>
        <h1 style={{color:color}}>{text}</h1>
    </>
  )
}

export default HeadingComponent