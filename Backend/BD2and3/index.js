const express=require('express');
const app=express();
 
// env file se config load ho
require("dotenv").config();
const PORT=process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo ASPI routes
// mount means add and append. above line means that API routes after this directory stucture 
//version set krna API ka 
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server is here started at ${PORT}`); 
})
//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})

//FOLDER STRUCTURE
//index.js or app.js is main file
// controller is a folder in which logic is written which is to be performed when certain routes hits
// every routes is mapped with controller
// model stores the structure of the database(description of data)
//Config folder: for connecting with database is same so it is done in config

//env port used and URL of database is saved

// USE NODEMON FOR AUTO RELODING SERVER ON ANY CHANGES IN CODE
// npm i nodemon
//package.json -->   do these changes
// "scripts": {
//     "start": "node index.js",
//     "dev": "nodemon index.js"
//   }
// After these change Use command "npm run dev" to start nodemon

// NOTE:
// In MONGO DB URL : 127:0:0:1 is local host. This ip adress is loopback address
// npm i
// npm i express
// npm i mongoose
// npm i nodemon
// npm i dotenv