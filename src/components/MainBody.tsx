import React, {useState, useEffect} from 'react'
import "./styles.css";
import axios from 'axios';
import LoadingPage from './LoadingPage';

type AstroidData = {
    id : string,
    name : string,
    nasa_jpl_url: string,
    is_potentially_hazardous_asteroid: boolean,
};

interface Props {
  inputValue : string,
}

const API_KEY = "2f5IdnsL4eoPjdcERC1vvB1rbF8VDq5Deh4cc2XQ";


const MainBody: React.FC<Props> = ({inputValue}) => {
    const [astroidData, setAstroidData] = useState<AstroidData>();
    const [showLoader, setShowLoader] = useState<boolean>(false);
    

    //fetching the particular astroid data which user typed 
    useEffect(() => {
        async function getData(){
            setShowLoader(true);
            const dataResponse = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${inputValue}?api_key=${API_KEY}`);
            setAstroidData(dataResponse.data);
            setShowLoader(false);
        } 

        if(inputValue)getData();

    }, [inputValue]);

    return (
        <>
            <br /><br /><br />

            {
                showLoader ? <LoadingPage/> :
                    astroidData && 
                    <div style={{width:"100%"}} className='mainBody'>
                        <div className='mainBody_inner'>
                            <h1><span className='innerMainspan'>Astroid Name</span></h1>
                            <h2 className='innerMainspanValue'>{astroidData?.name}</h2>
                        </div>
                        <div className='mainBody_inner'>
                            <h1><span className='innerMainspan'>Find More Info </span></h1>
                            <a href={astroidData?.nasa_jpl_url} target="_blank"/> <h2 className='innerMainspanValue'>{astroidData?.nasa_jpl_url}</h2>
                        </div>
                        <div className='mainBody_inner'>
                            <h1><span className='innerMainspan'>Is this Asotroid Hazardous?</span></h1>
                            <h2 className='innerMainspanValue'>{astroidData?.is_potentially_hazardous_asteroid?(<span>YES</span>):(<span>NO</span>)}</h2>
                        </div>
                    </div>
                
            }
        </>
    );
}


export default MainBody