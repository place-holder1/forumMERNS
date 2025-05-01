import { createContext, useState, useLayoutEffect } from "react";
import { useUserStore } from "../store/user";

export const AuthContext = createContext({
    login: () => console.error("AuthProvider missing!"),
    logout: () => console.error("AuthProvider missing!"),
});

export const AuthProvider = ({ children }) => {
    const { setUser, logout: storeLogout } = useUserStore();
    useLayoutEffect(() => {
        const storedLogin = localStorage.getItem("userLoggedIn");
        if (storedLogin === null) {
            localStorage.setItem("userLoggedIn", "false"); // Initialize if missing
        }
    }, []);

    const login = (userData) => {
        setUser(userData || {}); // Handle case where no data is passed
    };

    const logout = () => {
        storeLogout(); // This already clears localStorage
    };

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
