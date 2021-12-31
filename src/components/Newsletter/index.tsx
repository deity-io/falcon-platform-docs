import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Mailchimp from './Mailchimp';
import styles from './styles.module.scss';

const Newsletter = () => {
  const context = useDocusaurusContext();
  const {
    siteConfig: {
      themeConfig: {
        mailchimp: { submitUrl = null }
      }
    }
  } = context;

  if (!submitUrl) {
    return null;
  }
  return (
    <section>
      <div className={styles.wrapper}>
        <h3>Stay up to date</h3>
        <p>
          Do you want to be informed when we release new features or fixes? Sign up to our newsletter to stay in the
          loop.
        </p>
        <Mailchimp action={submitUrl} />
      </div>
    </section>
  );
};

export default Newsletter;
