import React, { useState ,useContext} from 'react';
import HeadingComponent from '../Heading/HeadingComponent';
import InputConponent from '../Input.jsx/InputConponent';
import ButtonComponent from '../Button/ButtonComponent';
import ParagraphLinkComponent from '../ParagraphLink/ParagraphLinkComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function SignupContainerComponent() {

  
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      formData.userName === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.confirmPassword === ''
    ) {
      setErrorMsg('All fields are required');
    } else if (formData.password.length < 8) {
      setErrorMsg('Password is too short (minimum 8 characters)');
    } else if (formData.password !== formData.confirmPassword) {
      setErrorMsg('Passwords do not match');
    } else {
      setErrorMsg('');

      // Perform your API call or further processing here
      try {

        axios
          .post('http://localhost:3006/signup',
            {
              email: formData.email,
              name: formData.userName,
              password: formData.password,
            },
          )
          .then((res) => {
            console.log(res.data.token)
            const accessToken = res.data.token;
            localStorage.setItem('accessToken', accessToken);
      
            navigate('/employees')
          })
          .catch((err) => alert(err));
      } catch (error) {
        alert(error)
      }
    }
  };

  return (
    <div className='container'>
      <HeadingComponent color={'red'} text={'Sign Up'} />
      <InputConponent
        type={'text'}
        placeholder={'Username'}
        onInputChange={(value) => handleInputChange('userName', value)}
      />
      <InputConponent
        type={'text'}
        placeholder={'Email'}
        onInputChange={(value) => handleInputChange('email', value)}
      />

      <InputConponent
        type={'password'}
        placeholder={'Password'}
        onInputChange={(value) => handleInputChange('password', value)}
      />
      <InputConponent
        type={'password'}
        placeholder={'Confirm Password'}
        onInputChange={(value) => handleInputChange('confirmPassword', value)}
      />

      <ButtonComponent
        color={'red'}
        text={'Sign Up'}
        hoverColor={'blue'}
        onClick={handleSubmit}
        size={'15px'}
      />
      <ParagraphLinkComponent
        path={'/login'}
        text={'Log in if already registered'}
        color={'grey'}
      />

      <ParagraphLinkComponent color={'red'} text={errorMsg} />
    </div>
  );
}

export default SignupContainerComponent;
