// Import Express and Router
const express = require('express');
const router = express.Router();

//Import Controller
const {createPost,getAllPosts} = require("../controllers/postController");
const {likePost,unLikePost} = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");

//Creating Mapping
router.post("/post/create",createPost);
router.post("/like/post",likePost);
router.post("/comment/create",createComment);
router.get("/posts",getAllPosts);
router.post("/unlike/post",unLikePost);

//Export
module.exports = router;