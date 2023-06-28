import React,{useRef} from 'react'
import './style.css'


function InputConponent({type,placeholder,onInputChange, onKeyUp}) {

  const inputRef = useRef(null);

  const handleInputValueChange = () => {
    const inputValue = inputRef.current.value;
    onInputChange(inputValue);
  };

  return (
    <div>
    <input
      ref={inputRef}
      className='input-field'
      type={type}
      placeholder={placeholder}
      onChange={handleInputValueChange}
    />
  </div>
  )
}

export default InputConponent