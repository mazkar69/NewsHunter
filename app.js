const express = require("express");
const app = express();
const ejs = require('ejs');
const path = require("path")
const port = process.env.PORT || 5000;

// Setting the static file
app.use("/static",express.static("static"))

// Setting the template engine
app.set("view engine",'ejs')
app.set("views",path.join(__dirname,"/views"));


// End point

app.get("/",(req, res)=>{
    res.render("index");


})


app.listen(port,()=>{
    console.log(`Running at port ${port}`)
})
