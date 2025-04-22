import { useParams } from 'react-router-dom';
import styles from './profile.module.css';

const Profile = () => {
  const { username } = useParams();

  const userData = {
    username: username,
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${username}`,
    bio: "Just a traveler wandering through code and pixels.",
    joinDate: "Joined on January 1, 2000",
    posts: [
      { id: "123", title: "First Post!" },
      { id: "456", title: "Another adventure" },
      { id: "789", title: "Tips and Tricks" },
    ],
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img
          src={userData.avatar}
          alt={`${userData.username}'s avatar`}
          className={styles.profileAvatar}
        />
        <div>
          <h1 className={styles.profileUsername}>{userData.username}</h1>
          <p className={styles.profileBio}>{userData.bio}</p>
          <p className={styles.profileJoinDate}>{userData.joinDate}</p>
        </div>
      </div>

      <div className={styles.profilePosts}>
        <h2>Posts by {userData.username}</h2>
        <ul>
          {userData.posts.map((post) => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`} className={styles.profilePostLink}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
