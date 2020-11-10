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
      'platform/getting-started/repository',
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
          'platform/client/theming/css-sass',
        ],
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
      'platform/client/browser-support',
    ],
    'Falcon Server': ['platform/server', 'platform/server/dynamic-routes'],
    'Falcon Cloud': [
      'platform/cloud/about',
      'platform/cloud/technical',
      'platform/cloud/prerequisites',
      'platform/cloud/account',
      'platform/cloud/installation',
      'platform/cloud/dcloud',
    ],
    Configuration: ['platform/configuration/overview', 'platform/configuration/client', 'platform/configuration/server'],
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
          'platform/integration/bigcommerce/manual',
        ],
      },
      'platform/integration/magento2',
      'platform/integration/stripe',
      'platform/integration/wordpress',
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
          'platform/cookbook/client/testing',
        ],
      },
      {
        type: 'category',
        label: 'Integrations',
        items: [
          'platform/cookbook/integrations/jsonplaceholder',
          'platform/cookbook/integrations/contentful',
          'platform/cookbook/integrations/contentful2',
          'platform/cookbook/integrations/braintree',
        ],
      },
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
      'platform/packages/normal-module-override-webpack-plugin',
    ],
    'Release Notes': [
      'platform/release/full-changelog',
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
          'platform/support/faqs/misc',
        ],
      },
    ],
  },
  falconOpenSourceSidebar: {
    'Getting Started': [
      'open-source/getting-started/intro',
      'open-source/getting-started/requirements',
      'open-source/getting-started/installation',
      'open-source/getting-started/project-overview',
      'open-source/getting-started/example',
    ],
    'Falcon Client': [
      'open-source/falcon-client/basics',
      'open-source/falcon-client/configurations',
      'open-source/falcon-client/code-splitting',
      'open-source/falcon-client/data-management',
      'open-source/falcon-client/local-state-management',
      'open-source/falcon-client/internationalization',
      'open-source/falcon-client/falcon-ui',
      'open-source/falcon-client/search-and-filtering',
    ],
    'Falcon Server': [
      'open-source/falcon-server/basics',
      'open-source/falcon-server/schema-stitching',
      'open-source/falcon-server/extensions',
      'open-source/falcon-server/api-providers',
      'open-source/falcon-server/endpoints',
      'open-source/falcon-server/caching',
      'open-source/falcon-server/falcon-server-env',
      'open-source/falcon-server/falcon-server-api',
      'open-source/falcon-server/customizing-extension-api',
    ],
    Payments: ['open-source/payments/intro', 'open-source/payments/api', 'open-source/payments/plugins'],
    Backend: ['open-source/backend/installing-magento2', 'open-source/backend/installing-wordpress'],
    Miscellaneous: ['open-source/miscellaneous/falcon-logger', 'open-source/miscellaneous/config'],
    Deployment: ['open-source/deployment/intro'],
    Support: ['open-source/support/troubleshooting', 'open-source/support/flowcharts'],
  },
};
