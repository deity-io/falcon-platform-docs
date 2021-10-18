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
      label: 'Payment Providers',
      items: [
        'docs/providers/adyen',
        'docs/providers/mollie',
        'docs/providers/stripe',
        'docs/providers/humm',
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
      type: 'category',
      label: 'Release Notes',
      items: [
        'docs/release/full-changelog',
        'docs/release/1-0-0',
      ],
    },
    {
      type: 'link',
      label: 'API Reference',
      href: 'https://dpsg.deity.cloud/',
    },
  ],
};
