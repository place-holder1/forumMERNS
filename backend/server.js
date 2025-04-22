import express from "express";
import dotenv from "dotenv";
import path from "path";
import User from "./models/users.model.js";
import Post from "./models/posts.model.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.get("/api/posts", async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        console.log("Error in Get posts:", error.message); 
        res.status(500).json({ success: false, message: "Server Error"});
    }
});


app.post("/api/posts", async (req, res) => {
    const post = req.body;

    if(!post.title || !post.post || !post.character) {
        return res.status(400).json({ success: false, message: "Invalid!"});
    }

    const newPost = new Post(post);

    try {
        await newPost.save();
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error("Error in Create post:", error.message);
        res.status(500).json({ success:false, message: "Server Error"});
    }
});

app.delete("/api/posts/:id", async (req, res) => {
    const {id} = req.params;

    console.log("ID:", id);

    try{
        await Post.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Post deleted" });
    } catch (error) {
        console.error("Error in Delete post:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }

});

app.post("/api/users", async (req, res) => {
    const user = req.body;

    if(!user.username || !user.email || !user.password) {
        return res.status(400).json({ success: false, message: "Invalid!"});
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in Create user:", error.message);
        res.status(500).json({ success:false, message: "Server Error"});
    }

});

app.delete("/api/users/:id", async (req, res) => {
    const {id} = req.params;

    console.log("ID:", id);

    try{
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.error("Error in Delete user:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }

});

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT + " Hello!");
});