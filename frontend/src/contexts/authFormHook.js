import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useUserStore } from "../store/user";
import { useLayoutEffect } from 'react';

function useAuthForm(isRegister) {
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        email: "",
    });

    const { createUser } = useUserStore()
    const { checkLogin } = useUserStore()

    const navigate = useNavigate();
    const [errors, setErrors] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { login } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        if (isRegister) {
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.value,
            });
        }
        else {
            checkLogin({
                username: newUser.username,
                password: newUser.password,
            });
        }
    };
    const handleSubmit = async (e) => {
        const {success, message} = await createUser(newUser);
        console.log("success: ", success);
        console.log("message: ", message);
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