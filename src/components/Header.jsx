import React from 'react'
import "../styles/Header.css"

import { HashLink } from 'react-router-hash-link' 
import img  from "../assests/d11logo.png"
const Header = () => {
  return (
 

    <div className='nav'>
       <h1>Bruteforces69.</h1>
       <img src={img} alt ="img" />
       <main>
      <HashLink to={"/#home"} >Home</HashLink>
     
      <HashLink to={"/#about"}>About</HashLink> 
      <HashLink to={"/#brands"} >Brands</HashLink>
      <HashLink to={"/services"} >Services</HashLink>
      <HashLink to={"/contact"}>Contact</HashLink>

      </main>
    </div>
   
  );
}

export default Header