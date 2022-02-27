import React from 'react';
import './videocallfeat.css'
import Button from './button';
import Imagee from './image2.gif';

function Videocallfeature(){


   return <div className = "vcf">
    <div class="vcfleft">
       <div class = "subhead">
         Education 
       </div>
       <div class = "subhead2">
       Education or teaching in the broadest sense is<br/> any act  or experience that has a formative effect<br/> on the mind, character or physical ability of an <br/> individual. In its technical sense,  education is the <br/>process by which society deliberately transmits its <br/>accumulated knowledge, skills and values from<br/> one generation to another.<br/>
       </div>
      <div class = "but">  <Button message = "Start for free →" bgcolor = "#078855" color = "white" /> </div>
    </div>
    <div class="vcfright">
     <img height = "300px"  widhth ="400px" src= "https://en.unesco.org/sites/default/files/ict-in-education-prize-cover.jpg"/>
    </div>
   </div>



}

export default Videocallfeature;