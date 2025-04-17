import express from "express";

import { createPost, deletePost, getPost, updatePost } from "../controllers/posts.controller.js";

const router = express.Router();

router.get("/", getPost);
router.get("/", createPost);
router.get("/", updatePost);
router.get("/", deletePost);

export default router;