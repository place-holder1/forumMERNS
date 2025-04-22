import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
    const { user } = useParams();
    console.log("Nah!");
  
    return (
      <div className='Yes'>
        <h1>Vyeyeyeet: {user}</h1>
        <p>This is where the post content will go.</p>
        <Profile/>
      </div>
    );
  };

export default ProfilePage;