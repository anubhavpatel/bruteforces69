import React from 'react'
import "../styles/Header.css"

import { HashLink } from 'react-router-hash-link' 
import img  from "../assests/d11logo.png"
const Header = () => {
  return (
 

    <div className='nav'>
       <h1>Bruteforces69.</h1>
       <img src="	https://cdnflags.dream11.com/d11-static-pages/images/left_top_logo.webp
" alt ="img" />
       <main>
      <HashLink to={"/#home"} >Home</HashLink>
     
      <HashLink to={"/#predictions"}>Predictions</HashLink> 
      <HashLink to={"/#brands"} >Brands</HashLink>
      <HashLink to={"/services"} >Services</HashLink>
      

      </main>
    </div>
   
  );
}

export default Header