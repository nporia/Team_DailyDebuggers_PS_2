import React from 'react';
import Button from './button.jsx'
import './navbar.css';
import {Link} from 'react-router-dom'
import Logo from './logo.png'
//import Login from '/Users/nikitaporia/Desktop/microsoft-teams/microsoft-teams/src/components/login/login.jsx'


window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })


function Navbar()
{
    return <div> 
    <header class = "header">
  <a href="#" class="logo"> <img src = {Logo} />
 </a>
  <nav >
    <ul>
      <li><a class = "nav-link nav-link-ltr" href="#">About Us   <i class="fa fa-caret-down"></i></a></li>
      <li><a class = "nav-link nav-link-ltr" href="#">Newsroom   <i class="fa fa-caret-down"></i></a></li>
      <li><a class = "nav-link nav-link-ltr" href="#">Initiatives   <i class="fa fa-caret-down"></i></a></li>
      <li><a class = "nav-link nav-link-ltr" href="#">Schemes</a></li>
      <li><a class = "nav-link nav-link-ltr" href="#"> Education</a></li>
      <li><a class = "nav-link nav-link-ltr" href="#"> Opportunities</a></li>
      <li> <a href = "https://aicteapplication.netlify.app/"> <Button message = "Apply Today" /> </a> </li>
    </ul>

  </nav>

</header>
  

<section class="banner"></section>

   </div>
}

export default Navbar;