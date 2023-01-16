import React from "react";
import "../styles/Home.css";
import fantasy1 from "../assests/bbl2.png";
import vid from "../assests/play_dream11.mp4"
import {AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
          <img src="https://cdnflags.dream11.com/d11-static-pages/images/cricket_players_nov_2022.webp" alt="graphics"
   
   />
          <div className="intro_m">
          <h1>Bruteforces69</h1>
          <p>GAME CHANGER</p>
          <a href="https://dream11.onelink.me/2xAP/abbzvc3i " target="blank">Download the official Dream11 app</a>
          <input className='submit' type="submit" value="Download"/>
    

          </div>
        </main>
        <div className="intro">
          <h1>Bruteforces69</h1>
          <p>GAME CHANGER</p>
          <a href="https://dream11.onelink.me/2xAP/abbzvc3i " target="blank">Download the official Dream11 app</a>
          <input className='submit' type="submit" value="Download"/>
    

          </div>
          
         
         
      </div>
      <div className="btm">
    15 Crore+ users
      </div>
      <div className="home2">
        <div className="top">
        <div className="a"><h3>It's easy to start playing <span>on Dream11</span> </h3></div>
        <div className="b">Play Fantasy Cricket on Dream11 and win big!</div>
        <div className="c"><p>Enter into the thrilling world of Fantasy sports, a strategy-based online
         sports game wherein you can create a virtual team of real players playing in real life matches.
          Create your team to
         win points based on all the players' performance in a live game.</p> </div>
        </div>
        <div className="how_play">
         
          <div className="select">
          <div className="img_d">
            <img src="https://cdnflags.dream11.com/d11-static-pages/images/winning_step_1-22.webp"/>
          </div>
           <h3>1.</h3>
          <h4>SELECT A MATCH</h4>
         <p>Choose an upcoming match that you want to play</p>
          </div>
          <div className="create">
          <div className="img_d">
          <img src="https://cdnflags.dream11.com/d11-static-pages/images/winning_step_new2.webp"/>
          </div>
          <h3>2.</h3><h4>CREATE TEAM</h4>
          <p>Use your skills to pick the right player</p></div>
          <div className="join">
          <div className="img_d">
          <img src="https://cdnflags.dream11.com/d11-static-pages/images/winning_step_new4.webp"/>
          </div>
          <h3>3.</h3><h4>JOIN CONTESTS</h4>
          <p>Choose between different contests and compete</p></div>
        </div>
        
     <div className="top1">
      <div className="a1"><h2>How to <span>Play</span></h2></div>
      <div className="b1"><p>Ready to challenge other sports fans? Watch this video to learn how to play on Dream11 and get started now. Compete with sports fans, make a perfect Dream11
     team with the best combination of players as per your knowledge and skill and win big.</p></div>
      
    <div className="c1"> <video src={vid} width="550" height="300" controls>
     </video></div>
     </div>

        <img className="img_u_d" src="https://cdnflags.dream11.com/d11-static-pages/images/cricket_players_nov_2022.webp"  alt="graphics" />
        <div>
          {/* <p>
          “Our culture is like a jersey that unites our team within Dream Sports. It is also our game plan that will continue 
           to fuel our growth." 
          </p> */}
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
