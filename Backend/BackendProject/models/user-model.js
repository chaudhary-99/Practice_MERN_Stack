const mongoose=require("mongoose");
const { boolean } = require("webidl-conversions");
const userSchema= new mongoose.Schema({
      fullName:{
        type:String,
        require:true,
      },
      email:{
        type:String,
        require:true,
      },
      password:{
        type:String,
        required:true,
      },
      cart:{
        type:Array,
        default:[],
      },
    
      picture:{
        type:String
      },
      orders:{
        type:Array,
        default:[],
      },
      contactNumber:{
        type:Number,
        required:true,
      }

});

module.exports=mongoose.model("user",userSchema);