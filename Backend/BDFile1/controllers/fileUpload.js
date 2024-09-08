const File=require("../models/File.js");
const cloudinary=require('cloudinary').v2;
require("dotenv").config()

//localFileUpload-->handler 
exports.localFileUpload=async(req,res)=> {
    try{
        //fetch file
        const file=req.files.file;
        console.log("This is file",file);
        //apne server at which path file to be stored is defined below
        //__dirname shows current directory like here it denotes controllers
        let path= __dirname +"/files/" + Date.now() + `.${file.name.split('.')[1]}`; //server path
       console.log("PATH--> ",path)
       
        file.mv(path, (err)=>{ //move file the this path
            console.log(err);
        });

        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });

        
    }
    
    catch(error){
        console.log(error);
        return res.status(500).json({
            sucess:false,
            message:'User cannot be registered, please try agin later',
        })
        

    }
}

//image upload ka handler
function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder , quality){
    const options={folder};
    console.log("temp filePath", file.tempFilePath);

    if(quality){
        options.quality=quality;
    }
    options.resource_type="auto"; 
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload=async(req,res)=> {
    try{
        //data fecth
        const {name,tags,email}=req.body;
        console.log(name,tags,email);
        const file=req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes=["jpg","jpeg","png"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("file Type",fileType);

       
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                sucess:false,
                message:'File format not supoorted',
            })
        }
        //if File format supported
        console.log("uploading to Codehelp");
        const response= await uploadFileToCloudinary(file,"codehelp");
        console.log(response);
        //db mein entry save krni hai

        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })


    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            sucess:false,
            message:'Something went wrong',
        })  

    }
  }

  exports.videoUpload=async(req,res)=> {
    try{
        //data fecth
        const {name,tags,email}=req.body;
        console.log(name,tags,email);
        const file=req.files.videoFile;
        console.log(file);

        //validation
       
        const supportedTypes=["mp4","mov"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log(fileType);

         //TODO: add upper limit of 5MB for video
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                sucess:false,
                message:'File format not supoorted',
            })
        }
        //if File format supported
        console.log("uploading to Codehelp");
        const response= await uploadFileToCloudinary(file,"codehelp");
        console.log(response);
        //db mein entry save krni hai

        const fileData=await File.create({
            name,
            tags,
            email,
            videoUrl:response.secure_url,
        })

        res.json({
            success:true,
            videoUrl:response.secure_url,
            message:'video Successfully Uploaded',
        })


    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            sucess:false,
            message:'Something went wrong',
        })  

    }
  }

 
  //imageReducerUplOad
  exports.imageReducerUpload=async(req,res)=> {
    try{
        //data fecth
        const {name,tags,email}=req.body;
        console.log(name,tags,email);
        const file=req.files.imageFile;
        console.log(file);

        //validation
       
        const supportedTypes=["jpg","jpeg","png"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log(fileType);

         //TODO: add upper limit of 5MB for video
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                sucess:false,
                message:'File format not supoorted',
            })
        }
         // TODO: height attribute compress
        //if File format supported
        console.log("uploading to Codehelp");
        const response= await uploadFileToCloudinary(file,"codehelp",30);
        console.log(response);
        //db mein entry save krni hai

        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'video Successfully Uploaded',
        })


    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            sucess:false,
            message:'Something went wrong',
        })  

    }
  }
