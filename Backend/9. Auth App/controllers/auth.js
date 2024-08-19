const bcrypt = require("bcrypt");
const User = require("../models/User");

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

      // securing the password
      let hashedPassword;
      try {
        // using hash function --> takes 2 argument (fieldToBeSecured , NumberOfRounds)
        hashedPassword = await becrypt.hash(password, 10);
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Could not hash the password",
        });

        // create entry for user 
        //db se interaction hai so await User wale mdoel se create
        // password me hsahed wala password store krenge
        const user = await User.create({
          name,
          email,
          password: hashedPassword, // password me hsahed wala password store krenge
          role
        });
        return res.status(200).json({
            success:true,
            message:"User created successfully",
        })

        // jisne bhi signup kara uska entry hmare db me store ho gya
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Not able to register user at this moment! Please try again later"
    })
  }
};
