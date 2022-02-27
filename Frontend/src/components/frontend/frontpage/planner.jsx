import React from 'react';
import './videocallfeat.css'
import './planner.css'
import Button from './button';
import Imgg from './imgg.png';

function Dayplanner(){


   return <div className = "vcf">
    <div class="vcfleft">
       <div class = "subhead">
        Statistics
       </div>
       <div class = "subhead2">
       AICTE Approved Institutes for the <br/> Academic Year: 2021-2022 -
       </div>
      <div class = "but">  <Button id = "statbut" message = "Start for free →" bgcolor = "#078855" color = "white" /> </div>
    </div>
    <div class="vcright">
    <img height = "500px" width = "770px" src = {Imgg} />
    </div>
   </div>



}

export default Dayplanner;