import styles from "../styles/main.module.css"
import TabLinks from "./forumComponents/TabLinks"
import ForumTopicThread from "./forumComponents/ForumTopicThread"
import TopicsList from "./forumComponents/TopicsList"
// import Wrapper from "./Wrapper";

const MainComponent = () => {
    
    return(
        <div className={styles.everything}>
            <TabLinks></TabLinks>
            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    {/* <h2>HELLO!</h2> */}
                    <TopicsList/>
                </div>
            </div>
        </div>
    )
}

export default MainComponent;