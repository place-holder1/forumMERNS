import React, { useState } from 'react'
import styles from './createPost.module.css'
import { usePostStore } from '../../store/post';
import { useCharacterStore } from '../../store/character';
import { useUserStore } from '../../store/user';
import { useEffect } from 'react';

const getCharacters = async () => {
  const response = await fetch('/api/characters')
  const data = await response.json()
  return data
}


const CreatePost = () => {

  const { characters, setCharacters } = useCharacterStore((state) => state.characters)
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
    character: '',
    tags: [],
    createdby: '', // This should be set to the logged-in user's ID
  });

  const { createPost } = usePostStore()
  
  const handleAddPost = async (e) => {
    e.preventDefault()
    const {success, message} = await createPost(newPost)
    if (success) {
      alert('Post created successfully!')
      setNewPost({
        title: '',
        body: '',
        character: '',
        tags: [],
        createdby: userId,
      })
    } else {
      alert(message)
    }
  
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

          <label className={styles.label}>
            Character
            <select
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              className={styles.select}
              required
            >
              <option value="">Select a character</option>
              {
                characters.map((character) => (
                  <option key={character._id} value={character._id}>
                    {character.character}
                  </option>
                ))}
            </select>
          </label>

          <label className={styles.label}>
            Tags
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value.split(','))}
              className={styles.input}
              placeholder="Comma separated tags"
            />
          </label>
  
          <button type="submit" className={styles.submitButton}>
            Post
          </button>
        </form>
      </div>
    );
  };
}

export default CreatePost