import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => {
        set({ user });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userLoggedIn", "true"); // Only set true on login
    },
    logout: () => {
        set({ user: null });
        localStorage.removeItem("user");
        localStorage.setItem("userLoggedIn", "false"); // Explicitly set false
    },
    getUser: () => {
        if (localStorage.getItem("userLoggedIn") === "false") {
            set({ user: null });
            return;
        }
        const user = localStorage.getItem("user");
        if (user) {
            set({ user: JSON.parse(user) });
        } else {
            set({ user: null });
        }
    },
    checkLogin: async (userData) => {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            if (!response.ok) throw new Error("Login failed");

            const data = await response.json();
            if (!data.user) throw new Error(data.message || "Invalid credentials");

            set({ user: data.user });
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("userLoggedIn", "true");
            return { user: data.user };
        } catch (error) {
            return { error: error.message };
        }
    },
    createUser: async (userData) => {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            set((state) => ({ user: { ...state.user, ...data.data } }));
            localStorage.setItem("user", JSON.stringify(data.data));
            localStorage.setItem("userLoggedIn", "true");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    },
    updateUser: async (userId, userData) => {
        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            set({ user: data });
        } catch (error) {
            console.error("Error updating user:", error);
        }
    },
}));
