import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import style from '../components/LoginForm/login.module.css';

const Register = () => {
    return(
        <div className={style["formWrapper"]}>
            <LoginForm isRegister={true} />
        </div>

    );
}

export default Register;