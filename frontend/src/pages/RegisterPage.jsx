import React, { useState, useRef } from 'react';
import LoginForm from '../components/LoginForm';
import style from '../styles/login.module.css';

const Register = () => {
    return(
        <div className={style["login-page"]}>
            <LoginForm isRegister={true} />
        </div>

    );
}

export default Register;