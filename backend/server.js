import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import postRoutes from "./routes/posts.route.js";
import userRoutes from "./routes/users.route.js";
import categoriesRoutes from "./routes/categories.route.js"
import messageRoutes from "./routes/messages.route.js"
import characterRoutes from "./routes/characters.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/characters", characterRoutes);

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