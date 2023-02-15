import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField";
import MainBody from "./components/MainBody";
import RandomButton from './components/RandomButton';

const App: React.FC =  ()=> {
  //taking the input from user input
  const [inputValue, setInputValue] = useState<string>("");
  
  return (
    <div className="App">
      <span className="heading">Astroidify</span>

      <InputField setInputValue={setInputValue}/>
      <RandomButton setInputValue={setInputValue} />
      <MainBody inputValue ={inputValue}/>
    </div>
  );
}

export default App;
