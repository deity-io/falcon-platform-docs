module.exports = {
  title: "DEITY Falcon Platform",
  tagline: "Documentation",
  url: "https://deity.io",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "DEITY", // Usually your GitHub org/user name.
  projectName: "falcon-platform-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Deity Platform",
      logo: {
        alt: "Deity Platform Logo",
        src: "img/deity-logo.svg"
      },
      links: [
        { to: "docs/getting-started/intro", label: "Docs", position: "left" },
        {
          href: "https://github.com/deity-io/deity-cloud",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Falcon Platform Documentation",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started/intro"
            }
          ]
        },
        {
          title: "More Documentation",
          items: [
            {
              label: "Falcon",
              href: "https://falcon.deity.io/docs/getting-started/intro"
            },
            {
              label: "Deity Cloud",
              href: "https://falcon.deity.io/docs/getting-started/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Community Chat",
              href: "http://slack.deity.io/"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/deity_pwa"
            }
          ]
        },
        {
          title: "More",
          items: [
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
              href: "https://github.com/deity-io/deity-cloud"
            },
            {
              html: `
                <a
                  class="github-button"
                  href="https://github.com/deity-io/deity-cloud"
                  data-icon="octicon-star"
                  data-count-href="/deity-io/deity-cloud/stargazers"
                  data-show-count="true"
                  data-count-aria-label="# stargazers on GitHub"
                  aria-label="Star this project on GitHub">
                  Star
                </a>
              `
            }
          ]
        }
      ],
      logo: {
        alt: "DEITY Falcon Platform Logo",
        src: "img/deity-logo.svg"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Deity B.V.`
    },
    image: "img/deity-logo.svg",

    algolia: {
      apiKey: "873c5f29d2334cb9c44ef4a407d8b269",
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
  ],

  scripts: ["https://buttons.github.io/buttons.js"]
};
