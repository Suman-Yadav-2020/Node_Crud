const mongoose=require('mongoose');
require('dotenv').config();

 var db=mongoose.connect(process.env.DB_PATH,{useNewUrlParser:true},(err,data)=>{
    if(err){
        console.log("Error connecting database");
    }
    else{
        console.log("DB Connection sucessful")
    }
        })
module.exports=db;