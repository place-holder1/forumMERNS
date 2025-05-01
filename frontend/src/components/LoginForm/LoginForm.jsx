import { useEffect, useRef } from "react";
import style from "./login.module.css";
import { useAuthForm } from "../../hooks/useAuthForm";

const LoginForm = ({ isRegister = false }) => {
    const {
        userData,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
    } = useAuthForm(isRegister);

    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className={style["login-form"]}>
            <h1>{isRegister ? "Register" : "Login"}</h1>

            {errors && <div className={style.error}>{errors}</div>}

            <label htmlFor="username">Username</label>
            <input
                ref={nameRef}
                type="text"
                id="username"
                name="username"
                required
                value={userData.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                required
                minLength={8}
                value={userData.password}
                onChange={handleChange}
            />

            {isRegister && (
                <>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={userData.email}
                        onChange={handleChange}
                    />
                </>
            )}

            <button
                type="submit"
                disabled={isSubmitting ||
                    !userData.username.trim() ||
                    !userData.password.trim() ||
                    (isRegister && !userData.email.trim())
                }
            >
                {isSubmitting ? "Processing..." : isRegister ? "Register" : "Login"}
            </button>
        </form>
    );
};

export default LoginForm;