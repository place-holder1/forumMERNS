import { createContext, useState, useLayoutEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

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
        fetch("https://web.ics.purdue.edu/~omihalic/logout.php")
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setIsLogin(false);
                    localStorage.setItem("userLoggedIn", "false");
                } else {
                    console.log(data.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        setIsLogin(false);
        localStorage.setItem("userLoggedIn", "false");
    };

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
