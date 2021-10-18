module.exports = {
  dpsgSidebar: [
    'docs/about',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: [
        'docs/getting-started/overview',
        'docs/getting-started/config',
        'docs/getting-started/connect',
        'docs/getting-started/usage',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
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
    },
    {
      type: 'category',
      label: 'Configuration Features',
      items: [
        'docs/features/currencies',
        'docs/features/locations',
        'docs/features/surcharges',
        'docs/features/minMaxAmounts',
        'docs/features/sort',
      ],
    },
    {
      type: 'category',
      label: 'Upgrading to DPSG',
      items: [
        'docs/upgrading/overview',
      ],
    },
    {
      type: 'link',
      label: 'API Reference',
      href: 'https://dpsg.deity.cloud/',
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'docs/release/full-changelog',
        'docs/release/1-0-0',
      ],
    },
  ],
};
