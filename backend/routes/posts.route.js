import express from "express";
import mongoose from "mongoose";
import { createPost, deletePost, getPosts, getUserPosts, updatePost } from "../controllers/posts.controller.js";
import { post } from "../models/post.model.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/user/:id", getUserPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;