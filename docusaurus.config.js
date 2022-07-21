const path = require('path');

module.exports = {
  title: 'DEITY',
  tagline: 'Documentation',
  url: 'https://deity.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'DEITY', // Usually your GitHub org/user name.
  projectName: 'falcon-platform-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Deity Documentation',
      logo: {
        alt: 'DEITY Logo',
        src: 'img/deity-logo.svg'
      },
      items: [
        {
          label: 'Platform',
          href: '/docs/platform/overview/about',
          position: 'right',
          activeBasePath: '/docs/platform'
        },
        // {
        //   label: 'DPSG',
        //   href: '/dpsg/docs/about',
        //   position: 'right',
        //   activeBasePath: '/docs/docs',
        // },
        /* {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        }, */
        {
          label: 'Falcon UI',
          href: 'https://falcon-ui.docs.deity.io/',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Our documentation',
          items: [
            {
              label: 'Platform',
              to: '/docs/platform/overview/about'
            },
            {
              label: 'Falcon Cloud',
              to: '/docs/platform/cloud/about'
            },
            // {
            //   label: 'DPSG',
            //   to: '/dpsg/docs/about',
            // },
            {
              label: 'Falcon UI',
              href: 'https://falcon-ui.docs.deity.io/'
            }
          ]
        },
        {
          title: 'Our Integrations',
          items: [
            {
              label: 'Algolia',
              to: '/docs/platform/integration/algolia'
            },
            {
              label: 'BigCommerce',
              to: '/docs/platform/integration/bigcommerce/overview'
            },
            {
              label: 'Magento 2',
              to: '/docs/platform/integration/magento2/overview'
            },
            {
              label: 'Stripe',
              to: '/docs/platform/integration/stripe'
            },
            {
              label: 'Mollie',
              to: '/docs/platform/integration/mollie'
            },
            {
              label: 'Wordpress',
              to: '/docs/platform/integration/wordpress'
            }
          ]
        },
        {
          title: 'Community & Help',
          items: [
            {
              label: 'Community Chat',
              href: 'http://slack.deity.io/'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/deity_commerce'
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/deity_commerce'
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCCyszDV63yrqFHUY1uWf4mQ'
            },
            {
              label: 'Contact Us',
              href: 'https://deity.io/contact'
            }
          ]
        },
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Marketing Site',
              href: 'https://deity.io/'
            },
            {
              label: 'Status',
              href: 'https://status.deity.io/'
            },
            {
              label: 'Blog',
              href: 'https://medium.com/deity-io'
            },
            {
              label: 'Privacy Policy',
              href: 'https://deity.io/privacy-policy'
            }
          ]
        }
      ],
      logo: {
        alt: 'DEITY Logo',
        src: 'img/deity-logo.svg'
      },
      copyright: `Copyright © ${new Date().getFullYear()} DEITY B.V.`
    },
    image: 'img/deity-logo.svg',

    algolia: {
      appId: 'BH4D9OD16A',
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
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
