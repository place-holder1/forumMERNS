import { useEffect, useState, useRef } from 'react';
import { useUserStore } from "../../store/user";
import { useNavigate } from "react-router-dom";
import styles from './profile.module.css';

const EditProfile = () => {
    const navigate = useNavigate();
    const { user, setUser, updateUser } = useUserStore();
    const [profileData, setProfileData] = useState(null);
    const initialized = useRef(false);

    // Safe initialization
    useEffect(() => {
        if (!initialized.current && user) {
            setProfileData({
                username: user.username || '',
                email: user.email || '',
                avatarUrl: user.avatarUrl || '',
                bio: user.bio || ''
            });
            initialized.current = true;
        }
    }, [user]);

    // Navigation guard
    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!profileData || !user?._id) return;

        try {
            await updateUser(user._id, profileData);
            setUser(profileData);
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    if (!profileData) return <div>Loading...</div>;
    return (
        <div className={styles.profileContainer}>
            <main className={styles.mainContent}>
                <form className={styles.editProfileForm} onSubmit={handleSubmit}>
                    <h2 className={styles.editProfileTitle}>Edit Profile</h2>

                    <label className={styles.formLabel}>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={profileData.username}
                        onChange={handleInputChange}
                        className={styles.formInput}
                    />


                    <label className={styles.formLabel}>Profile Photo URL:</label>
                    <input
                        type="url"
                        name="avatarUrl"
                        value={profileData.avatarUrl}
                        onChange={handleInputChange}
                        className={styles.formInput}
                    />

                    <label className={styles.formLabel}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                    />

                    <label className={styles.formLabel}>Bio:</label>
                    <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        className={`${styles.formInput} ${styles.formTextarea}`}
                    />

                    <button type="submit" className={styles.saveButton}>
                        Save Changes
                    </button>
                </form>
            </main>
        </div>
    );
}

export default EditProfile;