import mongoose from "mongoose";
import Category from "../models/categories.model.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error("Error fetching categories:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Category ID" });
    }

    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        res.status(200).json({ success: true, data: category });
    } catch (error) {
        console.error("Error fetching category:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createCategory = async (req, res) => {
    const category = req.body;

    if (!category.category || !category.description) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newCategory = new Category(category);

    try {
        await newCategory.save();
        res.status(201).json({ success: true, data: newCategory });
    } catch (error) {
        console.error("Error creating category:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const category = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Category ID" });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, category, { new: true });
        res.status(200).json({ success: true, data: updatedCategory });
    } catch (error) {
        console.error("Error updating category:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Category ID" });
    }

    try {
        await Category.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Category deleted" });
    } catch (error) {
        console.error("Error deleting category:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
