import styles from "./main.module.css"

const FrontSide = () => {
    return (
        <aside className={styles.frontSide}>
            <div className={styles.sideContainer}>
                <h1>Latest Posts</h1>
                <div className={styles.latest_content}>
                    <ul>
                        <li>
                            <a href="#">Harvey did WHAT?</a>
                            <span> by Peach • 3h ago</span>
                        </li>
                        <li>
                            <a href="#">how do i find a bf</a>
                            <span> by single • 6h ago</span>
                        </li>
                        <li>
                            <a href="#">;)</a>
                            <span> by JunimoSprout • 1d ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default FrontSide;