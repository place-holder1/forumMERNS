import {create} from "zustand";

export const useCharacterStore = create((set) => ({
    character: null,
    getCharacters: () => {
        const character = localStorage.getItem("character");
        if (character) {
            set({ character: JSON.parse(character) });
        } else {
            set({ character: null });
        }
    },
}));
