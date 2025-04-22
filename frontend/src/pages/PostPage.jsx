import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Post from '../components/Posts/post';
// import Wrapper from '../components/Wrapper';
// import LoginForm from '../components/Posts/post';

const PostPage = () => {
    const { postId } = useParams();
    console.log("Hi!");
  
    return (
      <div className='Yes'>
        <h1>Viewing Post: {postId}</h1>
        <p>This is where the post content will go.</p>
        <Post/>
      </div>
    );
  };

export default PostPage;