import React from 'react';
import './footer.css';
// import bodyParser from 'body-parser';
import Logo from '../frontpage/logo.png';



function Footer()
{
   return <div class = "footer header"> 
  <div class="content">
    <div class="top">
      <div class="logo-details">
        <span class="logo_name"> <img src = {Logo} /> </span>
      </div>
      <div class="media-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Copyright © 2021 <a href="#">AICTE.</a>All rights reserved</span>
      <span class="policy_terms">
        <a href="#">Privacy policy</a>
        <a href="#">Terms & condition</a>
      </span>
    </div>
  </div>

  </div>


}


export default Footer;