
import React from 'react'
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiOutlineMail

} from "react-icons/ai"


import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Bruteforces<span>69</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">About</a>
				
					<a href="#">Brands</a>
				
					<a href="#">Services</a>
					
					<a href="#">Contact</a>
					
				</p>

				<p class="footer-company-name">bruteforces69algo at  @dream11</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Game changer</span>Sujanganj, Juanpur UP</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 6391857675</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCcTtsqXzTnnGFrMlBhQKCHVcqBCzPRXLgtJfJHSPfHvzLRCwqQcNrBLkJQdjbZtdNflV"  target="blank">anubhavpatel6391@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the Bruteforces69</span>
          Dream11 is the world’s largest fantasy sports platform with 120 million+ users playing fantasy cricket, football, kabaddi, basketball, hockey, volleyball, handball, rugby, futsal, American football & baseball, on it.
				</p>

				<div class="footer-icons">

					<a href="https://www.facebook.com/anubhav.patel.71465" target="blank"><AiFillFacebook/></a>
					<a href="https://www.instagram.com/anubhav._patel/" target="blank"> <AiFillInstagram/></a>
					<a href="https://github.com/anubhavpatel" target="blank"> <AiFillGithub/></a>
					<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCcTtsqXzTnnGFrMlBhQKCHVcqBCzPRXLgtJfJHSPfHvzLRCwqQcNrBLkJQdjbZtdNflV" target="blank"><AiOutlineMail/></a>

				</div>

			</div>

		</footer>
    </div>
  )
}

export default Footer