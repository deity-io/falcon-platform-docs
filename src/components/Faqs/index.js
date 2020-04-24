import React from "react";
import Link from "@docusaurus/Link";
import SearchBar from "@theme/SearchBar";
import Categories from "./Categories";

import styles from "./styles.module.css";

const Faqs = () => {
  return (
    <>
      <section className={styles.section}>
        <h3 className={styles.section__title}>Search for your question?</h3>
        <div className={styles.search}>
          <SearchBar
            placeholder="Search our FAQs"
            position="faqs"
            isSearchBarExpanded={true}
            size="large"
          />
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.section__title}>What's your question about?</h3>
        <Categories />
      </section>
      <section>
        <h3 className={styles.section__title}>Can't find the answer?</h3>
        <p>
          If you can't find the answer you're looking for please ask in our{" "}
          <Link
            href="https://deity-community.slack.com/archives/CDL2XDSHZ"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to community our Slack Channel"
          >
            community Slack channel
          </Link>
          .
        </p>
      </section>
    </>
  );
};

export default Faqs;
