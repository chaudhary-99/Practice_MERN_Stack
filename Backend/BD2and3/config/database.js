const mongoose=require("mongoose");
// to load env file into process object ..first install npm i dotenv

//dbconnect function work is to establish connection between db and application
//moongose.coonnect function we write two things: first db URL and second are flags with are require to be true
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })// return promise
    .then(()=>console.log("DB ka connection established"))
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    })
}

//connection between db and app is wrapped inside the function named dbConnect and it is exported
module.exports=dbConnect;

