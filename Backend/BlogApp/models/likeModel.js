//It will contain 2 things
// 1.kis post pe like kar rhe ho
// 2. Kon like kar rha hai

//Importing mongoose instance
const mongoose = require('mongoose');

//Route Handler
const likeSchema = new mongoose.Schema({
    post:{ 
        type:mongoose.Schema.Types.ObjectId,    
        ref:"Post",
    },
    user:{
        type: String,
        require: true,
    },
});

//Export
module.exports=mongoose.model("like",likeSchema);