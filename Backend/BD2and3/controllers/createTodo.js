// controller use defined model. So first i need to import that
const Todo=require("../models/Todo")

//define route handler
//CreateTodo means: Todo type ka object banao usse data base mein insert kro
exports.createTodo=async(req,res) =>{
    console.log("hrllo");
    try{
        //extract title and description from request boody
        const {title,description}=req.body;
        //create a new Todo Obj and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'

            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
   
}

