import express from "express";
import { createPost, deletePost, getPosts, getPost, getTagPosts, getUserPosts, updatePost } from "../controllers/posts.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost); 
router.get("/user/:id", getUserPosts);
router.get("/tag/:tag", getTagPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;