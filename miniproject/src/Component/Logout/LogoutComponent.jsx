import React, { useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
function LogoutComponent() {

    const navigate=useNavigate()

    useEffect(() => {
        setTimeout(() => {      
            navigate('/login')
        }, 3000);
    }, []);

  return (
    <div>
        <h2>Thank you, see you again</h2>
        <p>......Logging out</p>
        <Loading/>
    </div>
  )
}

export default LogoutComponent