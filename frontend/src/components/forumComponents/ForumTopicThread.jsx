import styles from "./page-thread.module.css"
import {useState, useEffect} from "react"

// This one is deprecated for now

const ForumTopicThread = () => {
 
    const [categoryThread, setCategoryThread] = useState({
        topic: "Test!",
        description: "hi"
    });

    const [topicThread, setTopicThread] = useState({
        image: "https://forums.stardewvalley.net/data/resource_icons/0/155.jpg?1742748854",
        // So apparently trying to link the assets we have don't work as intended. They all become blank.
        topic: "YES",
        description: "Hi!"
    });

    return (
        <div className={styles.category_container}>
            <h2 className={styles.category_header}>
                {categoryThread.topic}
                <span className={styles.desc}>{categoryThread.description}</span>
            </h2>
            <div className={styles.topic_container}>
                <span className={styles.topic_image}>
                    <img src={topicThread.image} 
                    alt={topicThread.topic} 
                    className={styles.topic_image} />
                </span>
                <div className={styles.topic_text_container}>
                    <a href="#">{topicThread.topic}</a>
                    {/* <span className={styles.desc}>{topicThread.description}</span> */}
                    

                </div>
                <div className={styles.topic_stats}>

                </div>
                <div className={styles.topic_recent_post}>
                    
                </div>
            </div>
            <div className={styles.topic_container}>
                <span className={styles.topic_image}>
                    <img src={topicThread.image} 
                    alt={topicThread.topic} 
                    className={styles.topic_image} />
                </span>
                <div className={styles.topic_text_container}>
                    {topicThread.topic}
                    {/* <span className={styles.desc}>{topicThread.description}</span> */}
                    
                </div>
                <div className={styles.topic_stats}>
                        <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
                            <dt>Topics</dt>
                            <dd>1</dd>
                        </dl>
                        <dl className={`${styles.pairs} ${styles.pairs_stats}`}>
                            <dt>Posts</dt>
                            <dd>1</dd>
                        </dl>
                    </div>
                    <div className={styles.topic_recent_post}>
                        <span className={styles.topic_post_icon}>
                        <img src={topicThread.image} 
                        alt={topicThread.topic} 
                        className={styles.topic_image} />
                        </span>
                        <div className="recent_post_row_block">
                            <div className={styles.recent_post_row}>
                                <a href="#">This is a test</a>
                            </div>
                            <div className={styles.recent_post_row}>
                                <p>yes</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.topic_container}>
             <span className={styles.topic_image}>
                    <img src={topicThread.image} 
                    alt={topicThread.topic} 
                    className={styles.topic_image} />
                </span>
                <div className={styles.topic_text_container}>
                    {topicThread.topic}
                    {/* <span className={styles.desc}>{topicThread.description}</span> */}
                    
                </div>
            </div>
        </div>
    );
};

export default ForumTopicThread;