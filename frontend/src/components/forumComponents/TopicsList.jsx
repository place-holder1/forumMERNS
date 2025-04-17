import styles from "../../styles/front.module.css"
import { useState, useEffect } from "react";
import PostThread from "./PostThread";

const TopicsList = () => {

    const topic = []
    const ObjectRow = 0;
    for (let i = 0; i < topic; i++) {
        ObjectRow()
    } 

    return (
        <div className={styles.PageThread}>
            <div className={styles.topicThreadGroup}>
                {/* div.topicThreadName */}
                <PostThread/>
            </div>
            <div className={styles.topicThreadGroup}>
                {/* div.topicThreadName */}
                <PostThread/>
            </div>
            
        </div>
    )

}

export default TopicsList;