import { createContext, useState, useLayoutEffect } from "react";
import { useUserStore } from "../store/user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const { setUser } = useUserStore((state) => ({
        setUser: state.setUser,
    }));
    const [user, setUserState] = useState(null);
    useLayoutEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUserState(JSON.parse(user));
            setUser(JSON.parse(user));
        } else {
            setUserState(null);
            setUser(null);
        }
    }
    , []);

    const [isLogin, setIsLogin] = useState(false);
    useLayoutEffect(() => {
        const isLogin = localStorage.getItem("userLoggedIn");
        if (isLogin) {
            setIsLogin(isLogin === "true");
        }
    }, []);
    const login = () => {
        setIsLogin(true);
        localStorage.setItem("userLoggedIn", "true");
    }
    const logout = () => {
        setIsLogin(false);
        localStorage.setItem("userLoggedIn", "false");
        localStorage.removeItem("user");
        setUserState(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
