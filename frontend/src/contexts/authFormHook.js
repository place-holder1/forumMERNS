import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

function useAuthForm(isRegister) {

    const navigate = useNavigate();
    const [errors, setErrors] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { login } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState("");
    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData();
        formData.append("username", data.username.trim());
        formData.append("password", data.password.trim());
        if (isRegister) formData.append("email", data.email.trim());
        formData.append("action", isRegister ? "register" : "login");
        if (isRegister) {
            try {
                const response = await fetch("http://localhost:5000/api/users", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                if (data.success) {
                    setErrors('');
                    setSuccessMessage(data.message);
                    setData({
                        username: "",
                        password: "",
                        email: "",
                    });
                    localStorage.setItem("userID", data.userID);
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("profilePic", data.profilePic);
                    localStorage.setItem("isLogin", true);
                    login();
                    navigate("/");
                } else {
                    setSuccessMessage('');
                    setErrors(data.error);
                }
            } catch (error) {
                console.error("Error:", error);
            }
            finally {
                setSubmitting(false);
            }
        }
        else {
            try {
                const response = await fetch("http://localhost:5000/api/users/login", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                if (data.success) {
                    setErrors('');
                    setSuccessMessage(data.message);
                    setData({
                        username: "",
                        password: "",
                        email: "",
                    });
                    localStorage.setItem("userID", data.userID);
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("profilePic", data.profilePic);
                    localStorage.setItem("isLogin", true);
                    login();
                    navigate("/");
                } else {
                    setSuccessMessage('');
                    setErrors(data.error);
                }
            } catch (error) {
                console.error("Error:", error);
            }
            finally {
                setSubmitting(false);
            }
        }


    };

    return {
        data,
        errors,
        submitting,
        successMessage,
        handleChange,
        handleSubmit,
    };
}

export default useAuthForm;