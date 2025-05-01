import React, { useState, useEffect } from 'react';
import styles from './createPost.module.css';
import { usePostStore } from '../../store/post';
import { useCharacterStore } from '../../store/character';
import { useUserStore } from '../../store/user';

const CreatePost = () => {
  const { characters, setCharacters } = useCharacterStore();
  const { user } = useUserStore();
  const { createPost } = usePostStore();

  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
    character: '',
    tags: [],
    createdby: user?._id || '', // set on mount
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('/api/characters');
        const data = await response.json();
        setCharacters(data);
      } catch (err) {
        console.error("Failed to load characters:", err);
      }
    };

    fetchCharacters();
  }, [setCharacters]);

  useEffect(() => {
    // set user ID in createdby if available
    if (user?._id) {
      setNewPost(prev => ({ ...prev, createdby: user._id }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(',').map(tag => tag.trim());
    setNewPost(prev => ({ ...prev, tags: tagsArray }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await createPost(newPost);
    if (success) {
      alert('Post created successfully!');
      setNewPost({
        title: '',
        body: '',
        character: '',
        tags: [],
        createdby: user?._id || '',
      });
    } else {
      alert(message || 'Post creation failed.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Create New Post</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Title
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Body
          <textarea
            name="body"
            value={newPost.body}
            onChange={handleChange}
            className={styles.textarea}
            rows="6"
            required
          />
        </label>

        <label className={styles.label}>
          Character
          <select
            name="character"
            value={newPost.character}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <>
              <option value="">None (no character)</option>
              <option value="mystery">🕵️ Mystery Character</option>
              <option disabled>──────────</option>
              {characters?.map((character) => (
                <option key={character._id} value={character._id}>
                  {character.character}
                </option>
              ))}
            </>
          </select>
        </label>

        <label className={styles.label}>
          Tags
          <input
            type="text"
            name="tags"
            value={newPost.tags.join(', ')}
            onChange={handleTagsChange}
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

export default CreatePost;
