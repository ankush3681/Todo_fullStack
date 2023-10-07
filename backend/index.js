const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Connection done");
})

app.listen(process.env.port,()=>{
    console.log(`server is running on port ${process.env.port}`);
})