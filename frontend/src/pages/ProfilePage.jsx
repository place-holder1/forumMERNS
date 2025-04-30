import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import TabLinks from '../components/TabLinks/TabLinks';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
    const { user } = useParams();
    console.log("Nah!");
  
    return (
      <div className='Yes'>
        <TabLinks/>
        <Profile/>
      </div>
    );
  };

export default ProfilePage;