const express = require("express");
const path = require("path");
const app = express();
const hbs= require("hbs");
require("./db/conn");
const Register  = require("./models/registers");
const port = process.env.PORT || 3001;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.get("/", (req, res)=> {

    res.render("register")
});
app.get("/register", (req,res) =>{
    res.render("register");
})
app.post("/register", async(req,res) =>{
   try {

    const registerapplicant = new Register({
        name : req.body.name,
        phonenumber: req.body.phonenumber,
        gender:req.body.gender,
        email: req.body.email,
        edu: req.body.edu,
        tenth: req.body.tenth,
        twelfth: req.body.twelfth,
        bach: req.body.bach,
        achieve: req.body.achieve,


    })
    const registered = await registerapplicant.save();
    res.status(201).render(register);
   }
   catch(error){
       res.status(400).send(error);
   }
}
);

app.listen(port, () => {
    console.log('server is runnin');
})