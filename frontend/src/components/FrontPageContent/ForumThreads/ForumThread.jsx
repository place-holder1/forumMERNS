import styles from "./forum-thread.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import forumThreadCount from "./forumThreadCount.json";

const ForumThread = () => {
//   const [categoryThread] = useState({
//     topic: "Welcome!",
//     description: "hi",
//   });

//   const [topicThread] = useState({
//     image: "https://forums.stardewvalley.net/data/resource_icons/0/155.jpg?1742748854",
//     topic: "Yes",
//     description: "Hi!",
//     topicId: "yes-post",
//   });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(forumThreadCount);
  }, []);

//   const topics = [
//     { ...topicThread, showStats: true, showPost: true },
//     { ...topicThread, showStats: true, showPost: true },
//   ];

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
            {cat.topic}
            <span className={styles.desc}>{cat.description}</span>
          </h2>
  
          {cat.topics.map((t, i) => (
            <TopicCard key={i} topic={t} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ForumThread;
