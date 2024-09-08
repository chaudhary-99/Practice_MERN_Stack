const express=require("express");
const router=express.Router();


const {admin,products}=require("../controllers/productController");
const {signup}=require("../controllers/signupController");
const {login}=require("../controllers/loginController");

//api routes

router.post("/admin",admin);
// router.post("/admin/createProduct",createProduct);
// router.post("/admin/products",products);
// router.post("/users",users);
router.post("/user/signup",signup);
router.post("/user/login",login);
// router.post("/users/cart",cart);
// router.post("/shop",shop);
module.exports=router;
