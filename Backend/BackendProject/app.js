const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const path=require("path");
require("dotenv").config();
const PORT=process.env.PORT || 3000;

require("./config/database").connect();
require('./config/cloudinary').cloudinaryConnect();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

const Product=require("./routes/product");
app.use("/api/v1",Product);


app.get("/",(req,res)=>{
    res.send("WE ARE ON HOMEPAGE");
})

app.listen(PORT,()=>{
    console.log(`App is working at ${PORT}`);
})