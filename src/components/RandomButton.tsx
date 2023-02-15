import React, { useEffect, useState } from 'react'
import axios from "axios";
import './styles.css';

interface Props {
  flag: boolean,
  setFlag: React.Dispatch<React.SetStateAction<boolean>>,
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>,
  setInputValue : React.Dispatch<React.SetStateAction<string>>,
}


const API_KEY = "2f5IdnsL4eoPjdcERC1vvB1rbF8VDq5Deh4cc2XQ";

const RandomButton: React.FC <Props> = ({flag, setFlag, setShowLoader, setInputValue}) => {

    //fetching the random astroid id 
    useEffect(() => {
        async function getData(){
            const dataResponse = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`);
            let idx = Math.floor(Math.random() * 19);
            setInputValue(dataResponse.data.near_earth_objects[idx].id);
            setFlag(pre=>pre=false);
        } 
        if(flag){
            getData();
        }

    }, [flag]);
    
    

    return (
        <button className='input_button_random' onClick={()=>{setFlag(true); setShowLoader(true)}}>Random Astroid</button>
    )
}

export default RandomButton