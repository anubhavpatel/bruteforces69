import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
import ScoreCard from './ScoreCard';
import Loader from './Loader';
const LiveScore = () => {
   
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getMatchInfo = async () => {
          
            const { data } = await axios.get(
             "https://api.cricapi.com/v1/currentMatches?apikey=b0df1f36-e27c-4c37-866e-4ae50f5768ff&offset="
            );
            setMyData(data.data);
           
            console.log(data.data)
               setLoading(false);
     
        };
        getMatchInfo();
      },[]);
    
  return (
<div>
    { loading ? <Loader/> : <>
    {
        myData?.map((i)=> 
                    <ScoreCard    id={i.id}
                    key={i.id}
                    name={i.name}
                    matchType={i.matchType} 
                    status={i.status}/>
        )
      }</>
    }
</div>
   
  )
}

export default LiveScore