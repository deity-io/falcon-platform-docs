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
    collapsible: false,
    type: 'category',
    label: 'Products',
    className: styles.productsCategory,
    items: [
      {
        type: 'link',
        label: 'Storefront',
        href: '#storefront'
      },
      {
        type: 'link',
        label: 'Service Composer',
        href: '#serviceComposer'
      },
      {
        type: 'link',
        label: 'Payments',
        href: '#payments'
      },
      {
        type: 'link',
        label: 'Data Integrator',
        href: '#dataIntegrator'
      }
    ]
  }
];
