import React from "react";
import "../styles/Home.css";
import fantasy1 from "../assests/bbl2.png";

import {AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <img src="https://cdnflags.dream11.com/d11-static-pages/images/cricket_players_nov_2022.webp" alt="graphics"
     />
         
        </main>
        <div className="intro">
          <h1>Bruteforces69</h1>
          <p>GAME CHANGER</p>
          <a href="https://dream11.onelink.me/2xAP/abbzvc3i " target="blank">Download the official Dream11 app</a>
          <input className='submit' type="submit" value="Download"/>
    

          </div>
          
         
         
      </div>
      <div className="home2">
        <img src="https://cdnflags.dream11.com/d11-static-pages/images/cricket_players_nov_2022.webp"  alt="graphics" />
        <div>
          <p>
          “Our culture is like a jersey that unites our team within
           Dream Sports. It is also our game plan that will continue 
           to fuel our growth." 
          </p>
        </div>
      </div>
      <div className="home3"  id="about">
        <div >
          <h1>About us</h1>
          <p >
          Dream11 is the world’s largest fantasy sports platform with
           120 million+ users playing fantasy cricket, football, kabaddi,
           basketball, hockey, volleyball, handball, rugby, futsal, American
           football & baseball, on it. Dream11 is the flagship brand of Dream 
            Sports, India’s leading Sports Technology company and has partnerships
           with several national & international sports bodies and cricketers.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div className="home4a">
          <h1>Brands</h1>
         <artical>
          <div style={{animationDelay: "0.3s" , }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay: "0.5s" , }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay: "0.7s" , }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{animationDelay: "0.9s" , }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
         </artical>
        </div>
      </div>
    </> 
  );
};

export default Home;
