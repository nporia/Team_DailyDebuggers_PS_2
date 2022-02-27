const mongoose = require("mongoose");

const applicantschema = new mongoose.Schema({
    name:{
        type:String,
      
    },
   
    phonenumber: {
        type:Number,
       
    },
    gender:{
        type:String, 
       
    },
    email:{
        type:String,
        
    },
    edu:{
        type:String,
        
    },
    tenth:{
        type:String,
       
    },
    twelfth:{
        type:String,
        
    },
    bach:{
        type:String,
        
    },
   
    achieve:{
        type:String,
       
    }
   
})
const Register = new mongoose.model("Register",applicantschema);

module.exports  = Register;
