import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [login, setLogin] = useState(false);

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

        
        if (data && data.length > 0) {
            history.push(`/search-results?q=${searchQuery}`);
        } else {
            alert("No threads found.");
        }
    };

    useEffect(() => {
        // Supposedly to get API from here
    }, []);

    useEffect(() => {
        // Check if the user is logged in (can be from localStorage, cookies, or an API)
        const userLoggedIn = localStorage.getItem('userLoggedIn'); // Example of getting login status from localStorage
        setLogin(userLoggedIn === 'true'); // Set login state to true or false based on localStorage
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navLogo}>
                <Link to="/">Forum</Link>
            </div>

            <div className={styles.navSearch}>
                <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search threads"
                        className={styles.searchInput}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                search();
                            }
                        }}
                    />
                </form>
            </div>

            <div className={styles.navAccount}>
                {login ? (
                    <div className={styles.profile_active}>
                        <Link to="/profile">Profile</Link>
                    </div>
                ) : (
                    <div className={styles.logRegister}>
                        <Link className={styles.null_login} to="/login">Login</Link>
                        <Link className={styles.null_register}  to="/register">Register</Link>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;
