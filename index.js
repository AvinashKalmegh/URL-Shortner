const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to url shortner")
})

app.get("/short",(req,res)=>{
    res.send("Hello from short")
})

app.listen(8080, ()=>{
    console.log("running on port 8080");
})