import styles from "../../styles/front.module.css"
import { useState, useEffect } from "react";
import ForumThread from "./ForumThread";

const FrontMain = () => {

    const topic = []
    const ObjectRow = 0;
    for (let i = 0; i < topic; i++) {
        ObjectRow()
    } 

    return (
        <div className={styles.frontMain}>
            <div className={styles.topicThreadGroup}>
                {/* div.topicThreadName */}
                <ForumThread/>
            </div>
            <div className={styles.topicThreadGroup}>
                {/* div.topicThreadName */}
                <ForumThread/>
            </div>
            
        </div>
    )

}

export default FrontMain;