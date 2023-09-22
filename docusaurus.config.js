const path = require('path');

module.exports = {
  title: 'DEITY',
  tagline: 'Documentation',
  url: 'https://deity.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'DEITY', // Usually your GitHub org/user name.
  projectName: 'falcon-platform-docs', // Usually your repo name.
  scripts: [
    {
      src: 'https://app.happyreact.com/widget/reactions.js',
      defer: true
    }
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/nightOwl')
    },
    navbar: {
      logo: {
        alt: 'Deity Documentation',
        src: 'img/deity-logo-docs.svg',
        srcDark: 'img/deity-logo-docs-dark.svg'
      },
      items: [
        {
          label: 'Platform',
          items: [
            {
              label: 'Platform Overview',
              icon: 'platform',
              to: '/platform'
            },
            {
              label: 'Composer',
              icon: 'composer',
              to: '/composer'
            },
            {
              label: 'Storefront',
              icon: 'storefront',
              to: '/storefront'
              
            },
            {
              label: 'Payments',
              icon: 'payments',
              to: '/payments'
            },
            {
              label: 'Cloud Console',
              icon: 'console',
              to: '/console',
              customProps: {
                label: 'new'
              }
            },
            {
              type: 'html',
              value: '<hr/>'
            },
            {
              label: 'Integrations',
              icon: 'integrations',
              to: '/integrations',
              customProps: {
                count: 13
              }
            },
            {
              label: 'Orchestrator',
              icon: 'orchestrator',
              to: '/orchestrator',
              customProps: {
                label: 'soon!',
                disabled: true
              }
            }
          ]
        },
        {
          label: 'Support',
          to: '/platform/support/contact',
          activeBasePath: '/platform/support'
        },
        {
          label: 'Changelog',
          to: '/platform/release/full-changelog',
          activeBasePath: '/platform/release'
        },
        {
          label: 'Launch Console',
          href: 'https://console.deity.io'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Platform',
          items: [
            {
              label: 'Overview',
              to: '/platform/overview/about'
            },
            {
              label: 'Composer',
              to: '/composer'
            },
            {
              label: 'Storefront',
              to: '/storefront'
            },
            {
              label: 'Payments',
              to: '/payments'
            },
            {
              label: 'Console',
              to: '/console'
            }
          ]
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Changelog',
              to: '#'
            },
            {
              label: 'System status',
              to: '#'
            },
            {
              label: 'Support',
              to: '#'
            }
          ]
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Website',
              href: 'https://deity.io/'
            },
            {
              label: 'Blog',
              href: 'https://medium.com/deity-io'
            },
            {
              label: 'Case studies',
              href: '#'
            }
          ]
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/deity_commerce'
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/deity-bv/'
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/deity_commerce'
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCCyszDV63yrqFHUY1uWf4mQ'
            }
          ]
        }
      ],
      logo: {
        alt: 'DEITY Logo',
        src: 'img/deity-logo.svg'
      },
      copyright: `COPYRIGHT © 2018–${new Date().getFullYear()} DEITY B.V. ALL RIGHTS RESERVED.`
    },
    image: 'img/deity-logo.svg',

    algolia: {
      appId: 'BPQ949H0LU',
      apiKey: '3e60ad703b9aa8f07904844cceb1a018',
      indexName: 'deity',
      algoliaOptions: {}
    },
    mailchimp: {
      submitUrl: 'https://Deity.us16.list-manage.com/subscribe/post-json?u=6c94229e24ca6964641a9d054&id=f7e67a2b7d'
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
        googleTagManager: {
          containerId: 'G-V9XS75TE6K'
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          lastVersion: '3',
          versions: {
            3: {
              label: 'V3 - BUT V2 DOCS'
            },
            2: {
              label: 'Platform (v2)',
              path: 'v2'
            },
            2019: {
              label: 'Platform (v2019)',
              path: 'v2019'
            }
          }
        },
        theme: {
          customCss: require.resolve('./src/css/main.scss')
        }
      }
    ]
  ],
  onBrokenLinks: 'warn'
};
