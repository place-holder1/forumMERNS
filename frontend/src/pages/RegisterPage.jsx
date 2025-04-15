import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import LoginForm from '../components/LoginForm';

const Register = () => {
    return(
        <Wrapper>
            <LoginForm isRegister={true} />
        </Wrapper>
    );
}

export default Register;