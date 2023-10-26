const path = require('path');

module.exports = {
  title: 'Deity Platform Docs',
  tagline: 'The leading platform for Composable Commerce',
  url: 'https://deity.com',
  baseUrl: '/docs',
  trailingSlash: false, // this reduces the amount of 301 redirects from /bar to /bar/
  noIndex: false,
  favicon: 'img/favicon.png',
  organizationName: 'Deity', // Usually your GitHub org/user name.
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
      darkTheme: require('prism-react-renderer/themes/vsDark')
    },
    navbar: {
      logo: {
        alt: 'Deity Composable Commerce Platform',
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
                count: 14
              }
            },
            {
              label: 'Orchestrator',
              icon: 'orchestrator',
              to: '#',
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
          to: '/platform/changelog',
          activeBasePath: '/platform/changelog'
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
              to: '/platform'
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
              label: 'Cloud Console',
              to: '/console'
            },
            {
              label: 'Integrations',
              to: '/integrations'
            },
            {
              label: 'Sign up',
              href: 'https://console.deity.cloud/signup'
            }
          ]
        },
        {
          title: 'Support',
          items: [
            {
              label: 'F.A.Q.',
              to: '/platform/support/faqs'
            },
            {
              label: 'Changelog',
              to: '/platform/changelog'
            },
            {
              label: 'Contact us',
              to: 'https://deity.com/contact'
            },
            {
              label: 'System status',
              to: 'https://status.deity.io/'
            }
          ]
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Website',
              href: 'https://deity.com/'
            },
            {
              label: 'Blog',
              href: 'https://deity.com/blog'
            },
            {
              label: 'Case studies',
              href: 'https://deity.com/case-studies'
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
        alt: 'Deity Logo',
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
          onlyIncludeVersions: ['3'],
          versions: {
            3: {
              label: 'Version 3'
            }
          }
        },
        theme: {
          customCss: require.resolve('./src/css/main.scss')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['includes/'],
          filename: 'sitemap.xml',
        },
      }
    ]
  ],
  onBrokenLinks: 'warn'
};
