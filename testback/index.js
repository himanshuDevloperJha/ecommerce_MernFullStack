const express = require('express');
const app = express();
const port =8000;

app.get("/",(req,res)=>{

    return res.send("hello there");
});
app.get("/signup",(req,res)=>{

    return res.send("you are visiting signup route");
});
app.get("/login",(req,res)=>{

    return res.send("you are visiting login route");
});



app.listen(port,()=>{
 
    console.log("sever is up and running");
});