import styles from "./page-thread.module.css";
import { useState } from "react";

const TopicCard = ({ topic }) => {
  return (
    <div className={styles.topic_container}>
      <span className={styles.topic_image}>
        <img
          src={topic.image}
          alt={topic.topic}
          className={styles.topic_image}
        />
      </span>
      <div className={styles.topic_text_container}>
        {topic.topic}
      </div>

      {topic.showStats && (
        <div className={styles.topic_stats}>
          <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
            <dt>Topics</dt>
            <dd>1</dd>
          </dl>
          <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
            <dt>Posts</dt>
            <dd>1</dd>
          </dl>
        </div>
      )}

      {topic.showRecentPost && (
        <div className={styles.topic_recent_post}>
          <span className={styles.topic_post_icon}>
            <img
              src={topic.image}
              alt={topic.topic}
              className={styles.topic_image}
            />
          </span>
          <div className={styles.recent_post_row_block}>
            <div className={styles.recent_post_row}>
              <a href="#">This is a test</a>
            </div>
            <div className={styles.recent_post_row}>
              <p>yes</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PostThread = () => {
  const [categoryThread] = useState({
    topic: "Welcome!",
    description: "hi",
  });

  const [topicThread] = useState({
    image:
      "https://forums.stardewvalley.net/data/resource_icons/0/155.jpg?1742748854",
    topic: "Yes",
    description: "Hi!",
  });

  const topics = [
    { ...topicThread },
    { ...topicThread, showStats: true, showRecentPost: true },
    { ...topicThread },
    { ...topicThread },
    { ...topicThread },
    { ...topicThread },
    { ...topicThread },
    { ...topicThread },
    { ...topicThread },
    { ...topicThread },
  ];

  return (
    <div className={styles.category_container}>
      <h2 className={styles.category_header}>
        {categoryThread.topic}
        <span className={styles.desc}>{categoryThread.description}</span>
      </h2>

      {topics.map((t, i) => (
        <TopicCard key={i} topic={t} />
      ))}
    </div>
  );
};

export default PostThread;
