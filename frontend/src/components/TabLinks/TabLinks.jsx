import { NavLink } from 'react-router-dom';
import styles from "../FrontPageContent/main.module.css"

const forumTabs = [
    { name: "Home", path: "/"},
    { name: "What's New", path: "/new"}
]

const TabLinks = () => {

    return (
        // Right now it is justified to center. I don't like it at the moment, but it may be kept that way.
        <div className={styles.tabWrapper}>
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