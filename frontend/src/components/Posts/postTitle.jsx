import styles from "./post.module.css";
import { useState } from "react";

const postTitle = () => {
  return (
    <h1 className={styles.topicTitle}>Camels are awesome!</h1>
  )
}

export default postTitle