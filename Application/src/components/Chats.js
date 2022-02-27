import React, { useRef, useState, useEffect } from "react"
import Logo from "./logo.png"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"

export default function Chats() {
  
    const history = useHistory()
    async function handleLogout() {
        await auth.signOut()
        history.push("/")
      }
    
  return (
    <div >
      <div className='nav-bar'>
        <div className='logo-tab'>
        <img src = {Logo} /> 
        </div>
        
        <div className='logout-tab'>
        <ul>
  <li onClick={handleLogout}> <a href="#about"> Logout </a></li> 
</ul>

      
        </div>
      </div>
      <div class = "subleft"> 
       <img src = "https://www.brookings.edu/wp-content/uploads/2020/12/CUE_2020-end-of-year-piece.jpg" height = "500px" width = "100%"/>
    </div>
    <div class = "butt">
    <a href="https://scholarships2022.netlify.app/" class="button">Apply now</a> 
    </div>
    </div>
  )
}



      