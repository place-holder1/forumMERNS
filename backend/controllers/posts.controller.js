import mongoose from "mongoose";
import post from "../models/posts.model.js";

// Try reading from this section maybe?
// https://github.com/safak/youtube/blob/chat-app/api/routes/posts.js

export const getPosts = async (req, res) => {
    try {
        const posts = await post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        console.log("Error in fetching post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getUserPosts = async (req, res) => {
    const { id } = req.params; // user id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid user ID" });
    }

    try {
        const posts = await post.find({ character: id });
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        console.log("Error in fetching user posts:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const createPost = async (req, res) => {
    const post = req.body; // post will send this data

    if(!post.title || !post.post || !post.character) {
        return res.status(400).json({ success: false, message: "Invalid!"});
    }

    const newPost = new post(post);

    try {
        await newPost.save();
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error("Error in Create post:", error.message);
        res.status(500).json({ success:false, message: "Server Error"});
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
