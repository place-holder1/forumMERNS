import { create } from "zustand";

const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
    fetchUserById: async (userId) => {
        try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        set({ user: data });
        } catch (error) {
        console.error("Error fetching user:", error);
        }
    },
    }));
    