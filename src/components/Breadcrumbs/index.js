import React, { useState } from 'react';
import { withRouter } from '@docusaurus/router';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const getDocType = path => {
  const platformDocsPath = 'docs/platform';
  const openSourceDocsPath = 'docs/open-source';

  if (path.includes(platformDocsPath)) {
    return {
      title: 'Falcon Platform Documentation',
      url: '/docs/platform/overview/about'
    }
  } else if (path.includes(openSourceDocsPath)) {
    return {
      title: 'Falcon Open Source Documentation',
      url: '/docs/open-source/getting-started/intro'
    }
  }

  return null;
};

const BreadcrumbContent = ({ info }) => (
  <div className={styles.breadcrumbs}>
    <Link to={info.url} className={styles.breadcrumb}>{info.title}</Link>
  </div>
);

const Breadcrumbs = ({ history }) => {

  const hasBreadcrumbInfo = getDocType(history.location.pathname);
  const [breadcrumbInfo, setBreadcrumbInfo] = useState(hasBreadcrumbInfo);

  history.listen((location) => {
    setBreadcrumbInfo(getDocType(location.pathname));
  });

  return breadcrumbInfo ? <BreadcrumbContent info={breadcrumbInfo} /> : null;
};

export default withRouter(Breadcrumbs);
