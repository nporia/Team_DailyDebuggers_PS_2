const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/applicants", {
}).then(() => {
    console.log('connection succesful');
}).catch((e) => {
    console.log(e);
})