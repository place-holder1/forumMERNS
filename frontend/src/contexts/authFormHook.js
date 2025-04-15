import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

function useAuthForm(isRegister) {

    const navigate = useNavigate();
    const [errors, setErrors] = useState('');
    const [submitting, setSubmitting] = useState(false);
    //const { login } = useContext(AuthContext);
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
        try {

            const response = await fetch(`https://web.ics.purdue.edu/~omihalic/profile-app/auth.php`, {
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
                //login();
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