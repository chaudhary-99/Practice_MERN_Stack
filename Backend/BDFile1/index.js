const express=require("express");
const app=express();
const fileUpload=require("express-fileupload");


require("dotenv").config();
const PORT=process.env.PORT || 3000;


app.use(express.json());
//for interacting with file third party package need to be installed like express-fileupload and multer are used for same

app.use(fileUpload({
     useTempFiles:true,
    tempFileDir:'/tmp/'
}));
//fileupload method upload file on server and cloudinary package upload on media server and then delete it from tempoarry location


require("./config/database").connect();
require('./config/cloudinary').cloudinaryConnect();


const Upload=require("./routes/FileUpload");
app.use("/api/v1/upload",Upload);

app.listen(PORT,()=>{
    console.log(`app is working at ${PORT}`);
})