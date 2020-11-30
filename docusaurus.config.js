const path = require("path");

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
        src: "img/deity-logo.svg",
      },
      items: [
        {
          to: "/docs/platform/overview/about",
          label: "Falcon Platform",
          position: "right",
          activeBasePath: "/docs/platform/",
        },
        {
          label: "Falcon UI",
          href: "https://falcon-ui.docs.deity.io/",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Our documentation",
          items: [
            {
              label: "Falcon Platform",
              to: "/docs/platform/overview/about",
            },
            {
              label: "Falcon Cloud",
              to: "/docs/platform/cloud/about",
            },
            {
              label: "Falcon 2019",
              to: "/docs/2019/getting-started/intro",
            },
            {
              label: "Falcon UI",
              href: "https://falcon-ui.docs.deity.io/",
            },
          ],
        },
        {
          title: "Our Integrations",
          items: [
            {
              label: "Algolia",
              to: "/docs/platform/integration/algolia",
            },
            {
              label: "BigCommerce",
              to: "/docs/platform/integration/bigcommerce/overview",
            },
            {
              label: "Magento 2",
              to: "/docs/platform/integration/magento2",
            },
            {
              label: "Stripe",
              to: "/docs/platform/integration/stripe",
            },
            {
              label: "Mollie",
              to: "/docs/platform/integration/mollie",
            },
            {
              label: "Wordpress",
              to: "/docs/platform/integration/wordpress",
            },
          ],
        },
        {
          title: "Community & Help",
          items: [
            {
              label: "Community Chat",
              href: "http://slack.deity.io/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/deity_pwa",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCCyszDV63yrqFHUY1uWf4mQ",
            },
            {
              label: "Contact Us",
              href: "https://deity.io/contact",
            },
          ],
        },
        {
          title: "Useful Links",
          items: [
            {
              label: "Marketing Site",
              href: "https://deity.io/",
            },
            {
              label: "Status",
              href: "https://status.deity.io/",
            },
            {
              label: "Blog",
              href: "https://medium.com/deity-io",
            },
            {
              label: "Privacy Policy",
              href: "https://deity.io/privacy-policy",
            },
          ],
        },
      ],
      logo: {
        alt: "DEITY Logo",
        src: "img/deity-logo.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} DEITY B.V.`,
    },
    image: "img/deity-logo.svg",

    algolia: {
      apiKey: "3cd0500212418e98ed4f90579abbe0fb",
      indexName: "deity",
      algoliaOptions: {},
    },
    intercom: {
      appId: "z91ewqiv",
    },
  },
  plugins: [
    [
      path.resolve(__dirname, "./src/plugins/deity-gtm/src/index.js"),
      {
        containerId: "GTM-N4NQJGX",
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["always"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo-512.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#26642c",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/logo-192.png",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/deity-io/falcon-platform-docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
