import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const FaqCategories = [
  {
    name: 'General',
    url: '/platform/support/faqs/general',
    icon: '/img/bxs-info-square.svg'
  },
  {
    name: 'Falcon Client',
    url: '/platform/support/faqs/client',
    icon: '/img/bx-mobile.svg'
  },
  {
    name: 'Falcon Server',
    url: '/platform/support/faqs/server',
    icon: '/img/bxs-server.svg'
  },
  {
    name: 'Falcon Cloud',
    url: '/platform/support/faqs/cloud',
    icon: '/img/bxs-cloud.svg'
  },
  {
    name: 'Configuration + Integrations',
    url: '/platform/support/faqs/config',
    icon: '/img/bxs-cog.svg'
  },
  {
    name: 'Miscellaneous + Troubleshooting',
    url: '/platform/support/faqs/misc',
    icon: '/img/bx-question-mark.svg'
  }
];

function Categories() {
  return (
    <div className={styles.categories}>
      {FaqCategories.map(category => (
        <div key={category.name} className={styles.category}>
          <Link to={category.url} className={styles.category__link}>
            <img className={styles.category__icon} src={category.icon} alt={`${category.name} Icon`} />
            <span className={styles.category__name}>{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;
