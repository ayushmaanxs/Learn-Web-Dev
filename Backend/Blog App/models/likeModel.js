//It will contain 2 things
// 1.kis post pe like kar rhe ho
// 2. Kon like kar rha hai

//Importing mongoose instance
const mongoose = require('mongoose');

//Route Handler
const likeSchema = new mongoose.Schema({
    post:{ 
        type:mongoose.Schema.Types.ObjectId,    // post apne ap me ek model hai so hum usko refer krenge
        ref:"Post", // isi name se export kara hoga post ka model
    },
    user:{
        type: String,
        required: true,
    },
});

//Export
module.exports=mongoose.model("like",likeSchema);

// likeSchema ko `like` name se export kar diya