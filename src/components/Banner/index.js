import React, { useState } from 'react';
import { withRouter } from '@docusaurus/router';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

/**
 * Is the URL a platform doc url
 * @param {*} path 
 * @returns {bool}
 */
const isPlatformUrl = path => {
  const platformDocsPath = 'docs/platform';
  return path.includes(platformDocsPath)
};

const BannerContent = () => (
  <section className={styles.banner}>
    <div className={styles.bannerContent}>
      <div className={styles.bannerWrapper}>
        <h4>Can't find the information you need?</h4>
        <p style={{ fontSize: '0.9', margin: 0 }}>We are working hard to document everything. If you can't find what you need the information might be in the <Link to="/docs/open-source/getting-started/intro">Falcon Open Source docs</Link>.</p>
      </div>
    </div>
  </section>
);

const Banner = ({ history }) => {

  const isVisible = isPlatformUrl(history.location.pathname);
  const [visibility, setVisibility] = useState(isVisible);

  history.listen((location) => {
    setVisibility(isPlatformUrl(location.pathname));
  });

  return visibility ? <BannerContent /> : null;
};

export default withRouter(Banner);
