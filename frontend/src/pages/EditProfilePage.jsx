import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import TabLinks from '../components/TabLinks/TabLinks';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile';
import styles from '../components/Profile/profile.module.css';


const ProfilePage = () => {
  
    return (
      <div className='Yes'>
        <TabLinks/>
        <EditProfile/>
      </div>
    );
  };

export default ProfilePage;