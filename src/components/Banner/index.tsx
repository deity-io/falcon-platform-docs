import React, { useState } from 'react';
import { withRouter } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

/**
 * Is the URL a platform doc url
 * @param {*} path
 * @returns {bool}
 */
const isPlatformUrl = path => {
  const platformDocsPath = 'docs/platform';
  return path.includes(platformDocsPath);
};

const BannerContent = () => (
  <section className={styles.banner}>
    <div className={styles.bannerContent}>
      <div className={styles.bannerWrapper}>
        <p style={{ fontSize: '0.9', margin: 0 }}>
          <strong>Can&apos;t find the information you need?</strong> The information might be in our{' '}
          <Link to="/docs/open-source/getting-started/intro">Falcon Open Source docs</Link> or in our{' '}
          <Link href="https://deity-community.slack.com/archives/CDL2XDSHZ" target="_blank" rel="noopener noreferrer">
            community Slack channel
          </Link>
          .
        </p>
      </div>
    </div>
  </section>
);

const Banner = ({ history }) => {
  const isVisible = isPlatformUrl(history.location.pathname);
  const [visibility, setVisibility] = useState(isVisible);

  history.listen(location => {
    setVisibility(isPlatformUrl(location.pathname));
  });

  return visibility ? <BannerContent /> : null;
};

export default withRouter(Banner);
