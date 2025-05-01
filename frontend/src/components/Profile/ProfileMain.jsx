import styles from './profile.module.css';
import { Link } from 'react-router-dom';
// import { useContext } from "react";
import { useUserStore } from "../../store/user"; // Zustand store for user state    
import { AuthContext } from "../../contexts/AuthContext"; // Context for authentication

const ProfileMain = () => {

  // In the future, maybe add a switch to each option here?

  const { user } = useUserStore();
  // user? = user might be null, so it'll get data from user instead.

  const userData = {
    username: user?.username,
    avatarUrl: user?.avatarUrl || "https://images-ext-1.discordapp.net/external/jiW5Zq7KJs8iEBlsClaPvggLaUkKuSCLrT0KLIGGPQE/https/forums.stardewvalley.net/styles/classic/default_avi.jpg?format=webp&width=313&height=313",
    bio: "why am I so sad.",
  };

  return (
    <div className={styles.profileMain}>
      <div className={styles.profileHeader}>
        <img
          src={userData.avatarUrl}
          alt={`${userData.username}'s avatar`}
          className={styles.profileAvatar}
        />
        <div className={styles.profileDetails}>
          <h1 className={styles.profileUsername}>{userData.username}</h1>
          <p className={styles.profileBio}>{userData.bio}</p>
          <p className={styles.profileJoinDate}>{userData.joinDate}</p>
        </div>
        <button className={styles.editProfileButton}>
          <Link to="/edit-profile" className={styles.editProfileLink}>
            Edit Profile
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProfileMain;
