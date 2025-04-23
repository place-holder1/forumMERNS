import styles from "./post.module.css";
import { useState } from "react";

const Posts = () => {
  const [posts] = useState([
    {
      id: 1,
      user: {
        username: "Sebby",
        avatar: "https://forums.stardewvalley.net/styles/classic/default_avi.jpg",
        title: "Junimo Farmer",
        postCount: 123,
        joined: "Jan 2021",
      },
      content: "I love depression!",
      date: "Dec 31st, 1999"
    },
    {
      id: 2,
      user: {
        username: "Abigail",
        avatar: "https://forums.stardewvalley.net/data/avatars/m/0/4.jpg",
        title: "Crystal Collector",
        postCount: 45,
        joined: "May 2022",
      },
      content: "I'm not Abigail :/",
      date: "Jan 3rd, 2024"
    }
  ]);

  const UserInfo = ({ user }) => (
    <aside className={styles.user_Container}>
      <img className={styles.avatar} src={user.avatar} alt={`${user.username}'s avatar`} />
      <div className={styles.username}>{user.username}</div>
      <div className={styles.title}>{user.title}</div>
      <div className={styles.stats}>
        <div><strong>Posts:</strong> {user.postCount}</div>
        <div><strong>Joined:</strong> {user.joined}</div>
      </div>
    </aside>
  );

  const PostContent = ({ content, date }) => (
    <section className={styles.content_Container}>
      <div className={styles.postHeader}>
        <span className={styles.postDate}>{date}</span>
      </div>
      <div className={styles.postBody}>
        {content}
      </div>
    </section>
  );

  const Post = ({ user, content, date }) => (
    <article className={styles.postWrapper}>
      <div className={styles.postContainer}>
        <UserInfo user={user} />
        <PostContent content={content} date={date} />
      </div>
    </article>
  );

  return (
    <div className={styles.everything}>
      {posts.map((post) => (
        <Post key={post.id} user={post.user} content={post.content} date={post.date} />
      ))}
    </div>
  );
};

export default Posts;
