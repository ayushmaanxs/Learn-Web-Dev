// This will conatin 4 things
//1.title of the post
//2.body of the post
//3.like ka array
//4.comment ka array

//Importing Mongoose
const mongoose = require('mongoose');

//Route Handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    body:{
        type: String,
        required:true,
    },
    likes:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"like",
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"comment",
    }
})

//Export
module.exports=mongoose.model("Post",postSchema);