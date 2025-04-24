import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import postRoutes from "./routes/posts.route.js";
import userRoutes from "./routes/users.route.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// app.get("/api/posts", async (req, res) => {
//     try {
//         const posts = await Post.find({});
//         res.status(200).json({ success: true, data: posts });
//     } catch (error) {
//         console.log("Error in Get posts:", error.message); 
//         res.status(500).json({ success: false, message: "Server Error"});
//     }
// });

// app.put("/api/posts/:id", async (req, res) => {
//     const {id} = req.params;
//     const post = req.body;

//     if(mongoose.Types.ObjectId.isValid(id) === false) {
//         return res.status(404).json({ success: false, message: "This post does not exist!"});
//     }

//     try {
//         const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});
//         res.status(200).json({ success: true, data: updatedPost });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server Error"});
//         console.error("Error in Update post:", error.message);
//     }
// });

// app.post("/api/posts", async (req, res) => {
//     const post = req.body;

//     if(!post.title || !post.post || !post.character) {
//         return res.status(400).json({ success: false, message: "Invalid!"});
//     }

//     const newPost = new Post(post);

//     try {
//         await newPost.save();
//         res.status(201).json({ success: true, data: newPost });
//     } catch (error) {
//         console.error("Error in Create post:", error.message);
//         res.status(500).json({ success:false, message: "Server Error"});
//     }
// });

// app.delete("/api/posts/:id", async (req, res) => {
//     const {id} = req.params;

//     console.log("ID:", id);

//     try{
//         await Post.findByIdAndDelete(id);
//         res.status(200).json({ success: true, message: "Post deleted" });
//     } catch (error) {
//         console.error("Error in Delete post:", error.message);
//         res.status(500).json({ success: false, message: "Server Error"});
//     }

// });

// app.post("/api/users", async (req, res) => {
//     const user = req.body;

//     if(!user.username || !user.email || !user.password) {
//         return res.status(400).json({ success: false, message: "Invalid!"});
//     }

//     const newUser = new User(user);

//     try {
//         await newUser.save();
//         res.status(201).json({ success: true, data: newUser });
//     } catch (error) {
//         console.error("Error in Create user:", error.message);
//         res.status(500).json({ success:false, message: "Server Error"});
//     }

// });

// app.delete("/api/users/:id", async (req, res) => {
//     const {id} = req.params;

//     console.log("ID:", id);

//     try{
//         await User.findByIdAndDelete(id);
//         res.status(200).json({ success: true, message: "User deleted" });
//     } catch (error) {
//         console.error("Error in Delete user:", error.message);
//         res.status(500).json({ success: false, message: "Server Error"});
//     }

// });

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