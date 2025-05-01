import styles from "./main.module.css"
import FrontMain from "./FrontMain";
import FrontSide from "./FrontSide";
import TabLinks from "../TabLinks/TabLinks";
// import Wrapper from "./Wrapper";

const MainComponent = () => {

    return (
        <div className={"Main"}>
            <TabLinks />
            <div className={styles.mainContainer}>

                <div className={styles.mainContent}>

                    {/* <h2>HELLO!</h2> */}
                    <FrontMain />
                    <FrontSide />
                </div>
            </div>
        </div>
    )
}

export default MainComponent;