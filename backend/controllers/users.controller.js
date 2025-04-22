import mongoose from "mongoose";
import User from "../models/users.model.js";

export const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.log("Error in fetching users:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createUser = async (req, res) => {
    const user = req.body; // user will send this data

    if (!user.username || !user.email || !user.password) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    //add placeholder image
    if (!user.avatarUrl) {
        user.avatarUrl = "https://images-ext-1.discordapp.net/external/jiW5Zq7KJs8iEBlsClaPvggLaUkKuSCLrT0KLIGGPQE/https/forums.stardewvalley.net/styles/classic/default_avi.jpg?format=webp&width=313&height=313"; // Replace with your placeholder image URL
    }
    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in creating user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User ID" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User ID" });
    }

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.log("Error in deleting user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
