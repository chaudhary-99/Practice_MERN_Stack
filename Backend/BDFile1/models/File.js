const mongoose=require("mongoose");
const nodemailer=require("nodemailer");
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//post middleware

fileSchema.post("save", async function(doc){
      try{
        console.log("DOC", doc);
        //doc is database entry

        //transporter
        //TODO: shift this tranporter to /config folder
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        })

        //send mail
        let info = await transporter.sendMail({
            from:'CodeHelp - Karishma',
            to:doc.email,
            subject:"New File Uploaded on cloudinary",  
            html:`<h2> Hello Jee</h2 > <p>File Uploaded view here: <a href="${doc.imageUrl}"> ${doc.imageUrl}</a>  </p>`,
        })
        //Console.log("INFO",info);
      }
      catch(error){
        console.log(error);


      }
      //TODO: Study service of SQS and SNS of AWS
})
const File=mongoose.model("File",fileSchema);
module.exports=File;