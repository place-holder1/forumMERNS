import mongoose from "mongoose";
import post from "../models/posts.model.js";

export const getPost = async (req, res) => {
    try {
        const posts = await post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        console.log("Error in fetching post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createPost = async (req, res) => {
    const post = req.body; // post will send this data

    if (!post.postname || !post.email || !post.password) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newPost = new post(post);

    try {
        await newPost.save();
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error("Error in creating post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid post ID" });
    }

    try {
        const updatedPost = await post.findByIdAndUpdate(id, post, { new: true });
        res.status(200).json({ success: true, data: updatedPost });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Post ID" });
    }

    try {
        await post.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Post deleted" });
    } catch (error) {
        console.log("Error in deleting post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
