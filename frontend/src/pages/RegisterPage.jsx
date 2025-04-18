import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import Wrapper from '../components/Wrapper';
import LoginForm from '../components/LoginForm/LoginForm';

const Register = () => {
    return(
        <div className="formWrapper">
            <LoginForm isRegister={true} />
        </div>
    );
}

export default Register;