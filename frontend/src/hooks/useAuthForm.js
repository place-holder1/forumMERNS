import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useUserStore } from '../store/user';

export function useAuthForm(isRegister) {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
    });
    const [errors, setErrors] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useContext(AuthContext);
    const { checkLogin, createUser } = useUserStore();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        if (!userData.username.trim()) return "Username is required";
        if (!userData.password.trim()) return "Password is required";
        if (isRegister && !userData.email.trim()) return "Email is required";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setErrors(validationError);
            return;
        }

        setIsSubmitting(true);
        setErrors(null);

        try {
            let result;
            if (isRegister) {
                result = await createUser(userData);
                console.log('Registration result:', result);
                if (result?.user) {
                    login(result.user);
                    navigate("/");
                    return;
                }
            } else {
                result = await checkLogin({
                    username: userData.username.toLowerCase(),
                    password: userData.password
                });
                console.log('Login result:', result);
                if (result?.user) {
                    login(result.user);
                    navigate("/");
                    return;
                }
            }

            setErrors(result?.error ||
                (isRegister ? "Registration failed" : "Login failed"));
        } catch (err) {
            setErrors("An unexpected error occurred");
            console.error("Authentication error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        userData,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
}