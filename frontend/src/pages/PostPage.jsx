import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Posts from '../components/Posts/post';
import PostTitle from '../components/Posts/postTitle';
import TabLinks from '../components/TabLinks/TabLinks';
// import Wrapper from '../components/Wrapper';
// import LoginForm from '../components/Posts/post';

const PostPage = () => {
    // const { postId } = useParams();
    console.log("Hi!");
  
    return (
        <>
        <TabLinks />
        <PostTitle/>
        <Posts>
        </Posts>
        </>
    );
  };

export default PostPage;