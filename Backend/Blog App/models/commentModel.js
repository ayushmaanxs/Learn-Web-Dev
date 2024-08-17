//It will contain 3 things
// 1. kon se post pe comment ho rha hai
// 2. kon sa user comment kar rha hai
// 3. kya comment kar rha hai

//Importing mongoose instance
const mongoose = require('mongoose');

//Route Handler
const commentSchema = new mongoose.Schema({
    //kis post pe comment kara hai
    // post apne aap me ek object/model hai
    // to refer to any object/model it is a good practice to refer the id
    post:{  //On which post comment is done
        type:mongoose.Schema.Types.ObjectId,    // post apne ap me ek model hai so usko refer krenge
        //to refer to any other model using its ObjectId it is mandatory to write this line
        ref:"Post", 
        //This is a refrence to post model
        //post wale model ko isi name se export krenge
    },
    user:{  // kis user ne comment kiya hai
        type: String,
        required: true,
    },
    body:{  // kya comment kiya hai
        type: String,
        required: true,
    },
});

//Export
module.exports=mongoose.model("comment",commentSchema);

// commentSchema ko `comment` name se export kar diya
