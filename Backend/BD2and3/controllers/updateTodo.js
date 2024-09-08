const Todo=require("../models/Todo")

exports.updateTodo= async(req,res) => {
    try{
        //const id=req.params.id;
        const {id}=req.params;
        //These two methods for fetching id
        const {title,description}=req.body;
        const update =await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt: Date.now()},
        );
        res.status(200).json({
            success:true,
            data:update,
            message:"Updated successfully"
        });

    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Ineternal server error"
        });

    }

}