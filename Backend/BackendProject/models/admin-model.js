const mongoose=require("mongoose");

const adminSchema= new mongoose.Schema({
      name:{
        type:String,
        minLength:3,
        trim:true,
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
      products:{
        type:Array,
        default:[],
      },
      picture:{
        type:String,
        
      },
      gstin:{
        type:String,
      }
});

module.exports=mongoose.model("admin",adminSchema);