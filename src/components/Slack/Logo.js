import React from "react";

import styles from "./styles.module.css";

const Logo = () => (
  <span className={styles.slackLogo}>
    <span className={`${styles.slackLogo__color} ${styles.slackLogo__color__yellow}`}>
      <span className={styles.slackLogo__tip}></span>
      <span className={styles.slackLogo__drop}></span>
    </span>

    <span className={`${styles.slackLogo__color} ${styles.slackLogo__color__red}`}>
      <span className={styles.slackLogo__tip}></span>
      <span className={styles.slackLogo__drop}></span>
    </span>

    <span className={`${styles.slackLogo__color} ${styles.slackLogo__color__blue}`}>
      <span className={styles.slackLogo__tip}></span>
      <span className={styles.slackLogo__drop}></span>
    </span>

    <span className={`${styles.slackLogo__color} ${styles.slackLogo__color__green}`}>
      <span className={styles.slackLogo__tip}></span>
      <span className={styles.slackLogo__drop}></span>
    </span>
  </span>
);

export default Logo;
