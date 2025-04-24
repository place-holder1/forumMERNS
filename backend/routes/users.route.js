import express from "express";

import { createUser, checkLogin, deleteUser, getUser, updateUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getUser);
router.get("/login", checkLogin);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;