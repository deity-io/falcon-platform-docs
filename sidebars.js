module.exports = {
  platformSidebar: {
    Overview: ['platform/overview/about'],
    'Getting Started': [
      'platform/getting-started/overview',
      'platform/getting-started/prerequisites',
      'platform/getting-started/dcloud',
      'platform/getting-started/npm',
      'platform/getting-started/create',
      'platform/getting-started/configure',
      'platform/getting-started/repository'
    ],

    'General concepts': ['platform/general-concepts/configuration', 'platform/general-concepts/dynamic-routing'],

    'Client App': [
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
      'platform/client/state',
      'platform/client/translations',
      'platform/client/code-splitting',
      'platform/client/testing',
      'platform/client/static-files',
      'platform/client/browser-support'
    ],

    Middleware: [
      'platform/server-v3/about',
      'platform/server-v3/configuration',
      'platform/server-v3/extending-falcon-server',
      {
        Extensions: [
          'platform/server-v3/extensions/about',
          'platform/server-v3/extensions/shop-extension',
          'platform/server-v3/extensions/blog-extension',
          'platform/server-v3/extensions/search-extension',
          'platform/server-v3/extensions/geolocation-extension'
        ]
      },
      {
        Modules: [
          'platform/server-v3/modules/about',
          'platform/server-v3/modules/module-api',
          'platform/server-v3/modules/custom-module',
          {
            'Module Common Services': [
              'platform/server-v3/modules/common-services/data-sources',
              'platform/server-v3/modules/common-services/event-handlers',
              'platform/server-v3/modules/common-services/rest-endpoints'
            ]
          },
          'platform/server-v3/migration-guide'
        ]
      },
      'platform/server-v3/dynamic-routing',
      'platform/server-v3/mailer',
      'platform/server-v3/extension-scopes'
    ],
    Cloud: [
      'platform/cloud/about',
      'platform/cloud/technical',
      'platform/cloud/prerequisites',
      'platform/cloud/account',
      'platform/cloud/installation',
      'platform/cloud/dcloud'
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
        label: 'Commercetools',
        items: [
          'platform/integration/commercetools/overview',
          'platform/integration/commercetools/resources',
          'platform/integration/commercetools/features',
          {
            type: 'category',
            label: 'Configuration',
            items: [
              'platform/integration/commercetools/configuration/getting-started',
              'platform/integration/commercetools/configuration/payments'
            ]
          },
          {
            type: 'category',
            label: 'Extending',
            items: [
              'platform/integration/commercetools/extending/getting-started',
              'platform/integration/commercetools/extending/ctp-session',
              'platform/integration/commercetools/extending/ctp-client'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Talon.One',
        items: [
          'platform/integration/talonone/overview',
          'platform/integration/talonone/resources',
          'platform/integration/talonone/features',
          'platform/integration/talonone/concepts',
          'platform/integration/talonone/configuration',
          {
            type: 'category',
            label: 'Extending',
            items: [
              'platform/integration/talonone/extending/module',
              'platform/integration/talonone/extending/client',
              'platform/integration/talonone/extending/datasource',
              'platform/integration/talonone/extending/data-mappers',
              'platform/integration/talonone/extending/event-handlers'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Magento 2',
        items: ['platform/integration/magento2/overview', 'platform/integration/magento2/getting-started']
      },
      {
        type: 'category',
        label: 'Contentful',
        items: [
          'platform/integration/contentful/overview',
          'platform/integration/contentful/getting-started',
          'platform/integration/contentful/content-models'
        ]
      },
      {
        type: 'category',
        label: 'Unbxd',
        items: ['platform/integration/unbxd/overview', 'platform/integration/unbxd/getting-started']
      },
      'platform/integration/wordpress'
    ],
    Upgrading: ['platform/upgrading/overview'],
    Caching: ['platform/cache/overview'],
    Redirects: ['platform/redirects/overview'],
    Deployment: ['platform/deployment/overview'],
    Logging: ['platform/logging/overview'],
    GeoIP: ['platform/geoip/overview'],
    'App Store Publishing': ['platform/app-store/overview'],
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
        items: ['platform/cookbook/integrations/jsonplaceholder', 'platform/cookbook/integrations/braintree']
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
      'platform/release/3-0-0',
      'platform/release/demo1',
      'platform/release/demo2',
      'platform/release/demo3'
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
  }
};
