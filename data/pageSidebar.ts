import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import styles from '../src/components/Page/styles.module.scss';

export const sidebarLinks: PropSidebarItem[] = [
  {
    type: 'link',
    label: 'Home',
    href: '/'
  },
  {
    type: 'link',
    label: 'Demo',
    href: '/demo'
  },
  {
    type: 'link',
    label: 'Key concepts',
    href: '/key-concepts'
  },
  {
    type: 'link',
    label: 'Getting started',
    href: '/docs/platform/getting-started/overview'
  },
  {
    type: 'link',
    label: 'Account',
    href: '/account'
  },
  {
    type: 'link',
    label: 'Changelog',
    href: '/changelog'
  },
  {
    type: 'link',
    label: 'Support',
    href: '/docs/platform/support/contact/'
  },
  {
    collapsed: true,
    type: 'category',
    label: 'Products',
    className: styles.productsCategory,
    items: [
      {
        type: 'doc',
        label: 'Storefront',
        id: '#'
      },
      {
        type: 'doc',
        label: 'Service Composer',
        id: '#'
      },
      {
        type: 'doc',
        label: 'Payments',
        id: '#'
      },
      {
        type: 'doc',
        label: 'Data Integrator',
        id: '#'
      }
    ]
  }
];
