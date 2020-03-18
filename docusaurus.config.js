module.exports = {
  title: "DEITY Falcon",
  tagline: "Documentation",
  url: "https://deity.io",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "DEITY", // Usually your GitHub org/user name.
  projectName: "falcon-platform-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Falcon Documentation",
      logo: {
        alt: "DEITY Logo",
        src: "img/deity-logo.svg"
      },
      links: [
        { to: "/docs/platform/overview/about", label: "Falcon Platform", position: "right" },
        { to: "/docs/open-source/getting-started/intro", label: "Falcon Open Source", position: "right" }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Our documentation",
          items: [
            {
              label: "Falcon Platform",
              to: "/docs/platform/overview/about"
            },
            {
              label: "Falcon Cloud",
              to: "/docs/platform/cloud/about"
            },
            {
              label: "Falcon Open Source",
              to: "/docs/open-source/getting-started/intro"
            }
          ]
        },
        {
          title: "Community & Help",
          items: [
            {
              label: "Community Chat",
              href: "http://slack.deity.io/"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/deity_pwa"
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCCyszDV63yrqFHUY1uWf4mQ"
            },
            {
              label: "Contact Us",
              href: "https://deity.io/contact"
            }
          ]
        },
        {
          title: "Useful Links",
          items: [
            {
              label: "Marketing Site",
              href: "https://deity.io/"
            },
            {
              label: "Prices",
              to: "/prices"
            },
            {
              label: "Status",
              href: "https://status.deity.io/"
            },
            {
              label: "Blog",
              href: "https://medium.com/deity-io"
            },
            {
              label: "GitHub",
              href: "https://github.com/deity-io/"
            }
          ]
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "https://deity.io/privacy-policy"
            }
          ]
        }
      ],
      logo: {
        alt: "DEITY Logo",
        src: "img/deity-logo.svg"
      },
      copyright: `Copyright © ${new Date().getFullYear()} DEITY B.V.`
    },
    image: "img/deity-logo.svg",

    algolia: {
      apiKey: "-",
      indexName: "deity_cloud",
      algoliaOptions: {}
    },

    googleAnalytics: {
      trackingID: "UA-115774797-2"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/deity-io/deity-cloud/edit/master/website"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
