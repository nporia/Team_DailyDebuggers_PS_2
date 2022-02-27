import React from "react"
import './Login.css'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() {
  return (
      
    <div id='login-pagee'>
      <div id = 'logincard' > 
      <div class = "subhead"> 
       AICTE
       </div> 
       <br/> 
      <div class = "left">
       
       <p>
       National Scholarships Portal is one-stop solution through <br/> which various services starting from student application,<br/>  application receipt, processing, sanction and disbursal <br/> of various scholarships to Students are enabled. <br/> National Scholarships Portal is taken as Mission <br/> Mode Project under National e-Governance Plan (NeGP)
     
       </p>
      </div>
      <div class = "right">
      <div class='logincardd'>
        <h2> Sign Up For Free</h2>
        <br />
        <div className='login-button google' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined /> Sign In with Google
        </div>
        <br/><br/>

        {/* <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div> */}
 </div> 
      
         
       </div>
      </div>
    </div>
  )
}

