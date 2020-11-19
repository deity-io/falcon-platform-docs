
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  falconPlatformSidebar: {
    Overview: ['platform/overview/about', 'platform/overview/plans'],
    'Getting Started': [
      'platform/getting-started/overview',
      'platform/getting-started/prerequisites',
      'platform/getting-started/npm',
      'platform/getting-started/create',
      'platform/getting-started/repository'
    ],
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
      'platform/client/data',
      'platform/client/state',
      'platform/client/translations',
      'platform/client/code-splitting',
      'platform/client/testing',
      'platform/client/static-files',
      'platform/client/browser-support'
    ],
    'Falcon Server': ['platform/server', 'platform/server/dynamic-routes'],
    'Falcon Cloud': [
      'platform/cloud/about',
      'platform/cloud/technical',
      'platform/cloud/prerequisites',
      'platform/cloud/account',
      'platform/cloud/installation',
      'platform/cloud/dcloud'
    ],
    Configuration: [
      'platform/configuration/overview',
      'platform/configuration/client',
      'platform/configuration/server'
    ],
    Caching: ['platform/cache/overview'],
    Deployment: ['platform/deployment/overview'],
    Logging: ['platform/logging/overview'],
    Payments: ['platform/payments/overview', 'platform/payments/provider', 'platform/payments/ui'],
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
      'platform/integration/magento2',
      'platform/integration/stripe',
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
    'Video Guides': ['platform/guides/client', 'platform/guides/cloud'],
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
      'platform/release/2-5-0',
      'platform/release/2-4-8',
      'platform/release/2-4-6',
      'platform/release/2-4-2',
      'platform/release/2-4-0',
      'platform/release/2-3-1',
      'platform/release/2-3-0'
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
  },
  falconOpenSourceSidebar: {
    'Getting Started': [
      '2019/getting-started/intro',
      '2019/getting-started/requirements',
      '2019/getting-started/installation',
      '2019/getting-started/project-overview',
      '2019/getting-started/example'
    ],
    'Falcon Client': [
      '2019/falcon-client/basics',
      '2019/falcon-client/configurations',
      '2019/falcon-client/code-splitting',
      '2019/falcon-client/data-management',
      '2019/falcon-client/local-state-management',
      '2019/falcon-client/internationalization',
      '2019/falcon-client/falcon-ui',
      '2019/falcon-client/search-and-filtering'
    ],
    'Falcon Server': [
      '2019/falcon-server/basics',
      '2019/falcon-server/schema-stitching',
      '2019/falcon-server/extensions',
      '2019/falcon-server/api-providers',
      '2019/falcon-server/endpoints',
      '2019/falcon-server/caching',
      '2019/falcon-server/falcon-server-env',
      '2019/falcon-server/falcon-server-api',
      '2019/falcon-server/customizing-extension-api'
    ],
    Payments: ['2019/payments/intro', '2019/payments/api', '2019/payments/plugins'],
    Backend: ['2019/backend/installing-magento2', '2019/backend/installing-wordpress'],
    Miscellaneous: ['2019/miscellaneous/falcon-logger', '2019/miscellaneous/config'],
    Deployment: ['2019/deployment/intro'],
    Support: ['2019/support/troubleshooting', '2019/support/flowcharts', '2019/support/migration-from-npmjs']
  }
};
