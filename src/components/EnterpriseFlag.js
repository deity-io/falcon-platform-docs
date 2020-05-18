import React from 'react';
import Link from '@docusaurus/Link';

const EnterpriseFlag = () => (
  <Link
    to="/docs/platform/overview/plans#enterprise"
    style={{
      backgroundColor: 'rgb(45, 36, 89)',
      color: '#fff',
      padding: '.2rem .5rem',
      margin: '0 0 1rem',
      textTransform: 'uppercase',
      display: 'inline-block',
    }}>
    Enterprise Only
  </Link>
);

export default EnterpriseFlag;
