import mongoose from "mongoose";
import User from "../models/users.model.js";
import bcrypt from "bcryptjs";

export const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.log("Error in fetching users:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const checkLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide both username and password"
        });
    }

    try {
        // Debug: Log the incoming credentials
        console.log('Login attempt for:', username);

        // Find user by exact lowercase username match
        const user = await User.findOne({
            username: username.toLowerCase()
        }).select('+password');

        if (!user) {
            console.log('User not found');
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        // Debug: Log the stored hash and input password
        console.log('Stored hash:', user.password.substring(0, 20) + '...');
        console.log('Input password:', password);

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        // Create user object without password
        const userObj = user.toObject();
        delete userObj.password;

        return res.status(200).json({
            success: true,
            user: userObj
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error during login"
        });
    }
};

export const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Username, email and password are required"
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            success: false,
            message: 'Password must be at least 8 characters'
        });
    }

    try {
        // Check for existing user (case-insensitive)
        const existingUser = await User.findOne({
            $or: [
                { username: { $regex: new RegExp(`^${username}$`, 'i') } },
                { email: { $regex: new RegExp(`^${email}$`, 'i') } }
            ]
        });

        if (existingUser) {
            const field = existingUser.username.toLowerCase() === username.toLowerCase()
                ? 'username'
                : 'email';
            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            bio: req.body.bio || "",
            avatarUrl: req.body.avatarUrl || "https://images-ext-1.discordapp.net/external/jiW5Zq7KJs8iEBlsClaPvggLaUkKuSCLrT0KLIGGPQE/https/forums.stardewvalley.net/styles/classic/default_avi.jpg?format=webp&width=313&height=313"
        });

        await newUser.save();

        // Remove password before sending response
        const userObj = newUser.toObject();
        delete userObj.password;

        res.status(201).json({
            success: true,
            user: userObj
        });

    } catch (error) {
        console.error("Registration error:", error);

        // Handle duplicate key errors (fallback)
        if (error.code === 11000) {
            const field = error.keyPattern.username ? 'username' : 'email';
            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error during registration"
        });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid User ID" });
    }

    try {
        // Prevent updating certain fields
        const disallowedUpdates = ['_id', 'createdAt', 'updatedAt', 'password'];
        disallowedUpdates.forEach(field => delete updates[field]);

        // Special handling if password is being updated
        if (updates.password) {
            const salt = await bcrypt.genSalt(10);
            updates.password = await bcrypt.hash(updates.password, salt);
        }

        // Only allow updates to specific fields
        const allowedUpdates = ['username', 'email', 'bio', 'avatarUrl'];
        const isValidOperation = Object.keys(updates).every(field =>
            allowedUpdates.includes(field)
        );

        if (!isValidOperation) {
            return res.status(400).json({
                success: false,
                message: "Invalid updates attempted"
            });
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            updates,
            {
                new: true,
                runValidators: true // Ensures updates follow schema rules
            }
        ).select('-password'); // Don't return password

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user: updatedUser
        });

    } catch (error) {
        console.error("Update error:", error);

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        if (error.code === 11000) {
            const field = error.keyPattern.username ? 'username' : 'email';
            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error during update"
        });
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
