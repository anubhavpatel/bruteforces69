import React from 'react'
import "../styles/ScoreCard.css"
const ScoreCard = ({id,matchType,name,status ,score, teamInfo}) => {
  return (
    <div className='scorecard'>
  
         <div className="score-container">
            <div className="info">
                <div className="inf1">{matchType}.</div>
                <div className="inf2"><p>{name}</p></div>
            </div>
            <div className="t1">
                <div className="img1">{teamInfo[1].shortname}</div>
                <div className="score1">{score[0]?.r}-{score[0]?.w}({score[0]?.o})</div>
            </div>
            <div className="t2">
            <div className="img2">{teamInfo[0].shortname}</div>
                <div className="score2">{score[1]?.r}-{score[1]?.w}({score[1]?.o})</div>
            </div>
            <div className="result">{status}</div>

          <div className="btn">  <button className='refresh'>Refresh</button>
          <button className='refresh'>Scorecard</button>
          </div>
         </div>

   </div>
 
  )
}

export default ScoreCard
