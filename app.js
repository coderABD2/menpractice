// const router=require("./prodrouter.js")
const{connectdb}=require("./db")
const express=require("express");
const router = require("./router/productrouter");
const app=express();
connectdb();
app.use(express.json());
app.use("/",router);


app.listen(4005,()=>{
    console.log("running....");
    
})