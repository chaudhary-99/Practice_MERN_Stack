const mongoose=require("mongoose");
const todoSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,// it is mandate
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            required:true,
            type:Date,
            default:Date.now(),
        },
        updatedAt:{
            required:true,
            type:Date,
            default:Date.now(),
        }
    }
);
module.exports=mongoose.model("Todo",todoSchema); // anyone can use this with todo name 
// controller use this model