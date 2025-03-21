import express from "express";

import { createUser, deleteUser, getUser, updateUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getUser);
router.get("/", createUser);
router.get("/", updateUser);
router.get("/", deleteUser);

export default router;