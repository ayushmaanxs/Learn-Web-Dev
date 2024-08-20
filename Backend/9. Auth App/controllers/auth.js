const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { options } = require("../routes/user");
require("dotenv").config();

// Signup Route Handler
exports.signup = async (req, res) => {
  try {
    // get data
    const { name, email, password, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // securing the password
    let hashedPassword;
    try {
      // using hash function --> takes 2 argument (fieldToBeSecured , NumberOfRounds)
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Could not hash the password",
      });
    }

    // create entry for user
    //db se interaction hai so await User wale model se create
    // password me hashed wala password store karenge
    const user = await User.create({
      name,
      email,
      password: hashedPassword, // password me hashed wala password store karenge
      role,
    });
    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:
        "Not able to register user at this moment! Please try again later",
    });
  }
};

// Login Route Handler

exports.login = async (req, res) => {
  try {
    // data fetch
    const { email, password } = req.body;
    // validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // check for registerd user
    const user = await User.findOne({ email });
    // if not a registerd user --> agar user nhi mila
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    // verify password and generate a JWT token
    if (await bcrypt.compare(password, user.password)) {
      // password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
      user.password = undefined; // taki password hide ho jaye user ka nhi toh openly dikhta sb kuch
    
      const options = {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // abhi se 3 din tk chalega
        httpOnly: true, // taki client side se access naa ho
      };

      // storing token data in cookie
      res.cookie("nayaCookie", token, options).status(200).json({
        success: true,
        message: "Login successful",
        token,
        user,
      });
    } else {
      //password do not match
      return res.status(403).json({
        success: false,
        message: "Passwords do not match",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Failed to login at this moment! Please try again later",
    });
  }
};
