module.exports = { 
  dpsgSidebar: {
    Overview: [
      'docs/overview/about',
      'docs/overview/how',
    ],
    'Getting Started': [
      'docs/getting-started/config',
      'docs/getting-started/usage',
    ],
    Features: [
      'docs/features/surcharges',
      'docs/features/locations',
      'docs/features/sort',
    ],
    Integrations: [
      {
        type: 'category',
        label: 'Adyen',
        items: [
          'docs/integrations/adyen/overview',
          'docs/integrations/adyen/methods',
          'docs/integrations/adyen/config',
        ],
      },
      {
        type: 'category',
        label: 'Mollie',
        items: [
          'docs/integrations/mollie/overview',
          'docs/integrations/mollie/methods',
          'docs/integrations/mollie/config',
        ],
      },
      {
        type: 'category',
        label: 'Stripe',
        items: [
          'docs/integrations/stripe/overview',
          'docs/integrations/stripe/methods',
          'docs/integrations/stripe/config',
        ],
      },
    ],
    Upgrading: [
      'docs/upgrading/overview',
    ],
    'Release Notes': [
      'docs/release/full-changelog',
      'docs/release/1-0-0',
    ],
  },
};
