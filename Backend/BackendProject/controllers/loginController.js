
const User=require("../models/user-model.js");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
exports.login=async(req,res)=> {
    try{
        const {email,password}=req.body;
        const existuser= await User.find({email});

        if(!email||!password ){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details carefully",
            });
        }
        if(!existuser){
            return res.status(401).json({
                success:false,
                message:"User is not registered", 
            })

        }
        const payload={
            email:existuser[0].email,
            id:existuser[0].__id,
        }
        console.log(password);
        console.log(existuser[0].password);
        if(await bcrypt.compare(password,existuser[0].password)){
            let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h",});
            existuser[0].token=token;
            existuser[0].password=undefined;
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Password incorrect", 
            })
        }
        return res.status(200).json({
            success:true,
            payload,
            message:'User Logged in Sucessfully',
        }) 
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            sucess:false,
            message:'Something went wrong, please try agin later',
        })
        

    }
}
