import { useParams } from 'react-router-dom';
import styles from './profile.module.css';
import { Link } from 'react-router-dom';

const ProfileMain = () => {
  const { username } = useParams();

  // In the future, maybe add a switch to each option here?

  const userData = {
    username: "Dummy",
    avatar: "https://forums.stardewvalley.net/styles/classic/default_avi.jpg",
    bio: "why am I so sad.",
    joinDate: "Joined during The Great Depression",
  };

  return (
    <div className={styles.profileMain}>
      <div className={styles.profileHeader}>
        <img
          src={userData.avatar}
          alt={`${userData.username}'s avatar`}
          className={styles.profileAvatar}
        />
        <div className={styles.profileDetails}>
          <h1 className={styles.profileUsername}>{userData.username}</h1>
          <p className={styles.profileBio}>{userData.bio}</p>
          <p className={styles.profileJoinDate}>{userData.joinDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
