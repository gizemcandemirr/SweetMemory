import express from "express";
const port = 5000;


const app= express();
app.get("/", (req,res) =>{
   res.send("hello express");
})

app.listen(port, () =>{
    console.log(`Server lsitening on port ${port}`)
})