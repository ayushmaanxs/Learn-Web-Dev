const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    // fetch data from req body
    const { title, body } = req.body;
    // fetch data from req body
    const post = new Post({
      title,
      body,
    });
    // saved the object into the database using save();
    const savedPost = await post.save();
    res.json({ post: savedPost });
  } catch (err) {
    return res.status(500).json({
      error: "Error while creating post",
    });
  }
};

// to get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({ posts });
  } catch (err) {
    return res.status(500).json({
      error: "Error while fetching post",
    });
  }
};
