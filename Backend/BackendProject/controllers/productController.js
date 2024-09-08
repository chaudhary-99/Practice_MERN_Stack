const Admin=require("../models/admin-model.js");

require("dotenv").config()
exports.admin=async(req,res)=> {
    try{
        const {name,email,password}=req.body;
        const existingadmin= await Admin.find();
        console.log("existingADIMIN",existingadmin.length);
        if(existingadmin.length > 0){
            return res.status(500).json({
                success:false,
                 message:"More than One Admin can't exist",
            })
        }
        const createdAdmin=await Admin.create({
            name,email,password,

        });
        return res.status(200).json({
            success:true,
            createdAdmin,
            message:'Admin Created Sucessfully',
        }) 
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            sucess:false,
            message:'Admin cannot be registered, please try agin later',
        })
        

    }
}

// exports.product=async(req,res)=> {
//     try{
       
//         res.json({
//             success:true,
//             message:'product added',
//         });

        
//     }
    
//     catch(error){
//         console.log(error);
//         return res.status(500).json({
//             sucess:false,
//             message:'product cannot be added, please try agin later',
//         })
        

//     }
// }

// exports.user=async(req,res)=> {
//     try{
       
//         res.json({
//             success:true,
//             message:'User created',
//         });

        
//     }
    
//     catch(error){
//         console.log(error);
//         return res.status(500).json({
//             sucess:false,
//             message:'User cannot be registered, please try agin later',
//         })
        

//     }
// }