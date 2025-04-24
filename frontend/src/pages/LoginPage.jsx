import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import style from '../components/LoginForm/login.module.css';

const Login = () => {
    return (
        <div className={style["formWrapper"]}>
            <LoginForm isRegister={false} />
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default Login;