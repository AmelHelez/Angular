const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();


router.post("", checkAuth, extractFile, PostController.createPost);

 //put - put a new resource and replace old one
//patch - only update an existing resource

router.put("/:id", checkAuth, extractFile, PostController.updatePost);
  
router.get('', PostController.getPosts);
  
router.get("/:id", PostController.getPost);
  
router.delete("/:id", checkAuth, PostController.deletePost); 


  module.exports = router;