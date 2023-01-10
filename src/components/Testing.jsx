import React from 'react'
import "../styles/Testing.css"
import img from "../assests/bbl1.jpg"
const Testing = () => {
    const awards=[
        {name: "anubhav", age: 12, email: "a@", mobile:123},
        {name: "anubhav", age: 12, email: "a@", mobile:123},
    
        {name: "anubhav", age: 12, email: "a@", mobile:123},
    
        {name: "anubhav", age: 12, email: "a@", mobile:123}
    
      ]
       
      awards.map((item)=>{
        console.warn("awards is",item);
      })
  return (
    <div className='card'>
    <div className='maincard'>
{/* {awards.map((data)=>
<h1>award is :{data.email}</h1>
)} */} 

<div className='card1'>
  <p>Big bash leauge</p>

</div>
<div className='card2'>
<img src={img} alt="John" />
<img src={img} alt="John" />

</div>
<div className='card3'>
 mega
    
</div>
</div> 
</div>

  )
}

export default Testing