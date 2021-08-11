module.exports = {
  falconPlatformSidebar: {
    Overview: ['platform/overview/about', 'platform/overview/plans'],
    'Getting Started': [
      'platform/getting-started/overview',
      'platform/getting-started/prerequisites',
      'platform/getting-started/dcloud',
      'platform/getting-started/npm',
      'platform/getting-started/create',
      'platform/getting-started/configure',
      'platform/getting-started/repository'
    ],
    'Falcon Server': [
      'platform/server-v3/about',
      'platform/server-v3/migration-guide',
      {
        Extensions: [
          'platform/server-v3/extensions/about',
          'platform/server-v3/extensions/extension-api',
          'platform/server-v3/extensions/shop-extension',
          'platform/server-v3/extensions/blog-extension'
        ]
      },
      {
        Modules: [
          'platform/server-v3/modules/about',
          'platform/server-v3/modules/module-api',
          'platform/server-v3/modules/bigcommerce-module',
          'platform/server-v3/modules/commercetools-module',
          'platform/server-v3/modules/magento2-module',
          'platform/server-v3/modules/contentful-module',
          'platform/server-v3/modules/wordpress-module',
          'platform/server-v3/modules/algolia-search-module'
        ]
      },
      'platform/server-v3/data-sources',
      'platform/server-v3/event-handlers',
      'platform/server-v3/rest-endpoints',
    ]
/*
    'Falcon Client': [
      'platform/client/about',
      'platform/client/technical',
      'platform/client/files',
      'platform/client/getting-started',
      'platform/client/configuration',
      'platform/client/webpack',
      {
        type: 'category',
        label: 'Theming',
        items: [
          'platform/client/theming/overview',
          'platform/client/theming/css-mapping',
          'platform/client/theming/components',
          'platform/client/theming/fonts',
          'platform/client/theming/icons',
          'platform/client/theming/css-sass'
        ]
      },
      'platform/client/overrides',
      'platform/client/routing',
      'platform/client/meta-data',
      'platform/client/schema-json',
      'platform/client/data',
      'platform/client/state',
      'platform/client/translations',
      'platform/client/code-splitting',
      'platform/client/testing',
      'platform/client/static-files',
      'platform/client/browser-support'
    ],
    'Falcon Server': [
      'platform/server',
      'platform/server/dynamic-routes',
      'platform/server/event-hooks'
    ],
    'Falcon Cloud': [
      'platform/cloud/about',
      'platform/cloud/technical',
      'platform/cloud/prerequisites',
      'platform/cloud/account',
      'platform/cloud/installation',
      'platform/cloud/dcloud'
    ],
    Configuration: [
      "platform/configuration/overview",
      "platform/configuration/client",
      "platform/configuration/server",
    ],
    Upgrading: ['platform/upgrading/overview'],
    Caching: ["platform/cache/overview"],
    Redirects: ["platform/redirects/overview"],
    Deployment: ["platform/deployment/overview"],
    Logging: ["platform/logging/overview"],
    GeoIP: ['platform/geoip/overview'],
    Payments: [
      "platform/payments/overview",
      {
        type: "category",
        label: "Falcon Payments",
        items: [
          "platform/payments/falcon-payments/overview",
          "platform/payments/falcon-payments/packages",
          "platform/payments/falcon-payments/provider",
          "platform/payments/falcon-payments/webhooks",
          "platform/payments/falcon-payments/features",
          "platform/payments/falcon-payments/getting-started",
          "platform/payments/falcon-payments/integration",
        ],
      },
    ],
    Integrations: [
      'platform/integration/examples',
      'platform/integration/algolia',
      {
        type: 'category',
        label: 'BigCommerce',
        items: [
          'platform/integration/bigcommerce/overview',
          'platform/integration/bigcommerce/getting-started',
          'platform/integration/bigcommerce/features',
          'platform/integration/bigcommerce/technical',
          'platform/integration/bigcommerce/manual'
        ]
      },
      {
        type: 'category',
        label: 'Magento 2',
        items: [
          'platform/integration/magento2/overview',
          'platform/integration/magento2/getting-started',
        ]
      },
      'platform/integration/stripe',
      'platform/integration/mollie',
      'platform/integration/wordpress'
    ],
    Testing: ['platform/testing/overview'],
    Cookbook: [
      'platform/cookbook/about',
      {
        type: 'category',
        label: 'Falcon Client',
        items: [
          'platform/cookbook/client/change-logo',
          'platform/cookbook/client/icon',
          'platform/cookbook/client/themeable-component',
          'platform/cookbook/client/scss-global',
          'platform/cookbook/client/post-css-support',
          'platform/cookbook/client/analytics',
          'platform/cookbook/client/testing'
        ]
      },
      {
        type: 'category',
        label: 'Integrations',
        items: [
          'platform/cookbook/integrations/jsonplaceholder',
          'platform/cookbook/integrations/contentful',
          'platform/cookbook/integrations/contentful2',
          'platform/cookbook/integrations/braintree'
        ]
      }
    ],
    'Video Guides': ['platform/guides/client'],
    Packages: [
      'platform/packages/overview',
      'platform/packages/babel-preset-falcon-client',
      'platform/packages/create-falcon-app',
      'platform/packages/eslint-config-falcon',
      'platform/packages/falcon-adyen-plugin',
      'platform/packages/falcon-blog-data',
      'platform/packages/falcon-blog-extension',
      'platform/packages/falcon-client',
      'platform/packages/falcon-data',
      'platform/packages/falcon-errors',
      'platform/packages/falcon-front-kit',
      'platform/packages/falcon-i18n-webpack-plugin',
      'platform/packages/falcon-i18n',
      'platform/packages/falcon-logger',
      'platform/packages/falcon-magento2-api',
      'platform/packages/falcon-payment-plugin',
      'platform/packages/falcon-paypal-plugin',
      'platform/packages/falcon-scripts',
      'platform/packages/falcon-server-env',
      'platform/packages/falcon-server',
      'platform/packages/falcon-service-worker',
      'platform/packages/falcon-shop-data',
      'platform/packages/falcon-shop-extension',
      'platform/packages/falcon-theme-editor',
      'platform/packages/falcon-ui-kit',
      'platform/packages/falcon-ui',
      'platform/packages/falcon-wordpress-api',
      'platform/packages/normal-module-override-webpack-plugin'
    ],
    'Release Notes': [
      'platform/release/full-changelog',
      'platform/release/2-7-14',
      'platform/release/2-7-13',
      'platform/release/2-7-12',
      'platform/release/2-7-11',
      'platform/release/2-7-10',
      'platform/release/2-7-9',
      'platform/release/2-7-8',
      'platform/release/2-7-7',
      'platform/release/2-7-6',
      'platform/release/2-7-5',
      'platform/release/2-7-4',
      'platform/release/2-7-3',
      'platform/release/2-7-2',
      'platform/release/2-7-1',
      'platform/release/2-7-0',
      'platform/release/2-6-5',
      'platform/release/2-6-4',
      'platform/release/2-6-2',
      'platform/release/2-6-0',
      'platform/release/2-5-0',
      'platform/release/2-4-8',
      'platform/release/2-4-6',
      'platform/release/2-4-2',
      'platform/release/2-4-0',
      'platform/release/2-3-1',
      'platform/release/2-3-0',
    ],
    Support: [
      'platform/support/contact',
      {
        type: 'category',
        label: 'FAQs',
        items: [
          'platform/support/faqs',
          'platform/support/faqs/general',
          'platform/support/faqs/client',
          'platform/support/faqs/server',
          'platform/support/faqs/cloud',
          'platform/support/faqs/config',
          'platform/support/faqs/misc'
        ]
      }
    ]
*/
  }
};

