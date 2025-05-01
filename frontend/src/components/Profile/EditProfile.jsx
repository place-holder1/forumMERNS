import { useUserStore } from "../../store/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./profile.module.css";
import ProfileSide from "./ProfileSide";

const EditProfile = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUserStore((state) => ({
        user: state.user,
        setUser: state.setUser,
    }));
    const [profileData, setProfileData] = useState(user);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the user profile data in the store
        setUser(profileData);
        // Optionally, you can also send a request to the backend to update the profile
    };

    return (
        <div className={styles.profileContainer}>
            <aside className={styles.sideNav}>
                <ProfileSide />
            </aside>
            <main className={styles.mainContent}>
                <h1>Edit Profile</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={profileData.username}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>Profile Photo</label>
                    <input type="text" name="avatarUrl" value={profileData.avatarUrl} onChange={handleInputChange} />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>Bio</label>
                    <textarea name="bio" value={profileData.bio} onChange={handleInputChange} />
                    <button type="submit">Save Changes</button>
                </form>
            </main>
        </div>
    );

}

export default EditProfile;