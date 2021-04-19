const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("homepage");
})
app.get("/users",(req,res)=>{
    res.send("users data accessed")
})
app.listen(3000,()=>{
    console.log("server is running")
})