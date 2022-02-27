import React from 'react';
import './coverpage.css';
import Button from './button';
import Ui from './ui';
import Cvr from './cvrpg.png';
import Imag from './imag.gif';

function Coverpage()
{
    
    return <div> 
    <div class = "cover"> 
    <div class="alignleft">Welcome to AICTE <br/>
    <img id = "cvr" src = {Cvr}/> </div>
    <div class="alignright">
    All India Council for Technical Education (AICTE) was <br/>  set up in November 1945 as a national-level Apex <br/> Advisory Body to conduct a survey on the <br/> facilities available for technical education<br/>  and to promote development in the country<br/>  in a coordinated and integrated manner.
    <br/> <br/>
    <Button message = "About Us →" bgcolor = "#078855" color = "white" /> 
    <Button  message = "Contact Us →" bgcolor = "black" color = "white" bordercolor = "white"/>
    </div>
    <br/>
    </div>
    <div class = "bottom"> 
    <img src = {Imag}/>
    </div>
    </div>
   

}

export default Coverpage;