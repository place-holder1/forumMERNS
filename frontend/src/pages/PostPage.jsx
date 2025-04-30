import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Posts from '../components/Posts/post';
import TabLinks from '../components/TabLinks/TabLinks';
// import Wrapper from '../components/Wrapper';
// import LoginForm from '../components/Posts/post';

const PostPage = () => {
    // const { postId } = useParams();
  
    return (
        <>
        <TabLinks />
        <Posts/>
        </>
    );
  };

export default PostPage;