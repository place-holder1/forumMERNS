import styles from "./profile.module.css"

const Option = ({ label, icon, isActive }) => {
    return (
        <div className={`${styles.option} ${isActive ? styles.active : ""}`}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.label}>{label}</span>
        </div>
    );
};

const ProfileSide = () => {
    return (
        <div className={styles.sideNavContainer}>
            <h2 className={styles.title}>Your Account</h2>
            <div className={styles.optionsList}>
                <Option label="Profile" isActive />
                <Option label="Security & Password" />
                <Option label="Privacy" />
                <Option label="Preferences" />
                <Option label="Logout" />
            </div>
        </div>
    );
};

export default ProfileSide;