import styles from "./page-thread.module.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostThread = () => {
  const [categoryThread] = useState({
    topic: "Latest Gossip",
    description: "mmm spicy!",
  });

  

  const [topicThread] = useState({
    topicID: "99999",
    char_img: "https://web.ics.purdue.edu/~omihalic/Villagers/Alex.png",
    image:
      "https://forums.stardewvalley.net/styles/classic/default_avi.jpg",
    topic: "No",
    character: "Alex",
    user: "jester",
    description: "Hi!",
    date: "Dec 31, 1999",
    spacing: " - "
  });

  

const TopicCard = ({ topic }) => {
  return (
    <div className={styles.topic_container}>
      <span className={styles.topic_image}>
        <Link to={`/profile/${topic.user}`}>
          <img
            src={topic.char_img}
            alt={topic.topic}
            className={styles.topic_image}
          />
        </Link>
      </span>
      <div className={styles.topic_text_container}>
        <div className={styles.topic_Name}>
        <Link to={`/posts/${topic.topicID}`}>{topic.character}</Link>
        </div>
        <div className={styles.topic_Content}>
          {/* <div className="topic_User">{topic.user}</div> */}
          <span><Link to={`/profile/${topic.user}`}>{topic.user}</Link></span>
          {topic.spacing}
          {/* <div className="topic_Date">{topic.date}</div> */}
          <span><Link to={`/posts/${topic.topicId}`}>{topic.date}</Link></span>
          {/* <span><a href={`/posts/${topic.postId}`}>{topic.date}</a></span> */}
          
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
            <dd>6</dd>
          </dl>
        </div>
      )}

        {topic.showRecentPost && (
          <div className={styles.topic_recent_post}>
            <div className={styles.recent_post_row_block}>
              <div className={styles.recent_post_row}>
                <Link to={`/posts/${topic.topicId}`}>This is a test</Link>
              </div>
              <div className={styles.recent_post_row}>
                <p>Cool!</p>
              </div>
            </div>
            <Link to={`/profile/${topic.user}`}>
              <span className={styles.topic_post_icon}>
                <img
                  src={topic.image}
                  alt={topic.topic}
                  className={styles.topic_image}
                />
              </span>
            </Link>
          </div>
        )}
    </div>
  );
};

const topics = [];

for (let i = 0; i < 10; i++) {
  topics.push({ ...topicThread, showStats: true, showRecentPost: true });
}

const topicsPerPage = 20;
const numberOfPages = Math.ceil(topics.length / topicsPerPage);

  return (
    <div className={styles.category_container}>
      <div className={styles.outer}>
        <div className={styles.threadPageCount}>
          {Array.from({ length: numberOfPages }, (_, i) => (
            <span key={i} className={styles.pageNumber}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className={styles.newPost}>
          <Link to={"/createPost"}>
            <span className={styles.createPost}>Create Post</span>
          </Link>
        </div>
      </div>
      <h2 className={styles.category_header}>
        {categoryThread.topic}
        <span className={styles.desc}>{categoryThread.description}</span>
      </h2>

      {topics.map((t, i) => (
        <TopicCard key={i} topic={t} />
      ))}
      <div className={styles.outer}>
        <div className={styles.threadPageCount}>
          {Array.from({ length: numberOfPages }, (_, i) => (
            <span key={i} className={styles.pageNumber}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className={styles.newPost}>
          <Link to={"/createPost"}>
            <span className={styles.createPost}>Create Post</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostThread;
