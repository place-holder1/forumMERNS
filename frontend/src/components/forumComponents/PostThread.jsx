import styles from "./page-thread.module.css";
import { useState } from "react";

const PostThread = () => {
  const [categoryThread] = useState({
    topic: "Welcome!",
    description: "hi",
  });

  const [topicThread] = useState({
    image:
      "https://forums.stardewvalley.net/data/resource_icons/0/155.jpg?1742748854",
    topic: "No",
    user: "jester",
    description: "Hi!",
    date: "Dec 31, 1999",
    spacing: " - "
  });

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
        <div className={styles.topic_Name}>
          {topic.topic}
        </div>
        <div className={styles.topic_Content}>
          {/* <div className="topic_User">{topic.user}</div> */}
          <span><a href={topic.user}>{topic.user}</a></span>
          {topic.spacing}
          {/* <div className="topic_Date">{topic.date}</div> */}
          <span><a href={topic.date}>{topic.date}</a></span>
          
        </div>
      </div>

      {topic.showStats && (
        <div className={styles.topic_stats}>
          <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
            <dt>Replies</dt>
            <dd>1</dd>
          </dl>
          <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
            <dt>Views</dt>
            <dd>1</dd>
          </dl>
        </div>
      )}

      {topic.showRecentPost && (
        <div className={styles.topic_recent_post}>
          <div className={styles.recent_post_row_block}>
            <div className={styles.recent_post_row}>
              <a href="#">This is a test</a>
            </div>
            <div className={styles.recent_post_row}>
              <p>Cool!</p>
            </div>
          </div>
          <span className={styles.topic_post_icon}>
            <img
              src={topic.image}
              alt={topic.topic}
              className={styles.topic_image}
            />
          </span>
        </div>
      )}
    </div>
  );
};

  const topics = [
    { ...topicThread, showStats: true, showRecentPost: true },
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
