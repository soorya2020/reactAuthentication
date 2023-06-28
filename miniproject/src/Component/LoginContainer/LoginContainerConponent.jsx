import React, { useState ,useContext} from 'react'
import './style.css'
import ButtonComponent from '../Button/ButtonComponent'
import InputConponent from '../Input.jsx/InputConponent'
import ParagraphLinkComponent from '../ParagraphLink/ParagraphLinkComponent'
import HeadingComponent from '../Heading/HeadingComponent'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




function LoginContainerConponent() {
  



  //login state
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  //setting values to state
  const getUserName = (value) => {
    setemail(value)
    console.log(email)
  };
  const getPassword = (value) => {
    setPassword(value)
    console.log(password)
  }

  //login form validation
  const validate = () => {
 
    if (email === '' || password === '') {
      setErrorMsg('Please enter both username and password');
    } else if(password.length<7) {
      setErrorMsg('password lest is short(min 8)');
    }else{
      setErrorMsg("")
    }
  };

  const handleSubmit=async()=>{
    validate()
    try {
      if(errorMsg===""){
debugger
        const response=await axios.post('http://localhost:3006/signin',{email,password})
        
        if(response.status===201){
          const accessToken = response.data.token;
          localStorage.setItem('accessToken', accessToken);
          navigate('/employees');
        }else{
          alert("error occured")
        }
      }else{
       console.log(errorMsg,'asdf');
       debugger
        // alert('invalid credentials')
        setErrorMsg('')
      }
    } catch (error) {
      console.log(error.message);
      setErrorMsg("Login failed. Please check your credentials")
    }
  }
  
  
  return (
    <div className='container'>
      
      <HeadingComponent color={'blue'} text={'Login'}/>

      <InputConponent type={'text'} placeholder={'Email'} onInputChange={getUserName} />

      <InputConponent type={'password'} placeholder={'Password'} onInputChange={getPassword} />

      <ButtonComponent color={"blue"} text={'Login'} onClick={handleSubmit} size={'15px'}/>

      <ParagraphLinkComponent path={'/signup'} text={'Register to login'} color={'grey'}/>
      
      <ParagraphLinkComponent color={"red"} text={errorMsg}/>

    </div>
  )
}

export default LoginContainerConponent