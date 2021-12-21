import { ChangelogItemsType } from '../src/components/ChangelogItems/types';

export const changelogItems: ChangelogItemsType['items'] = [
  {
    date: new Date('2021-11-20'),
    changes: [
      {
        title: 'Payments',
        updatedPackages: [
          {
            title: 'Storefront',
            code: `"devDependencies": {
              "@deity/falcon-mollie-plugin": "3.0.0-beta.4",              // up from "3.0.0-beta.3"
              "@deity/falcon-payment-plugin": "3.0.0-beta.4",             // up from "3.0.0-beta.3"
              "@deity/falcon-paypal-plugin": "3.0.0-beta.7",              // up from "3.0.0-beta.6"
          }`
          },
          {
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
            type: 'feature',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      },
      {
        title: 'Storefront',
        breaking: true,
        data: [
          {
            type: 'hotfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      }
    ]
  },
  {
    date: new Date('2021-11-15'),
    changes: [
      {
        title: 'Storefront',
        data: [
          {
            type: 'feature',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          },
          {
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      }
    ]
  },
  {
    date: new Date('2021-11-10'),
    changes: [
      {
        title: 'Payments',
        data: [
          {
            type: 'improvement',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      },
      {
        title: 'Storefront',
        data: [
          {
            type: 'bugfix',
            text:
              'Partiendo vix altera virtute euismod ut ad an has vis ei aliquid verterem omnium an ei omnium. Ex alterum feugait ei luptatum alia voluptatum putent ne te porro natum commune.'
          }
        ]
      }
    ]
  }
];
