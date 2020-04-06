import React from "react";
import Link from "@docusaurus/Link";
import Logo from "./Logo";
import styles from "./styles.module.css";

const Slack = () => (
  <section className={styles.slack}>
    <div className={styles.slackWrapper}>
      <div className={styles.slackBanner}>
        <div className={styles.slackBanner__logo}>
          <Link
            href="https://deity-community.slack.com/archives/CDL2XDSHZ"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to community our Slack Channel"
          >
            <Logo />
          </Link>
        </div>
        <div className={styles.slackBanner__content}>
          <h3>
            Ask the community. <Link
              href="https://deity-community.slack.com/archives/CDL2XDSHZ"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to community our Slack Channel"
            >
              #help
            </Link>
          </h3>
          <p>
            If you can't find what you're looking for, the answer might be on our
            community slack channel (
            <Link
              href="https://deity-community.slack.com/archives/CDL2XDSHZ"
              target="_blank"
              rel="noopener noreferrer"
            >
            deity-community.slack.com</Link>). Our team keep a close eye on this and will usually get back to you within a few hours, if not straight away.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Slack
