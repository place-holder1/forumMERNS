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
            set({ user: JSON.parse(user),
                userId: JSON.parse(user)._id,
                username: JSON.parse(user).username,
             });
            localStorage.setItem("userID", JSON.parse(user)._id) // Set true if user exists
        } else {
            set({ user: null });
        }
    },
    checkLogin: async (userData) => {
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            if (!response.ok) throw new Error("Login failed");

            const data = await response.json();
            console.log('API Login response:', data);
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
            console.log("Create User API Response:", data); // Debug log
            
            if (!response.ok) {
                return { error: data.message || "Registration failed" };
            }
    
            if (data.user) {
                set({ user: data.user });
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("userLoggedIn", "true");
                return { user: data.user };
            }
            
            return { error: "Unexpected response format" };
        } catch (error) {
            console.error("Registration error:", error);
            return { error: error.message };
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
