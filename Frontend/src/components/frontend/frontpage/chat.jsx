import React from 'react';
import './chat.css'
import Button from './button';

function Feat(){


   return <div className = "chat">
    <div class="chatleft">
    
    <img height = "450px" width = "600px" src = "https://www.unicef.org/sites/default/files/styles/hero_desktop/public/UN0284179.jpg?itok=8Ipx1PGE" />
    </div>
    <div class="chatright">
    <div class = "subhead">
         Opportunities 
    </div>
    <div class = "subhead2 ">
        
The word student is etymologically derived <br/> through Middle English from the Latin <br/> second-type  conjugation verb studēre,<br/> meaning  "to direct one's zeal at"; hence <br/> a student could be described as<br/>  "one who directs zeal at a subject". <br/> In its widest use, student is used<br/>  for anyone who is learning.
    </div>
    <div class = "but2">  <Button message = "Start for free →" bgcolor = "white" color = "black" /> </div>
    </div>
    <br/>
   </div>



}

export default Feat;