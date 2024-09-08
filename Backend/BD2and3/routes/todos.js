const express = require("express")
const router = express.Router();

//import controller
// to map controller with router first it need to be imported
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define API routes
router.post("/createTodo", createTodo); // here we mapped controller with route
router.get("/getTodo", getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;