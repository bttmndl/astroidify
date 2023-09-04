import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField";
import MainBody from "./components/MainBody";
import RandomButton from './components/RandomButton';

const App: React.FC =  ()=> {
  //taking the input from user input
  const [inputValue, setInputValue] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  
  return (
    <div className="App">
      <span className="heading">Astroidify</span>

      <InputField setInputValue={setInputValue}/>
      <RandomButton flag={flag} setFlag={setFlag} setShowLoader={setShowLoader} setInputValue={setInputValue} />
      <MainBody showLoader={showLoader} setShowLoader={setShowLoader} inputValue ={inputValue}/>
      <h1>1st</h1>
    </div>
  );
}

export default App;
