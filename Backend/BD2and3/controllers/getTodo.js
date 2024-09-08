const Todo=require("../models/Todo")

//define route handler

exports.getTodo=async(req,res) =>{
    try{
        //fetch all to do items from database
        //await is used for interacting with database
        // find bagera function hai database ke
        // monngoose library provide us many functions like create, findbyID, findbyIDdelete, find and many more.
        const todos= await Todo.find({});
        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,       
            error:err.message,
            message:"internal server error"
             
        })

    }
   
}
exports.getTodoById=async(req,res) =>{
    try{
        //extract item basis of id
        const id=req.params.id;
        //await is used for database interaction
        const todo=await Todo.findById({_id:id});
        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data Found for given id"
            })
        }
        else { 
            res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
        }

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,       
            error:err.message,
            message:"internal server error"
             
        })
    }
}