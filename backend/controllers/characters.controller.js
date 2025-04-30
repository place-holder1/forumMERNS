import mongoose from "mongoose";
import Character from "../models/characters.model.js";
import character from "../models/characters.model.js";

export const getCharacters = async (req, res) => {
    try {
        const characters = await character.find({});
        characters.sort((a, b) => {
            if (a.character === "Anonymous") return -1;
            if (b.character === "Anonymous") return 1;
            return a.character.localeCompare(b.character);
        });
        res.status(200).json({ success: true, data: characters });
    } catch (error) {
        console.log("Error in fetching characters:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
export const createCharacter = async (req, res) => {
    const character = req.body; // character will send this data

    if (!character.character || !character.imageUrl) {
        return res.status(400).json({ success: false, message: "Invalid!" });
    }

    try {
        const newCharacter = await Character.create(character);
        res.status(201).json({ success: true, data: newCharacter });
    } catch (error) {
        console.log("Error in creating character:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

