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

    // ek post pe bot se logo ne like comment kra hoga isliye array bna rhe hai hm like or comment kaa

    likes:[{
        type:mongoose.Schema.Types.ObjectId,  // like apne ap me ek model hai so usko refer krenge
        ref:"like", //isi name se export kraa hoga like ka model
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,  // comment apne ap me ek model hai so usko refer krenge
        ref:"comment",  // isi name se export kara hoga comment ka model
    }]
})

//Export
module.exports=mongoose.model("Post",postSchema);

// postSchema ko `post` name se export kar diya