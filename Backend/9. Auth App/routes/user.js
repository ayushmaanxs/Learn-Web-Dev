const express = require('express');
const router = express.Router();

const {login,signup} = require("../controllers/auth");
const {Auth,isStudent,isAdmin} = require("../middlewares/Auth")

router.post("/login",login);
router.post("/signup",signup);

// testing protected routes for single middleware
router.get("/test",Auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for tests"
    })
})

// Protected route
// /student pe jb bhi koi request aayega then sbse phle Auth wala middleware chalega joki check krega user authenticated hai yaa nhi then isStudent wala middleware chalega joki role check krega --> role token se pta chalega

router.get("/student",Auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for students"
    })
})

router.get("/admin",Auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Admin"
    })
})
module.exports = router;