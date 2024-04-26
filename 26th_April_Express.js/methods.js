const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Home Page");
})

app.get('/about',(req,res)=>{
    res.status(200).send("About page");
})

app.get('*',(req,res)=>{
    res.status(404).send("Page Not Found");
})

app.listen(3001,()=>{
    console.log("Server is Listening");
})