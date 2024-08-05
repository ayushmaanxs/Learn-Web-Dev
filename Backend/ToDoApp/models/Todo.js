//Import mongoose
const mongoose = require("mongoose");
//Creating Schema
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            require:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
);
// syntax of exporting schema created using mongoose
module.exports = mongoose.model("Todo",todoSchema);