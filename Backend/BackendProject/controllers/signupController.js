const bcrypt=require('bcrypt');
const User=require("../models/user-model.js");
require("dotenv").config()

exports.signup=async(req,res)=> {
    try{
        const {name,email,password,contactNumber}=req.body;
        const existinguser= await User.findOne({email});
        const existingNumber= await User.findOne({contactNumber});
       
        if(existinguser){
            return res.status(500).json({
                success:false,
                 message:"This email is already Register",
            })
        }
        if(existingNumber){
            return res.status(500).json({
                success:false,
                 message:"Account with the Number already exist",
            })
        }

        //secure password
        let hashedpassword;
        try{
            hashedpassword= await bcrypt.hash(password,10);
         }
         catch(err){
            return res.status(500).json({
                sucess:false,
                message:'Error in hashing password',
            })

         }


        const createdAdmin=await User.create({
            name,email,password:hashedpassword,contactNumber

        });
        return res.status(200).json({
            success:true,
            createdAdmin,
            message:'User Created Sucessfully',
        }) 
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            sucess:false,
            message:'User cannot be registered, please try agin later',
        })
        

    }
}

