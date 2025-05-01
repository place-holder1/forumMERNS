import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserStore } from "../../store/user"; // Zustand store for user state    
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext"; // Context for authentication

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext); // Get logout from AuthContext
    const { user, logout: storeLogout } = useUserStore(); // Get Zustand store methods
    
    const handleLogout = () => {
        logout(); // Calls AuthContext's logout
        storeLogout(); // Calls Zustand's logout
        navigate("/"); // Redirect to home after logout
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        search();
    };

    const search = async () => {
        console.log("Searching for " + searchQuery);

        const response = await fetch(`/api/threads/search?q=${searchQuery}`);
        const data = await response.json();

        if (data?.length > 0) {
            navigate(`/search-results?q=${searchQuery}`);
        } else {
            alert("No threads found.");
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navLogo}>
                <Link to="/">Valley Of Secrets</Link>
            </div>

            <div className={styles.navSearch}>
                <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search threads"
                        className={styles.searchInput}
                    />
                </form>
            </div>

            <div className={styles.navAccount}>
                {user ? ( 
                    <div className={styles.profile_active}>
                        <Link to="/createPost">New Post</Link>
                        <Link to="/profile">Profile</Link>
                        <button 
                            onClick={handleLogout}
                            className={styles.profile_active}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className={styles.logRegister}>
                        <Link className={styles.null_login} to="/login">Login</Link>
                        <Link className={styles.null_register} to="/register">Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;