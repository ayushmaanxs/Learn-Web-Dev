// Authorization wala code

// auth , isStudent ,is Admin

const jwt = require("jsonwebtoken");
require("dotenv").config(); // as hame jwt secret kaa need prega

// writing our 1st middleware --> req , res ,next teen chije pass krenge --> checking authenticity of user
exports.Auth = (req, res, next) => {
  try {
    // extract jwt token
    const token = req.body.token || req.cookies.token;

    // agar token missing hua toh
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    //verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      req.user = payload;
      next(); // next middleware pe jane ke liye --> only proceed if token is valid
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying the token",
    });
  }
};

// writing our 2nd middleware --> req , res ,next teen chije pass krenge --> student authorization check
exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to access Student route",
      });
    }
    next();
  } 
  catch(error){
    return res.status(500).json({
        success:false,
        message:"User role is not matching"
    })
  }
};

// writing our 3rd middleware --> req , res ,next teen chije pass krenge --> admin authorization check
exports.isAdmin = (req, res, next) => {
    try {
      if (req.user.role !== "Admin") {
        return res.status(401).json({
          success: false,
          message: "You are not authorized to access Admin route",
        });
      }
      next();
    } 
    catch(error){
      return res.status(500).json({
          success:false,
          message:"User role is not matching"
      })
    }
  };

