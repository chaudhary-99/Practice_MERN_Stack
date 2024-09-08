const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
      name:{
        type:String,
        require:true,
      },
      image:{
        type:String,
        require:true,
      },
      price:{
        type:Number,
        required:true,
      },
      discount:{
        type:Number,
        default:0,
      },
      bgColor:{
        type:String,
        required:true,
      },
      panelColor:{
        type:String,
        required:true,
      },
      textColor:{
        type:String,
        required:true,
      }
});

module.exports=mongoose.model("product",productSchema);