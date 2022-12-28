import React from 'react'
import "../styles/Services.css"
import img1 from "../assests/bbl1.jpg"
import img2 from "../assests/bbl2.png"
import img3 from "../assests/bbl3.jpg"
import img4 from "../assests/bbl4.jpg"
import img5 from "../assests/bbl5.jpg"
import img6 from "../assests/bbl6.jpg"
import img7 from "../assests/bbl7.jpg"
import img8 from "../assests/bbl8.jpg"
import img9 from "../assests/bbl9.jpg"
import img10 from "../assests/bbl10.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
const Services = () => {
  return (
    <div  className='services' >
<Carousel 

  infiniteLoop
  autoPlay
  showStatus={false}
  showArrows={false}
  showThumbs={false}
  interval={1000}>
    <div>
        <img src={img1} alt="Item2" />
      
    </div>
   
    <div>
        <img src={img2} alt="Item2" />
      
    </div>
    <div>
        <img src={img3} alt="Item2" />
      
    </div>
    <div>
        <img src={img4} alt="Item2" />
        
    </div>
    <div>
        <img src={img5} alt="Item2" />
       
    </div>
    <div>
        <img src={img6} alt="Item2" />

    </div>
    <div>
        <img src={img7} alt="Item2" />
     
    </div>
    <div>
        <img src={img8} alt="Item2" />
      
    </div>
    <div>
        <img src={img9} alt="Item2" />
       
    </div>
    <div>
        <img src={img10} alt="Item2" />
        <p className='legend'>abc</p>
    </div>
    </Carousel>
    <h1 style={{textAlign: "center", color: "red" , marginTop: "1rem"}}>Stay Tuned Coming Soon</h1>
    </div>
  );
}

export default Services