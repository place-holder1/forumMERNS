import styles from "../styles/main.module.css"
import FrontMain from "./forumComponents/FrontMain";
import FrontSide from "./forumComponents/FrontSide";
import TabLinks from "./forumComponents/TabLinks";
// import Wrapper from "./Wrapper";

const MainComponent = () => {
    
    return(
        <>
        <div className="TabLinks">
                <TabLinks></TabLinks>
            </div>
        <div className={styles.mainContainer}>
            
            <div className={styles.mainContent}>
                {/* <h2>HELLO!</h2> */}
                <FrontMain/>
                <FrontSide/>
            </div>
        </div>
        </>
    )
}

export default MainComponent;