import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const FaqCategories = [
  {
    name: 'General',
    url: '/platform/support/faqs/general',
    icon: '/docs/img/icons/deity.svg'
  },
  {
    name: 'Storefront',
    url: '/platform/support/faqs/storefront',
    icon: '/docs/img/icons/shop.svg'
  },
  {
    name: 'Composer',
    url: '/platform/support/faqs/server',
    icon: '/docs/img/icons/ticker.svg'
  },
  {
    name: 'Cloud Console',
    url: '/platform/support/faqs/cloud',
    icon: '/docs/img/icons/switch.svg'
  },
  {
    name: 'Configuration + Integrations',
    url: '/platform/support/faqs/config',
    icon: '/docs/img/icons/add-one.svg'
  },
  {
    name: 'Miscellaneous + Troubleshooting',
    url: '/platform/support/faqs/misc',
    icon: '/docs/img/icons/lightbulb.svg'
  }
];

function Categories() {
  return (
    <div className={styles.categories}>
      {FaqCategories.map(category => (
        <div key={category.name} className={styles.category}>
          <Link to={category.url} className={styles.category__link}>
            <img className={styles.category__icon} src={category.icon} alt={`${category.name} Icon`} />
            <h4 className={styles.category__name}>{category.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;
