import express from "express";
import dotenv from "dotenv";
import path from "path";
import User from "./models/users.model.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

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

    res.send("Server is ready123");
});

// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT + " Hello!");
});