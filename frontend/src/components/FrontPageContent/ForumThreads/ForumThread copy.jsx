import styles from "./forum-thread.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ForumThread = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        const data = await response.json();
        if (data.success) {
          setCategories(data.data);
        } else {
          console.error("Failed to fetch categories:", data.message);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const TopicCard = ({ topic }) => (
    <div className={styles.thread_container}>
      <span className={styles.topic_image}>
        <Link to={`/category/${topic.topic}`}>
          <img src={topic.image} alt={topic.topic} className={styles.topic_image} />
        </Link>
      </span>

      <div className={styles.topic_text_container}>
        <Link to={`/category/${topic.topic}`}>{topic.topic}</Link>
      </div>

      {topic.showStats && (
        <div className={styles.topic_stats}>
          <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
            <dt>Topics</dt>
            <dd>{topic.topicCount}</dd>
          </dl>
          <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
            <dt>Posts</dt>
            <dd>{topic.postCount}</dd>
          </dl>
        </div>
      )}

      {topic.showPost && (
        <div className={styles.topic_recent_post}>
          <span className={styles.topic_post_icon}>
            <img src={topic.image} alt={topic.topic} className={styles.topic_image} />
          </span>
          <div className={styles.recent_post_row_block}>
            <div className={styles.recent_post_row}>
              <Link to={`/posts/${topic.topicId}`}>This is aaa</Link>
            </div>
            <div className={styles.recent_post_row}>
              <p>yes</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.forum_container}>
      {categories.map((cat, catIndex) => (
        <div key={catIndex} className={styles.category_container}>
          <h2 className={styles.category_header}>
            {cat.category} {/* change to match your schema */}
            <span className={styles.desc}>{cat.description}</span>
          </h2>

        </div>
      ))}
    </div>
  );
};

export default ForumThread;
