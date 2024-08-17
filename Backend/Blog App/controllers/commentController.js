// Import model
const Post = require("../models/postModel");
const comment = require("../models/commentModel");

//business logic --> always use async function while interacting with db so that our main thread do not get affected

exports.createComment = async (req, res) => {
  try {
    // fetch data from req body
    const { post, user, body } = req.body;

    // create a comment object
    const newComment = new comment({
      post,
      user,
      body,
    });

    // saved the object into the database using save();
    const savedComment = await newComment.save();

    // find the post by ID , add the new comment to its comment array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    // post ko fetch kiya then us post ke andar jo comments  wala array bana tha usme apne comment ki nayi wali id push/insert kar diya or new true krke updated value return krwa liya

    // .populate("comments"): Comments ke IDs ko populate karke full comment details fetch karta hai.
    //lastly jo humne query likha use exec() se execute kar diya
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while creating comment"
    });
  }
};
