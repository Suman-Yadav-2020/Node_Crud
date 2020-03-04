const mongoose=require('mongoose');

let schema=mongoose.Schema;

 var productschema=new schema({
    name:{
        type:String,
       
    },
    code:{
        type:Number,
      
    },
    price:{
        type:Number,
       
    }
});
const model=mongoose.model('product',productschema)
module.exports=model;