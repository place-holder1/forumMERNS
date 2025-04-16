import { NavLink } from 'react-router-dom';
import styles from "../../styles/main.module.css"

const forumTabs = [
    { name: "Home", path: "/home"},
    { name: "What's New", path: "/new"}
]

const TabLinks = () => {

    return (
        <div className={styles.TabWrapper}>
            {forumTabs.map((tab, index) => (
                <NavLink
                    key={index}
                    to={tab.path}
                    className={({ isActive }) =>
                        isActive ? `${styles.tab} ${styles.active}` : styles.tab
                    }
                >
                    {tab.name}
                </NavLink>
            ))}
        </div>
    )
}

export default TabLinks