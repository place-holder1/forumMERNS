import express from "express";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers/categories.controller.js";

const router = express.Router();

router.get("/", getCategory);
// router.get("/user/:id", getUserCategory);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;