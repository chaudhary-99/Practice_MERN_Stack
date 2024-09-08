// steps 
//Create folder and enter in it
//package.json file (npm init -y)
//node modules (npm i express)
//create server.js
//SERVER INSTIATE
// start server : node server.js
// down 2lines are used to create server
const express=require('express');
const app=express(); //express ka instance
const bodyParser=require('body-parser');
// Used to parse req.body in express -- Post put
//Body parser act as a middleware between client and server
// telling express to use bodyParser
app.use(bodyParser.json()); //here we specifically telling that json data is parsed 

// ACTIVATE (live) SERVER ON local: PORT 3000  is used
app.listen(3000,()=>{
    console.log("hello server")
});

//ROUTES
// To display on browser we have multiple request
// to create routes
// get ke upar router define kr diya ,,, jab '/' iss route pr ayoge res mein "hello jii, kaise hai" ayega.

app.get('/',(req,res)=>{
    res.send("hello jii, kaise hai");
})

// jo data post krna hai bo request ki body mein hii hota hai. Request ki body ko destructure krte hai to get data
// to verify post request postman is used
//API are method for frontend and backend
//Postman is used for testing and designing API's
// Postman se URL ki help se excess kr paa rhe hai
app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("this is post req");
})

//MongoDb is NO SQL Databases (known for there scalability and for performance)
// data stored in the form of key-value pairs, documents, graph etc
// Mongo-shell(mongosh) is where is uses commands to interact with db
// CRUD (CREATE,READ,UPDATE,DELETE) used to interact with db
// Mongodb campass is graphical user interface(GUI) to perform CRUD (without commands we can perform CRUD operations (using buttons))
// Mongoose are used for connecting Express and Mondodb. Mogoose also known as ODM library (Object Data Modelling)  beacuse
// At server data is used  in the form of Object but in mongodb data is in the form of documents
// install mongoose by npm i mongoose 
//mongo db shell and campass are downloaded

// CONNECTING mongoose with expressjs
const mongoose=require('mongoose');
//NOTE: if name given of database is already existing then it would connect and if it dosen't exit then it would get created
//'mongodb://localhost:27017/myDatabase' : THIS IS Db URL
// This part is a promise (resolve or reject: Two state of promise)
//{
//     useNewurlParser:true,
//     useUnifiedTopology:true
//}
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection successful")})
.catch((error)=>{console.log("first")})