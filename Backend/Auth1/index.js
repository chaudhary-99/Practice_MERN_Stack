const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
require("dotenv").config();
const PORT=process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());
//what is cookie parser? Why it is used?

require("./config/database").connect();

const User=require("./routes/user");
app.use("/api/v1",User);

app.listen(PORT,()=>{
    console.log(`app is working at ${PORT}`);
})