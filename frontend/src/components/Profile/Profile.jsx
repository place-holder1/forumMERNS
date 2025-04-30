import styles from './profile.module.css';
import ProfileSide from './ProfileSide';
import ProfileMain from './ProfileMain';

const Profile = () => {
  return (
    // If Logged in, then show the backend of the user
    <div className={styles.profileContainer}>
      <aside className={styles.sideNav}>
        <ProfileSide/>
      </aside>
      <ProfileMain />
    </div>
  );
};

export default Profile;
