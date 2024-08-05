//Import express and router
const express = require ("express");
const router = express.Router();

//Import Controller
// const{controllerName} = require("controller path")

const{createTodo}=require("../controllers/createTodo");
const{getTodo, getTodoById}=require("../controllers/getTodo");  
const{updateTodo}=require("../controllers/updateTodo");
const{deleteTodo}=require("../controllers/deleteTodo");

// define API routes -->path ko controller se map krwana hai
//controllerName --> jisme controller ka path imported hai
// router.post("/path",controllerName);
// router.JisTypeKiRequestHai();

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router;
