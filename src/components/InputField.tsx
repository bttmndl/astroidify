import React, { useState} from 'react'
import './styles.css';

interface Props {
  setInputValue : React.Dispatch<React.SetStateAction<string>>,
}

const InputField: React.FC <Props> = ({setInputValue}) => {

  //taking the input locally from the user
  const [inputLocal, setInputLocal] = useState<string>("");

  return (
    <form className='input'>
        <input type="text" placeholder='Enter Astroid Id' className='input_box' onChange={(e)=>setInputLocal(e.target.value)}/>
        <button disabled={inputLocal===""} className='input_button' onClick= {(e)=>{e.preventDefault();setInputValue(inputLocal)}}>Find</button>
    </form>
  )
}

export default InputField;