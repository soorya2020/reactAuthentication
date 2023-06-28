import React, { useEffect,useState } from 'react'
import Profile from '../../Component/Profile'
import EmployeViewComponent from '../../Component/employeView/employeViewComponent'
import './style.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ViewEmployee() {

  const employeeId=useParams()
  const [employee, setEmployee] = useState({});


  useEffect(()=>{
    const fetchUserData=async()=>{
      try {
        const accessToken = localStorage.getItem('accessToken');

        const data=await axios.get(`http://localhost:3006/api/users/${employeeId.id}`,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        
        setEmployee(data.data)
      } catch (error) {
        alert(error.message)
      }
    }
   
    fetchUserData()
  },[])
  return (
    <div className='view-employee-container'>
        <Profile/>
        <EmployeViewComponent employee={employee}/>
    </div>
  )
}

export default ViewEmployee