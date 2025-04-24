import styles from "./main.module.css"
import { Link } from "react-router-dom";

const FrontSide = () => {
    return (
        <aside className={styles.frontSide}>
            <div className={styles.sideContainer}>
                <h1>Latest Posts</h1>
                <div className={styles.latest_content}>
                    <ul>
                        <li>
                            <Link to="/" className={styles.thread}>Harvey did WHAT?</Link>
                        <span>by <Link to="/">Emily</Link> • 3h ago</span> •
                            <Link to="/" className={styles.category}>Biggest Gossip</Link>
                        </li>
                        <li>
                            <Link to="/" className={styles.thread}>how do I find a bf</Link>
                        <span>by <Link to="/">single</Link> • 6h ago</span> •
                            <Link to="/" className={styles.category}>Love Central</Link>
                        </li>

                        <li>
                            <Link to="/" className={styles.thread}>What are you watching?</Link>
                        <span>by <Link to="/">JuminoSprout</Link> • 1d ago</span> •
                            <Link to="/" className={styles.category}>Off-Topic</Link>
                        </li>

                        <li>
                            <Link to="/" className={styles.thread}>Fanart ;)</Link>
                        <span>by tumblrqueen • 2d ago</span> •
                            <Link to="/" className={styles.category}>Art</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default FrontSide;