import styles from "../../styles/forum-thread.module.css"
import {useState, useEffect} from "react"

const ForumThread = () => {
 
    const [categoryThread, setCategoryThread] = useState({
        topic: "Welcome!",
        description: "hi"
    });

    const [topicThread, setTopicThread] = useState({
        image: "Image",
        topic: "Yes",
        description: "Hi!"
    });

    return (
        <div className={styles.category_container}>
            <h2 className={styles.category_header}>
                {categoryThread.topic}
                <span className={styles.desc}>{categoryThread.description}</span>
            </h2>
            <div className={styles.topic_container}>
                <span className={styles.topic_image}>{topicThread.image}</span>
                <div className={styles.topic_text_container}>
                    {topicThread.topic}
                    {/* <span className={styles.desc}>{topicThread.description}</span> */}

                </div>
                <div className={styles.topic_stats}>

                </div>
                <div className={styles.topic_recent_post}>
                    
                </div>
            </div>
            <div className={styles.topic_container}>
                <span className={styles.topic_image}>{topicThread.image}</span>
                <div className={styles.topic_text_container}>
                    {topicThread.topic}
                    {/* <span className={styles.desc}>{topicThread.description}</span> */}
                    
                </div>
            </div>
            <div className={styles.topic_container}>
            <span className={styles.topic_image}>{topicThread.image}</span>
                <div className={styles.topic_text_container}>
                    {topicThread.topic}
                    {/* <span className={styles.desc}>{topicThread.description}</span> */}
                    
                </div>
            </div>
        </div>
    );
};

export default ForumThread;