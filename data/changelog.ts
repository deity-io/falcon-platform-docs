import { ChangelogItemsType } from '../src/pages/changelog/ChangelogItems/types';

export const changelogItems: ChangelogItemsType['items'] = [
  {
    id: '2021-11-20-changes',
    date: new Date('2021-11-20'),
    changes: [
      {
        id: '2021-11-20-payments',
        title: 'Payments',
        updatedPackages: [
          {
            id: '2021-11-20-storefront',
            title: 'Storefront',
            code: `"devDependencies": {
              "@deity/falcon-mollie-plugin": "3.0.0-beta.4",              // up from "3.0.0-beta.3"
              "@deity/falcon-payment-plugin": "3.0.0-beta.4",             // up from "3.0.0-beta.3"
              "@deity/falcon-paypal-plugin": "3.0.0-beta.7",              // up from "3.0.0-beta.6"
          }`
          },
          {
            id: '2021-11-20-middleware',
            title: 'Middleware',
            code: `"devDependencies": {
              "@deity/falcon-mollie-plugin": "3.0.0-beta.4",              // up from "3.0.0-beta.3"
              "@deity/falcon-payment-plugin": "3.0.0-beta.4",             // up from "3.0.0-beta.3"
              "@deity/falcon-paypal-plugin": "3.0.0-beta.7",              // up from "3.0.0-beta.6"
          }`
          }
        ],
        data: [
          {
            id: '2021-11-20-feature',
            type: 'feature',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            id: '2021-11-20-bugfix',
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            id: '2021-11-20-improvement',
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      },
      {
        id: '2021-11-15-storefront',
        title: 'Storefront',
        breaking: true,
        data: [
          {
            id: '2021-11-15-hotfix',
            type: 'hotfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            id: '2021-11-15-bugfix',
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            id: '2021-11-15-improvement',
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      }
    ]
  },
  {
    id: '2021-11-15-changes',
    date: new Date('2021-11-15'),
    changes: [
      {
        id: '2021-11-15-storefront',
        title: 'Storefront',
        data: [
          {
            id: '2021-11-15-feature',
            type: 'feature',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            id: '2021-11-15-bugfix',
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            id: '2021-11-15-improvement',
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      }
    ]
  },
  {
    id: '2021-11-10-changes',
    date: new Date('2021-11-10'),
    changes: [
      {
        id: '2021-11-10-payments',
        title: 'Payments',
        data: [
          {
            id: '2021-11-10-improvement',
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      },
      {
        id: '2021-11-10-storefront',
        title: 'Storefront',
        data: [
          {
            id: '2021-11-10-bufix',
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      }
    ]
  }
];
