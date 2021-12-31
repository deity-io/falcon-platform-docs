const path = require('path');

module.exports = {
  title: 'Welcome to our Docs',
  tagline: "Here you'll find guides, resources, and references to build with Deity.",
  url: 'https://deity.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'DEITY', // Usually your GitHub org/user name.
  projectName: 'falcon-platform-docs', // Usually your repo name.
  themeConfig: {
    footer: {
      style: 'dark',
      links: [
        {
          title: 'General',
          items: [
            {
              label: 'Home',
              to: '/'
            },
            {
              label: 'Demo',
              to: '/demo'
            },
            {
              label: 'Key concepts',
              href: '/key-concepts'
            },
            {
              label: 'Getting Started',
              href: '/docs/platform/getting-started/overview'
            },
            {
              label: 'Account',
              href: '/account'
            },
            {
              label: 'Changelog',
              href: '/changelog'
            },
            {
              label: 'Support',
              href: '/docs/platform/support/contact'
            }
          ]
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Storefront',
              to: '#'
            },
            {
              label: 'Service Composer',
              to: '#'
            },
            {
              label: 'Payments',
              to: '/docs/platform/payments/overview'
            },
            {
              label: 'Data Integrator',
              to: '#'
            }
          ]
        },
        {
          title: 'Deity',
          items: [
            {
              label: 'Deity.io',
              href: 'https://deity.io/'
            },
            {
              label: 'About us',
              href: '#'
            },
            {
              label: 'Blog',
              href: 'https://medium.com/deity-io'
            },
            {
              label: 'Contact',
              href: 'https://deity.io/contact'
            }
          ]
        }
      ],
      logo: {
        alt: 'DEITY Logo',
        src: 'img/deity-logo-full.svg'
      },
      copyright: `Copyright ${new Date().getFullYear()}`
    },
    image: 'img/deity-logo.svg',

    algolia: {
      apiKey: 'c8c5e2d6a2a32b13b59182d8a0827945',
      indexName: 'deity',
      algoliaOptions: {}
    },
    mailchimp: {
      submitUrl: 'https://Deity.us16.list-manage.com/subscribe/post-json?u=6c94229e24ca6964641a9d054&id=f7e67a2b7d'
    },
    intercom: {
      appId: 'z91ewqiv'
    }
  },
  plugins: [
    ['docusaurus-plugin-sass', {}],
    [
      path.resolve(__dirname, './src/plugins/deity-gtm/src/index.js'),
      {
        containerId: 'GTM-N4NQJGX'
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: ['always'],
        debug: false,
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-512.png'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json'
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#26642c'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo-192.png'
          }
        ]
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dpsg',
        path: 'dpsg',
        routeBasePath: 'dpsg',
        sidebarPath: require.resolve('./sidebarsDpsg.js')
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/deity-io/falcon-platform-docs/edit/master',
          lastVersion: '2',
          versions: {
            current: {
              label: 'Platform (v3) [BETA]',
              path: 'next'
            },
            2: {
              label: 'Platform (v2)'
            },
            2019: {
              label: 'Platform (v2019)',
              path: 'v2019'
            }
          }
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')]
        }
      }
    ]
  ]
};
