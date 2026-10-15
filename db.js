const mongoose=require("mongoose");


const connectdb=()=>{
    mongoose.connect("mongodb://localhost:27017/product").then(()=>{
        console.log("connecte");
        
    }).catch((errr)=>{
        log(errr)
    })
}
module.exports={connectdb}