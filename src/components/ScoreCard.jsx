import React from 'react'
import "../styles/ScoreCard.css"
const ScoreCard = ({id,matchType,name,status}) => {
  return (
    <div className='scorecard'>
  
         <div className="score-container">
            <div className="info">
                <div className="inf1">{matchType}.</div>
                <div className="inf2"><p>{name}</p></div>
            </div>
            <div className="t1">
                <div className="img1">IND</div>
                <div className="score1">349-8(50)</div>
            </div>
            <div className="t2">
            <div className="img2">NZ</div>
                <div className="score2">337-10(49.2)</div>
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