import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
import ScoreCard from './ScoreCard';
import Loader from './Loader';
const LiveScore = () => {
   
    const [myData, setMyData] = useState([]);
    const [myScore, setMyScore] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getMatchInfo = async () => {
          
            const { data } = await axios.get(
              "https://api.cricapi.com/v1/currentMatches?apikey=71e00140-1aeb-4ea8-9797-5d984cd26ad2&offset=0"
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
    {/* {
        myData?.map((i)=> 
                    <ScoreCard    id={i.id}
                    key={i.id}
                    name={i.name}
                    matchType={i.matchType} 
                    status={i.status}/>
        )
      }
       */}
  
 

 
      {myData?.map(i => (
        <div className="board" > 
          
            <>
           <ScoreCard  key ={i.id} name={i.name} matchType={i.matchType} status={i.status} score={i.score} teamInfo={i.teamInfo}/>
            </>
        
        </div>
      ))}
   
   
      </>
    }
</div>
   
  )
}

export default LiveScore