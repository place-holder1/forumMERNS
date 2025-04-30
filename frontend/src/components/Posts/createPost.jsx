import React, { useState } from 'react'
import styles from './createPost.module.css'

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
        // send me to the backend
      console.log('Submitted Post:', { title, body });
  
      setTitle('');
      setBody('');
    };
  
    return (
      <div className={styles.container}>
        <h2 className={styles.header}>Create New Post</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              required
            />
          </label>
  
          <label className={styles.label}>
            Body
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className={styles.textarea}
              rows="6"
              required
            />
          </label>
  
          <button type="submit" className={styles.submitButton}>
            Post
          </button>
        </form>
      </div>
    );
  };
  

export default CreatePost