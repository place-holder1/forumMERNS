import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
//Until I can connect the DB, this doesn't work.

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/users", (req, res) => {
    res.send("Server is ready123");
});

app.get("/threads", (req, res) => {
    res.send("Got threads!");
})

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    // connectDB();
    console.log("Server started at http://localhost:" + PORT + " Hello!");
});