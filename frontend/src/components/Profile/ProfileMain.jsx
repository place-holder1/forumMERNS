import styles from './profile.module.css';
import { Link } from 'react-router-dom';
import { useUserStore } from "../../store/user";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileMain = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  
  // Redirect if no user is logged in
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Return loading state if user data isn't available yet
  if (!user) {
    return <div className={styles.loadingContainer}>Loading profile...</div>;
  }

  // Format join date if available
  const formatJoinDate = () => {
    if (!user.createdAt) return null;
    
    try {
      const joinDate = new Date(user.createdAt);
      return `Joined ${joinDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      })}`;
    } catch {
      return null;
    }
  };

  return (
    <div className={styles.profileMain}>
      <div className={styles.profileHeader}>
        <img
          src={user.avatarUrl || "https://images-ext-1.discordapp.net/external/jiW5Zq7KJs8iEBlsClaPvggLaUkKuSCLrT0KLIGGPQE/https/forums.stardewvalley.net/styles/classic/default_avi.jpg"}
          alt={`${user.username}'s avatar`}
          className={styles.profileAvatar}
          onError={(e) => {
            e.target.src = "https://images-ext-1.discordapp.net/external/jiW5Zq7KJs8iEBlsClaPvggLaUkKuSCLrT0KLIGGPQE/https/forums.stardewvalley.net/styles/classic/default_avi.jpg";
          }}
        />
        
        <div className={styles.profileDetails}>
          <h1 className={styles.profileUsername}>
            {user.username || 'Anonymous User'}
          </h1>
          
          {user.bio && (
            <p className={styles.profileBio}>
              {user.bio}
            </p>
          )}
          
          {formatJoinDate() && (
            <p className={styles.profileJoinDate}>
              {formatJoinDate()}
            </p>
          )}
        </div>
        
        <Link 
          to="/edit-profile" 
          className={styles.editProfileButton}
        >
          Edit Profile
        </Link>
      </div>
      
      <div className={styles.profileContent}>
      </div>
    </div>
  );
};

export default ProfileMain;