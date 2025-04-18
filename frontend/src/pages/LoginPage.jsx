import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Wrapper from '../components/Wrapper';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
    return (
        <>
            <div className="formWrapper">
            <LoginForm isRegister={false} />
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </>
    );
}

export default Login;