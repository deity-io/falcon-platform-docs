import React, { useState } from 'react';
import { withRouter } from '@docusaurus/router';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const getDocType = path => {
  const platformDocsPath = 'platform';
  const openSourceDocsPath = 'v2019';

  if (path.includes(platformDocsPath)) {
    return {
      id: 1,
      title: 'Falcon Platform',
      url: '/platform/overview'
    };
  } else if (path.includes(openSourceDocsPath)) {
    return {
      id: 2,
      title: 'Falcon 2019',
      url: '/v2019/platform/getting-started/intro'
    };
  }

  return null;
};

const DeprecationNotice = () => (
  <div className={styles.deprecation}>
    Falcon 2019 is now deprecated. If you have an existing Falcon 2019 project we are still commited to support you.
    Please{' '}
    <Link className={styles.deprecationLink} to="https://deity.com/contact">
      get in touch
    </Link>{' '}
    for more information.
  </div>
);

const BreadcrumbContent = ({ info }) => (
  <>
    <div className={styles.breadcrumbs}>
      <Link to={info.url} className={styles.breadcrumb}>
        {info.title}
      </Link>
    </div>
    {info.id === 2 && <DeprecationNotice />}
  </>
);

const Breadcrumbs = ({ history }) => {
  const hasBreadcrumbInfo = getDocType(history.location.pathname);
  const [breadcrumbInfo] = useState(hasBreadcrumbInfo);

  return breadcrumbInfo ? <BreadcrumbContent info={breadcrumbInfo} /> : null;
};

export default withRouter(Breadcrumbs);
