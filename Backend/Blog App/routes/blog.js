// Import Express and Router
const express = require('express');
const router = express.Router();

//Import Controller
const {postController} = require("../controllers/postController");
const {likeController} = require("../controllers/likeController");
const {commentController} = require("../controllers/commentController");

//Creating Mapping
router.post("/post",postController);
router.post("/like",likeController);
router.post("/comment",commentController);

//Export
module.exports = router;