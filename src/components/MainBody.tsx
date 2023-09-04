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


<<<<<<< HEAD
const MainBody: React.FC<Props> = ({showLoader, setShowLoader, inputValue}) => {
    const [astroidData, setAstroidData] = useState<AstroidData | null>(null);
    const [error, setError] = useState<string | null>(null);
=======
const MainBody: React.FC<Props> = ({inputValue}) => {
    const [astroidData, setAstroidData] = useState<AstroidData>();
    const [showLoader, setShowLoader] = useState<boolean>(false);
>>>>>>> parent of e219dac (showLoader button click delay bug fixed)
    

    //fetching the particular astroid data which user typed 
    useEffect(() => {
<<<<<<< HEAD
        async function getData() {
            try {
                const response = await axios.get(
                `https://api.nasa.gov/neo/rest/v1/neo/${inputValue}?api_key=${API_KEY}`
                );
                setAstroidData(response.data);
                setShowLoader(false);
                setError(null);
            } catch (error) {
                console.error(error);
                setError("An error occurred while fetching the asteroid data.");
                setShowLoader(false);
            }
        }
=======
        async function getData(){
            setShowLoader(true);
            const dataResponse = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${inputValue}?api_key=${API_KEY}`);
            setAstroidData(dataResponse.data);
            setShowLoader(false);
        } 
>>>>>>> parent of e219dac (showLoader button click delay bug fixed)

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